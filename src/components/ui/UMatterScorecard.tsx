import { useState } from 'react';
import { BarChart2, ChevronDown, ChevronUp } from 'lucide-react';
import { wellnessDomains } from '../../data/wellnessDomains';
import { SDOHPanel } from './SDOHPanel';
import type { WellnessDomainName, WellnessQuestion, SDOHFactor, HRSNIndicator, CriticalNeed } from '../../types';

interface WellnessScorecardProps {
    scores: Record<WellnessDomainName, number>;
    name: string;
    newScores?: Record<WellnessDomainName, number> | null;
    wellnessAnswers?: Record<WellnessDomainName, WellnessQuestion[]>;
    // SDOH Integration
    sdohFactors?: SDOHFactor[];
    hrsnIndicators?: HRSNIndicator[];
    criticalNeeds?: CriticalNeed[];
    addressedCriticalNeeds?: string[];
}

const answerLabels: Record<number, string> = {
    1: 'Never',
    2: 'Rarely',
    3: 'Sometimes',
    4: 'Often',
    5: 'Always'
};

// Explicit order: Physical, Emotional, Intellectual, Spiritual, Social, Occupational, Environmental, Financial
const DOMAIN_ORDER: WellnessDomainName[] = [
    'Physical',
    'Emotional',
    'Intellectual',
    'Spiritual',
    'Social',
    'Occupational',
    'Environmental',
    'Financial'
];

