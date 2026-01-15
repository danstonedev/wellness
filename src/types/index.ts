import type { ReactNode } from "react";

// Wellness Domain configuration
export interface WellnessDomain {
  icon: ReactNode;
  color: string;
  bg: string;
  barColor: string;
}

export type WellnessDomainName =
  | "Physical"
  | "Emotional"
  | "Intellectual"
  | "Social"
  | "Spiritual"
  | "Environmental"
  | "Financial"
  | "Occupational";

// Prevention Level configuration
export interface PreventionLevel {
  label: string;
  desc: string;
  color: string;
  icon: ReactNode;
}

export type PreventionLevelName = "Primary" | "Secondary" | "Tertiary";

export type InterventionQuality =
  | "Excellent"
  | "Good"
  | "OK"
  | "Neutral"
  | "Poor"
  | "Unsafe";

// Scenario-specific intervention option (references a master intervention by id)
export interface InterventionOption {
  id?: string;
  text?: string;
  domain: WellnessDomainName;
  impact: number;
  prevention: PreventionLevelName;
  rationale: string;
  quality?: InterventionQuality;
  isCustom?: boolean;
}

// Resolved intervention used by UI/selection (alias for clarity)
export type Intervention = InterventionOption;

// ICF Category data
export interface ICFCategory {
  title: string;
  content: string;
  interventions: InterventionOption[];
}

// Wellness Question for self-assessment
export interface WellnessQuestion {
  question: string;
  answer: 1 | 2 | 3 | 4 | 5; // 1=Never, 2=Rarely, 3=Sometimes, 4=Often, 5=Always
  note?: string; // Optional patient context
}

// Wellness Answers by domain
export type WellnessAnswers = Record<WellnessDomainName, WellnessQuestion[]>;

// Patient information
export interface Patient {
  name: string;
  age: number;
  diagnosis: string;
  history: string;
  image?: string; // Optional path like '/wellness/images/eleanor.png'
  uMatterScores: Record<WellnessDomainName, number>;
  wellnessAnswers?: WellnessAnswers; // Detailed answers to wellness questions
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

// SDOH Factor (upstream social determinant) - the systemic condition
export interface SDOHFactor {
  category:
  | "Housing"
  | "Food"
  | "Transportation"
  | "Financial"
  | "Safety"
  | "Social"
  | "Education"
  | "Employment"
  | "Healthcare Access";
  description: string; // The systemic/community-level factor
}

// HRSN (Health-Related Social Need) - the individual patient's unmet need
export interface HRSNIndicator {
  category:
  | "Housing"
  | "Food"
  | "Transportation"
  | "Financial"
  | "Safety"
  | "Social"
  | "Education"
  | "Employment"
  | "Healthcare Access";
  description: string; // What THIS patient needs
  severity: "High" | "Moderate" | "Low";
}

// Critical need that MUST be addressed for full credit
export interface CriticalNeed {
  id: string;
  description: string;
  category: "Safety" | "HRSN" | "Medical";
  // IDs of interventions/referrals that would satisfy this need
  addressedBy: string[];
}

// Population-based intervention strategy types
export type PopulationStrategyType =
  | "Policy"
  | "Community"
  | "Advocacy"
  | "Education"
  | "Screening";

// SDOH Category types
export type SDOHCategory =
  | "Economic Stability"
  | "Education Access"
  | "Healthcare Access"
  | "Neighborhood"
  | "Social & Community"
  // Additional categories from existing data
  | "Safety"
  | "Housing"
  | "Social"
  | "Transportation"
  | "Employment"
  | "Education"
  | "Financial"
  | "Food";

// Population-based intervention option (addresses SDOH at system level)
export interface PopulationIntervention {
  id: string;
  name?: string; // Optional display name
  description?: string; // Optional description
  strategyType: PopulationStrategyType;
  sdohCategory: SDOHCategory;
  prevention: PreventionLevelName;
  rationale: string;
  quality: InterventionQuality;
  qualityRating?: "Excellent" | "Good" | "OK" | "Neutral" | "Poor" | "Unsafe"; // Derived from quality
}

// Referral option (references a master referral by id)
export interface ReferralOption {
  id: string;
  domain: WellnessDomainName;
  impact: number;
  prevention: PreventionLevelName;
  rationale: string;
  quality: InterventionQuality;
}

// Full population/case study
export interface Population {
  id: string;
  title: string;
  icon: ReactNode;
  color: string;
  borderColor: string;
  description: string;
  learningObjectives: string[];
  patient: Patient;
  icfData: ICFData;
  // SDOH (systemic factors) and HRSN (individual needs)
  sdohFactors?: SDOHFactor[]; // Upstream systemic factors
  hrsnIndicators?: HRSNIndicator[]; // This patient's specific unmet needs
  criticalNeeds?: CriticalNeed[]; // 2 per case that MUST be addressed
  // Individual-level options
  referralOptions?: ReferralOption[]; // Available referrals for this case
  // Population-level options
  populationInterventions?: PopulationIntervention[]; // Community/policy strategies
}

// Population Plan Score (out of 100)
export interface PopulationPlanScore {
  strategyDiversity: number; // 0-25: Variety of strategy types used
  sdohCoverage: number; // 0-25: Addresses multiple SDOH categories
  preventionBalance: number; // 0-25: Mix of prevention levels
  qualityScore: number; // 0-25: Quality ratings of selected strategies
  total: number; // 0-100: Sum of above
}

// Results from submitting a plan
export interface Results {
  student: Record<WellnessDomainName, number>;
  max: Record<WellnessDomainName, number>;
  populationScore?: PopulationPlanScore;
}
