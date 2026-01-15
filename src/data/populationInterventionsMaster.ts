/**
 * Master catalog of population-based intervention strategies.
 * These address SDOH at the systemic/community level rather than individual patient level.
 *
 * Strategy Types:
 * - Policy: Advocacy for policy changes, legislative action
 * - Community: Community program development, coalition building
 * - Advocacy: Professional advocacy, awareness campaigns
 * - Education: Public health education, workforce training
 * - Screening: Population-level screening programs
 */

import type { PopulationStrategyType, HRSNIndicator } from "../types";

export interface MasterPopulationIntervention {
  id: string;
  text: string;
  strategyType: PopulationStrategyType;
  sdohCategory: HRSNIndicator["category"];
  description: string;
}

export const masterPopulationInterventions: MasterPopulationIntervention[] = [
  // === HOUSING ===
  {
    id: "pop-housing-first-advocacy",
    text: "Advocate for Housing First policies",
    strategyType: "Policy",
    sdohCategory: "Housing",
    description:
      "Support policies that prioritize permanent housing as primary intervention for homeless populations",
  },
  {
    id: "pop-accessible-housing-coalition",
    text: "Join accessible housing coalition",
    strategyType: "Community",
    sdohCategory: "Housing",
    description:
      "Partner with disability rights organizations to advocate for accessible housing stock",
  },
  {
    id: "pop-home-mod-grant-program",
    text: "Support home modification grant programs",
    strategyType: "Policy",
    sdohCategory: "Housing",
    description:
      "Advocate for funding of home modification programs for aging/disabled populations",
  },
  {
    id: "pop-shelter-accessibility-standards",
    text: "Advocate for accessible shelter standards",
    strategyType: "Advocacy",
    sdohCategory: "Housing",
    description:
      "Work with shelters to implement accessibility requirements (ramps, accessible bathrooms)",
  },
  {
    id: "pop-housing-health-partnerships",
    text: "Develop housing-health partnerships",
    strategyType: "Community",
    sdohCategory: "Housing",
    description:
      "Create referral pathways between healthcare systems and housing authorities",
  },

  // === FOOD ===
  {
    id: "pop-medically-tailored-meals",
    text: "Advocate for medically tailored meal programs",
    strategyType: "Policy",
    sdohCategory: "Food",
    description:
      "Support policies that fund medically appropriate meals for chronic disease populations",
  },
  {
    id: "pop-food-pharmacy-programs",
    text: "Support Food is Medicine initiatives",
    strategyType: "Community",
    sdohCategory: "Food",
    description:
      "Partner with food pharmacies and produce prescription programs",
  },
  {
    id: "pop-snap-accessibility",
    text: "Advocate for SNAP accessibility improvements",
    strategyType: "Policy",
    sdohCategory: "Food",
    description:
      "Support policies that simplify SNAP enrollment for disabled individuals",
  },
  {
    id: "pop-congregate-meal-expansion",
    text: "Support congregate meal site expansion",
    strategyType: "Community",
    sdohCategory: "Food",
    description:
      "Advocate for accessible senior center meal programs in underserved areas",
  },
  {
    id: "pop-nutrition-education-programs",
    text: "Develop community nutrition education",
    strategyType: "Education",
    sdohCategory: "Food",
    description:
      "Create culturally appropriate nutrition education for specific populations",
  },

  // === TRANSPORTATION ===
  {
    id: "pop-paratransit-advocacy",
    text: "Advocate for improved paratransit services",
    strategyType: "Policy",
    sdohCategory: "Transportation",
    description:
      "Push for expanded hours, reduced wait times, and better coverage for paratransit",
  },
  {
    id: "pop-medical-transport-networks",
    text: "Develop volunteer medical transport network",
    strategyType: "Community",
    sdohCategory: "Transportation",
    description:
      "Organize community volunteers to provide rides to medical appointments",
  },
  {
    id: "pop-transit-stop-accessibility",
    text: "Advocate for accessible transit stops",
    strategyType: "Policy",
    sdohCategory: "Transportation",
    description:
      "Work with transit authorities to improve curb cuts, shelters, and stop accessibility",
  },
  {
    id: "pop-ride-share-healthcare-partnerships",
    text: "Support healthcare-rideshare partnerships",
    strategyType: "Community",
    sdohCategory: "Transportation",
    description:
      "Advocate for Medicaid coverage of rideshare services for medical transport",
  },
  {
    id: "pop-mobility-device-transit-training",
    text: "Develop transit training for mobility device users",
    strategyType: "Education",
    sdohCategory: "Transportation",
    description:
      "Create training programs teaching wheelchair users to navigate public transit",
  },

  // === FINANCIAL ===
  {
    id: "pop-medical-debt-reform",
    text: "Advocate for medical debt protection policies",
    strategyType: "Policy",
    sdohCategory: "Financial",
    description:
      "Support legislation limiting medical debt collection and credit reporting",
  },
  {
    id: "pop-disability-benefits-navigation",
    text: "Support benefits navigation programs",
    strategyType: "Community",
    sdohCategory: "Financial",
    description:
      "Partner with legal aid to help patients access SSDI/SSI benefits",
  },
  {
    id: "pop-financial-literacy-disability",
    text: "Develop disability-focused financial literacy",
    strategyType: "Education",
    sdohCategory: "Financial",
    description:
      "Create financial education programs addressing unique needs of disabled individuals",
  },
  {
    id: "pop-equipment-loaner-programs",
    text: "Establish DME loaner/exchange programs",
    strategyType: "Community",
    sdohCategory: "Financial",
    description:
      "Create community programs for sharing/recycling durable medical equipment",
  },
  {
    id: "pop-medication-assistance-outreach",
    text: "Expand medication assistance program outreach",
    strategyType: "Advocacy",
    sdohCategory: "Financial",
    description:
      "Increase awareness of pharmaceutical patient assistance programs",
  },

  // === SAFETY ===
  {
    id: "pop-fall-prevention-community",
    text: "Implement community fall prevention programs",
    strategyType: "Screening",
    sdohCategory: "Safety",
    description:
      "Develop population-level fall risk screening at senior centers and community sites",
  },
  {
    id: "pop-safe-streets-advocacy",
    text: "Advocate for Complete Streets policies",
    strategyType: "Policy",
    sdohCategory: "Safety",
    description:
      "Support infrastructure improvements for pedestrian/wheelchair safety",
  },
  {
    id: "pop-elder-abuse-screening",
    text: "Implement elder abuse screening protocols",
    strategyType: "Screening",
    sdohCategory: "Safety",
    description:
      "Develop standardized screening for abuse/neglect in healthcare settings",
  },
  {
    id: "pop-violence-prevention-programs",
    text: "Support community violence prevention",
    strategyType: "Community",
    sdohCategory: "Safety",
    description:
      "Partner with violence prevention initiatives in high-risk communities",
  },
  {
    id: "pop-medication-safety-education",
    text: "Develop medication safety education",
    strategyType: "Education",
    sdohCategory: "Safety",
    description:
      "Create community education on medication management and fall risk",
  },

  // === SOCIAL ===
  {
    id: "pop-social-prescribing-programs",
    text: "Implement social prescribing programs",
    strategyType: "Community",
    sdohCategory: "Social",
    description:
      "Develop referral pathways to community social activities and groups",
  },
  {
    id: "pop-peer-support-networks",
    text: "Establish peer support networks",
    strategyType: "Community",
    sdohCategory: "Social",
    description:
      "Create condition-specific peer mentoring programs (stroke survivors, SCI, etc.)",
  },
  {
    id: "pop-intergenerational-programs",
    text: "Support intergenerational programming",
    strategyType: "Community",
    sdohCategory: "Social",
    description:
      "Develop programs connecting isolated older adults with younger generations",
  },
  {
    id: "pop-disability-community-centers",
    text: "Advocate for disability community centers",
    strategyType: "Advocacy",
    sdohCategory: "Social",
    description:
      "Support funding for independent living centers and disability community spaces",
  },
  {
    id: "pop-caregiver-support-expansion",
    text: "Advocate for caregiver support services",
    strategyType: "Policy",
    sdohCategory: "Social",
    description:
      "Support policies expanding respite care and caregiver support programs",
  },

  // === EDUCATION ===
  {
    id: "pop-inclusive-education-advocacy",
    text: "Advocate for inclusive education policies",
    strategyType: "Policy",
    sdohCategory: "Education",
    description:
      "Support full inclusion and adequate support services in public schools",
  },
  {
    id: "pop-health-literacy-programs",
    text: "Develop health literacy programs",
    strategyType: "Education",
    sdohCategory: "Education",
    description:
      "Create accessible health education materials for diverse literacy levels",
  },
  {
    id: "pop-disability-awareness-schools",
    text: "Implement disability awareness in schools",
    strategyType: "Education",
    sdohCategory: "Education",
    description:
      "Develop curriculum teaching disability awareness and inclusion to students",
  },
  {
    id: "pop-transition-planning-improvement",
    text: "Advocate for transition planning improvements",
    strategyType: "Policy",
    sdohCategory: "Education",
    description:
      "Support better transition services for youth with disabilities entering adulthood",
  },
  {
    id: "pop-parent-education-programs",
    text: "Develop parent education programs",
    strategyType: "Education",
    sdohCategory: "Education",
    description:
      "Create training for parents of children with disabilities on advocacy and resources",
  },

  // === EMPLOYMENT ===
  {
    id: "pop-workplace-accommodation-advocacy",
    text: "Advocate for workplace accommodation policies",
    strategyType: "Policy",
    sdohCategory: "Employment",
    description:
      "Support stronger enforcement of ADA workplace accommodation requirements",
  },
  {
    id: "pop-employer-disability-education",
    text: "Develop employer disability education",
    strategyType: "Education",
    sdohCategory: "Employment",
    description:
      "Create training for employers on hiring and accommodating workers with disabilities",
  },
  {
    id: "pop-supported-employment-expansion",
    text: "Advocate for supported employment expansion",
    strategyType: "Policy",
    sdohCategory: "Employment",
    description:
      "Support funding for job coaching and supported employment programs",
  },
  {
    id: "pop-vocational-rehab-partnerships",
    text: "Strengthen vocational rehab partnerships",
    strategyType: "Community",
    sdohCategory: "Employment",
    description:
      "Develop referral pathways between healthcare and vocational rehabilitation",
  },
  {
    id: "pop-return-to-work-programs",
    text: "Develop return-to-work programs",
    strategyType: "Community",
    sdohCategory: "Employment",
    description:
      "Create structured programs supporting injured workers returning to employment",
  },

  // === HEALTHCARE ACCESS ===
  {
    id: "pop-telehealth-expansion",
    text: "Advocate for telehealth expansion",
    strategyType: "Policy",
    sdohCategory: "Healthcare Access",
    description:
      "Support policies expanding telehealth coverage and reimbursement",
  },
  {
    id: "pop-community-health-workers",
    text: "Support community health worker programs",
    strategyType: "Community",
    sdohCategory: "Healthcare Access",
    description:
      "Advocate for funding of CHW programs in underserved communities",
  },
  {
    id: "pop-mobile-health-clinics",
    text: "Support mobile health clinic initiatives",
    strategyType: "Community",
    sdohCategory: "Healthcare Access",
    description:
      "Partner with mobile health programs bringing care to underserved areas",
  },
  {
    id: "pop-medicaid-expansion-advocacy",
    text: "Advocate for Medicaid expansion",
    strategyType: "Policy",
    sdohCategory: "Healthcare Access",
    description: "Support policies expanding Medicaid eligibility and coverage",
  },
  {
    id: "pop-healthcare-workforce-diversity",
    text: "Support healthcare workforce diversity",
    strategyType: "Education",
    sdohCategory: "Healthcare Access",
    description:
      "Advocate for pipeline programs increasing diversity in healthcare professions",
  },
  {
    id: "pop-chronic-disease-screening",
    text: "Implement community chronic disease screening",
    strategyType: "Screening",
    sdohCategory: "Healthcare Access",
    description:
      "Develop population-level screening programs for diabetes, hypertension, etc.",
  },
  {
    id: "pop-patient-navigation-programs",
    text: "Support patient navigation programs",
    strategyType: "Community",
    sdohCategory: "Healthcare Access",
    description:
      "Advocate for funding of patient navigators in healthcare settings",
  },
];

// Create lookup by ID for quick access
export const masterPopulationInterventionsById: Record<
  string,
  MasterPopulationIntervention
> = Object.fromEntries(masterPopulationInterventions.map((i) => [i.id, i]));

// Helper to get intervention text from ID
export function getPopulationInterventionText(id: string): string {
  const intervention = masterPopulationInterventionsById[id];
  if (!intervention) {
    console.warn(
      `Population intervention ID "${id}" not found in master catalog`
    );
    return id;
  }
  return intervention.text;
}

// Get interventions by strategy type
export function getPopulationInterventionsByType(
  type: MasterPopulationIntervention["strategyType"]
): MasterPopulationIntervention[] {
  return masterPopulationInterventions.filter((i) => i.strategyType === type);
}

// Get interventions by SDOH category
export function getPopulationInterventionsByCategory(
  category: MasterPopulationIntervention["sdohCategory"]
): MasterPopulationIntervention[] {
  return masterPopulationInterventions.filter(
    (i) => i.sdohCategory === category
  );
}