export const WellnessScorecard = ({ 
    scores, 
    name, 
    newScores = null, 
    wellnessAnswers,
    sdohFactors,
    hrsnIndicators,
    criticalNeeds = [],
    addressedCriticalNeeds
}: WellnessScorecardProps) => {
    const [expandedDomain, setExpandedDomain] = useState<WellnessDomainName | null>(null);

    const toggleExpand = (domain: WellnessDomainName) => {
        setExpandedDomain(expandedDomain === domain ? null : domain);
    };

    const hasSDOHData = (sdohFactors && sdohFactors.length > 0) || (hrsnIndicators && hrsnIndicators.length > 0);

    return (
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 mb-8 animate-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-800 flex items-center">
                    <BarChart2 className="w-5 h-5 mr-2 text-indigo-600" />
                    Wellness Self-Assessment: {name}
                </h3>
                <span className={`text-xs font-medium px-2 py-1 rounded ${newScores ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-50 text-indigo-600'}`}>
                    {newScores ? 'Simulated Post-Intervention' : 'Baseline Assessment'}
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {DOMAIN_ORDER.map((domain) => {
                    const score = scores[domain] || 0; // Handle potentially missing scores gracefully
                    const config = wellnessDomains[domain];
                    // Removed isLow logic to ensure colors always show per user request
                    const newScore = newScores ? newScores[domain] : null;
                    const gain = newScore ? newScore - score : 0;
                    const hasAnswers = wellnessAnswers && wellnessAnswers[domain]?.length > 0;
                    const isExpanded = expandedDomain === domain;

                    return (
                        <div key={domain} className="flex flex-col items-center group">
                            <div
                                className={`relative w-full h-24 bg-slate-100 rounded-lg overflow-hidden flex items-end justify-center mb-2 transition-all duration-300 ${hasAnswers ? 'cursor-pointer hover:scale-[1.02]' : ''
                                    } ${isExpanded
                                        ? `ring-4 ring-offset-2 scale-105 shadow-lg z-10 ${config.color.replace('text-', 'ring-').replace('500', '200')}`
                                        : 'hover:ring-2 hover:ring-slate-200'
                                    }`}
                                onClick={() => hasAnswers && toggleExpand(domain)}
                            >
                                {/* Active Indicator Triangle */}
                                {isExpanded && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-indigo-600"></div>
                                )}
                                {/* Baseline Bar */}
                                <div
                                    className={`w-full transition-all duration-700 z-10 ${newScore ? 'opacity-40' : 'opacity-90'} ${config.barColor}`}
                                    style={{ height: `${score * 10}%` }}
                                />

                                {/* Gain Bar (if newScores exists) */}
                                {newScore && (
                                    <div
                                        className={`absolute bottom-0 w-full transition-all duration-1000 z-0 ${gain < 0 ? 'bg-red-500' : config.barColor} opacity-90`}
                                        style={{ height: `${newScore * 10}%` }}
                                    />
                                )}

                                <span className={`absolute bottom-1 z-20 font-bold text-xs ${score > 2 ? 'text-white' : 'text-slate-600'}`}>
                                    {newScore !== null ? newScore : score}
                                    {newScore !== null && gain !== 0 && (
                                        <span className={`ml-0.5 text-[10px] ${gain > 0 ? 'text-white/90' : 'text-red-100'}`}>
                                            {gain > 0 ? '+' : ''}{gain}
                                        </span>
                                    )}
                                </span>

                                {/* Expand indicator */}
                                {hasAnswers && (
                                    <div className="absolute top-1 right-1 text-white/70">
                                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col items-center">
                                <div className={`p-1 rounded-full mb-1 ${config.bg} ${config.color}`}>
                                    {config.icon}
                                </div>
                                <span className="text-[10px] uppercase font-bold text-slate-500">{domain}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Expanded Questions Panel */}
            {expandedDomain && wellnessAnswers && wellnessAnswers[expandedDomain] && (
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center justify-between mb-3">
                        <h4 className={`font-semibold flex items-center ${wellnessDomains[expandedDomain].color}`}>
                            <span className={`p-1 rounded-full mr-2 ${wellnessDomains[expandedDomain].bg}`}>
                                {wellnessDomains[expandedDomain].icon}
                            </span>
                            {expandedDomain} Wellness - {name}'s Responses
                        </h4>
                        <button
                            onClick={() => setExpandedDomain(null)}
                            className="text-xs text-slate-500 hover:text-slate-700"
                        >
                            Close
                        </button>
                    </div>
                    <div className="space-y-4">
                        {wellnessAnswers[expandedDomain].map((qa, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                {/* Row 1: Question */}
                                <p className="text-base font-semibold text-slate-800 mb-3">{qa.question}</p>

                                {/* Row 2: Answer & Note */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    {/* Left: Answer Badge & Patient Note */}
                                    <div className="flex items-center flex-1 gap-3">
                                        <span className={`shrink-0 text-sm font-bold px-3 py-1 rounded-md shadow-sm border ${qa.answer <= 2 ? 'bg-red-50 text-red-700 border-red-100' :
                                            qa.answer <= 3 ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                'bg-emerald-50 text-emerald-700 border-emerald-100'
                                            }`}>
                                            {answerLabels[qa.answer]}
                                        </span>

                                        <div className="hidden sm:block w-px h-6 bg-slate-200"></div>

                                        {qa.note ? (
                                            <p className="text-slate-600 italic text-sm">
                                                "{qa.note}"
                                            </p>
                                        ) : (
                                            <span className="text-slate-400 text-sm italic">No comment provided</span>
                                        )}
                                    </div>

                                    {/* Right: Visual Indicator Only */}
                                    <div className="flex gap-1 shrink-0">
                                        {[1, 2, 3, 4, 5].map(n => (
                                            <div
                                                key={n}
                                                className={`w-3 h-6 rounded-sm ${n <= qa.answer ? wellnessDomains[expandedDomain].barColor : 'bg-slate-100 border border-slate-200'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Hint to click */}
            {wellnessAnswers && !expandedDomain && (
                <p className="text-center text-xs text-slate-400 mt-4">
                    Click a wellness bar to see {name}'s detailed responses
                </p>
            )}

            {/* Integrated SDOH Panel */}
            {hasSDOHData && (
                <SDOHPanel
                    sdohFactors={sdohFactors}
                    hrsnIndicators={hrsnIndicators}
                    criticalNeeds={criticalNeeds}
                    addressedCriticalNeeds={addressedCriticalNeeds}
                    embedded={true}
                />
            )}
        </div>
    );
};

// Keep backward compatibility alias
export const UMatterScorecard = WellnessScorecard;
