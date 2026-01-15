import {
  Trophy,
  ShieldAlert,
  FileText,
  AlertTriangle,
  CheckCircle,
  Edit3,
  RefreshCw,
  Globe,
  Building2,
  Users,
  Megaphone,
  GraduationCap,
  Activity,
} from "lucide-react";
import { preventionLevels } from "../../data/preventionLevels";
import { UMatterScorecard } from "../ui/UMatterScorecard";
import type {
  Intervention,
  WellnessDomainName,
  CriticalNeed,
  PopulationIntervention,
  PopulationPlanScore,
  PopulationStrategyType,
  WellnessAnswers,
} from "../../types";

interface ResultsViewProps {
  baseline: Record<WellnessDomainName, number>;
  studentResults: Record<WellnessDomainName, number>;
  maxResults: Record<WellnessDomainName, number>;
  selectedInterventions: Intervention[];
  onReset: () => void;
  onModify: () => void;
  criticalNeeds?: CriticalNeed[];
  addressedCriticalNeeds?: string[];
  selectedPopulationInterventions?: PopulationIntervention[];
  populationScore?: PopulationPlanScore;
  targetDomains?: WellnessDomainName[];
  // Scorecard props
  patientName: string;
  wellnessAnswers?: WellnessAnswers;
  // Safety tracking
  unsafePenalty?: number;
  unsafeInterventions?: string[];
  criticalNeedsAddressed?: boolean;
}

