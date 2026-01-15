import { Users, ArrowRight } from 'lucide-react';
import { wellnessDomains } from '../data/wellnessDomains';
import { populations } from '../data/populations';
import type { Population } from '../types';

interface LandingProps {
    onSelectPopulation: (pop: Population) => void;
}

export const Landing = ({ onSelectPopulation }: LandingProps) => (
    <div className="max-w-6xl mx-auto p-6 animate-in fade-in duration-500">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white mb-10 shadow-xl">
            <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">Wellness in Special Populations</h2>
                <p className="text-blue-100 text-lg mb-6">
                    Bridge the gap between the <strong>ICF Model</strong>, <strong>8 Dimensions of Wellness</strong>, and <strong>Levels of Prevention</strong>.
                    Analyze the patient's UMatter score, click into ICF domains to select interventions, and simulate outcomes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.keys(wellnessDomains).map(domain => (
                        <span key={domain} className="text-[10px] uppercase font-bold tracking-wider bg-white/10 px-2 py-1 rounded text-white/80">
                            {domain}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
            <Users className="w-5 h-5 mr-2" /> Select a Case Study
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {populations.map((pop) => (
                <div
                    key={pop.id}
                    onClick={() => onSelectPopulation(pop)}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer relative overflow-hidden"
                >
                    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                        <div className="w-24 h-24">{pop.icon}</div>
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pop.color}`}>
                        {pop.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{pop.title}</h4>
                    <p className="text-slate-600 text-xs mb-4 leading-relaxed">{pop.description}</p>
                    <div className="flex items-center text-blue-600 font-medium text-xs group-hover:translate-x-1 transition-transform mt-auto">
                        Begin Assessment <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                </div>
            ))}
        </div>
    </div>
);
