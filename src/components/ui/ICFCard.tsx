interface ICFCardProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
    type: 'health' | 'body' | 'activity' | 'participation' | 'context';
}

export const ICFCard = ({ title, isActive, onClick, type }: ICFCardProps) => {
    const getBorderColor = () => {
        if (!isActive) return 'border-slate-200';
        switch (type) {
            case 'health': return 'border-red-400 ring-2 ring-red-100';
            case 'body': return 'border-blue-400 ring-2 ring-blue-100';
            case 'activity': return 'border-blue-400 ring-2 ring-blue-100';
            case 'participation': return 'border-blue-400 ring-2 ring-blue-100';
            case 'context': return 'border-green-400 ring-2 ring-green-100';
            default: return 'border-slate-200';
        }
    };

    const getBgColor = () => {
        if (!isActive) return 'bg-white hover:bg-slate-50';
        switch (type) {
            case 'health': return 'bg-red-50';
            case 'body': return 'bg-blue-50';
            case 'activity': return 'bg-blue-50';
            case 'participation': return 'bg-blue-50';
            case 'context': return 'bg-green-50';
            default: return 'bg-white';
        }
    };

    return (
        <div
            onClick={onClick}
            className={`p-4 rounded-xl border-2 transition-all cursor-pointer shadow-sm ${getBorderColor()} ${getBgColor()} h-full flex flex-col items-center text-center justify-center`}
        >
            <h5 className="font-bold text-slate-700 text-sm md:text-base">{title}</h5>
            {isActive && <div className="mt-2 text-xs text-slate-500 font-medium">Viewing Details</div>}
        </div>
    );
};
