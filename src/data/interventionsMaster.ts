export interface MasterIntervention {
  id: string;
  text: string;
}

export const masterInterventions: MasterIntervention[] = [
  // Geriatrics
  {
    id: "calcium-vitamin-d-nutritional-counseling",
    text: "Calcium/Vitamin D nutritional counseling",
  },
  {
    id: "education-on-bone-density-progression",
    text: "Education on bone density progression",
  },
  {
    id: "complete-bed-rest-to-conserve-energy",
    text: "Complete bed rest to conserve energy",
  },
  {
    id: "herbal-tea-for-general-relaxation",
    text: "Herbal tea for general relaxation",
  },
  {
    id: "weight-bearing-resistance-training",
    text: "Weight-bearing resistance training",
  },
  {
    id: "vestibular-habituation-exercises",
    text: "Vestibular habituation exercises",
  },
  {
    id: "high-velocity-spinal-flexion-crunches",
    text: "High-velocity spinal flexion (Crunches)",
  },
  { id: "passive-ankle-pumps-seated", text: "Passive ankle pumps (seated)" },
  {
    id: "mindfulness-for-body-awareness",
    text: "Mindfulness for body awareness",
  },
  {
    id: "functional-sit-to-stand-training",
    text: "Functional sit-to-stand training",
  },
  {
    id: "safe-reaching-mechanics-education",
    text: "Safe reaching mechanics education",
  },
  {
    id: "restrict-walking-to-indoors-only",
    text: "Restrict walking to indoors only",
  },
  {
    id: "upper-body-ergometer-low-resistance",
    text: "Upper body ergometer (low resistance)",
  },
  {
    id: "return-to-activity-plan-for-gardening",
    text: "Return-to-activity plan for gardening",
  },
  {
    id: "community-balance-classes-tai-chi",
    text: "Community balance classes (Tai Chi)",
  },
  {
    id: "watching-gardening-shows-on-tv",
    text: "Watching gardening shows on TV",
  },
  {
    id: "stop-all-outings-to-prevent-falls",
    text: "Stop all outings to prevent falls",
  },
  {
    id: "home-safety-audit-and-modification",
    text: "Home safety audit & modification",
  },
  {
    id: "install-thick-plush-carpeting",
    text: "Install thick plush carpeting",
  },
  { id: "proper-footwear-assessment", text: "Proper footwear assessment" },
  {
    id: "cbt-strategies-for-fear-of-falling",
    text: "CBT strategies for Fear of Falling",
  },
  {
    id: "accepting-falls-are-inevitable",
    text: "Accepting falls are inevitable",
  },
  { id: "budgeting-for-home-mods", text: "Budgeting for home mods" },

  // Neuro
  {
    id: "cardiovascular-risk-monitoring",
    text: "Cardiovascular risk monitoring",
  },
  {
    id: "limit-fluid-intake-to-avoid-bathroom-trips",
    text: "Limit fluid intake to avoid bathroom trips",
  },
  { id: "generic-multivitamin-therapy", text: "Generic multivitamin therapy" },
  { id: "adapted-hiit-program", text: "Adapted HIIT program" },
  {
    id: "overhead-pulleys-for-r-shoulder",
    text: "Overhead pulleys for R shoulder",
  },
  {
    id: "stress-ball-squeezing-repetitive",
    text: "Stress ball squeezing (repetitive)",
  },
  { id: "meditation-for-bp-control", text: "Meditation for BP control" },
  { id: "gait-speed-challenges", text: "Gait speed challenges" },
  {
    id: "use-wheelchair-for-all-distances",
    text: "Use wheelchair for all distances",
  },
  {
    id: "adaptive-typing-technology-training",
    text: "Adaptive typing technology training",
  },
  {
    id: "adaptive-hiking-group-participation",
    text: "Adaptive hiking group participation",
  },
  { id: "solo-hiking-on-flat-pavement", text: "Solo hiking on flat pavement" },
  { id: "aphasia-conversation-cafe", text: "Aphasia conversation cafe" },
  { id: "accessible-trail-mapping", text: "Accessible trail mapping" },
  {
    id: "buying-expensive-stroke-cure-supplements",
    text: 'Buying expensive "Stroke Cure" supplements',
  },
  {
    id: "partner-communication-training",
    text: "Partner communication training",
  },
  {
    id: "finding-new-athletic-identity",
    text: "Finding new athletic identity",
  },
  {
    id: "resignation-to-new-normal-limits",
    text: 'Resignation to "new normal" limits',
  },
  {
    id: "disability-benefits-navigation",
    text: "Disability benefits navigation",
  },

  // Peds
  { id: "pain-monitoring-education", text: "Pain monitoring education" },
  {
    id: "ignore-hip-surveillance-to-reduce-stress",
    text: "Ignore hip surveillance to reduce stress",
  },
  {
    id: "generic-wait-and-see-approach",
    text: 'Generic "wait and see" approach',
  },
  { id: "aquatic-therapy-swimming", text: "Aquatic therapy (Swimming)" },
  {
    id: "aggressive-hamstring-stretching-over-pain-threshold",
    text: "Aggressive hamstring stretching > pain threshold",
  },
  {
    id: "passive-standing-frame-10-mins-per-day",
    text: "Passive standing frame (10 mins/day)",
  },
  { id: "fatigue-management-games", text: "Fatigue management games" },
  { id: "adaptive-cycling", text: "Adaptive cycling" },
  { id: "passive-movement-by-parents", text: "Passive movement by parents" },
  { id: "dressing-independence-games", text: "Dressing independence games" },
  { id: "sled-hockey-team", text: "Sled hockey team" },
  {
    id: "home-schooling-to-avoid-bullying",
    text: "Home schooling to avoid bullying",
  },
  {
    id: "inclusive-pe-curriculum-consulting",
    text: "Inclusive PE curriculum consulting",
  },
  {
    id: "respite-care-resources-for-parents",
    text: "Respite care resources for parents",
  },
  {
    id: "move-to-rural-home-with-no-stairs",
    text: "Move to rural home with no stairs",
  },
  {
    id: "grant-funding-for-adaptive-equipment",
    text: "Grant funding for adaptive equipment",
  },
  {
    id: "identify-superhero-strengths",
    text: 'Identify "Superhero Strengths"',
  },
  {
    id: "focus-solely-on-what-he-cannot-do",
    text: "Focus solely on what he cannot do",
  },
  { id: "self-advocacy-training", text: "Self-advocacy training" },

  // SCI + Homelessness
  {
    id: "visual-skin-inspection-education-mirror",
    text: "Visual skin inspection education (mirror)",
  },
  {
    id: "switch-to-heat-stable-insulin-pens",
    text: "Switch to heat-stable Insulin pens",
  },
  {
    id: "prescribe-complex-vial-syringe-regimen",
    text: "Prescribe complex vial/syringe regimen",
  },
  { id: "low-sodium-diet-education", text: "Low-sodium diet education" },
  {
    id: "pressure-relief-weight-shifts-every-15m",
    text: "Pressure relief (weight shifts) every 15m",
  },
  {
    id: "upper-extremity-strengthening",
    text: "Upper extremity strengthening",
  },
  { id: "hot-packs-for-back-pain", text: "Hot packs for back pain" },
  { id: "passive-rom-of-fingers", text: "Passive ROM of fingers" },
  {
    id: "advanced-wheelchair-skills-curbs",
    text: "Advanced wheelchair skills (curbs)",
  },
  {
    id: "self-catheterization-hygiene-education",
    text: "Self-catheterization hygiene education",
  },
  {
    id: "encourage-walking-barefoot-to-toughen-feet",
    text: "Encourage walking barefoot to toughen feet",
  },
  {
    id: "fine-motor-coordination-drills",
    text: "Fine motor coordination drills",
  },
  { id: "vocational-rehab-referral", text: "Vocational Rehab referral" },
  {
    id: "community-resource-shelter-mapping",
    text: "Community resource/shelter mapping",
  },
  {
    id: "suggest-job-requiring-heavy-lifting",
    text: "Suggest job requiring heavy lifting",
  },
  { id: "solitary-puzzles", text: "Solitary puzzles" },
  {
    id: "social-work-consult-for-housing-first",
    text: "Social work consult for Housing First",
  },
  {
    id: "obtain-ro-cushion-for-wheelchair",
    text: "Obtain RO cushion for wheelchair",
  },
  { id: "donate-standard-foam-cushion", text: "Donate standard foam cushion" },
  { id: "ergonomic-keyboard", text: "Ergonomic keyboard" },
  {
    id: "peer-mentoring-sci-survivors",
    text: "Peer mentoring (SCI survivors)",
  },
  {
    id: "motivational-interviewing-for-diabetes",
    text: "Motivational Interviewing for diabetes",
  },
  {
    id: "tough-love-regarding-homelessness",
    text: '"Tough love" regarding homelessness',
  },
  { id: "personality-testing", text: "Personality testing" },
];

export const masterInterventionsById: Record<string, MasterIntervention> =
  Object.fromEntries(masterInterventions.map((i) => [i.id, i]));

export const getMasterInterventionText = (id: string): string => {
  return masterInterventionsById[id]?.text ?? id;
};
