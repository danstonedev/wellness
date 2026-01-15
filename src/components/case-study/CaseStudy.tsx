import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import type {
  Population,
  Intervention,
  InterventionOption,
  Results,
  ReferralOption,
  PopulationIntervention,
} from "../../types";
import { ICFCard } from "../ui/ICFCard";
import { UMatterScorecard } from "../ui/UMatterScorecard";
import { SDOHPanel } from "../ui/SDOHPanel";
import { DetailPanel } from "./DetailPanel";
import { WellnessBuilder } from "./WellnessBuilder";
import { ResultsView } from "./ResultsView";
import { KnowledgeCheckPanel } from "./KnowledgeCheckPanel";

interface CaseStudyProps {
  population: Population;
  onBack: () => void;
}

type ICFCategoryKey =
  | "healthCondition"
  | "bodyFunctions"
  | "activities"
  | "participation"
  | "environmental"
  | "personal";

export const CaseStudy = ({ population, onBack }: CaseStudyProps) => {
  const [activeCategory, setActiveCategory] = useState<ICFCategoryKey | null>(
    null
  );
  const [selectedInterventions, setSelectedInterventions] = useState<
    Intervention[]
  >([]);
  const [selectedReferrals, setSelectedReferrals] = useState<ReferralOption[]>(
    []
  );
  const [selectedPopulationInterventions, setSelectedPopulationInterventions] = useState<PopulationIntervention[]>(
    []
  );

  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Results | null>(null);
  const [showKnowledgeCheck, setShowKnowledgeCheck] = useState(false);

  const MAX_SELECTION = 5;
  const MAX_REFERRALS = 2;
  const MAX_POPULATION_SELECTION = 3;

  // Calculate which critical needs have been addressed (includes both interventions AND referrals)
  const addressedCriticalNeeds = useMemo(() => {
    if (!population.criticalNeeds) return [];
    const selectedIds = [
      ...selectedInterventions.map((i) => i.id),
      ...selectedReferrals.map((r) => r.id),
    ].filter(Boolean);
    return population.criticalNeeds
      .filter((need) => need.addressedBy.some((id) => selectedIds.includes(id)))
      .map((need) => need.id);
  }, [selectedInterventions, selectedReferrals, population.criticalNeeds]);

  const toggleIntervention = (intervention: Intervention) => {
    if (submitted) return;
    const isSelected = selectedInterventions.some(
      (i) => i.id === intervention.id
    );
    if (isSelected) {
      setSelectedInterventions(
        selectedInterventions.filter((i) => i.id !== intervention.id)
      );
    } else {
      if (selectedInterventions.length < MAX_SELECTION) {
        setSelectedInterventions([...selectedInterventions, intervention]);
      }
    }
  };

  const addCustomGoal = (goal: Intervention) => {
    if (selectedInterventions.length < MAX_SELECTION) {
      setSelectedInterventions([...selectedInterventions, goal]);
    }
  };

  const toggleReferral = (referral: ReferralOption) => {
    if (submitted) return;
    const isSelected = selectedReferrals.some((r) => r.id === referral.id);
    if (isSelected) {
      setSelectedReferrals(
        selectedReferrals.filter((r) => r.id !== referral.id)
      );
    } else {
      if (selectedReferrals.length < MAX_REFERRALS) {
        setSelectedReferrals([...selectedReferrals, referral]);
      }
    }
  };

  const togglePopulationIntervention = (intervention: PopulationIntervention) => {
    if (submitted) return;
    const isSelected = selectedPopulationInterventions.some((i) => i.id === intervention.id);
    if (isSelected) {
      setSelectedPopulationInterventions(
        selectedPopulationInterventions.filter((i) => i.id !== intervention.id)
      );
    } else {
      if (selectedPopulationInterventions.length < MAX_POPULATION_SELECTION) {
        setSelectedPopulationInterventions([...selectedPopulationInterventions, intervention]);
      }
    }
  };

  // Calculate Population Plan Score
  const calculatePopulationScore = () => {
    if (selectedPopulationInterventions.length === 0) return undefined;

    // Strategy Diversity (0-25): How many different strategy types are used
    const uniqueStrategies = new Set(selectedPopulationInterventions.map(i => i.strategyType));
    const strategyDiversity = Math.min(25, Math.round((uniqueStrategies.size / 5) * 25));

    // SDOH Coverage (0-25): How many SDOH categories are addressed
    const uniqueSdoh = new Set(selectedPopulationInterventions.map(i => i.sdohCategory));
    const sdohCoverage = Math.min(25, Math.round((uniqueSdoh.size / 8) * 25));

    // Prevention Balance (0-25): Mix of prevention levels with Primary bonus
    const preventionCounts = selectedPopulationInterventions.reduce((acc, i) => {
      acc[i.prevention] = (acc[i.prevention] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    const uniquePreventions = Object.keys(preventionCounts).length;
    const primaryBonus = preventionCounts['Primary'] ? 5 : 0;
    const preventionBalance = Math.min(25, Math.round((uniquePreventions / 3) * 20) + primaryBonus);

    // Quality Score (0-25): Based on quality ratings
    const qualityValues: Record<string, number> = {
      'Excellent': 25,
      'Good': 20,
      'OK': 15,
      'Neutral': 10,
      'Poor': 5,
      'Unsafe': 0,
    };
    const avgQuality = selectedPopulationInterventions.reduce((sum, i) =>
      sum + (qualityValues[i.quality] || 10), 0) / selectedPopulationInterventions.length;
    const qualityScore = Math.round(avgQuality);

    const total = strategyDiversity + sdohCoverage + preventionBalance + qualityScore;

    return {
      strategyDiversity,
      sdohCoverage,
      preventionBalance,
      qualityScore,
      total,
    };
  };

  const handleSubmit = () => {
    // 1. Calculate Student Result with Target Domain Weighting (2x for priority domains)
    const newScores = { ...population.patient.uMatterScores };
    const targetDomains = population.targetDomains || [];

    // Track unsafe interventions for penalty
    const unsafeInterventions = selectedInterventions.filter(
      (i) => i.quality === "Unsafe"
    );
    const unsafePenalty = unsafeInterventions.length * 10; // -10 per unsafe choice

    selectedInterventions.forEach((intervention) => {
      const baseImpact = intervention.impact || 2;
      // Double points for priority target domains
      const weight = targetDomains.includes(intervention.domain) ? 2 : 1;
      const impact = baseImpact * weight;
      const newScore = newScores[intervention.domain] + impact;
      newScores[intervention.domain] = Math.max(1, Math.min(10, newScore)) as number;
    });

    // Add Referral Scores (also with target domain weighting)
    selectedReferrals.forEach((referral) => {
      const baseImpact = referral.impact || 1;
      const weight = targetDomains.includes(referral.domain) ? 2 : 1;
      const impact = baseImpact * weight;
      const newScore = newScores[referral.domain] + impact;
      newScores[referral.domain] = Math.max(1, Math.min(10, newScore)) as number;
    });

    // 2. Calculate Max Possible Result (Greedy Algo)
    const allInterventions = [
      ...(population.icfData.healthCondition.interventions || []),
      ...(population.icfData.bodyFunctions.interventions || []),
      ...(population.icfData.activities.interventions || []),
      ...(population.icfData.participation.interventions || []),
      ...(population.icfData.environmental.interventions || []),
      ...(population.icfData.personal.interventions || []),
    ];

    const currentMaxScores = { ...population.patient.uMatterScores };
    const availablePool: InterventionOption[] = [...allInterventions];

    for (let i = 0; i < MAX_SELECTION; i++) {
      let bestIntervention: InterventionOption | null = null;
      let bestGain = -999;
      let bestIndex = -1;

      availablePool.forEach((intervention, idx) => {
        if ((intervention.impact || 0) <= 0) return;
        const currentVal = currentMaxScores[intervention.domain];
        const gain = Math.min(10, currentVal + (intervention.impact || 2)) - currentVal;
        if (gain > bestGain) {
          bestGain = gain;
          bestIntervention = intervention;
          bestIndex = idx;
        } else if (gain === bestGain && gain > 0) {
          if ((intervention.impact || 2) > (bestIntervention?.impact || 2)) {
            bestIntervention = intervention;
            bestIndex = idx;
          }
        }
      });

      if (bestIntervention && bestGain > 0) {
        const intervention = bestIntervention as InterventionOption;
        if (intervention.domain) {
          currentMaxScores[intervention.domain] = Math.min(
            10,
            currentMaxScores[intervention.domain] + (intervention.impact || 2)
          );
          availablePool.splice(bestIndex, 1);
        }
      }
    }

    const populationScore = calculatePopulationScore();

    // Check if all critical needs are addressed
    const criticalNeedsAddressed = population.criticalNeeds
      ? population.criticalNeeds.every((need) =>
        need.addressedBy.some((id) =>
          [...selectedInterventions.map((i) => i.id), ...selectedReferrals.map((r) => r.id)].includes(id)
        )
      )
      : true;

    // Calculate spent resources and wellness gain for results
    let spentVisits = 0;
    let spentClinicalTime = 0;
    let spentMoney = 0;
    let spentEffort = 0;
    let totalWellnessGain = 0;

    selectedInterventions.forEach((i) => {
      totalWellnessGain += i.impact || 0;
      if (i.cost) {
        spentVisits += i.cost.visits || 0;
        spentClinicalTime += i.cost.clinicalTime || 0;
        spentMoney += i.cost.money || 0;
        spentEffort += i.cost.effort || 0;
      }
    });

    selectedReferrals.forEach((r) => {
      totalWellnessGain += r.impact || 0;
      if (r.cost) {
        spentVisits += r.cost.visits || 0;
        spentClinicalTime += r.cost.clinicalTime || 0;
        spentMoney += r.cost.money || 0;
        spentEffort += r.cost.effort || 0;
      }
    });

    setResults({
      student: newScores,
      max: currentMaxScores,
      populationScore,
      // Safety tracking
      unsafePenalty,
      unsafeInterventions: unsafeInterventions.map((i) => i.id).filter((id): id is string => !!id),
      criticalNeedsAddressed,
      // Resource tracking
      budget: population.budget,
      spent: {
        visits: spentVisits,
        clinicalTime: spentClinicalTime,
        money: spentMoney,
        effort: spentEffort
      },
      wellnessGain: totalWellnessGain
    });
    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleModify = () => {
    setSubmitted(false);
    setResults(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 pb-20">
      {/* Patient Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8 animate-in slide-in-from-top-4 duration-500">
        {/* Navigation Breadcrumb */}
        <button
          onClick={onBack}
          className="text-slate-400 hover:text-indigo-600 text-sm font-medium flex items-center mb-6 transition-colors group"
        >
          <ArrowRight className="w-4 h-4 mr-1 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Case Selection
        </button>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Patient Identity */}
          <div className="flex items-start shrink-0">
            <div className="relative mr-6">
              {population.patient.image ? (
                <img
                  src={population.patient.image}
                  alt={population.patient.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-md"
                />
              ) : (
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-slate-50 shadow-md ${population.color}`}
                >
                  {population.icon}
                </div>
              )}
            </div>

            <div className="pt-2">
              <h2 className="text-2xl font-bold text-slate-800 mb-1">
                {population.title}
              </h2>
              <div className="text-slate-500 font-medium">
                {population.patient.name}, {population.patient.age} •{" "}
                {population.patient.diagnosis}
              </div>
            </div>
          </div>

          {/* Right: Patient History */}
          <div className="md:border-l md:border-slate-100 md:pl-8 flex-1">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Patient History
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              "{population.patient.history}"
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-slate-50 p-4 rounded-lg text-sm text-slate-600 border border-slate-200 mb-6">
        <span className="font-semibold">History: </span>
        {population.patient.history}
      </div>

      {/* Show Results OR Scorecard */}
      {submitted && results ? (
        <>
          {/* Knowledge Check Quiz */}
          {showKnowledgeCheck && population.knowledgeCheckQuestions && population.knowledgeCheckQuestions.length > 0 ? (
            <div className="mb-8">
              <KnowledgeCheckPanel
                questions={population.knowledgeCheckQuestions}
                onComplete={() => { }}
                onClose={() => setShowKnowledgeCheck(false)}
              />
            </div>
          ) : (
            <>
              <ResultsView
                baseline={population.patient.uMatterScores}
                studentResults={results.student}
                maxResults={results.max}
                selectedInterventions={selectedInterventions}
                criticalNeeds={population.criticalNeeds}
                addressedCriticalNeeds={addressedCriticalNeeds}
                onReset={onBack}
                onModify={handleModify}
                selectedPopulationInterventions={selectedPopulationInterventions}
                populationScore={results.populationScore}
                targetDomains={population.targetDomains}
                patientName={population.patient.name}
                wellnessAnswers={population.patient.wellnessAnswers}
                unsafePenalty={results.unsafePenalty}
                unsafeInterventions={results.unsafeInterventions}
                criticalNeedsAddressed={results.criticalNeedsAddressed}
              />

              {/* Knowledge Check Button */}
              {population.knowledgeCheckQuestions && population.knowledgeCheckQuestions.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowKnowledgeCheck(true)}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg"
                  >
                    <span className="text-lg">📝</span>
                    Take Knowledge Check Quiz
                  </button>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <UMatterScorecard
            scores={population.patient.uMatterScores}
            name={population.patient.name}
            wellnessAnswers={population.patient.wellnessAnswers}
          />

          {/* SDOH Panel */}
          {((population.sdohFactors && population.sdohFactors.length > 0) ||
            (population.hrsnIndicators && population.hrsnIndicators.length > 0)) && (
              <SDOHPanel
                sdohFactors={population.sdohFactors}
                hrsnIndicators={population.hrsnIndicators}
              />
            )}
        </>
      )}

      {!submitted && (
        <>
          <p className="text-center text-slate-500 mb-6 italic text-sm">
            Step 1: Explore ICF & Select Interventions
          </p>

          {/* ICF Framework Flowchart */}
          <div className="max-w-4xl mx-auto mb-10 select-none">
            <div className="relative bg-gradient-to-b from-slate-50/80 to-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              {/* Section Label */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-slate-200 shadow-sm">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  ICF Framework
                </span>
              </div>

              {/* Health Condition (Top) */}
              <div className="flex justify-center mb-2">
                <div className="w-56 md:w-64">
                  <ICFCard
                    title="Health Condition"
                    type="health"
                    isActive={activeCategory === "healthCondition"}
                    onClick={() => setActiveCategory("healthCondition")}
                  />
                </div>
              </div>

              {/* Vertical Arrow */}
              <div className="flex justify-center my-1">
                <svg width="24" height="40" viewBox="0 0 24 40" className="text-slate-400">
                  <path d="M12 8 L8 14 M12 8 L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <line x1="12" y1="12" x2="12" y2="28" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 32 L8 26 M12 32 L16 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              {/* Middle Row - Body Functions, Activities, Participation */}
              <div className="flex items-center justify-center gap-0 mb-2">
                <div className="w-[28%] md:w-44">
                  <ICFCard
                    title="Body Functions & Structure"
                    type="body"
                    isActive={activeCategory === "bodyFunctions"}
                    onClick={() => setActiveCategory("bodyFunctions")}
                  />
                </div>

                <svg width="48" height="24" viewBox="0 0 48 24" className="text-slate-400 flex-shrink-0 mx-1 md:mx-2">
                  <path d="M6 12 L12 8 M6 12 L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <line x1="10" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="2" />
                  <path d="M42 12 L36 8 M42 12 L36 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>

                <div className="w-[28%] md:w-44">
                  <ICFCard
                    title="Activities"
                    type="activity"
                    isActive={activeCategory === "activities"}
                    onClick={() => setActiveCategory("activities")}
                  />
                </div>

                <svg width="48" height="24" viewBox="0 0 48 24" className="text-slate-400 flex-shrink-0 mx-1 md:mx-2">
                  <path d="M6 12 L12 8 M6 12 L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <line x1="10" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="2" />
                  <path d="M42 12 L36 8 M42 12 L36 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>

                <div className="w-[28%] md:w-44">
                  <ICFCard
                    title="Participation"
                    type="participation"
                    isActive={activeCategory === "participation"}
                    onClick={() => setActiveCategory("participation")}
                  />
                </div>
              </div>

              {/* Vertical Arrow */}
              <div className="flex justify-center my-1">
                <svg width="24" height="40" viewBox="0 0 24 40" className="text-slate-400">
                  <path d="M12 8 L8 14 M12 8 L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <line x1="12" y1="12" x2="12" y2="28" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 32 L8 26 M12 32 L16 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              {/* Contextual Factors Section */}
              <div className="bg-emerald-50/50 rounded-xl border border-emerald-200 p-4">
                <div className="text-center mb-3">
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    Contextual Factors
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <ICFCard
                    title="Environmental Factors"
                    type="environmental"
                    isActive={activeCategory === "environmental"}
                    onClick={() => setActiveCategory("environmental")}
                  />
                  <ICFCard
                    title="Personal Factors"
                    type="personal"
                    isActive={activeCategory === "personal"}
                    onClick={() => setActiveCategory("personal")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Content Panel - Only shows Clinical Findings */}
          <div className="min-h-[200px] mb-12">
            {activeCategory ? (
              <DetailPanel
                data={population.icfData[activeCategory]}
                category={activeCategory}
              />
            ) : (
              <div className="text-center py-10 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-slate-400">
                Select a domain above to view findings & add interventions to your plan
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 my-8" />

          <p className="text-center text-slate-500 mb-2 italic text-sm">
            Step 2: Review & Submit Plan
          </p>

          <WellnessBuilder
            selectedInterventions={selectedInterventions}
            icfData={population.icfData}
            onToggle={toggleIntervention}
            onAddCustom={addCustomGoal}
            onSubmit={handleSubmit}
            submitted={submitted}
            maxSelection={MAX_SELECTION}
            referralOptions={population.referralOptions || []}
            selectedReferrals={selectedReferrals}
            onToggleReferral={toggleReferral}
            maxReferrals={MAX_REFERRALS}
            populationInterventions={population.populationInterventions || []}
            selectedPopulationInterventions={selectedPopulationInterventions}
            onTogglePopulationIntervention={togglePopulationIntervention}
            maxPopulationSelection={MAX_POPULATION_SELECTION}
            budget={population.budget}
          />
        </>
      )}
    </div>
  );
};
