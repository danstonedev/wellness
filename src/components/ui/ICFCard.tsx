import { Activity, HeartPulse, Users, TreeDeciduous, User } from "lucide-react";

interface ICFCardProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  type:
  | "health"
  | "body"
  | "activity"
  | "participation"
  | "environmental"
  | "personal"
  | "context";
}

export const ICFCard = ({ title, isActive, onClick, type }: ICFCardProps) => {
  const getStyles = () => {
    switch (type) {
      case "health":
        return {
          border: isActive ? "border-amber-400" : "border-amber-200",
          bg: isActive ? "bg-amber-50" : "bg-amber-50/50 hover:bg-amber-50",
          ring: "ring-amber-200",
          icon: <HeartPulse className="w-5 h-5 text-amber-600" />,
          textColor: "text-amber-800",
        };
      case "body":
        return {
          border: isActive ? "border-sky-400" : "border-sky-200",
          bg: isActive ? "bg-sky-50" : "bg-sky-50/50 hover:bg-sky-50",
          ring: "ring-sky-200",
          icon: <Activity className="w-5 h-5 text-sky-600" />,
          textColor: "text-sky-800",
        };
      case "activity":
        return {
          border: isActive ? "border-sky-400" : "border-sky-200",
          bg: isActive ? "bg-sky-50" : "bg-sky-50/50 hover:bg-sky-50",
          ring: "ring-sky-200",
          icon: <Activity className="w-5 h-5 text-sky-600" />,
          textColor: "text-sky-800",
        };
      case "participation":
        return {
          border: isActive ? "border-sky-400" : "border-sky-200",
          bg: isActive ? "bg-sky-50" : "bg-sky-50/50 hover:bg-sky-50",
          ring: "ring-sky-200",
          icon: <Users className="w-5 h-5 text-sky-600" />,
          textColor: "text-sky-800",
        };
      case "environmental":
        return {
          border: isActive ? "border-emerald-400" : "border-emerald-200",
          bg: isActive
            ? "bg-emerald-50"
            : "bg-emerald-50/50 hover:bg-emerald-50",
          ring: "ring-emerald-200",
          icon: <TreeDeciduous className="w-5 h-5 text-emerald-600" />,
          textColor: "text-emerald-800",
        };
      case "personal":
        return {
          border: isActive ? "border-emerald-400" : "border-emerald-200",
          bg: isActive
            ? "bg-emerald-50"
            : "bg-emerald-50/50 hover:bg-emerald-50",
          ring: "ring-emerald-200",
          icon: <User className="w-5 h-5 text-emerald-600" />,
          textColor: "text-emerald-800",
        };
      case "context":
        return {
          border: isActive ? "border-slate-400" : "border-slate-200",
          bg: isActive ? "bg-slate-100" : "bg-slate-50/50 hover:bg-slate-100",
          ring: "ring-slate-300",
          icon: <User className="w-5 h-5 text-slate-600" />,
          textColor: "text-slate-800",
        };
      default:
        return {
          border: "border-slate-200",
          bg: "bg-white hover:bg-slate-50",
          ring: "ring-slate-200",
          icon: null,
          textColor: "text-slate-700",
        };
    }
  };

  const styles = getStyles();

  return (
    <button
      onClick={onClick}
      className={`
                p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer shadow-sm
                ${styles.border} ${styles.bg}
                ${isActive ? `ring-2 ${styles.ring} scale-[1.02]` : ""}
                h-full flex flex-col items-center text-center justify-center gap-2 w-full focus:outline-none focus:ring-4 focus:ring-blue-200
            `}
    >
      {styles.icon}
      <h5 className={`font-semibold text-sm md:text-base ${styles.textColor}`}>
        {title}
      </h5>
      {isActive && (
        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium bg-white/60 px-2 py-0.5 rounded-full">
          Selected
        </div>
      )}
    </button>
  );
};
