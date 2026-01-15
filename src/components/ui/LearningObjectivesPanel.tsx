import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";

interface LearningObjectivesPanelProps {
    objectives: string[];
}

export const LearningObjectivesPanel = ({
    objectives,
}: LearningObjectivesPanelProps) => {
    const [isExpanded, setIsExpanded] = useState(true);

    if (!objectives || objectives.length === 0) return null;

    return (
        <div className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 overflow-hidden animate-in slide-in-from-top-2 duration-300">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-indigo-100/50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-md">
                        <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold text-indigo-900 text-lg">
                            Learning Objectives
                        </h3>
                        <p className="text-xs text-indigo-600">
                            Upon completing this case, you should be able to:
                        </p>
                    </div>
                </div>
                <div className="text-indigo-600">
                    {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                    ) : (
                        <ChevronDown className="w-5 h-5" />
                    )}
                </div>
            </button>

            {isExpanded && (
                <div className="px-5 pb-5">
                    <ol className="space-y-3 ml-14">
                        {objectives.map((objective, index) => (
                            <li key={index} className="flex gap-3 items-start">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shadow-sm">
                                    {index + 1}
                                </span>
                                <span className="text-slate-700 leading-relaxed pt-0.5">
                                    {objective}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};
