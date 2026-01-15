import { useState } from "react";
import {
    CheckCircle,
    XCircle,
    ChevronRight,
    Award,
    RotateCcw,
    BookOpen,
} from "lucide-react";
import type { KnowledgeCheckQuestion } from "../../types";

interface KnowledgeCheckPanelProps {
    questions: KnowledgeCheckQuestion[];
    onComplete: () => void;
    onClose: () => void;
}

interface QuestionResult {
    questionId: string;
    selectedLetter: string;
    isCorrect: boolean;
}

export const KnowledgeCheckPanel = ({
    questions,
    onComplete,
    onClose,
}: KnowledgeCheckPanelProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [results, setResults] = useState<QuestionResult[]>([]);
    const [showSummary, setShowSummary] = useState(false);

    if (!questions || questions.length === 0) {
        return (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
                <p className="text-amber-800">
                    No knowledge check questions available for this case.
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                >
                    Return to Results
                </button>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];
    const selectedOptionData = currentQuestion.options.find(
        (o) => o.letter === selectedOption
    );

    const handleSelectOption = (letter: string) => {
        if (hasAnswered) return;
        setSelectedOption(letter);
    };

    const handleSubmitAnswer = () => {
        if (!selectedOption) return;
        const isCorrect = selectedOptionData?.isCorrect || false;
        setResults([
            ...results,
            {
                questionId: currentQuestion.id,
                selectedLetter: selectedOption,
                isCorrect,
            },
        ]);
        setHasAnswered(true);
    };

    const handleNextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setHasAnswered(false);
        } else {
            setShowSummary(true);
            onComplete();
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedOption(null);
        setHasAnswered(false);
        setResults([]);
        setShowSummary(false);
    };

    const correctCount = results.filter((r) => r.isCorrect).length;
    const percentage = Math.round((correctCount / questions.length) * 100);

    // Summary View
    if (showSummary) {
        return (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in zoom-in-95">
                <div
                    className={`p-6 text-center text-white ${percentage >= 80
                        ? "bg-emerald-700"
                        : percentage >= 60
                            ? "bg-blue-700"
                            : "bg-amber-600"
                        }`}
                >
                    <Award className="w-12 h-12 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">Knowledge Check Complete</h3>
                    <p className="text-white/80">
                        You scored {correctCount} of {questions.length} ({percentage}%)
                    </p>
                </div>

                <div className="p-6">
                    <h4 className="font-bold text-slate-700 mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Review Your Answers
                    </h4>

                    <div className="space-y-4 mb-6">
                        {questions.map((question, idx) => {
                            const result = results[idx];
                            const wasCorrect = result?.isCorrect;
                            const selectedOpt = question.options.find(
                                (o) => o.letter === result?.selectedLetter
                            );
                            const correctOpt = question.options.find((o) => o.isCorrect);

                            return (
                                <div
                                    key={question.id}
                                    className={`p-4 rounded-lg border ${wasCorrect
                                        ? "bg-green-50 border-green-200"
                                        : "bg-red-50 border-red-200"
                                        }`}
                                >
                                    <div className="flex items-start gap-2 mb-2">
                                        {wasCorrect ? (
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        )}
                                        <div className="flex-1">
                                            <p className="font-medium text-slate-800 text-sm">
                                                Q{idx + 1}: {question.stem}
                                            </p>
                                            <div className="mt-2 text-sm">
                                                <p
                                                    className={
                                                        wasCorrect ? "text-green-700" : "text-red-700"
                                                    }
                                                >
                                                    Your answer: ({result?.selectedLetter}){" "}
                                                    {selectedOpt?.text}
                                                </p>
                                                {!wasCorrect && (
                                                    <p className="text-green-700 mt-1">
                                                        Correct answer: ({correctOpt?.letter}){" "}
                                                        {correctOpt?.text}
                                                    </p>
                                                )}
                                            </div>
                                            <p className="text-xs text-slate-600 mt-2 italic">
                                                {correctOpt?.rationale}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handleRestart}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Try Again
                        </button>
                        <button
                            onClick={onClose}
                            className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
                        >
                            Return to Results
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Question View
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in slide-in-from-bottom-4">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Knowledge Check</h3>
                    <span className="text-sm text-white/80">
                        Question {currentIndex + 1} of {questions.length}
                    </span>
                </div>
                {/* Progress bar */}
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-300"
                        style={{
                            width: `${((currentIndex + (hasAnswered ? 1 : 0)) / questions.length) * 100}%`,
                        }}
                    />
                </div>
            </div>

            {/* Question */}
            <div className="p-6">
                <div className="mb-2">
                    <span
                        className={`text-xs px-2 py-1 rounded font-medium ${currentQuestion.category === "safety"
                            ? "bg-red-100 text-red-700"
                            : currentQuestion.category === "priority-setting"
                                ? "bg-amber-100 text-amber-700"
                                : currentQuestion.category === "clinical-reasoning"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-purple-100 text-purple-700"
                            }`}
                    >
                        {currentQuestion.category.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                    </span>
                </div>
                <p className="text-lg font-medium text-slate-800 mb-6">
                    {currentQuestion.stem}
                </p>

                {/* Options */}
                <div className="space-y-3">
                    {currentQuestion.options.map((option) => {
                        const isSelected = selectedOption === option.letter;
                        const showResult = hasAnswered;
                        const isCorrectOption = option.isCorrect;

                        let bgColor = "bg-slate-50 hover:bg-slate-100 border-slate-200";
                        let textColor = "text-slate-700";

                        if (showResult) {
                            if (isCorrectOption) {
                                bgColor = "bg-green-100 border-green-400";
                                textColor = "text-green-800";
                            } else if (isSelected && !isCorrectOption) {
                                bgColor = "bg-red-100 border-red-400";
                                textColor = "text-red-800";
                            } else {
                                bgColor = "bg-slate-50 border-slate-200 opacity-60";
                            }
                        } else if (isSelected) {
                            bgColor = "bg-indigo-100 border-indigo-400";
                            textColor = "text-indigo-800";
                        }

                        return (
                            <button
                                key={option.letter}
                                onClick={() => handleSelectOption(option.letter)}
                                disabled={hasAnswered}
                                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${bgColor} ${hasAnswered ? "cursor-default" : "cursor-pointer"
                                    }`}
                            >
                                <div className="flex items-start gap-3">
                                    <span
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isSelected && !showResult
                                            ? "bg-indigo-600 text-white"
                                            : showResult && isCorrectOption
                                                ? "bg-green-600 text-white"
                                                : showResult && isSelected && !isCorrectOption
                                                    ? "bg-red-600 text-white"
                                                    : "bg-slate-200 text-slate-600"
                                            }`}
                                    >
                                        {option.letter}
                                    </span>
                                    <div className="flex-1">
                                        <span className={`font-medium ${textColor}`}>
                                            {option.text}
                                        </span>
                                        {showResult && (isSelected || isCorrectOption) && (
                                            <p
                                                className={`text-sm mt-2 ${isCorrectOption ? "text-green-700" : "text-red-700"
                                                    }`}
                                            >
                                                {option.rationale}
                                            </p>
                                        )}
                                    </div>
                                    {showResult && isCorrectOption && (
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    )}
                                    {showResult && isSelected && !isCorrectOption && (
                                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-end">
                    {!hasAnswered ? (
                        <button
                            onClick={handleSubmitAnswer}
                            disabled={!selectedOption}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${selectedOption
                                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                : "bg-slate-200 text-slate-400 cursor-not-allowed"
                                }`}
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button
                            onClick={handleNextQuestion}
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            {currentIndex < questions.length - 1 ? (
                                <>
                                    Next Question
                                    <ChevronRight className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    View Results
                                    <Award className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
