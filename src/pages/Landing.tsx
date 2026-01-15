import { useState } from "react";
import { Users, ArrowRight, Target, ChevronDown, ChevronUp } from "lucide-react";
// import { wellnessDomains } from '../data/wellnessDomains';
import { populations } from "../data/populations";
import type { Population } from "../types";
import wellnessImage from "../assets/8_Wellness.png";

interface LandingProps {
  onSelectPopulation: (pop: Population) => void;
}

export const Landing = ({ onSelectPopulation }: LandingProps) => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 animate-in fade-in duration-500">
      <div className="mb-10 shadow-xl rounded-3xl overflow-hidden">
        <img
          src={wellnessImage}
          alt="8 Dimensions of Wellness"
          className="w-full h-auto object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
        <Users className="w-5 h-5 mr-2" /> Select a Case Study
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {populations.map((pop) => (
          <div
            key={pop.id}
            className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}
            >
              <div className="w-24 h-24">{pop.icon}</div>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pop.color}`}
              >
                {pop.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">{pop.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {pop.description}
                </p>
              </div>
            </div>

            {/* Learning Objectives - Collapsible */}
            <div className="bg-purple-50 rounded-xl border border-purple-100 mb-4 overflow-hidden">
              <button
                onClick={() => toggleCard(pop.id)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-purple-100 transition-colors"
              >
                <span className="text-xs font-semibold text-purple-800 flex items-center">
                  <Target className="w-3 h-3 mr-1" /> Learning Objectives
                </span>
                {expandedCards[pop.id] ? (
                  <ChevronUp className="w-4 h-4 text-purple-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-purple-600" />
                )}
              </button>
              {expandedCards[pop.id] && (
                <ul className="px-4 pb-3 space-y-1">
                  {pop.learningObjectives.map((obj, idx) => (
                    <li key={idx} className="text-xs text-purple-700 flex items-start">
                      <span className="text-purple-400 mr-2 shrink-0">•</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              onClick={() => onSelectPopulation(pop)}
              className="w-full flex items-center justify-center text-blue-600 font-medium text-sm py-2 px-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Begin Assessment <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
