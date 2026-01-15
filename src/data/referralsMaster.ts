/**
 * Master catalog of all referral options available across case studies.
 * Each referral has a stable ID so scenarios can reference them with context-specific scoring.
 */

export interface MasterReferral {
  id: string;
  text: string;
  category:
    | "Medical Specialist"
    | "Rehab Team"
    | "Behavioral Health"
    | "Social Services"
    | "Community Resources";
  description: string; // Brief explanation of when/why to refer
}

export const masterReferrals: MasterReferral[] = [
  // === MEDICAL SPECIALISTS ===
  {
    id: "ref-endocrinology",
    text: "Endocrinology",
    category: "Medical Specialist",
    description: "Diabetes, thyroid, metabolic disorders management",
  },
  {
    id: "ref-cardiology",
    text: "Cardiology",
    category: "Medical Specialist",
    description: "Heart failure, arrhythmias, cardiac rehab clearance",
  },
  {
    id: "ref-neurology",
    text: "Neurology",
    category: "Medical Specialist",
    description: "Stroke, seizures, movement disorders, neuropathy",
  },
  {
    id: "ref-wound-care",
    text: "Wound Care Clinic",
    category: "Medical Specialist",
    description: "Complex wounds, pressure injuries, diabetic ulcers",
  },
  {
    id: "ref-podiatry",
    text: "Podiatry",
    category: "Medical Specialist",
    description: "Diabetic foot care, orthotics, nail care",
  },
  {
    id: "ref-pain-management",
    text: "Pain Management",
    category: "Medical Specialist",
    description:
      "Chronic pain, interventional procedures, medication management",
  },
  {
    id: "ref-physiatry",
    text: "Physiatry (PM&R)",
    category: "Medical Specialist",
    description:
      "Spasticity management, functional optimization, complex rehab",
  },
  {
    id: "ref-orthopedics",
    text: "Orthopedics",
    category: "Medical Specialist",
    description: "Fracture care, joint replacement, surgical consultation",
  },
  {
    id: "ref-pulmonology",
    text: "Pulmonology",
    category: "Medical Specialist",
    description: "COPD, respiratory failure, sleep apnea",
  },
  {
    id: "ref-urology",
    text: "Urology",
    category: "Medical Specialist",
    description: "Neurogenic bladder, incontinence, catheter management",
  },
  {
    id: "ref-ophthalmology",
    text: "Ophthalmology",
    category: "Medical Specialist",
    description: "Diabetic retinopathy, vision changes, low vision eval",
  },
  {
    id: "ref-geriatrics",
    text: "Geriatric Medicine",
    category: "Medical Specialist",
    description: "Polypharmacy, cognitive concerns, complex older adults",
  },
  {
    id: "ref-developmental-peds",
    text: "Developmental Pediatrics",
    category: "Medical Specialist",
    description: "Autism, developmental delays, ADHD",
  },
  {
    id: "ref-pediatric-neuro",
    text: "Pediatric Neurology",
    category: "Medical Specialist",
    description: "Seizures, movement disorders, developmental regression",
  },
  {
    id: "ref-gastroenterology",
    text: "Gastroenterology",
    category: "Medical Specialist",
    description: "Feeding difficulties, bowel programs, GI disorders",
  },
  {
    id: "ref-infectious-disease",
    text: "Infectious Disease",
    category: "Medical Specialist",
    description: "Complex infections, osteomyelitis, antibiotic stewardship",
  },

  // === REHAB TEAM ===
  {
    id: "ref-occupational-therapy",
    text: "Occupational Therapy",
    category: "Rehab Team",
    description: "ADLs, fine motor, sensory processing, home modifications",
  },
  {
    id: "ref-speech-language",
    text: "Speech-Language Pathology",
    category: "Rehab Team",
    description: "Swallowing, communication, cognitive-linguistic therapy",
  },
  {
    id: "ref-prosthetist-orthotist",
    text: "Prosthetist/Orthotist",
    category: "Rehab Team",
    description: "Bracing, prosthetics, seating and mobility equipment",
  },
  {
    id: "ref-recreation-therapy",
    text: "Recreational Therapy",
    category: "Rehab Team",
    description: "Leisure skills, community reintegration, adaptive sports",
  },
  {
    id: "ref-dietitian",
    text: "Registered Dietitian",
    category: "Rehab Team",
    description: "Medical nutrition therapy, weight management, tube feeding",
  },
  {
    id: "ref-respiratory-therapy",
    text: "Respiratory Therapy",
    category: "Rehab Team",
    description: "Ventilator weaning, airway clearance, oxygen management",
  },
  {
    id: "ref-wheelchair-seating",
    text: "Wheelchair Seating Clinic",
    category: "Rehab Team",
    description: "Complex seating, pressure mapping, mobility assessment",
  },
  {
    id: "ref-driver-rehab",
    text: "Driver Rehabilitation",
    category: "Rehab Team",
    description: "Driving evaluation, adaptive equipment, community mobility",
  },
  {
    id: "ref-aquatic-therapy",
    text: "Aquatic Therapy",
    category: "Rehab Team",
    description: "Pool-based therapy for pain, strengthening, gait training",
  },
  {
    id: "ref-aba-therapy",
    text: "Applied Behavior Analysis (ABA)",
    category: "Rehab Team",
    description: "Autism behavioral interventions, skill building",
  },

  // === BEHAVIORAL HEALTH ===
  {
    id: "ref-psychology",
    text: "Psychology",
    category: "Behavioral Health",
    description:
      "Adjustment to disability, coping strategies, cognitive testing",
  },
  {
    id: "ref-psychiatry",
    text: "Psychiatry",
    category: "Behavioral Health",
    description: "Medication management for mental health conditions",
  },
  {
    id: "ref-counseling",
    text: "Counseling/Therapy",
    category: "Behavioral Health",
    description: "Individual/family therapy, grief, anxiety, depression",
  },
  {
    id: "ref-substance-use",
    text: "Substance Use Treatment",
    category: "Behavioral Health",
    description: "Addiction counseling, MAT programs, recovery support",
  },
  {
    id: "ref-neuropsychology",
    text: "Neuropsychology",
    category: "Behavioral Health",
    description: "Cognitive assessment, brain injury evaluation, capacity",
  },
  {
    id: "ref-health-psychology",
    text: "Health Psychology",
    category: "Behavioral Health",
    description: "Chronic disease coping, pain psychology, behavior change",
  },
  {
    id: "ref-family-therapy",
    text: "Family Therapy",
    category: "Behavioral Health",
    description: "Family dynamics, caregiver support, communication",
  },
  {
    id: "ref-child-psychology",
    text: "Child Psychology",
    category: "Behavioral Health",
    description: "Pediatric behavioral concerns, developmental assessments",
  },

  // === SOCIAL SERVICES ===
  {
    id: "ref-social-work",
    text: "Social Work",
    category: "Social Services",
    description: "Care coordination, discharge planning, resource navigation",
  },
  {
    id: "ref-case-management",
    text: "Case Management",
    category: "Social Services",
    description: "Insurance authorization, care coordination, transitions",
  },
  {
    id: "ref-community-health-worker",
    text: "Community Health Worker",
    category: "Social Services",
    description: "Health education, navigation, cultural liaison",
  },
  {
    id: "ref-patient-navigator",
    text: "Patient Navigator",
    category: "Social Services",
    description: "Appointment coordination, barriers identification",
  },
  {
    id: "ref-financial-counseling",
    text: "Financial Counseling",
    category: "Social Services",
    description: "Insurance options, medication assistance programs, debt",
  },
  {
    id: "ref-housing-services",
    text: "Housing Services",
    category: "Social Services",
    description: "Housing First programs, accessible housing, shelters",
  },
  {
    id: "ref-legal-aid",
    text: "Legal Aid",
    category: "Social Services",
    description: "Disability benefits, housing rights, advance directives",
  },
  {
    id: "ref-domestic-violence",
    text: "Domestic Violence Services",
    category: "Social Services",
    description: "Safety planning, shelter, advocacy, protection orders",
  },
  {
    id: "ref-adult-protective",
    text: "Adult Protective Services",
    category: "Social Services",
    description: "Elder/vulnerable adult abuse investigation, safety",
  },
  {
    id: "ref-child-protective",
    text: "Child Protective Services",
    category: "Social Services",
    description: "Child safety concerns, mandated reporting follow-up",
  },
  {
    id: "ref-early-intervention",
    text: "Early Intervention (EI)",
    category: "Social Services",
    description: "Birth-3 developmental services, family support",
  },
  {
    id: "ref-school-services",
    text: "School-Based Services (IEP/504)",
    category: "Social Services",
    description: "Educational accommodations, school PT/OT/SLP",
  },

  // === COMMUNITY RESOURCES ===
  {
    id: "ref-vocational-rehab",
    text: "Vocational Rehabilitation",
    category: "Community Resources",
    description: "Job training, placement, workplace accommodations",
  },
  {
    id: "ref-meals-wheels",
    text: "Meals on Wheels",
    category: "Community Resources",
    description: "Home-delivered meals for homebound individuals",
  },
  {
    id: "ref-food-bank",
    text: "Food Bank/Pantry",
    category: "Community Resources",
    description: "Emergency food assistance, SNAP application help",
  },
  {
    id: "ref-transportation-assist",
    text: "Transportation Assistance",
    category: "Community Resources",
    description: "Medical transport, paratransit, ride programs",
  },
  {
    id: "ref-home-health",
    text: "Home Health Services",
    category: "Community Resources",
    description: "Skilled nursing, therapy, aide services at home",
  },
  {
    id: "ref-hospice-palliative",
    text: "Hospice/Palliative Care",
    category: "Community Resources",
    description: "End-of-life care, symptom management, family support",
  },
  {
    id: "ref-respite-care",
    text: "Respite Care",
    category: "Community Resources",
    description: "Temporary caregiver relief, adult day programs",
  },
  {
    id: "ref-support-group",
    text: "Disease-Specific Support Group",
    category: "Community Resources",
    description: "Peer support, education, community connection",
  },
  {
    id: "ref-adaptive-sports",
    text: "Adaptive Sports Program",
    category: "Community Resources",
    description: "Wheelchair sports, adaptive recreation, fitness",
  },
  {
    id: "ref-independent-living",
    text: "Independent Living Center",
    category: "Community Resources",
    description: "Disability advocacy, peer support, skills training",
  },
  {
    id: "ref-area-aging",
    text: "Area Agency on Aging",
    category: "Community Resources",
    description: "Senior services, caregiver support, benefits counseling",
  },
  {
    id: "ref-211-resource",
    text: "211 Resource Line",
    category: "Community Resources",
    description: "General social services referral, crisis resources",
  },
  {
    id: "ref-medication-assist",
    text: "Medication Assistance Program",
    category: "Community Resources",
    description: "Free/reduced cost medications, pharmaceutical programs",
  },
  {
    id: "ref-dme-loaner",
    text: "DME Loaner/Exchange Program",
    category: "Community Resources",
    description: "Free/low-cost wheelchairs, walkers, equipment",
  },
  {
    id: "ref-utility-assist",
    text: "Utility Assistance (LIHEAP)",
    category: "Community Resources",
    description: "Help with heating/cooling bills, energy assistance",
  },
  {
    id: "ref-clothing-assist",
    text: "Clothing Assistance",
    category: "Community Resources",
    description: "Free clothing, adaptive clothing resources",
  },
  {
    id: "ref-parent-training",
    text: "Parent Training Program",
    category: "Community Resources",
    description: "Parenting skills for special needs, behavior management",
  },
  {
    id: "ref-autism-support",
    text: "Autism Support Organization",
    category: "Community Resources",
    description: "Family support, resources, advocacy, community events",
  },
];

// Create lookup by ID for quick access
export const masterReferralsById: Record<string, MasterReferral> =
  Object.fromEntries(masterReferrals.map((r) => [r.id, r]));

// Helper to get referral text from ID
export function getMasterReferralText(id: string): string {
  const referral = masterReferralsById[id];
  if (!referral) {
    console.warn(`Referral ID "${id}" not found in master catalog`);
    return id;
  }
  return referral.text;
}

// Get referrals by category
export function getReferralsByCategory(
  category: MasterReferral["category"]
): MasterReferral[] {
  return masterReferrals.filter((r) => r.category === category);
}
