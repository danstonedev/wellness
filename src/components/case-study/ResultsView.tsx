import { Trophy, ShieldAlert, ShieldCheck, FileText, AlertTriangle, CheckCircle, Edit3, RefreshCw } from 'lucide-react';
import { preventionLevels } from '../../data/preventionLevels';
import type { Intervention, WellnessDomainName } from '../../types';

interface ResultsViewProps {
    baseline: Record<WellnessDomainName, number>;
    studentResults: Record<WellnessDomainName, number>;
    maxResults: Record<WellnessDomainName, number>;
    selectedInterventions: Intervention[];
    onReset: () => void;
    onModify: () => void;
}

export const ResultsView = ({ baseline, studentResults, maxResults, selectedInterventions, onReset, onModify }: ResultsViewProps) => {
    const studentTotal = Object.values(studentResults).reduce((a, b) => a + b, 0);
    const baselineTotal = Object.values(baseline).reduce((a, b) => a + b, 0);
    const maxTotal = Object.values(maxResults).reduce((a, b) => a + b, 0);

    const studentGain = studentTotal - baselineTotal;
    const maxGain = maxTotal - baselineTotal;
    const performancePct = Math.round((studentGain / maxGain) * 100) || 0;

    // Identify choice types
    const dangerousChoices = selectedInterventions.filter(i => (i.impact || 2) < 0);
    const ineffectiveChoices = selectedInterventions.filter(i => (i.impact || 0) === 0 && !i.isCustom);
    const goodChoices = selectedInterventions.filter(i => (i.impact || 0) > 0);

    // Prevention Spectrum Analysis
    const prevCounts = { Primary: 0, Secondary: 0, Tertiary: 0 };
    selectedInterventions.forEach(i => {
        if (i.prevention) prevCounts[i.prevention]++;
    });

    let feedback = "";
    let feedbackColor = "";

    if (dangerousChoices.length > 0) {
        feedback = "Critical Safety Issues Identified";
        feedbackColor = "bg-red-700";
    } else if (performancePct >= 90) {
        feedback = "Excellent Clinical Reasoning";
        feedbackColor = "bg-emerald-700";
    } else if (performancePct >= 70) {
        feedback = "Good Plan with Minor Gaps";
        feedbackColor = "bg-blue-700";
    } else {
        feedback = "Plan Needs Revision";
        feedbackColor = "bg-amber-600";
    }

    return (
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in zoom-in-95">
            <div className={`p-6 text-center text-white ${feedbackColor}`}>
                <div className="flex justify-center mb-2">
                    {dangerousChoices.length > 0 ? <ShieldAlert className="w-12 h-12" /> : <Trophy className="w-12 h-12 text-yellow-300" />}
                </div>
                <h3 className="text-2xl font-bold">{feedback}</h3>
                <p className="text-white/80">Simulated Outcome: {performancePct}% of Potential Wellness Gain</p>
            </div>

            <div className="p-8">
                {/* Big Stats */}
                <div className="grid grid-cols-3 gap-4 text-center mb-8">
                    <div className="p-4 bg-slate-50 rounded-xl">
                        <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Baseline</div>
                        <div className="text-3xl font-bold text-slate-700">{baselineTotal}</div>
                        <div className="text-xs text-slate-400">Total Wellness Points</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-100">
                        <div className="text-sm text-blue-600 uppercase font-bold tracking-wider">Your Plan</div>
                        <div className={`text-3xl font-bold ${dangerousChoices.length > 0 ? 'text-red-600' : 'text-blue-700'}`}>
                            {studentTotal}
                        </div>
                        <div className="text-xs text-blue-500">Total Wellness Points</div>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <div className="text-sm text-emerald-600 uppercase font-bold tracking-wider">Optimal Max</div>
                        <div className="text-3xl font-bold text-emerald-700">{maxTotal}</div>
                        <div className="text-xs text-emerald-500">Possible Points</div>
                    </div>
                </div>

                {/* Prevention Spectrum Breakdown */}
                <div className="mb-8 border rounded-xl p-4 bg-slate-50">
                    <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center">
                        <ShieldCheck className="w-4 h-4 mr-2" /> Plan Composition (Prevention Levels)
                    </h4>
                    <div className="flex h-4 w-full rounded-full overflow-hidden mb-2">
                        {prevCounts.Primary > 0 && <div className="bg-teal-500" style={{ width: `${(prevCounts.Primary / selectedInterventions.length) * 100}%` }} />}
                        {prevCounts.Secondary > 0 && <div className="bg-purple-500" style={{ width: `${(prevCounts.Secondary / selectedInterventions.length) * 100}%` }} />}
                        {prevCounts.Tertiary > 0 && <div className="bg-blue-500" style={{ width: `${(prevCounts.Tertiary / selectedInterventions.length) * 100}%` }} />}
                    </div>
                    <div className="flex text-xs space-x-4 justify-center">
                        <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-teal-500 mr-1" /> 1°: {prevCounts.Primary}</span>
                        <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-purple-500 mr-1" /> 2°: {prevCounts.Secondary}</span>
                        <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-500 mr-1" /> 3°: {prevCounts.Tertiary}</span>
                    </div>
                </div>

                {/* Detailed Item Analysis */}
                <h4 className="flex items-center text-slate-700 font-bold mb-4 border-b pb-2">
                    <FileText className="w-5 h-5 mr-2" /> Clinical Analysis of Your Selection
                </h4>

                <div className="space-y-4 mb-8">
                    {/* Dangerous */}
                    {dangerousChoices.map((choice, idx) => (
                        <div key={`d-${idx}`} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                            <div className="flex justify-between items-start">
                                <div className="font-bold text-red-700 flex items-center">
                                    <AlertTriangle className="w-4 h-4 mr-2" /> {choice.text}
                                </div>
                                <div className="text-xs font-bold bg-red-200 text-red-800 px-2 py-1 rounded">{choice.impact} Pts</div>
                            </div>
                            <p className="text-sm text-red-800 mt-1 italic">"{choice.rationale}"</p>
                        </div>
                    ))}

                    {/* Ineffective */}
                    {ineffectiveChoices.map((choice, idx) => (
                        <div key={`i-${idx}`} className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-lg">
                            <div className="flex justify-between items-start">
                                <div className="font-bold text-slate-700">{choice.text}</div>
                                <div className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded">0 Pts</div>
                            </div>
                            <p className="text-sm text-slate-600 mt-1 italic">"{choice.rationale}"</p>
                        </div>
                    ))}

                    {/* Good */}
                    {goodChoices.map((choice, idx) => (
                        <div key={`g-${idx}`} className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                            <div className="flex justify-between items-start">
                                <div className="font-bold text-emerald-800 flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" /> {choice.text}
                                    {choice.prevention && (
                                        <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded border ${preventionLevels[choice.prevention].color}`}>
                                            {choice.prevention === 'Primary' ? '1°' : choice.prevention === 'Secondary' ? '2°' : '3°'}
                                        </span>
                                    )}
                                </div>
                                <div className="text-xs font-bold bg-emerald-200 text-emerald-800 px-2 py-1 rounded">+{choice.impact} Pts</div>
                            </div>
                            <p className="text-sm text-emerald-700 mt-1 italic">"{choice.rationale || 'Good clinical choice.'}"</p>
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
