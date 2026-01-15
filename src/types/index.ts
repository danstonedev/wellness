import type { ReactNode } from 'react';

// Wellness Domain configuration
export interface WellnessDomain {
    icon: ReactNode;
    color: string;
    bg: string;
    barColor: string;
}

export type WellnessDomainName =
    | 'Physical'
    | 'Emotional'
    | 'Intellectual'
    | 'Social'
    | 'Spiritual'
    | 'Environmental'
    | 'Financial'
    | 'Occupational';

// Prevention Level configuration
export interface PreventionLevel {
    label: string;
    desc: string;
    color: string;
    icon: ReactNode;
}

export type PreventionLevelName = 'Primary' | 'Secondary' | 'Tertiary';

// Intervention definition
export interface Intervention {
    text: string;
    domain: WellnessDomainName;
    impact: number;
    prevention: PreventionLevelName;
    rationale: string;
    isCustom?: boolean;
}

// ICF Category data
export interface ICFCategory {
    title: string;
    content: string;
    interventions: Intervention[];
}

// Patient information
export interface Patient {
    name: string;
    age: number;
    diagnosis: string;
    history: string;
    uMatterScores: Record<WellnessDomainName, number>;
}

// ICF Data structure
export interface ICFData {
    healthCondition: ICFCategory;
    bodyFunctions: ICFCategory;
    activities: ICFCategory;
    participation: ICFCategory;
    environmental: ICFCategory;
    personal: ICFCategory;
}

// Full population/case study
export interface Population {
    id: string;
    title: string;
    icon: ReactNode;
    color: string;
    borderColor: string;
    description: string;
    patient: Patient;
    icfData: ICFData;
}

// Results from submitting a plan
export interface Results {
    student: Record<WellnessDomainName, number>;
    max: Record<WellnessDomainName, number>;
}
