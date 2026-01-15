import { preventionLevels } from '../../data/preventionLevels';

export const PreventionLegend = () => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Prevention Levels Guide</h4>
        <div className="flex flex-wrap gap-3">
            {Object.entries(preventionLevels).map(([key, config]) => (
                <div key={key} className={`flex items-center px-2 py-1 rounded text-xs border ${config.color}`}>
                    <div className="mr-1.5 opacity-70">{config.icon}</div>
                    <div>
                        <span className="font-bold">{config.label}</span>
                        <span className="hidden sm:inline text-opacity-75 mx-1">-</span>
                        <span className="hidden sm:inline opacity-80">{config.desc}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
