import { Zap, ShieldCheck, Activity as Pulse } from 'lucide-react';
import type { PreventionLevel, PreventionLevelName } from '../types';

export const preventionLevels: Record<PreventionLevelName, PreventionLevel> = {
    Primary: {
        label: 'Primary (1°)',
        desc: 'Health Promotion / Disease Prevention',
        color: 'bg-teal-100 text-teal-800 border-teal-200',
        icon: <Zap className="w-3 h-3" />
    },
    Secondary: {
        label: 'Secondary (2°)',
        desc: 'Risk Reduction / Early Detection',
        color: 'bg-purple-100 text-purple-800 border-purple-200',
        icon: <ShieldCheck className="w-3 h-3" />
    },
    Tertiary: {
        label: 'Tertiary (3°)',
        desc: 'Rehabilitation / Maintenance',
        color: 'bg-blue-100 text-blue-800 border-blue-200',
        icon: <Pulse className="w-3 h-3" />
    }
};
