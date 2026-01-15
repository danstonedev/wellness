import {
  AlertTriangle,
  Home,
  UtensilsCrossed,
  Car,
  DollarSign,
  Shield,
  Users,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Globe,
  User,
} from "lucide-react";
import type { SDOHFactor, HRSNIndicator } from "../../types";

interface SDOHPanelProps {
  sdohFactors?: SDOHFactor[];
  hrsnIndicators?: HRSNIndicator[];
  embedded?: boolean;
}

type SDOHCategory =
  | "Housing"
  | "Food"
  | "Transportation"
  | "Financial"
  | "Safety"
  | "Social"
  | "Education"
  | "Employment"
  | "Healthcare Access";

const categoryIcons: Record<SDOHCategory, React.ReactNode> = {
  Housing: <Home className="w-4 h-4" />,
  Food: <UtensilsCrossed className="w-4 h-4" />,
  Transportation: <Car className="w-4 h-4" />,
  Financial: <DollarSign className="w-4 h-4" />,
  Safety: <Shield className="w-4 h-4" />,
  Social: <Users className="w-4 h-4" />,
  Education: <GraduationCap className="w-4 h-4" />,
  Employment: <Briefcase className="w-4 h-4" />,
  "Healthcare Access": <HeartPulse className="w-4 h-4" />,
};

const severityColors: Record<HRSNIndicator["severity"], string> = {
  High: "bg-red-100 text-red-800 border-red-200",
  Moderate: "bg-amber-100 text-amber-800 border-amber-200",
  Low: "bg-slate-100 text-slate-700 border-slate-200",
};

const severityDots: Record<HRSNIndicator["severity"], string> = {
  High: "bg-red-500",
  Moderate: "bg-amber-500",
  Low: "bg-slate-400",
};

export const SDOHPanel = ({
  sdohFactors = [],
  hrsnIndicators = [],
  embedded = false,
}: SDOHPanelProps) => {
  const containerClasses = embedded
    ? "mt-8 pt-6 border-t border-slate-200"
    : "bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6";

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          Social Context & Health-Related Social Needs
        </h3>
      </div>

      {/* Two Column Layout: SDOH Factors vs HRSN Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SDOH Factors (Upstream/Systemic) */}
        {sdohFactors.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold text-sm text-slate-700">
                SDOH Context{" "}
                <span className="font-normal text-slate-500">
                  (Systemic Factors)
                </span>
              </h4>
            </div>
            <p className="text-xs text-slate-500 mb-3 italic">
              Upstream conditions affecting this population — consider for
              population health strategies
            </p>
            <div className="space-y-2">
              {sdohFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-800"
                >
                  <div className="shrink-0 mt-0.5 text-blue-600">
                    {categoryIcons[factor.category as SDOHCategory] || (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-xs">
                      {factor.category}
                    </span>
                    <p className="text-xs leading-relaxed opacity-90 mt-0.5">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HRSN Indicators (Individual Patient Needs) */}
        {hrsnIndicators.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <User className="w-4 h-4 text-amber-600" />
              <h4 className="font-semibold text-sm text-slate-700">
                HRSN Screening{" "}
                <span className="font-normal text-slate-500">
                  (Patient's Unmet Needs)
                </span>
              </h4>
            </div>
            <div className="flex items-center gap-3 text-xs mb-3">
              <span className="flex items-center gap-1">
                <span
                  className={`w-2 h-2 rounded-full ${severityDots.High}`}
                ></span>{" "}
                High
              </span>
              <span className="flex items-center gap-1">
                <span
                  className={`w-2 h-2 rounded-full ${severityDots.Moderate}`}
                ></span>{" "}
                Moderate
              </span>
              <span className="flex items-center gap-1">
                <span
                  className={`w-2 h-2 rounded-full ${severityDots.Low}`}
                ></span>{" "}
                Low
              </span>
            </div>
            <div className="space-y-2">
              {hrsnIndicators.map((indicator, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 p-3 rounded-lg border ${severityColors[indicator.severity]
                    }`}
                >
                  <div className="shrink-0 mt-0.5">
                    {categoryIcons[indicator.category as SDOHCategory] || (
                      <AlertTriangle className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-semibold text-xs">
                        {indicator.category}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${severityDots[indicator.severity]
                          }`}
                      ></span>
                    </div>
                    <p className="text-xs leading-relaxed opacity-90">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
