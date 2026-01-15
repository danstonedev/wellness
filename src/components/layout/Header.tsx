import { Layout, Info } from 'lucide-react';

interface HeaderProps {
    setView: (view: 'home' | 'case') => void;
}

export const Header = ({ setView }: HeaderProps) => (
    <header className="bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-1"
                onClick={() => setView('home')}
            >
                <Layout className="w-6 h-6 text-blue-400" />
                <h1 className="text-xl font-bold tracking-tight">
                    DPT Wellness <span className="text-blue-400">ICF</span>
                </h1>
            </button>
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
                <button onClick={() => setView('home')} className="hover:text-blue-300 transition">
                    Dashboard
                </button>
                <div className="flex items-center space-x-1 text-slate-400">
                    <Info className="w-4 h-4" />
                    <span>Simulated Wellness Assessment</span>
                </div>
            </nav>
        </div>
    </header>
);
