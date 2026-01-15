import { BarChart2 } from 'lucide-react';
import { wellnessDomains } from '../../data/wellnessDomains';
import type { WellnessDomainName } from '../../types';

interface UMatterScorecardProps {
    scores: Record<WellnessDomainName, number>;
    name: string;
    newScores?: Record<WellnessDomainName, number> | null;
}

export const UMatterScorecard = ({ scores, name, newScores = null }: UMatterScorecardProps) => (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 mb-8 animate-in slide-in-from-bottom-2">
        <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-800 flex items-center">
                <BarChart2 className="w-5 h-5 mr-2 text-indigo-600" />
                UMatter Wellness Profile: {name}
            </h3>
            <span className={`text-xs font-medium px-2 py-1 rounded ${newScores ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-50 text-indigo-600'}`}>
                {newScores ? 'Simulated Post-Intervention' : 'Baseline Assessment'}
            </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {(Object.entries(scores) as [WellnessDomainName, number][]).map(([domain, score]) => {
                const config = wellnessDomains[domain];
                const isLow = score <= 4;
                const newScore = newScores ? newScores[domain] : null;
                const gain = newScore ? newScore - score : 0;

                return (
                    <div key={domain} className="flex flex-col items-center group">
                        <div className="relative w-full h-24 bg-slate-100 rounded-lg overflow-hidden flex items-end justify-center mb-2">
                            {/* Baseline Bar */}
                            <div
                                className={`w-full transition-all duration-700 z-10 ${newScore ? 'opacity-40' : 'opacity-90'} ${isLow ? 'bg-slate-400' : config.barColor}`}
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
    </div>
);
