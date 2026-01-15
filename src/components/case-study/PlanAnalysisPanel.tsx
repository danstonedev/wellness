import { Shield, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import type { Intervention } from '../../types';

interface PlanAnalysisPanelProps {
    interventions: Intervention[];
}

export const PlanAnalysisPanel = ({ interventions }: PlanAnalysisPanelProps) => {
    // --- 1. Prevention Pyramid Logic ---
    const preventionCounts = {
        Primary: interventions.filter(i => i.prevention === 'Primary').length,
        Secondary: interventions.filter(i => i.prevention === 'Secondary').length,
        Tertiary: interventions.filter(i => i.prevention === 'Tertiary').length
    };

    const total = interventions.length || 1; // Avoid divide by zero

    // --- 2. Upstream (SDOH) vs Downstream (HRSN) Logic ---
    // Heuristic: Environmental/Financial/Social = Upstream/SDOH focus
    // Physical/Emotional/Occupational/Intellectual = Downstream/Individual Needs
    const upstreamCount = interventions.filter(i =>
        ['Environmental', 'Financial', 'Social'].includes(i.domain)
    ).length;

    const downstreamCount = interventions.filter(i =>
        ['Physical', 'Emotional', 'Occupational', 'Intellectual', 'Spiritual'].includes(i.domain)
    ).length;

    const hasUpstream = upstreamCount > 0;
    const hasDownstream = downstreamCount > 0;

    return (
        <div className="grid md:grid-cols-2 gap-4 mb-6">

            {/* --- The Prevention Pyramid --- */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center mb-3">
                    <Shield className="w-4 h-4 text-indigo-500 mr-2" />
                    <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Prevention Balance</h4>
                </div>

                <div className="space-y-2">
                    {/* Tertiary (Top) */}
                    <div className="relative">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-500 font-medium">Tertiary (Rehab)</span>
                            <span className="text-slate-700 font-bold">{preventionCounts.Tertiary}</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-400 transition-all duration-500"
                                style={{ width: `${(preventionCounts.Tertiary / total) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Secondary (Middle) */}
                    <div className="relative">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-500 font-medium">Secondary (Risk Red.)</span>
                            <span className="text-slate-700 font-bold">{preventionCounts.Secondary}</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-purple-400 transition-all duration-500"
                                style={{ width: `${(preventionCounts.Secondary / total) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Primary (Base) */}
                    <div className="relative">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-500 font-medium">Primary (Prevention)</span>
                            <span className="text-slate-700 font-bold">{preventionCounts.Primary}</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-emerald-400 transition-all duration-500"
                                style={{ width: `${(preventionCounts.Primary / total) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-3 text-xs bg-white p-2 rounded border border-slate-100 italic text-slate-500">
                    {preventionCounts.Primary === 0 && preventionCounts.Tertiary > 0
                        ? "Tip: Your plan treats the issue (Tertiary). Consider adding a Primary prevention goal to stop recurrence."
                        : preventionCounts.Primary > 0 && preventionCounts.Tertiary > 0
                            ? "Great job! You have a mix of treatment and prevention."
                            : "Select interventions to see your balance."}
                </div>
            </div>

            {/* --- Upstream vs Downstream Flow --- */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center mb-3">
                    <TrendingUp className="w-4 h-4 text-emerald-600 mr-2" />
                    <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide">SDOH vs. HRSN</h4>
                </div>

                <div className="flex items-center justify-between gap-2 h-20">
                    {/* Upstream Bucket */}
                    <div className={`flex-1 flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${hasUpstream ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-100 border-dashed border-slate-300'
                        }`}>
                        <div className="text-xs font-bold text-slate-600 mb-1">UPSTREAM</div>
                        <div className="text-[10px] text-slate-400 text-center leading-tight mb-1">SDOH (Environment)</div>
                        <div className={`text-lg font-bold ${hasUpstream ? 'text-indigo-600' : 'text-slate-300'}`}>
                            {upstreamCount}
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-slate-300">→</div>

                    {/* Downstream Bucket */}
                    <div className={`flex-1 flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${hasDownstream ? 'bg-orange-50 border-orange-200' : 'bg-slate-100 border-dashed border-slate-300'
                        }`}>
                        <div className="text-xs font-bold text-slate-600 mb-1">DOWNSTREAM</div>
                        <div className="text-[10px] text-slate-400 text-center leading-tight mb-1">HRSN (Needs)</div>
                        <div className={`text-lg font-bold ${hasDownstream ? 'text-orange-600' : 'text-slate-300'}`}>
                            {downstreamCount}
                        </div>
                    </div>
                </div>

                <div className="mt-3 flex gap-2">
                    {hasDownstream && !hasUpstream ? (
                        <div className="flex items-start text-xs text-amber-600 bg-amber-50 p-2 rounded w-full">
                            <AlertCircle className="w-3 h-3 mr-1 mt-0.5 shrink-0" />
                            <span>You are treating the <strong>need</strong>, but missing the <strong>root cause</strong> (SDOH). Check Environmental factors.</span>
                        </div>
                    ) : hasUpstream && hasDownstream ? (
                        <div className="flex items-center text-xs text-emerald-700 bg-emerald-50 p-2 rounded w-full">
                            <CheckCircle2 className="w-3 h-3 mr-1 shrink-0" />
                            <span>Excellent! You are addressing both root causes and immediate needs.</span>
                        </div>
                    ) : (
                        <div className="text-xs text-slate-400 italic text-center w-full py-1">
                            Add goals to verify holistic care.
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};
