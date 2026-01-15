import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Population, Intervention, Results } from '../../types';
import { ICFCard } from '../ui/ICFCard';
import { UMatterScorecard } from '../ui/UMatterScorecard';
import { PreventionLegend } from '../ui/PreventionLegend';
import { DetailPanel } from './DetailPanel';
import { WellnessBuilder } from './WellnessBuilder';
import { ResultsView } from './ResultsView';

interface CaseStudyProps {
    population: Population;
    onBack: () => void;
}

type ICFCategoryKey = 'healthCondition' | 'bodyFunctions' | 'activities' | 'participation' | 'environmental' | 'personal';

export const CaseStudy = ({ population, onBack }: CaseStudyProps) => {
    const [activeCategory, setActiveCategory] = useState<ICFCategoryKey | null>(null);
    const [selectedInterventions, setSelectedInterventions] = useState<Intervention[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [results, setResults] = useState<Results | null>(null);

    const MAX_SELECTION = 5;

    const toggleIntervention = (intervention: Intervention) => {
        if (submitted) return;

        const isSelected = selectedInterventions.some(i => i.text === intervention.text);

        if (isSelected) {
            setSelectedInterventions(selectedInterventions.filter(i => i.text !== intervention.text));
        } else {
            if (selectedInterventions.length < MAX_SELECTION) {
                setSelectedInterventions([...selectedInterventions, intervention]);
            }
        }
    };

    const addCustomGoal = (goal: Intervention) => {
        if (selectedInterventions.length < MAX_SELECTION) {
            setSelectedInterventions([...selectedInterventions, goal]);
        }
    };

    const handleSubmit = () => {
        // 1. Calculate Student Result
        const newScores = { ...population.patient.uMatterScores };
        selectedInterventions.forEach(intervention => {
            const impact = intervention.impact || 2;
            const newScore = newScores[intervention.domain] + impact;
            newScores[intervention.domain] = Math.max(1, Math.min(10, newScore)) as number;
        });

        // 2. Calculate Max Possible Result (Greedy Algo - Only picking positive impacts)
        const allInterventions = [
            ...(population.icfData.healthCondition.interventions || []),
            ...(population.icfData.bodyFunctions.interventions || []),
            ...(population.icfData.activities.interventions || []),
            ...(population.icfData.participation.interventions || []),
            ...(population.icfData.environmental.interventions || []),
            ...(population.icfData.personal.interventions || [])
        ];

        const currentMaxScores = { ...population.patient.uMatterScores };
        const availablePool = [...allInterventions];

        for (let i = 0; i < MAX_SELECTION; i++) {
            let bestIntervention: Intervention | null = null;
            let bestGain = -999;
            let bestIndex = -1;

            availablePool.forEach((intervention, idx) => {
                // Only consider positive impacts for the 'Max Possible' score calculation
                if ((intervention.impact || 0) <= 0) return;

                const currentVal = currentMaxScores[intervention.domain];
                const gain = Math.min(10, currentVal + (intervention.impact || 2)) - currentVal;

                if (gain > bestGain) {
                    bestGain = gain;
                    bestIntervention = intervention;
                    bestIndex = idx;
                } else if (gain === bestGain && gain > 0) {
                    if ((intervention.impact || 2) > (bestIntervention?.impact || 2)) {
                        bestIntervention = intervention;
                        bestIndex = idx;
                    }
                }
            });

            if (bestIntervention && bestGain > 0) {
                currentMaxScores[(bestIntervention as Intervention).domain] = Math.min(10, currentMaxScores[(bestIntervention as Intervention).domain] + ((bestIntervention as Intervention).impact || 2));
                availablePool.splice(bestIndex, 1);
            }
        }

        setResults({
            student: newScores,
            max: currentMaxScores
        });
        setSubmitted(true);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    const handleModify = () => {
        setSubmitted(false);
        setResults(null);
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 pb-20">
            {/* Patient Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 animate-in slide-in-from-top-4 duration-500">
                <button
                    onClick={onBack}
                    className="text-slate-500 hover:text-slate-800 text-sm font-medium flex items-center mb-4 md:mb-0"
                >
                    <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Back to Cases
                </button>
                <div className="flex items-center">
                    <div className={`p-3 rounded-full mr-4 ${population.color}`}>
                        {population.icon}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">{population.patient.name}</h2>
                        <p className="text-slate-500">{population.patient.diagnosis} • {population.patient.age} years old</p>
                    </div>
                </div>
                <div className="hidden md:block bg-slate-100 px-4 py-2 rounded-lg text-sm max-w-xs text-slate-600 border border-slate-200">
                    <span className="font-semibold">History: </span>{population.patient.history}
                </div>
            </div>

            <div className="md:hidden bg-slate-50 p-4 rounded-lg text-sm text-slate-600 border border-slate-200 mb-6">
                <span className="font-semibold">History: </span>{population.patient.history}
            </div>

            {/* Show Results OR Scorecard */}
            {submitted && results ? (
                <>
                    <ResultsView
                        baseline={population.patient.uMatterScores}
                        studentResults={results.student}
                        maxResults={results.max}
                        selectedInterventions={selectedInterventions}
                        onReset={onBack}
                        onModify={handleModify}
                    />
                    <div className="mt-8">
                        <UMatterScorecard scores={population.patient.uMatterScores} newScores={results.student} name={population.patient.name} />
                    </div>
                </>
            ) : (
                <UMatterScorecard scores={population.patient.uMatterScores} name={population.patient.name} />
            )}

            {!submitted && (
                <>
                    <p className="text-center text-slate-500 mb-6 italic text-sm">Step 1: Explore ICF & Select Interventions</p>

                    <PreventionLegend />

                    {/* ICF Visualizer */}
                    <div className="max-w-4xl mx-auto mb-10 select-none">

                        {/* Health Condition (Top) */}
                        <div className="flex justify-center mb-8">
                            <div className="w-64 h-24">
                                <ICFCard
                                    title="Health Condition"
                                    type="health"
                                    isActive={activeCategory === 'healthCondition'}
                                    onClick={() => setActiveCategory('healthCondition')}
                                />
                            </div>
                        </div>

                        {/* Middle Section (Body, Activities, Participation) */}
                        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 relative">
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -mt-0.5" />
                            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-slate-200 -z-10 -ml-0.5" />

                            <div className="h-32">
                                <ICFCard
                                    title="Body Functions"
                                    type="body"
                                    isActive={activeCategory === 'bodyFunctions'}
                                    onClick={() => setActiveCategory('bodyFunctions')}
                                />
                            </div>
                            <div className="h-32">
                                <ICFCard
                                    title="Activities"
                                    type="activity"
                                    isActive={activeCategory === 'activities'}
                                    onClick={() => setActiveCategory('activities')}
                                />
                            </div>
                            <div className="h-32">
                                <ICFCard
                                    title="Participation"
                                    type="participation"
                                    isActive={activeCategory === 'participation'}
                                    onClick={() => setActiveCategory('participation')}
                                />
                            </div>
                        </div>

                        {/* Bottom Section (Contextual Factors) */}
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            <div className="h-24">
                                <ICFCard
                                    title="Environmental Factors"
                                    type="context"
                                    isActive={activeCategory === 'environmental'}
                                    onClick={() => setActiveCategory('environmental')}
                                />
                            </div>
                            <div className="h-24">
                                <ICFCard
                                    title="Personal Factors"
                                    type="context"
                                    isActive={activeCategory === 'personal'}
                                    onClick={() => setActiveCategory('personal')}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Content Panel */}
                    <div className="min-h-[200px] mb-12">
                        {activeCategory ? (
                            <DetailPanel
                                data={population.icfData[activeCategory]}
                                category={activeCategory}
                                onToggle={toggleIntervention}
                                selectedInterventions={selectedInterventions}
                                maxSelection={MAX_SELECTION}
                                submitted={submitted}
                            />
                        ) : (
                            <div className="text-center py-10 bg-slate-50 border border-dashed border-slate-300 rounded-2xl text-slate-400">
                                Select a domain above to view findings & add interventions to your plan
                            </div>
                        )}
                    </div>

                    <div className="border-t border-slate-200 my-8" />

                    <p className="text-center text-slate-500 mb-2 italic text-sm">Step 2: Review & Submit Plan</p>

                    <WellnessBuilder
                        selectedInterventions={selectedInterventions}
                        onToggle={toggleIntervention}
                        onAddCustom={addCustomGoal}
                        onSubmit={handleSubmit}
                        submitted={submitted}
                        maxSelection={MAX_SELECTION}
                    />
                </>
            )}
        </div>
    );
};
