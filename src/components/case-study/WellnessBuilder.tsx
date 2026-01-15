import { useState, useMemo } from "react";
import {
  ClipboardList,
  Plus,
  X,
  ArrowRightCircle,
  LayoutGrid,
  Search,
  Filter,
  User,
  Stethoscope,
  Globe,
  Building2,
  Users,
  Megaphone,
  GraduationCap,
  Activity,
} from "lucide-react";
import { wellnessDomains } from "../../data/wellnessDomains";
import { masterPopulationInterventions } from "../../data/populationInterventionsMaster";
import { BudgetDashboard } from "../ui/BudgetDashboard";
import type {
  Intervention,
  WellnessDomainName,
  ICFData,
  InterventionOption,
  PreventionLevelName,
  ReferralOption,
  PopulationIntervention,
  PopulationStrategyType,
  SDOHCategory,
  PopulationBudget,
} from "../../types";

interface WellnessBuilderProps {
  selectedInterventions: Intervention[];
  icfData: ICFData;
  onToggle: (intervention: Intervention) => void;
  onAddCustom: (goal: Intervention) => void;
  onSubmit: () => void;
  submitted: boolean;
  maxSelection: number;

  // Referral Props
  referralOptions: ReferralOption[];
  selectedReferrals: ReferralOption[];
  onToggleReferral: (referral: ReferralOption) => void;
  maxReferrals: number;

  // Population Props
  populationInterventions: PopulationIntervention[];
  selectedPopulationInterventions: PopulationIntervention[];
  onTogglePopulationIntervention: (
    intervention: PopulationIntervention
  ) => void;
  maxPopulationSelection: number;
  budget?: PopulationBudget;
}


interface PlanSummaryProps {
  selectedInterventions: Intervention[];
  selectedReferrals: ReferralOption[];
  selectedPopulationInterventions: PopulationIntervention[];
  maxSelection: number;
  maxReferrals: number;
  maxPopulationSelection: number;
  onSubmit: () => void;
  onToggle: (item: Intervention) => void;
  onToggleReferral: (item: ReferralOption) => void;
  onTogglePopulationIntervention: (item: PopulationIntervention) => void;
}