export const ResultsView = ({
  baseline,
  studentResults,
  maxResults,
  selectedInterventions,
  onReset,
  onModify,
  criticalNeeds,
  addressedCriticalNeeds = [],
  selectedPopulationInterventions = [],
  populationScore,
  targetDomains = [],
  patientName,
  wellnessAnswers,
  unsafePenalty = 0,
  unsafeInterventions = [],
  criticalNeedsAddressed = true,
}: ResultsViewProps) => {
  const studentTotal = Object.values(studentResults).reduce((a, b) => a + b, 0);
  const baselineTotal = Object.values(baseline).reduce((a, b) => a + b, 0);
  const maxTotal = Object.values(maxResults).reduce((a, b) => a + b, 0);

  const studentGain = studentTotal - baselineTotal;
  const maxGain = maxTotal - baselineTotal;

  // SAFETY-ADJUSTED SCORING
  // 1. Apply unsafe intervention penalty (-10 each)
  const adjustedGain = Math.max(0, studentGain - unsafePenalty);

  // 2. If critical needs not addressed, cap at 50% of max gain
  const safetyCapApplied = !criticalNeedsAddressed;
  const cappedGain = safetyCapApplied
    ? Math.min(adjustedGain, maxGain * 0.5)
    : adjustedGain;

  const performancePct = Math.round((cappedGain / maxGain) * 100) || 0;

  // Safety status flags
  const hasSafetyIssues = unsafeInterventions.length > 0 || !criticalNeedsAddressed;
  const hasUnsafeChoices = unsafeInterventions.length > 0;

  // Identify choice types
  const dangerousChoices = selectedInterventions.filter(
    (i) => (i.impact || 2) < 0
  );
  const ineffectiveChoices = selectedInterventions.filter(
    (i) => (i.impact || 0) === 0 && !i.isCustom
  );
  const goodChoices = selectedInterventions.filter((i) => (i.impact || 0) > 0);

  // Prevention Spectrum Analysis
  const prevCounts = { Primary: 0, Secondary: 0, Tertiary: 0 };
  selectedInterventions.forEach((i) => {
    if (i.prevention) prevCounts[i.prevention]++;
  });

  // SAFETY-FIRST FEEDBACK
  let feedback = "";
  let feedbackColor = "";
  let feedbackSubtext = "";

  if (hasSafetyIssues) {
    feedback = "⚠️ Plan Cannot Be Approved";
    feedbackColor = "bg-red-700";
    if (!criticalNeedsAddressed && hasUnsafeChoices) {
      feedbackSubtext = "Critical needs unaddressed AND unsafe interventions selected";
    } else if (!criticalNeedsAddressed) {
      feedbackSubtext = "Critical patient safety needs were not addressed";
    } else {
      feedbackSubtext = `${unsafeInterventions.length} potentially harmful intervention${unsafeInterventions.length > 1 ? 's' : ''} selected`;
    }
  } else if (performancePct >= 90) {
    feedback = "✓ Excellent Clinical Reasoning";
    feedbackColor = "bg-emerald-700";
    feedbackSubtext = "Patient safety addressed, optimal wellness impact achieved";
  } else if (performancePct >= 70) {
    feedback = "✓ Good Plan — Minor Improvements Possible";
    feedbackColor = "bg-blue-700";
    feedbackSubtext = "Safety needs addressed, some optimization opportunities remain";
  } else {
    feedback = "Plan Needs Revision";
    feedbackColor = "bg-amber-600";
    feedbackSubtext = "Consider different intervention priorities";
  }

  // Helper functions for population display
  const strategyTypeIcons: Record<PopulationStrategyType, typeof Globe> = {
    Policy: Building2,
    Community: Users,
    Advocacy: Megaphone,
    Education: GraduationCap,
    Screening: Activity,
  };

  const formatLabel = (text: string) => {
    if (!text) return "";
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Check if all critical needs are addressed (for display)
  const allCriticalAddressed = criticalNeedsAddressed;

  return (
    <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in zoom-in-95">
      <div className={`p-6 text-center text-white ${feedbackColor}`}>
        <div className="flex justify-center mb-2">
          {hasSafetyIssues ? (
            <ShieldAlert className="w-12 h-12" />
          ) : (
            <Trophy className="w-12 h-12 text-yellow-300" />
          )}
        </div>
        <h3 className="text-2xl font-bold">{feedback}</h3>
        <p className="text-white/90 text-sm mt-1">{feedbackSubtext}</p>
        <div className="mt-3 flex justify-center gap-4 text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            Score: {performancePct}%
          </span>
          {unsafePenalty > 0 && (
            <span className="bg-red-900/50 px-3 py-1 rounded-full">
              Safety Penalty: -{unsafePenalty} pts
            </span>
          )}
          {safetyCapApplied && (
            <span className="bg-red-900/50 px-3 py-1 rounded-full">
              Capped at 50% (critical needs unmet)
            </span>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Big Stats */}
        <div className="grid grid-cols-3 gap-4 text-center mb-8">
          <div className="p-4 bg-slate-50 rounded-xl">
            <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">
              Baseline
            </div>
            <div className="text-3xl font-bold text-slate-700">
              {baselineTotal}
            </div>
            <div className="text-xs text-slate-400">Total Wellness Points</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-100">
            <div className="text-sm text-blue-600 uppercase font-bold tracking-wider">
              Your Plan
            </div>
            <div
              className={`text-3xl font-bold ${dangerousChoices.length > 0 ? "text-red-600" : "text-blue-700"
                }`}
            >
              {studentTotal}
            </div>
            <div className="text-xs text-blue-500">Total Wellness Points</div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <div className="text-sm text-emerald-600 uppercase font-bold tracking-wider">
              Optimal Max
            </div>
            <div className="text-3xl font-bold text-emerald-700">
              {maxTotal}
            </div>
            <div className="text-xs text-emerald-500">Possible Points</div>
          </div>
        </div>

        {/* Wellness Self-Assessment Scorecard */}
        <div className="mb-8">
          <UMatterScorecard
            scores={baseline}
            newScores={studentResults}
            name={patientName}
            wellnessAnswers={wellnessAnswers}
          />
        </div>

        {/* SAFETY-FIRST: Critical Needs Assessment - Now shown prominently */}
        {criticalNeeds && criticalNeeds.length > 0 && (
          <div
            className={`mb-8 rounded-xl p-5 border-2 ${allCriticalAddressed
              ? "bg-green-50 border-green-300"
              : "bg-red-50 border-red-400 shadow-lg"
              }`}
          >
            <h4
              className={`flex items-center font-bold text-lg mb-4 ${allCriticalAddressed ? "text-green-900" : "text-red-900"
                }`}
            >
              {allCriticalAddressed ? (
                <>
                  <CheckCircle className="w-6 h-6 mr-2" /> Patient Safety: All Critical Needs Addressed
                </>
              ) : (
                <>
                  <AlertTriangle className="w-6 h-6 mr-2" /> ⚠️ Patient Safety Concerns
                </>
              )}
            </h4>

            {!allCriticalAddressed && (
              <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
                <p className="text-red-800 text-sm font-medium">
                  <strong>Scoring Impact:</strong> Score capped at 50% because critical patient safety needs were not addressed.
                  In clinical practice, these oversights could result in adverse patient outcomes.
                </p>
              </div>
            )}

            <div className="space-y-2">
              {criticalNeeds.map((need) => {
                const isAddressed = addressedCriticalNeeds.includes(need.id);
                return (
                  <div
                    key={need.id}
                    className={`p-3 rounded-lg border ${isAddressed
                      ? "bg-green-100 border-green-300"
                      : "bg-red-100 border-red-300"
                      }`}
                  >
                    <div className="font-medium text-sm">
                      {need.description}
                    </div>
                    <div
                      className={`text-xs mt-1 font-medium ${isAddressed ? "text-green-700" : "text-red-700"
                        }`}
                    >
                      {isAddressed
                        ? "✓ Addressed in your plan"
                        : "✗ NOT ADDRESSED — requires intervention or referral"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Unsafe Interventions Warning */}
        {unsafeInterventions.length > 0 && (
          <div className="mb-8 rounded-xl p-5 border-2 bg-red-50 border-red-400 shadow-lg">
            <h4 className="flex items-center font-bold text-lg mb-3 text-red-900">
              <ShieldAlert className="w-6 h-6 mr-2" /> ⚠️ Potentially Harmful Interventions Selected
            </h4>
            <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
              <p className="text-red-800 text-sm font-medium">
                <strong>Scoring Impact:</strong> -{unsafePenalty} points penalty applied.
                These interventions are contraindicated or potentially harmful for this patient.
              </p>
            </div>
            <div className="space-y-2">
              {selectedInterventions
                .filter((i) => i.quality === "Unsafe")
                .map((intervention) => (
                  <div
                    key={intervention.id}
                    className="p-3 rounded-lg bg-red-100 border border-red-300"
                  >
                    <div className="font-medium text-sm text-red-900">
                      {formatLabel(intervention.id || "")}
                    </div>
                    <div className="text-xs mt-1 text-red-700">
                      {intervention.rationale}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Target Domains - Priority Focus Areas */}
        {targetDomains.length > 0 && (
          <div className="mb-8 border rounded-xl p-4 bg-amber-50 border-amber-200">
            <h4 className="text-sm font-bold text-amber-800 mb-3 flex items-center">
              🎯 Priority Target Domains
              <span className="ml-2 text-xs font-normal text-amber-600">(2x scoring bonus)</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {targetDomains.map((domain) => {
                // Check if any selected intervention matches this target domain
                const hasMatch = selectedInterventions.some(i => i.domain === domain);
                return (
                  <span
                    key={domain}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 ${hasMatch
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-amber-100 text-amber-800 border border-amber-300"
                      }`}
                  >
                    {hasMatch && <CheckCircle className="w-3.5 h-3.5" />}
                    {domain}
                  </span>
                );
              })}
            </div>
            <p className="text-xs text-amber-700">
              Interventions targeting these domains receive double points for this case.
            </p>
          </div>
        )}

        {/* Population Plan Analysis */}
        {selectedPopulationInterventions.length > 0 && populationScore && (
          <div className="mb-8 bg-indigo-50 rounded-xl p-5 border border-indigo-200">
            <h4 className="flex items-center text-indigo-900 font-bold mb-4">
              <Globe className="w-5 h-5 mr-2" /> Population-Level Strategy
              Analysis
              <span className="ml-auto text-2xl font-bold">
                {populationScore.total}/100
              </span>
            </h4>

            {/* Score Breakdown Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 text-center border border-indigo-100">
                <div className="text-xl font-bold text-indigo-700">
                  {populationScore.strategyDiversity}
                </div>
                <div className="text-xs text-indigo-600">
                  Strategy Diversity
                </div>
                <div className="text-[10px] text-slate-400">/25 pts</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-indigo-100">
                <div className="text-xl font-bold text-indigo-700">
                  {populationScore.sdohCoverage}
                </div>
                <div className="text-xs text-indigo-600">SDOH Coverage</div>
                <div className="text-[10px] text-slate-400">/25 pts</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-indigo-100">
                <div className="text-xl font-bold text-indigo-700">
                  {populationScore.preventionBalance}
                </div>
                <div className="text-xs text-indigo-600">
                  Prevention Balance
                </div>
                <div className="text-[10px] text-slate-400">/25 pts</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center border border-indigo-100">
                <div className="text-xl font-bold text-indigo-700">
                  {populationScore.qualityScore}
                </div>
                <div className="text-xs text-indigo-600">Quality Score</div>
                <div className="text-[10px] text-slate-400">/25 pts</div>
              </div>
            </div>

            {/* Selected Strategies List */}
            <div className="space-y-2 mb-4">
              {selectedPopulationInterventions.map((intervention) => {
                const IconComponent =
                  strategyTypeIcons[intervention.strategyType];
                return (
                  <div
                    key={intervention.id}
                    className="bg-white rounded-lg p-3 border border-indigo-100 flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent className="w-4 h-4 text-indigo-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-indigo-900">
                        {intervention.name || formatLabel(intervention.id)}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                        {intervention.rationale}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-100 text-indigo-700">
                          {intervention.strategyType}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-100 text-indigo-700">
                          {intervention.sdohCategory}
                        </span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${intervention.quality === "Excellent"
                            ? "bg-green-100 text-green-700"
                            : intervention.quality === "Good"
                              ? "bg-blue-100 text-blue-700"
                              : intervention.quality === "OK"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-slate-100 text-slate-700"
                            }`}
                        >
                          {intervention.quality}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Score Interpretation */}
            <div
              className={`p-3 rounded-lg text-sm ${populationScore.total >= 80
                ? "bg-green-100 text-green-800"
                : populationScore.total >= 60
                  ? "bg-blue-100 text-blue-800"
                  : populationScore.total >= 40
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-orange-100 text-orange-800"
                }`}
            >
              {populationScore.total >= 80 ? (
                <span>
                  <strong>Excellent!</strong> Your population-level strategy
                  demonstrates comprehensive understanding of community health
                  approaches.
                </span>
              ) : populationScore.total >= 60 ? (
                <span>
                  <strong>Good work!</strong> Your strategy shows solid
                  awareness of population health, with room for broader SDOH
                  coverage.
                </span>
              ) : populationScore.total >= 40 ? (
                <span>
                  <strong>Fair attempt.</strong> Consider diversifying your
                  strategy types and addressing more SDOH categories.
                </span>
              ) : (
                <span>
                  <strong>Needs improvement.</strong> Try selecting strategies
                  across different types and SDOH categories for better
                  coverage.
                </span>
              )}
            </div>
          </div>
        )}

        {/* Detailed Item Analysis */}
        <h4 className="flex items-center text-slate-700 font-bold mb-4 border-b pb-2">
          <FileText className="w-5 h-5 mr-2" /> Clinical Analysis of Your
          Selection
        </h4>

        <div className="space-y-4 mb-8">
          {/* Dangerous */}
          {dangerousChoices.map((choice, idx) => (
            <div
              key={`d-${idx}`}
              className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
            >
              <div className="flex justify-between items-start">
                <div className="font-bold text-red-700 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" /> {choice.text}
                </div>
                <div className="text-xs font-bold bg-red-200 text-red-800 px-2 py-1 rounded">
                  {choice.impact} Pts
                </div>
              </div>
              <p className="text-sm text-red-800 mt-1 italic">
                "{choice.rationale}"
              </p>
            </div>
          ))}

          {/* Ineffective */}
          {ineffectiveChoices.map((choice, idx) => (
            <div
              key={`i-${idx}`}
              className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-lg"
            >
              <div className="flex justify-between items-start">
                <div className="font-bold text-slate-700">{choice.text}</div>
                <div className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded">
                  0 Pts
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-1 italic">
                "{choice.rationale}"
              </p>
            </div>
          ))}

          {/* Good */}
          {goodChoices.map((choice, idx) => (
            <div
              key={`g-${idx}`}
              className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg"
            >
              <div className="flex justify-between items-start">
                <div className="font-bold text-emerald-800 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" /> {choice.text}
                  {choice.prevention && (
                    <span
                      className={`ml-2 text-[10px] px-1.5 py-0.5 rounded border ${preventionLevels[choice.prevention].color
                        }`}
                    >
                      {choice.prevention === "Primary"
                        ? "1°"
                        : choice.prevention === "Secondary"
                          ? "2°"
                          : "3°"}
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold bg-emerald-200 text-emerald-800 px-2 py-1 rounded">
                  +{choice.impact} Pts
                </div>
              </div>
              <p className="text-sm text-emerald-700 mt-1 italic">
                "{choice.rationale || "Good clinical choice."}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onModify}
            className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition flex items-center"
          >
            <Edit3 className="w-4 h-4 mr-2" /> Modify Plan
          </button>
          <button
            onClick={onReset}
            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition flex items-center"
          >
            <RefreshCw className="w-4 h-4 mr-2" /> New Patient
          </button>
        </div>
      </div>
    </div>
  );
};
