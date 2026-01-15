import { BookOpen, Plus, Check } from "lucide-react";
import type { ICFCategory, Intervention } from "../../types";

interface DetailPanelProps {
  data: ICFCategory | null;
  category: string;
  onToggle: (intervention: Intervention) => void;
  selectedInterventions: Intervention[];
  maxSelection: number;
  submitted: boolean;
}

export const DetailPanel = ({
  data,
  category,
  onToggle,
  selectedInterventions = [],
  maxSelection = 5,
  submitted = false,
}: DetailPanelProps) => {
  if (!data) return null;

  const getCategoryBg = () => {
    if (category === "environmental" || category === "personal")
      return "bg-green-100 text-green-700";
    if (category === "healthCondition") return "bg-red-100 text-red-700";
    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg mr-3 ${getCategoryBg()}`}>
          <BookOpen className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">{data.title}</h3>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Clinical Findings
        </h4>
        <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
          {data.content}
        </p>
      </div>

      {/* Available Interventions section hidden per request
      {data.interventions && data.interventions.length > 0 && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Available Interventions
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {data.interventions.map((intervention, idx) => {
              const isSelected = selectedInterventions.some(
                (i) => (intervention.id && i.id === intervention.id) || i.text === intervention.text
              );
              const isMaxed =
                selectedInterventions.length >= maxSelection && !isSelected;

              return (
                <button
                  key={idx}
                  onClick={() => onToggle(intervention)}
                  disabled={submitted || isMaxed}
                  className={`
                    flex items-start p-3 rounded-lg border text-left transition-all duration-200
                    ${isSelected
                      ? "bg-blue-50 border-blue-500 ring-1 ring-blue-500 shadow-sm"
                      : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-md"
                    }
                    ${submitted || isMaxed
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                    }
                  `}
                >
                  <div
                    className={`mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border ${isSelected
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "bg-white border-slate-300 text-slate-300"
                      }`}
                  >
                    {isSelected ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <Plus className="w-3 h-3" />
                    )}
                  </div>
                  <div>
                    <div
                      className={`text-sm font-bold mb-0.5 ${isSelected ? "text-blue-900" : "text-slate-800"
                        }`}
                    >
                      {intervention.text}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      {intervention.prevention} • +{intervention.impact} Impact
                    </div>
                    {intervention.rationale && (
                      <div className="text-[10px] text-slate-400 mt-1 italic">
                        "{intervention.rationale}"
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
      */}
    </div>
  );
};
