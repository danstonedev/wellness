import {
    Activity,
    Heart,
    Brain,
    Users,
    Sun,
    TreeDeciduous,
    Wallet,
    Briefcase,
} from 'lucide-react';
import type { WellnessDomain, WellnessDomainName } from '../types';

export const wellnessDomains: Record<WellnessDomainName, WellnessDomain> = {
    Physical: {
        icon: <Activity className="w-4 h-4" />,
        color: 'text-rose-600',
        bg: 'bg-rose-100',
        barColor: 'bg-rose-500'
    },
    Emotional: {
        icon: <Heart className="w-4 h-4" />,
        color: 'text-pink-600',
        bg: 'bg-pink-100',
        barColor: 'bg-pink-500'
    },
    Intellectual: {
        icon: <Brain className="w-4 h-4" />,
        color: 'text-amber-600',
        bg: 'bg-amber-100',
        barColor: 'bg-amber-500'
    },
    Social: {
        icon: <Users className="w-4 h-4" />,
        color: 'text-indigo-600',
        bg: 'bg-indigo-100',
        barColor: 'bg-indigo-500'
    },
    Spiritual: {
        icon: <Sun className="w-4 h-4" />,
        color: 'text-orange-500',
        bg: 'bg-orange-100',
        barColor: 'bg-orange-500'
    },
    Environmental: {
        icon: <TreeDeciduous className="w-4 h-4" />,
        color: 'text-emerald-600',
        bg: 'bg-emerald-100',
        barColor: 'bg-emerald-500'
    },
    Financial: {
        icon: <Wallet className="w-4 h-4" />,
        color: 'text-green-600',
        bg: 'bg-green-100',
        barColor: 'bg-green-500'
    },
    Occupational: {
        icon: <Briefcase className="w-4 h-4" />,
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        barColor: 'bg-blue-500'
    },
};
