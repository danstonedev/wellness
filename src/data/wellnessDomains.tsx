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

// Color scheme per user specification:
// Physical=Red, Emotional=Orange, Intellectual=Yellow, Spiritual=Green,
// Social=Teal, Occupational=Blue, Environmental=Purple, Financial=Violet

export const wellnessDomains: Record<WellnessDomainName, WellnessDomain> = {
    Physical: {
        icon: <Activity className="w-4 h-4" />,
        color: 'text-red-500',
        bg: 'bg-red-50',
        barColor: 'bg-gradient-to-t from-red-500 to-red-400'
    },
    Emotional: {
        icon: <Heart className="w-4 h-4" />,
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        barColor: 'bg-gradient-to-t from-orange-500 to-orange-400'
    },
    Intellectual: {
        icon: <Brain className="w-4 h-4" />,
        color: 'text-yellow-500',
        bg: 'bg-yellow-50',
        barColor: 'bg-gradient-to-t from-yellow-500 to-yellow-400'
    },
    Social: {
        icon: <Users className="w-4 h-4" />,
        color: 'text-teal-500',
        bg: 'bg-teal-50',
        barColor: 'bg-gradient-to-t from-teal-500 to-teal-400'
    },
    Spiritual: {
        icon: <Sun className="w-4 h-4" />,
        color: 'text-green-500',
        bg: 'bg-green-50',
        barColor: 'bg-gradient-to-t from-green-500 to-green-400'
    },
    Environmental: {
        icon: <TreeDeciduous className="w-4 h-4" />,
        color: 'text-violet-500',
        bg: 'bg-violet-50',
        barColor: 'bg-gradient-to-t from-violet-500 to-violet-400'
    },
    Financial: {
        icon: <Wallet className="w-4 h-4" />,
        color: 'text-purple-500',
        bg: 'bg-purple-50',
        barColor: 'bg-gradient-to-t from-purple-500 to-purple-400'
    },
    Occupational: {
        icon: <Briefcase className="w-4 h-4" />,
        color: 'text-blue-500',
        bg: 'bg-blue-50',
        barColor: 'bg-gradient-to-t from-blue-500 to-blue-400'
    },
};
