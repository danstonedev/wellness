import { useState } from 'react';
import { ClipboardList, Plus, X } from 'lucide-react';
import { wellnessDomains } from '../../data/wellnessDomains';
import { preventionLevels } from '../../data/preventionLevels';
import type { Intervention, WellnessDomainName } from '../../types';

interface WellnessBuilderProps {
    selectedInterventions: Intervention[];
    onToggle: (intervention: Intervention) => void;
    onAddCustom: (goal: Intervention) => void;
    onSubmit: () => void;
    submitted: boolean;
    maxSelection: number;
}

export const WellnessBuilder = ({
    selectedInterventions,
    onToggle,
    onAddCustom,
    onSubmit,
    submitted,
    maxSelection
}: WellnessBuilderProps) => {
    const [customGoal, setCustomGoal] = useState('');
    const [customGoalDomain, setCustomGoalDomain] = useState<WellnessDomainName>('Physical');
    const [isAddingCustom, setIsAddingCustom] = useState(false);

    const handleAddCustom = () => {
        if (customGoal.trim()) {
            onAddCustom({
                text: customGoal,
                domain: customGoalDomain,
                isCustom: true,
                impact: 2,
                prevention: 'Tertiary',
                rationale: 'Custom Goal: Encourages patient autonomy.'
            });
            setCustomGoal('');
            setIsAddingCustom(false);
        }
    };

    return (
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold flex items-center">
                        <ClipboardList className="w-6 h-6 mr-2 text-blue-400" />
                        Build Plan (Max {maxSelection})
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                        Select interventions above by clicking ICF categories, or add custom goals here.
                    </p>
                </div>
                <div className="text-right">
                    <div className={`text-2xl font-bold ${selectedInterventions.length === maxSelection ? 'text-amber-400' : 'text-white'}`}>
                        {selectedInterventions.length} / {maxSelection}
                    </div>
                    <div className="text-xs text-slate-400 uppercase">Selected</div>
                </div>
            </div>

            <div className="p-6">
                <h4 className="font-bold text-slate-800 mb-4">Current Plan Summary</h4>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {selectedInterventions.length === 0 && (
                        <div className="col-span-2 text-center py-8 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-slate-400 text-sm italic">
                            Your plan is empty. Explore the ICF domains above and click interventions to add them.
                        </div>
                    )}

                    {selectedInterventions.map((item, idx) => {
                        const domainConfig = wellnessDomains[item.domain];
                        const prevConfig = preventionLevels[item.prevention];

                        return (
                            <div key={idx} className="bg-white p-3 rounded border border-slate-200 shadow-sm flex items-start animate-in slide-in-from-left-2 group">
                                <div className={`w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0 ${domainConfig.barColor}`} />
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-slate-800 truncate">{item.text}</div>
                                    <div className="text-[10px] text-slate-500 uppercase flex items-center">
                                        {item.domain}
                                        {item.prevention && (
                                            <span className={`ml-2 px-1 rounded-sm border ${prevConfig?.color || 'bg-slate-100'}`}>
                                                {item.prevention === 'Primary' ? '1°' : item.prevention === 'Secondary' ? '2°' : '3°'}
                                            </span>
                                        )}
                                        {item.isCustom && <span className="ml-2 bg-blue-100 text-blue-600 px-1 rounded-sm">Custom</span>}
                                    </div>
                                </div>
                                {!submitted && (
                                    <button onClick={() => onToggle(item)} className="ml-2 text-slate-300 hover:text-red-500 transition-colors">
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        );
                    })}

                    {/* Custom Goal Card / Button */}
                    {!submitted && selectedInterventions.length < maxSelection && (
                        <div className="border-2 border-dashed border-slate-200 rounded-lg p-3 flex items-center justify-center min-h-[70px]">
                            {!isAddingCustom ? (
                                <button
                                    onClick={() => setIsAddingCustom(true)}
                                    className="text-slate-500 hover:text-blue-600 text-sm font-medium flex items-center transition"
                                >
                                    <Plus className="w-4 h-4 mr-2" /> Add Custom Goal
                                </button>
                            ) : (
                                <div className="w-full">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-slate-700">New Custom Goal</span>
                                        <button onClick={() => setIsAddingCustom(false)}><X className="w-3 h-3 text-slate-400" /></button>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Goal description..."
                                        className="w-full text-xs p-2 border rounded mb-2"
                                        value={customGoal}
                                        onChange={(e) => setCustomGoal(e.target.value)}
                                    />
                                    <div className="flex gap-2">
                                        <select
                                            className="text-xs p-1 border rounded flex-1"
                                            value={customGoalDomain}
                                            onChange={(e) => setCustomGoalDomain(e.target.value as WellnessDomainName)}
                                        >
                                            {Object.keys(wellnessDomains).map(d => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                        <button
                                            onClick={handleAddCustom}
                                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {!submitted && (
                    <button
                        onClick={onSubmit}
                        disabled={selectedInterventions.length === 0}
                        className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                        Submit Plan & See Results
                    </button>
                )}
            </div>
        </div>
    );
};