export const PlanSummary = ({
  selectedInterventions,
  selectedReferrals,
  selectedPopulationInterventions,
  maxSelection,
  maxReferrals,
  maxPopulationSelection,
  onSubmit,
  onToggle,
  onToggleReferral,
  onTogglePopulationIntervention
}: PlanSummaryProps) => {
  const individualCount = selectedInterventions.length;
  const referralCount = selectedReferrals.length;

  const formatLabel = (text: string) => {
    if (!text) return "";
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden mb-8">
      <div className="bg-slate-900 text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold flex items-center">
              <ClipboardList className="w-6 h-6 mr-3 text-emerald-400" />
              Your Master Plan
            </h3>
            <div className="flex gap-4 mt-2 text-xs font-medium text-slate-400">
              <div
                className={
                  individualCount === maxSelection
                    ? "text-emerald-400"
                    : ""
                }
              >
                Interventions: {individualCount}/{maxSelection}
              </div>
              <div
                className={
                  referralCount === maxReferrals
                    ? "text-teal-400"
                    : ""
                }
              >
                Referrals: {referralCount}/{maxReferrals}
              </div>
              <div
                className={
                  selectedPopulationInterventions.length === maxPopulationSelection
                    ? "text-purple-400"
                    : ""
                }
              >
                Strategies: {selectedPopulationInterventions.length}/{maxPopulationSelection}
              </div>
            </div>
          </div>
          <button
            onClick={onSubmit}
            disabled={individualCount === 0 && referralCount === 0 && selectedPopulationInterventions.length === 0}
            className={`px-6 py-2 rounded-lg font-bold transition-all shadow-lg text-sm ${individualCount > 0 || referralCount > 0 || selectedPopulationInterventions.length > 0
              ? "bg-emerald-500 hover:bg-emerald-400 text-white transform hover:-translate-y-0.5"
              : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
              }`}
          >
            Complete Plan
          </button>
        </div>
      </div>

      <div className="p-6 bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Interventions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">
              Interventions
            </h4>
            {selectedInterventions.length === 0 && (
              <p className="text-xs text-slate-400 italic">No interventions selected</p>
            )}
            {selectedInterventions.map((item, idx) => (
              <div
                key={`int-${idx}`}
                className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm animate-in fade-in zoom-in-95 duration-200"
              >
                <button
                  onClick={() => onToggle(item)}
                  className="mt-0.5 mr-3 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div>
                  <div className="text-sm font-bold text-slate-800 mb-0.5">
                    {item.text}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {item.prevention} • {item.domain}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Referrals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">
              Referrals
            </h4>
            {selectedReferrals.length === 0 && (
              <p className="text-xs text-slate-400 italic">No referrals selected</p>
            )}
            {selectedReferrals.map((item, idx) => (
              <div
                key={`ref-${idx}`}
                className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm animate-in fade-in zoom-in-95 duration-200 border-l-4 border-l-teal-500"
              >
                <button
                  onClick={() => onToggleReferral(item)}
                  className="mt-0.5 mr-3 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div>
                  <div className="text-sm font-bold text-slate-800 mb-0.5">
                    {formatLabel(item.id)}
                  </div>
                  <div className="text-[10px] text-teal-600 font-medium">
                    Referral • {item.domain}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Population Strategies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">
              Population Strategies
            </h4>
            {selectedPopulationInterventions.length === 0 && (
              <p className="text-xs text-slate-400 italic">No strategies selected</p>
            )}
            {selectedPopulationInterventions.map((item, idx) => (
              <div
                key={`pop-${idx}`}
                className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm animate-in fade-in zoom-in-95 duration-200 border-l-4 border-l-purple-500"
              >
                <button
                  onClick={() => onTogglePopulationIntervention(item)}
                  className="mt-0.5 mr-3 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div>
                  <div className="text-sm font-bold text-slate-800 mb-0.5">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-purple-600 font-medium">
                    {item.strategyType} • {item.sdohCategory}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {individualCount === 0 && referralCount === 0 && selectedPopulationInterventions.length === 0 && (
          <div className="text-center py-8 text-slate-400 border-t border-slate-200 mt-6">
            <User className="w-12 h-12 mx-auto mb-2 opacity-30" />
            <p className="text-sm">
              Select interventions, referrals, and population strategies to build your plan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const WellnessBuilder = ({
  selectedInterventions,
  icfData,
  onToggle,
  onAddCustom,
  onSubmit,
  submitted,
  maxSelection,
  referralOptions,
  selectedReferrals,
  onToggleReferral,
  maxReferrals,
  populationInterventions,
  selectedPopulationInterventions,
  onTogglePopulationIntervention,
  maxPopulationSelection,
  budget,
}: WellnessBuilderProps) => {
  const [customGoal, setCustomGoal] = useState("");
  const [customGoalDomain] = useState<WellnessDomainName>("Physical");
  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");

  const [activeLibrarySection, setActiveLibrarySection] = useState<
    "interventions" | "referrals" | "population"
  >("interventions");

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPrevention, setFilterPrevention] = useState<
    PreventionLevelName | "All"
  >("All");
  const [filterDomain, setFilterDomain] = useState<WellnessDomainName | "All">(
    "All"
  );

  // Population Filters
  const [filterStrategyType, setFilterStrategyType] = useState<
    PopulationStrategyType | "All"
  >("All");
  const [filterSdohCategory, setFilterSdohCategory] = useState<
    SDOHCategory | "All"
  >("All");

  const handleAddCustom = () => {
    if (customGoal.trim()) {
      onAddCustom({
        text: customGoal,
        domain: customGoalDomain,
        isCustom: true,
        impact: 2,
        prevention: "Tertiary",
        rationale: "Custom Goal: Encourages patient autonomy.",
      });
      setCustomGoal("");
      setIsAddingCustom(false);
    }
  };

  // Flatten categories for render (with guard for undefined icfData)
  const categories = icfData
    ? [
      {
        id: "healthCondition",
        label: "Health Condition",
        data: icfData.healthCondition,
      },
      {
        id: "bodyFunctions",
        label: "Body Functions",
        data: icfData.bodyFunctions,
      },
      { id: "activities", label: "Activities", data: icfData.activities },
      {
        id: "participation",
        label: "Participation",
        data: icfData.participation,
      },
      {
        id: "environmental",
        label: "Environment",
        data: icfData.environmental,
      },
      { id: "personal", label: "Personal Context", data: icfData.personal },
    ]
    : [];

  const activeCategoryData = categories.find((c) => c.id === activeTab)?.data;

  // Helper to format kebab-case IDs into readable text
  const formatLabel = (text: string) => {
    if (!text) return "";
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Get all interventions from all categories
  const allInterventions = useMemo(() => {
    if (!icfData) return [];
    return [
      ...(icfData.healthCondition?.interventions || []),
      ...(icfData.bodyFunctions?.interventions || []),
      ...(icfData.activities?.interventions || []),
      ...(icfData.participation?.interventions || []),
      ...(icfData.environmental?.interventions || []),
      ...(icfData.personal?.interventions || []),
    ];
  }, [icfData]);

  // Filter Logic for Interventions
  const filteredInterventions = useMemo(() => {
    const sourceInterventions = activeTab === "all"
      ? allInterventions
      : activeCategoryData?.interventions || [];

    return sourceInterventions.filter((item) => {
      const textDisplay = item.text || (item.id ? formatLabel(item.id) : "");
      const matchesSearch = textDisplay
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrevention =
        filterPrevention === "All" || item.prevention === filterPrevention;
      const matchesDomain =
        filterDomain === "All" || item.domain === filterDomain;

      return matchesSearch && matchesPrevention && matchesDomain;
    });
  }, [activeTab, allInterventions, activeCategoryData, searchTerm, filterPrevention, filterDomain]);

  // Filter Logic for Referrals
  const filteredReferrals = useMemo(() => {
    return referralOptions.filter((item) => {
      // Create text display for search matching since referrals don't have 'text' prop
      const textDisplay = formatLabel(item.id);
      const matchesSearch = textDisplay
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrevention =
        filterPrevention === "All" || item.prevention === filterPrevention;
      const matchesDomain =
        filterDomain === "All" || item.domain === filterDomain;

      return matchesSearch && matchesPrevention && matchesDomain;
    });
  }, [referralOptions, searchTerm, filterPrevention, filterDomain]);

  // Hydrate population interventions with master data
  const hydratedPopulationInterventions = useMemo(() => {
    return populationInterventions.map((item) => {
      const master = masterPopulationInterventions.find((m) => m.id === item.id);
      return {
        ...item,
        name: item.name || master?.text || formatLabel(item.id),
        description: item.description || master?.description || "No description available",
      };
    });
  }, [populationInterventions]);

  // Filter Logic for Population Interventions
  const filteredPopulationInterventions = useMemo(() => {
    return hydratedPopulationInterventions.filter((item) => {
      const matchesSearch =
        (item.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      const matchesStrategy =
        filterStrategyType === "All" ||
        item.strategyType === filterStrategyType;
      const matchesSdoh =
        filterSdohCategory === "All" ||
        item.sdohCategory === filterSdohCategory;
      const matchesPrevention =
        filterPrevention === "All" || item.prevention === filterPrevention;

      return (
        matchesSearch && matchesStrategy && matchesSdoh && matchesPrevention
      );
    });
  }, [
    hydratedPopulationInterventions,
    searchTerm,
    filterStrategyType,
    filterSdohCategory,
    filterPrevention,
  ]);

  // Strategy Type Icons
  const strategyTypeIcons: Record<PopulationStrategyType, typeof Building2> = {
    Policy: Building2,
    Community: Users,
    Advocacy: Megaphone,
    Education: GraduationCap,
    Screening: Activity,
  };

  // Helper to render population intervention card
  const renderPopulationCard = (item: PopulationIntervention) => {
    const isSelected = selectedPopulationInterventions.some(
      (i) => i.id === item.id
    );
    const isDisabled =
      submitted ||
      (!isSelected &&
        selectedPopulationInterventions.length >= maxPopulationSelection);
    const StrategyIcon = strategyTypeIcons[item.strategyType];

    const qualityColors: Record<string, string> = {
      Excellent: "bg-emerald-100 text-emerald-700",
      Good: "bg-green-100 text-green-700",
      OK: "bg-yellow-100 text-yellow-700",
      Neutral: "bg-slate-100 text-slate-600",
      Poor: "bg-orange-100 text-orange-700",
      Unsafe: "bg-red-100 text-red-700",
    };

    return (
      <div
        key={item.id}
        onClick={() => !isDisabled && onTogglePopulationIntervention(item)}
        className={`
          relative group flex flex-col p-5 rounded-xl border transition-all duration-200 min-h-[140px]
          ${isSelected
            ? "bg-slate-900 border-slate-900 shadow-xl ring-2 ring-emerald-400 z-10"
            : isDisabled
              ? "bg-slate-50 border-slate-200 opacity-50 cursor-not-allowed"
              : "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-lg cursor-pointer"
          }
        `}
      >
        {/* Selection indicator */}
        {isSelected && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
        )}

        {/* Header with Strategy Type */}
        <div className="flex items-start gap-3 mb-2">
          <div
            className={`p-2 rounded-lg ${isSelected ? "bg-indigo-500/30" : "bg-indigo-50"
              }`}
          >
            <StrategyIcon
              className={`w-5 h-5 ${isSelected ? "text-indigo-300" : "text-indigo-600"
                }`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4
              className={`font-semibold text-sm leading-tight ${isSelected ? "text-white" : "text-slate-800"
                }`}
            >
              {item.name}
            </h4>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-xs leading-relaxed mb-3 flex-1 ${isSelected ? "text-slate-300" : "text-slate-600"
            }`}
        >
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span
            className={`px-2 py-0.5 rounded text-xs font-medium ${isSelected
              ? "bg-indigo-500/30 text-indigo-200"
              : "bg-indigo-50 text-indigo-700"
              }`}
          >
            {item.strategyType}
          </span>
          <span
            className={`px-2 py-0.5 rounded text-xs font-medium ${isSelected
              ? "bg-purple-500/30 text-purple-200"
              : "bg-purple-50 text-purple-700"
              }`}
          >
            {formatLabel(item.sdohCategory)}
          </span>
          <span
            className={`px-2 py-0.5 rounded text-xs font-medium ${isSelected
              ? "bg-slate-600 text-slate-200"
              : qualityColors[item.quality] || "bg-slate-100 text-slate-600"
              }`}
          >
            {item.quality}
          </span>
        </div>
      </div>
    );
  };

  // Helper to render a single intervention card
  const renderInterventionCard = (item: InterventionOption) => {
    const textDisplay = item.text || (item.id ? formatLabel(item.id) : "Goal");
    const isSelected = selectedInterventions.some((i) => i.id === item.id);
    const resolved: Intervention = { ...item, text: textDisplay };
    const isDisabled =
      submitted ||
      (!isSelected && selectedInterventions.length >= maxSelection);

    return (
      <div
        key={item.id}
        onClick={() => !isDisabled && onToggle(resolved)}
        className={`
                    relative group flex flex-col p-5 rounded-xl border transition-all duration-200 min-h-[120px]
                    ${isSelected
            ? "bg-slate-900 border-slate-900 shadow-xl ring-2 ring-emerald-400 z-10"
            : isDisabled
              ? "bg-slate-50 border-slate-100 opacity-50 cursor-not-allowed"
              : "bg-white border-slate-200 hover:border-blue-400 hover:shadow-md cursor-pointer"
          }
                `}
      >
        {/* Selection Indicator (Top Right) */}
        <div className="absolute top-4 right-4">
          {isSelected ? (
            <div className="text-emerald-400">
              <ArrowRightCircle className="w-6 h-6 fill-current" />
            </div>
          ) : (
            <div
              className={`w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-blue-400 transition-colors ${isSelected ? "bg-emerald-500" : "bg-transparent"
                }`}
            />
          )}
        </div>

        {/* Main Content */}
        <div className="pr-8">
          <h4
            className={`text-base font-bold mb-2 leading-tight ${isSelected ? "text-white" : "text-slate-800"
              }`}
          >
            {textDisplay}
          </h4>

          {/* Rationale - Only showed after selection to avoid giving away answers */}
          {isSelected && item.rationale && (
            <p
              className={`text-xs ${isSelected ? "text-slate-400" : "text-slate-500"
                } line-clamp-3`}
            >
              {item.rationale}
            </p>
          )}

          {/* Hidden hints appearing only on select */}
          {isSelected && (
            <div className="mt-3 flex items-center gap-2 animate-in fade-in duration-300">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                {item.prevention}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                {item.domain}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Helper to render referral card
  const renderReferralCard = (item: ReferralOption) => {
    const textDisplay = formatLabel(item.id);
    const isSelected = selectedReferrals.some((r) => r.id === item.id);
    const isDisabled =
      submitted || (!isSelected && selectedReferrals.length >= maxReferrals);

    return (
      <div
        key={item.id}
        onClick={() => !isDisabled && onToggleReferral(item)}
        className={`
                    relative group flex flex-col p-5 rounded-xl border transition-all duration-200 min-h-[120px]
                    ${isSelected
            ? "bg-white border-teal-500 shadow-xl ring-2 ring-teal-500 z-10"
            : isDisabled
              ? "bg-slate-50 border-slate-100 opacity-50 cursor-not-allowed"
              : "bg-white border-slate-200 hover:border-teal-400 hover:shadow-md cursor-pointer"
          }
                `}
      >
        {/* Selection Indicator (Top Right) */}
        <div className="absolute top-4 right-4">
          {isSelected ? (
            <div className="text-teal-600">
              <Stethoscope className="w-6 h-6" />
            </div>
          ) : (
            <div
              className={`w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-teal-400 transition-colors flex items-center justify-center`}
            >
              <Stethoscope className="w-3 h-3 text-slate-300 group-hover:text-teal-400" />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? "text-teal-600" : "text-slate-400"
                }`}
            >
              Referral
            </span>
          </div>
          <h4
            className={`text-base font-bold mb-2 leading-tight ${isSelected ? "text-teal-900" : "text-slate-800"
              }`}
          >
            {textDisplay}
          </h4>

          {/* Rationale -- Only showed after selection */}
          {isSelected && item.rationale && (
            <p
              className={`text-xs ${isSelected ? "text-teal-700" : "text-slate-500"
                } line-clamp-3`}
            >
              {item.rationale}
            </p>
          )}

          {/* Hints appearing only on select (Consitent with Interventions) */}
          {isSelected && (
            <div className="mt-3 flex items-center gap-2 animate-in fade-in duration-300">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-100">
                {item.prevention}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-100">
                {item.domain}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const individualCount = selectedInterventions.length;
  const referralCount = selectedReferrals.length;

  // Calculate spent resources
  const spent = useMemo(() => {
    let visits = 0;
    let clinicalTime = 0;
    let money = 0;
    let effort = 0;

    // Sum intervention costs
    selectedInterventions.forEach((i) => {
      if (i.cost) {
        visits += i.cost.visits || 0;
        clinicalTime += i.cost.clinicalTime || 0;
        money += i.cost.money || 0;
        effort += i.cost.effort || 0;
      }
    });

    // Sum referral costs
    selectedReferrals.forEach((r) => {
      if (r.cost) {
        visits += r.cost.visits || 0;
        clinicalTime += r.cost.clinicalTime || 0;
        money += r.cost.money || 0;
        effort += r.cost.effort || 0;
      }
    });

    return { visits, clinicalTime, money, effort };
  }, [selectedInterventions, selectedReferrals]);

  // Calculate total wellness gain (impact) for efficiency score
  const wellnessGain = useMemo(() => {
    const intGain = selectedInterventions.reduce((sum, i) => sum + i.impact, 0);
    const refGain = selectedReferrals.reduce((sum, r) => sum + r.impact, 0);
    return intGain + refGain;
  }, [selectedInterventions, selectedReferrals]);

  return (
    <div className="mt-8 space-y-8">
      {/* Budget Dashboard (Gamified) */}
      {budget && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <BudgetDashboard
            budget={budget}
            spent={spent}
            wellnessGain={wellnessGain}
          />
        </div>
      )}

      {/* Top Section: Plan Summary */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="bg-slate-900 text-white p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold flex items-center">
                <ClipboardList className="w-6 h-6 mr-3 text-emerald-400" />
                Your Master Plan
              </h3>
              <div className="flex gap-4 mt-2 text-xs font-medium text-slate-400">
                <div
                  className={
                    individualCount === maxSelection
                      ? "text-emerald-400"
                      : ""
                  }
                >
                  Interventions: {individualCount}/{maxSelection}
                </div>
                <div
                  className={
                    referralCount === maxReferrals
                      ? "text-teal-400"
                      : ""
                  }
                >
                  Referrals: {referralCount}/{maxReferrals}
                </div>
                <div
                  className={
                    selectedPopulationInterventions.length === maxPopulationSelection
                      ? "text-purple-400"
                      : ""
                  }
                >
                  Strategies: {selectedPopulationInterventions.length}/{maxPopulationSelection}
                </div>
              </div>
            </div>
            <button
              onClick={onSubmit}
              disabled={individualCount === 0 && referralCount === 0 && selectedPopulationInterventions.length === 0}
              className={`px-6 py-2 rounded-lg font-bold transition-all shadow-lg text-sm ${individualCount > 0 || referralCount > 0 || selectedPopulationInterventions.length > 0
                ? "bg-emerald-500 hover:bg-emerald-400 text-white transform hover:-translate-y-0.5"
                : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                }`}
            >
              Complete Plan
            </button>
          </div>
        </div>

        <div className="p-6 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Interventions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">
                Interventions
              </h4>
              {selectedInterventions.length === 0 && (
                <p className="text-xs text-slate-400 italic">No interventions selected</p>
              )}
              {selectedInterventions.map((item, idx) => (
                <div
                  key={`int-${idx}`}
                  className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm animate-in fade-in zoom-in-95 duration-200"
                >
                  <button
                    onClick={() => onToggle(item)}
                    className="mt-0.5 mr-3 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div>
                    <div className="text-sm font-bold text-slate-800 mb-0.5">
                      {item.text}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {item.prevention} • {item.domain}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2: Referrals */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">
                Referrals
              </h4>
              {selectedReferrals.length === 0 && (
                <p className="text-xs text-slate-400 italic">No referrals selected</p>
              )}
              {selectedReferrals.map((item, idx) => (
                <div
                  key={`ref-${idx}`}
                  className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm animate-in fade-in zoom-in-95 duration-200 border-l-4 border-l-teal-500"
                >
                  <button
                    onClick={() => onToggleReferral(item)}
                    className="mt-0.5 mr-3 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div>
                    <div className="text-sm font-bold text-slate-800 mb-0.5">
                      {formatLabel(item.id)}
                    </div>
                    <div className="text-[10px] text-teal-600 font-medium">
                      Referral • {item.domain}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 3: Population Strategies */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-200 pb-2">
                Population Strategies
              </h4>
              {selectedPopulationInterventions.length === 0 && (
                <p className="text-xs text-slate-400 italic">No strategies selected</p>
              )}
              {selectedPopulationInterventions.map((item, idx) => (
                <div
                  key={`pop-${idx}`}
                  className="flex items-start bg-white p-3 rounded-lg border border-slate-200 shadow-sm animate-in fade-in zoom-in-95 duration-200 border-l-4 border-l-purple-500"
                >
                  <button
                    onClick={() => onTogglePopulationIntervention(item)}
                    className="mt-0.5 mr-3 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div>
                    <div className="text-sm font-bold text-slate-800 mb-0.5">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-purple-600 font-medium">
                      {item.strategyType} • {item.sdohCategory}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {individualCount === 0 && referralCount === 0 && selectedPopulationInterventions.length === 0 && (
            <div className="text-center py-8 text-slate-400 border-t border-slate-200 mt-6">
              <User className="w-12 h-12 mx-auto mb-2 opacity-30" />
              <p className="text-sm">
                Select interventions, referrals, and population strategies to build your plan.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section: Intervention Library */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-white sticky top-0 z-20 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center">
                <LayoutGrid className="w-5 h-5 mr-2 text-blue-500" />
                Library
              </h3>

              {/* Library Section Switcher */}
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveLibrarySection("interventions")}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${activeLibrarySection === "interventions"
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                    }`}
                >
                  Interventions
                </button>
                <button
                  onClick={() => setActiveLibrarySection("referrals")}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${activeLibrarySection === "referrals"
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                    }`}
                >
                  Referrals
                </button>
                <button
                  onClick={() => setActiveLibrarySection("population")}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1 ${activeLibrarySection === "population"
                    ? "bg-white text-purple-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                    }`}
                >
                  <Globe className="w-3 h-3" />
                  Population
                </button>
              </div>
            </div>

            {activeLibrarySection === "interventions" && (
              <button
                onClick={() => setIsAddingCustom(true)}
                className="inline-flex items-center text-sm px-3 py-1.5 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 font-medium rounded-lg transition-colors border border-slate-200"
              >
                <Plus className="w-4 h-4 mr-1.5" />
                Add Custom
              </button>
            )}
          </div>

          {/* Controls Row: Category Dropdown + Search + Filters */}
          <div className="flex flex-col space-y-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* 1. Category/Type Dropdown */}
              {activeLibrarySection === "interventions" ? (
                <div className="md:col-span-1 relative">
                  <select
                    className="w-full pl-3 pr-8 py-2.5 text-sm font-bold text-slate-700 border border-slate-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer shadow-sm"
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                  >
                    <option value="all">All ICF Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  <Filter className="absolute right-3 top-3 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              ) : activeLibrarySection === "referrals" ? (
                <div className="md:col-span-1 flex items-center px-4 bg-teal-50 border border-teal-100 rounded-lg text-teal-800 font-bold text-sm">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Medical Referrals
                </div>
              ) : (
                <div className="md:col-span-1 flex items-center px-4 bg-purple-50 border border-purple-100 rounded-lg text-purple-800 font-bold text-sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Population Strategies
                </div>
              )}

              {/* 2. Search Bar */}
              <div className="md:col-span-1 relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={
                    activeLibrarySection === "interventions"
                      ? "Search interventions..."
                      : "Search referrals..."
                  }
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* 3. Prevention Filter */}
              <div className="md:col-span-1 relative">
                <select
                  className="w-full pl-3 pr-8 py-2.5 text-sm border border-slate-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer font-medium text-slate-600 shadow-sm"
                  value={filterPrevention}
                  onChange={(e) => setFilterPrevention(e.target.value as PreventionLevelName | "All")}
                >
                  <option value="All">All Prevention Levels</option>
                  <option value="Primary">Primary (1°)</option>
                  <option value="Secondary">Secondary (2°)</option>
                  <option value="Tertiary">Tertiary (3°)</option>
                </select>
                <Filter className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>

              {/* 4. Domain Filter */}
              <div className="md:col-span-1 relative">
                <select
                  className="w-full pl-3 pr-8 py-2.5 text-sm border border-slate-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer font-medium text-slate-600 shadow-sm"
                  value={filterDomain}
                  onChange={(e) => setFilterDomain(e.target.value as WellnessDomainName | "All")}
                >
                  <option value="All">All Domains</option>
                  {(Object.keys(wellnessDomains) as WellnessDomainName[]).map(
                    (d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    )
                  )}
                </select>
                <Filter className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            {/* Filter Info */}
            {(searchTerm ||
              filterPrevention !== "All" ||
              filterDomain !== "All") && (
                <div className="text-xs text-slate-500 font-medium px-1">
                  {activeLibrarySection === "interventions" ? (
                    <>
                      Showing {filteredInterventions.length} result
                      {filteredInterventions.length !== 1 && "s"} in{" "}
                      {categories.find((c) => c.id === activeTab)?.label}
                    </>
                  ) : (
                    <>
                      Showing {filteredReferrals.length} referral option
                      {filteredReferrals.length !== 1 && "s"}
                    </>
                  )}
                </div>
              )}
          </div>
        </div>

        <div className="p-6 bg-slate-50/30 min-h-[400px]">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {activeLibrarySection === "interventions" &&
              (filteredInterventions.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredInterventions.map((intervention) =>
                    renderInterventionCard(intervention)
                  )}
                </div>
              ) : (
                <div className="text-center py-20 flex flex-col items-center">
                  <Search className="w-12 h-12 text-slate-200 mb-3" />
                  <p className="text-slate-500 font-medium">
                    No results found.
                  </p>
                  <p className="text-slate-400 text-sm">
                    Try adjusting your filters or search term.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setFilterPrevention("All");
                      setFilterDomain("All");
                    }}
                    className="mt-4 text-blue-500 hover:underline text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ))}

            {activeLibrarySection === "referrals" &&
              (filteredReferrals.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredReferrals.map((referral) =>
                    renderReferralCard(referral)
                  )}
                </div>
              ) : (
                <div className="text-center py-20 flex flex-col items-center">
                  <Stethoscope className="w-12 h-12 text-slate-200 mb-3" />
                  <p className="text-slate-500 font-medium">
                    No referrals found matching criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setFilterPrevention("All");
                      setFilterDomain("All");
                    }}
                    className="mt-4 text-teal-600 hover:underline text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ))}

            {activeLibrarySection === "population" && (
              <>
                {/* Population Filters */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <select
                    value={filterStrategyType}
                    onChange={(e) =>
                      setFilterStrategyType(
                        e.target.value as PopulationStrategyType | "All"
                      )
                    }
                    className="px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="All">All Strategies</option>
                    <option value="Policy">Policy</option>
                    <option value="Community">Community</option>
                    <option value="Advocacy">Advocacy</option>
                    <option value="Education">Education</option>
                    <option value="Screening">Screening</option>
                  </select>
                  <select
                    value={filterSdohCategory}
                    onChange={(e) =>
                      setFilterSdohCategory(
                        e.target.value as SDOHCategory | "All"
                      )
                    }
                    className="px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="All">All SDOH</option>
                    <option value="Safety">Safety</option>
                    <option value="Housing">Housing</option>
                    <option value="Social">Social</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Employment">Employment</option>
                    <option value="Healthcare Access">Healthcare Access</option>
                    <option value="Food">Food</option>
                    <option value="Education">Education</option>
                    <option value="Financial">Financial</option>
                  </select>
                  <span className="ml-auto text-sm text-slate-500">
                    {selectedPopulationInterventions.length}/
                    {maxPopulationSelection} selected
                  </span>
                </div>
                {filteredPopulationInterventions.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredPopulationInterventions.map((item) =>
                      renderPopulationCard(item)
                    )}
                  </div>
                ) : (
                  <div className="text-center py-20 flex flex-col items-center">
                    <Globe className="w-12 h-12 text-slate-200 mb-3" />
                    <p className="text-slate-500 font-medium">
                      No population interventions found.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setFilterPrevention("All");
                        setFilterStrategyType("All");
                        setFilterSdohCategory("All");
                      }}
                      className="mt-4 text-purple-600 hover:underline text-sm font-medium"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Custom Goal Modal */}
      {isAddingCustom && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-lg text-slate-800">
                Add Custom Goal
              </h4>
              <button
                onClick={() => setIsAddingCustom(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <textarea
              className="w-full p-3 border border-slate-200 rounded-lg mb-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none h-32"
              placeholder="Describe the intervention goal here..."
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
              autoFocus
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsAddingCustom(false)}
                className="px-4 py-2 text-slate-500 hover:text-slate-700 font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustom}
                disabled={!customGoal.trim()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold text-sm shadow-md transition-colors"
              >
                Add Goal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
