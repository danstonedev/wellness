import { BookOpen, CheckCircle } from 'lucide-react';
import { wellnessDomains } from '../../data/wellnessDomains';
import { preventionLevels } from '../../data/preventionLevels';
import type { ICFCategory, Intervention } from '../../types';

interface DetailPanelProps {
    data: ICFCategory | null;
    category: string;
    onToggle: (intervention: Intervention) => void;
    selectedInterventions: Intervention[];
    maxSelection: number;
    submitted: boolean;
}

export const DetailPanel = ({ data, category, onToggle, selectedInterventions, maxSelection, submitted }: DetailPanelProps) => {
    if (!data) return null;

    const getCategoryBg = () => {
        if (category === 'environmental' || category === 'personal') return 'bg-green-100 text-green-700';
        if (category === 'healthCondition') return 'bg-red-100 text-red-700';
        return 'bg-blue-100 text-blue-700';
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-3 ${getCategoryBg()}`}>
                    <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{data.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Clinical Findings</h4>
                    <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                        {data.content}
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2 flex items-center">
                        <span className="w-4 h-4 mr-1">🎯</span> Possible Interventions
                    </h4>
                    <p className="text-xs text-slate-400 mb-3">
                        Select interventions. Note the prevention levels (1°, 2°, 3°).
                    </p>
                    <ul className="space-y-2">
                        {(data.interventions || []).map((item, idx) => {
                            const isSelected = selectedInterventions.some(i => i.text === item.text);
                            const isAtLimit = selectedInterventions.length >= maxSelection;
                            const isDisabled = submitted || (!isSelected && isAtLimit);
                            const prevConfig = preventionLevels[item.prevention] || preventionLevels.Tertiary;
                            const domainConfig = wellnessDomains[item.domain];

                            return (
                                <li
                                    key={idx}
                                    onClick={() => !isDisabled && onToggle(item)}
                                    className={`flex items-center p-3 rounded-lg border shadow-sm transition-all ${isSelected
                                        ? 'bg-blue-600 border-blue-600 cursor-pointer transform scale-[1.02]'
                                        : isDisabled
                                            ? 'bg-slate-50 border-slate-100 cursor-not-allowed opacity-50'
                                            : 'bg-white border-slate-200 hover:border-blue-400 cursor-pointer hover:shadow-md'
                                        }`}
                                >
                                    <div className={`p-1.5 rounded-full mr-3 ${isSelected ? 'bg-white/20 text-white' : `${domainConfig.bg} ${domainConfig.color}`}`}>
                                        {domainConfig.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <span className={`text-sm font-medium truncate pr-2 ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                                                {item.text}
                                            </span>
                                            <span className={`text-[10px] px-1.5 rounded font-bold whitespace-nowrap ${isSelected ? 'bg-white/20 text-white' : prevConfig.color}`}>
                                                {item.prevention === 'Primary' ? '1°' : item.prevention === 'Secondary' ? '2°' : '3°'}
                                            </span>
                                        </div>
                                        <span className={`text-[10px] uppercase tracking-wider ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                                            {item.domain} Wellness
                                        </span>
                                    </div>
                                    {isSelected && <CheckCircle className="w-5 h-5 text-white ml-2 flex-shrink-0" />}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
