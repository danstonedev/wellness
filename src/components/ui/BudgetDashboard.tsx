import { Clock, DollarSign, Zap, CalendarDays, Trophy, AlertTriangle, TrendingUp } from "lucide-react";
import type { PopulationBudget, ResourceCost } from "../../types";

interface BudgetDashboardProps {
    budget: PopulationBudget;
    spent: ResourceCost;
    wellnessGain?: number; // Total wellness points gained
}

export const BudgetDashboard = ({ budget, spent, wellnessGain = 0 }: BudgetDashboardProps) => {
    // Calculate percentages
    const visitsPercent = ((spent.visits || 0) / budget.visits) * 100;
    const timePercent = ((spent.clinicalTime || 0) / budget.clinicalTime) * 100;
    const moneyPercent = ((spent.money || 0) / budget.money) * 100;
    const effortPercent = ((spent.effort || 0) / budget.effort) * 100;

    // Calculate efficiency score (wellness gain per resources used)
    const totalSpentPercent = (visitsPercent + timePercent + moneyPercent + effortPercent) / 4;
    const efficiency = totalSpentPercent > 0 ? Math.round((wellnessGain / totalSpentPercent) * 10) : 0;

    const getBarColor = (percent: number) => {
        if (percent >= 100) return "bg-red-500";
        if (percent >= 80) return "bg-amber-500";
        if (percent >= 50) return "bg-blue-500";
        return "bg-emerald-500";
    };

    const getTextColor = (percent: number) => {
        if (percent >= 100) return "text-red-600";
        if (percent >= 80) return "text-amber-600";
        return "text-slate-700";
    };

    // Gamification: Status message based on budget usage
    const getStatusMessage = () => {
        const anyOverBudget = [visitsPercent, timePercent, moneyPercent, effortPercent].some(p => p >= 100);
        const avgPercent = totalSpentPercent;

        if (anyOverBudget) {
            return { text: "⚠️ Budget Exceeded!", color: "text-red-600", bg: "bg-red-100" };
        }
        if (avgPercent >= 80) {
            return { text: "🎯 Budget Nearly Full", color: "text-amber-600", bg: "bg-amber-100" };
        }
        if (avgPercent >= 50) {
            return { text: "📊 Good Resource Usage", color: "text-blue-600", bg: "bg-blue-100" };
        }
        if (avgPercent > 0) {
            return { text: "💰 Under Budget", color: "text-emerald-600", bg: "bg-emerald-100" };
        }
        return { text: "🎮 Start Building Your Plan", color: "text-slate-500", bg: "bg-slate-100" };
    };

    const status = getStatusMessage();
    const anyOverBudget = [visitsPercent, timePercent, moneyPercent, effortPercent].some(p => p >= 100);

    const resources = [
        {
            label: "Visits",
            icon: CalendarDays,
            spent: spent.visits || 0,
            budget: budget.visits,
            percent: visitsPercent,
            unit: "",
            category: "therapist",
        },
        {
            label: "Time",
            icon: Clock,
            spent: spent.clinicalTime || 0,
            budget: budget.clinicalTime,
            percent: timePercent,
            unit: "m",
            category: "therapist",
        },
        {
            label: "Cost",
            icon: DollarSign,
            spent: spent.money || 0,
            budget: budget.money,
            percent: moneyPercent,
            prefix: "$",
            category: "patient",
        },
        {
            label: "Effort",
            icon: Zap,
            spent: spent.effort || 0,
            budget: budget.effort,
            percent: effortPercent,
            unit: "",
            category: "patient",
        },
    ];

    return (
        <div className={`rounded-xl border-2 p-4 mb-6 transition-all duration-300 ${anyOverBudget
                ? "bg-red-50 border-red-300 shadow-lg shadow-red-100"
                : "bg-gradient-to-r from-slate-50 to-blue-50 border-slate-200"
            }`}>
            {/* Header with Status Badge */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-800">Resource Budget</h4>
                        <p className="text-xs text-slate-500">Maximize wellness, minimize cost</p>
                    </div>
                </div>

                <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${status.bg} ${status.color}`}>
                    {status.text}
                </div>
            </div>

            {/* Resource Bars - Split by category */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Therapist Resources */}
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                        🏥 Therapist
                    </div>
                    <div className="space-y-3">
                        {resources.filter(r => r.category === "therapist").map((resource) => {
                            const Icon = resource.icon;
                            return (
                                <div key={resource.label}>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-1.5">
                                            <Icon className={`w-3.5 h-3.5 ${getTextColor(resource.percent)}`} />
                                            <span className="text-xs font-medium text-slate-600">{resource.label}</span>
                                        </div>
                                        <span className={`text-xs font-bold ${getTextColor(resource.percent)}`}>
                                            {resource.prefix || ""}{resource.spent}{resource.unit || ""}/{resource.budget}
                                        </span>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-500 ease-out ${getBarColor(resource.percent)}`}
                                            style={{ width: `${Math.min(resource.percent, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Patient Resources */}
                <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                        👤 Patient
                    </div>
                    <div className="space-y-3">
                        {resources.filter(r => r.category === "patient").map((resource) => {
                            const Icon = resource.icon;
                            return (
                                <div key={resource.label}>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="flex items-center gap-1.5">
                                            <Icon className={`w-3.5 h-3.5 ${getTextColor(resource.percent)}`} />
                                            <span className="text-xs font-medium text-slate-600">{resource.label}</span>
                                        </div>
                                        <span className={`text-xs font-bold ${getTextColor(resource.percent)}`}>
                                            {resource.prefix || ""}{resource.spent}{resource.unit || ""}/{resource.prefix || ""}{resource.budget}
                                        </span>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-500 ease-out ${getBarColor(resource.percent)}`}
                                            style={{ width: `${Math.min(resource.percent, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Efficiency Score (Gamification) */}
            {wellnessGain > 0 && (
                <div className="flex items-center justify-center gap-4 pt-3 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                        <Trophy className={`w-5 h-5 ${efficiency >= 50 ? "text-yellow-500" : "text-slate-400"}`} />
                        <div>
                            <div className="text-xs text-slate-500">Efficiency Score</div>
                            <div className={`text-lg font-bold ${efficiency >= 50 ? "text-emerald-600" :
                                    efficiency >= 25 ? "text-blue-600" : "text-slate-600"
                                }`}>
                                {efficiency} pts
                            </div>
                        </div>
                    </div>
                    <div className="text-xs text-slate-500 max-w-[150px]">
                        Wellness gain per resource spent
                    </div>
                </div>
            )}

            {/* Over-budget Warning */}
            {anyOverBudget && (
                <div className="flex items-center gap-2 mt-3 p-2 bg-red-100 rounded-lg border border-red-200">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-medium text-red-700">
                        Cannot submit plan while over budget. Remove some selections.
                    </span>
                </div>
            )}
        </div>
    );
};
