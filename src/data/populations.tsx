import { User, Brain, Activity, Tent } from "lucide-react";
import type { Population } from "../types";
import {
  eleanorAnswers,
  marcusAnswers,
  leoAnswers,
  samAnswers,
} from "./patientWellnessAnswers";

export const populations: Population[] = [
  {
    id: "geriatrics",
    title: "Geriatrics: Osteoporosis & Fall Risk",
    icon: <User className="w-6 h-6" />,
    color: "bg-emerald-100 text-emerald-800",
    borderColor: "border-emerald-200",
    description:
      "Wellness strategies for aging adults focusing on bone health, balance, and maintaining independence.",
    learningObjectives: [
      "Analyze how osteoporosis impacts multiple dimensions of wellness (physical, environmental, social)",
      "Identify secondary prevention strategies to reduce fall risk in community-dwelling older adults",
      "Evaluate the role of interprofessional referrals in managing complex geriatric syndromes",
    ],
    patient: {
      name: "Eleanor",
      age: 78,
      diagnosis: "Osteoporosis, History of Falls",
      image: "images/eleanor.png",
      history:
        "Lives alone in a two-story Victorian home she's owned for 40 years; the upstairs bedroom is becoming hard to access. Retired English teacher who used to host a weekly book club. Her 'pride and joy' rose garden has been neglected since she slipped on wet pavement 6 months ago, leading to a Colles fracture. She admits to limiting fluid intake to avoid rushing to the bathroom at night.",
      uMatterScores: {
        Physical: 3,
        Emotional: 5,
        Intellectual: 9,
        Social: 2,
        Spiritual: 7,
        Environmental: 6,
        Financial: 8,
        Occupational: 4,
      },
      wellnessAnswers: eleanorAnswers,
    },
    sdohFactors: [
      {
        category: "Housing",
        description:
          "Aging housing stock in historic neighborhoods often lacks accessibility features",
      },
      {
        category: "Social",
        description:
          "Older adults living alone face increased social isolation risk, especially after health events",
      },
      {
        category: "Healthcare Access",
        description:
          "Many healthcare facilities have accessibility barriers for those with mobility limitations",
      },
      {
        category: "Transportation",
        description:
          "Limited public transit options in suburban/rural areas restrict access to services",
      },
    ],
    hrsnIndicators: [
      {
        category: "Social",
        description:
          "Social isolation - resigned from book club, ceased gardening, relies on neighbor for errands",
        severity: "High",
      },
      {
        category: "Housing",
        description:
          "Home safety hazards - steep stairs, no grab bars, trip hazards, low lighting",
        severity: "High",
      },
      {
        category: "Healthcare Access",
        description:
          "Avoids appointments due to fear of falling on stairs at church/community venues",
        severity: "Moderate",
      },
      {
        category: "Safety",
        description:
          "High fall risk with osteoporosis - fluid restriction increasing nocturia-related fall risk",
        severity: "High",
      },
    ],
    criticalNeeds: [
      {
        id: "eleanor-fall-prevention",
        description:
          "Address fall risk with home safety modifications and/or OT referral",
        category: "Safety",
        addressedBy: [
          "home-safety-audit-and-modification",
          "ref-occupational-therapy",
          "proper-footwear-assessment",
        ],
      },
      {
        id: "eleanor-incontinence-management",
        description:
          "Address urge incontinence causing dangerous fluid restriction (requires urology or pelvic floor PT referral)",
        category: "Medical",
        addressedBy: [
          "ref-urology",
          "ref-occupational-therapy",
          "ref-area-aging",
        ],
      },
    ],
    referralOptions: [
      {
        id: "ref-occupational-therapy",
        domain: "Environmental",
        impact: 3,
        prevention: "Secondary",
        quality: "Excellent",
        rationale:
          "Critical: Home safety evaluation, ADL training, adaptive equipment for bathroom/kitchen",
      },
      {
        id: "ref-urology",
        domain: "Physical",
        impact: 3,
        prevention: "Secondary",
        quality: "Excellent",
        rationale:
          "Essential: Managing urge incontinence to stop dangerous fluid restriction behavior",
      },
      {
        id: "ref-area-aging",
        domain: "Social",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Helpful: Senior services, meal delivery, transportation, social programs",
      },
      {
        id: "ref-geriatrics",
        domain: "Physical",
        impact: 2,
        prevention: "Secondary",
        quality: "Good",
        rationale:
          "Helpful: Comprehensive medication review, polypharmacy management",
      },
      {
        id: "ref-psychology",
        domain: "Emotional",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Beneficial: Address fear of falling and activity avoidance",
      },
      {
        id: "ref-meals-wheels",
        domain: "Physical",
        impact: 1,
        prevention: "Tertiary",
        quality: "OK",
        rationale: "Supportive: Nutrition support if mobility further declines",
      },
      {
        id: "ref-podiatry",
        domain: "Physical",
        impact: 1,
        prevention: "Secondary",
        quality: "OK",
        rationale:
          "Preventive: Foot care to prevent falls from nail/foot issues",
      },
      {
        id: "ref-orthopedics",
        domain: "Physical",
        impact: 0,
        prevention: "Secondary",
        quality: "Neutral",
        rationale: "Low priority: Fracture healed, osteoporosis managed by PCP",
      },
      {
        id: "ref-pain-management",
        domain: "Physical",
        impact: 0,
        prevention: "Tertiary",
        quality: "Neutral",
        rationale: "Low priority: Pain not primary complaint",
      },
    ],
    populationInterventions: [
      {
        id: "pop-fall-prevention-community",
        strategyType: "Screening",
        sdohCategory: "Safety",
        prevention: "Primary",
        quality: "Excellent",
        rationale:
          "High impact: Community fall risk screening at senior centers catches at-risk elders before injury",
      },
      {
        id: "pop-home-mod-grant-program",
        strategyType: "Policy",
        sdohCategory: "Housing",
        prevention: "Secondary",
        quality: "Excellent",
        rationale:
          "Addresses root cause: Many older adults cannot afford necessary home modifications",
      },
      {
        id: "pop-social-prescribing-programs",
        strategyType: "Community",
        sdohCategory: "Social",
        prevention: "Primary",
        quality: "Excellent",
        rationale:
          "Preventive: Formal referral pathways to combat social isolation before health decline",
      },
      {
        id: "pop-intergenerational-programs",
        strategyType: "Community",
        sdohCategory: "Social",
        prevention: "Primary",
        quality: "Good",
        rationale:
          "Helpful: Addresses isolation while providing meaningful engagement",
      },
      {
        id: "pop-caregiver-support-expansion",
        strategyType: "Policy",
        sdohCategory: "Social",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Supportive: Many isolated elders lack informal caregiver support",
      },
      {
        id: "pop-medical-transport-networks",
        strategyType: "Community",
        sdohCategory: "Transportation",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Practical: Volunteer driver programs help elders access healthcare",
      },
      {
        id: "pop-medication-safety-education",
        strategyType: "Education",
        sdohCategory: "Safety",
        prevention: "Primary",
        quality: "OK",
        rationale:
          "General benefit: Polypharmacy and fall risk education for community",
      },
      {
        id: "pop-telehealth-expansion",
        strategyType: "Policy",
        sdohCategory: "Healthcare Access",
        prevention: "Tertiary",
        quality: "Neutral",
        rationale:
          "Limited value: Eleanor may have technology barriers; in-person care often needed",
      },
    ],
    icfData: {
      healthCondition: {
        title: "Health Condition",
        content:
          "Post-menopausal Osteoporosis (T-score -2.8 lumbar spine, -2.5 femoral neck). Status post-Left Colles fracture (6 months ago, healed). Comorbidities: Controlled Hypertension, Urge Incontinence (undermanaged), Grade 1 Spondylolisthesis at L4-L5.",
        interventions: [
          {
            id: "calcium-vitamin-d-nutritional-counseling",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale:
              "Correct (2°): Managing disease progression and preventing fractures.",
          },
          {
            id: "education-on-bone-density-progression",
            domain: "Intellectual",
            impact: 1,
            prevention: "Secondary",
            quality: "OK",
            rationale:
              "Helpful (2°): Improving health literacy to manage condition.",
          },
          {
            id: "complete-bed-rest-to-conserve-energy",
            domain: "Physical",
            impact: -3,
            prevention: "Tertiary",
            quality: "Unsafe",
            rationale: "Harmful: Immobility accelerates bone loss.",
          },
          {
            id: "herbal-tea-for-general-relaxation",
            domain: "Emotional",
            impact: 0,
            prevention: "Primary",
            quality: "Neutral",
            rationale:
              "Low Value: Distractor. General wellness but misses key deficits.",
          },
          {
            id: "home-blood-pressure-monitoring",
            domain: "Physical",
            impact: 1,
            prevention: "Primary",
            quality: "Good",
            rationale: "Good (1°): Preventive monitoring for hypertension.",
          },
          {
            id: "calcium-rich-diet-education",
            domain: "Physical",
            impact: 2,
            prevention: "Secondary",
            quality: "Good",
            rationale: "Helpful (2°): Dietary support for bone health.",
          },
          {
            id: "osteoporosis-support-group-online",
            domain: "Social",
            impact: 2,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Psychosocial support from peers.",
          },
        ],
      },
      bodyFunctions: {
        title: "Body Functions & Structures",
        content:
          "Thoracic Kyphosis (50°). R Quadriceps strength 3+/5, Glute medius 3/5. Ankle dorsiflexion PROM limited to 0° bilaterally. Vestibular hypofunction (positive Head Impulse Test). Decreased proprioception b/l ankles.",
        interventions: [
          {
            id: "weight-bearing-resistance-training",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Correct (2°): Essential for bone density maintenance.",
          },
          {
            id: "vestibular-habituation-exercises",
            domain: "Physical",
            impact: 2,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale:
              "Correct (3°): Rehab for specific vestibular impairment.",
          },
          {
            id: "high-velocity-spinal-flexion-crunches",
            domain: "Physical",
            impact: -3,
            prevention: "Tertiary",
            quality: "Unsafe",
            rationale: "Contraindicated: Increases fracture risk.",
          },
          {
            id: "passive-ankle-pumps-seated",
            domain: "Physical",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Low Value: Too low intensity.",
          },
          {
            id: "mindfulness-for-body-awareness",
            domain: "Spiritual",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Good (3°): Manages fear and proprioception.",
          },
          {
            id: "progressive-resistance-bands",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Correct (2°): Strength training safe for home.",
          },
          {
            id: "single-leg-stance-training",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Correct (2°): Key balance exercise.",
          },
          {
            id: "deep-breathing-for-pain",
            domain: "Physical",
            impact: 1,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Helpful (3°): Pain management technique.",
          },
        ],
      },
      activities: {
        title: "Activities",
        content:
          "Sit-to-stand requires arm use (5xSTS > 15s). Walking endurance limited to <5 mins due to back pain/fatigue. Gait speed 0.6 m/s (household ambulator). Cannot reach overhead cupboards >90° flexion without pain.",
        interventions: [
          {
            id: "functional-sit-to-stand-training",
            domain: "Physical",
            impact: 2,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Functional rehabilitation.",
          },
          {
            id: "safe-reaching-mechanics-education",
            domain: "Intellectual",
            impact: 1,
            prevention: "Secondary",
            quality: "OK",
            rationale: "Helpful (2°): Prevents future injury.",
          },
          {
            id: "restrict-walking-to-indoors-only",
            domain: "Physical",
            impact: -2,
            prevention: "Secondary",
            quality: "Unsafe",
            rationale: "Harmful: Avoidance leads to decline.",
          },
          {
            id: "upper-body-ergometer-low-resistance",
            domain: "Physical",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Low Value: Wrong specificity.",
          },
          {
            id: "smartphone-medication-reminders",
            domain: "Intellectual",
            impact: 2,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Correct (2°): Improves adherence safety.",
          },
          {
            id: "energy-conservation-techniques",
            domain: "Physical",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Helpful (3°): Manages fatigue during ADLs.",
          },
          {
            id: "online-grocery-ordering-tutorial",
            domain: "Intellectual",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Solves shopping barrier.",
          },
        ],
      },
      participation: {
        title: "Participation",
        content:
          "Resigned from book club leadership. Ceased gardening (formerly daily activity). Avoids grocery shopping; relies on neighbor. Misses Sunday church due to fear of stairs.",
        interventions: [
          {
            id: "return-to-activity-plan-for-gardening",
            domain: "Occupational",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Restoring participation.",
          },
          {
            id: "community-balance-classes-tai-chi",
            domain: "Social",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Correct (2°): Fall risk reduction + Social.",
          },
          {
            id: "watching-gardening-shows-on-tv",
            domain: "Occupational",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Low Value: Passive.",
          },
          {
            id: "stop-all-outings-to-prevent-falls",
            domain: "Social",
            impact: -3,
            prevention: "Secondary",
            quality: "Unsafe",
            rationale: "Harmful: Severe isolation.",
          },
          {
            id: "accessible-transport-registration",
            domain: "Environmental",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Critical (3°): Enables community access.",
          },
          {
            id: "volunteer-phone-tree",
            domain: "Social",
            impact: 2,
            prevention: "Primary",
            quality: "Good",
            rationale: "Good (1°): Low-risk social engagement.",
          },
          {
            id: "family-video-call-schedule",
            domain: "Social",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Helpful (3°): Maintains family connection.",
          },
        ],
      },
      environmental: {
        title: "Environmental Factors",
        content:
          "Victorian home: 12 steep stairs to bedroom/bath (no handrail on right). Bathroom: Shower over tub (high step-over), no grab bars. Thick Persian rugs (trip hazard) in hallway. Low wattage lighting.",
        interventions: [
          {
            id: "home-safety-audit-and-modification",
            domain: "Environmental",
            impact: 2,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Correct (2°): Environmental risk reduction.",
          },
          {
            id: "install-thick-plush-carpeting",
            domain: "Environmental",
            impact: -2,
            prevention: "Secondary",
            quality: "Unsafe",
            rationale: "Unsafe: Increases trip hazard.",
          },
          {
            id: "proper-footwear-assessment",
            domain: "Physical",
            impact: 1,
            prevention: "Secondary",
            quality: "Good",
            rationale: "Good (2°): Safety measure.",
          },
          {
            id: "voice-activated-lights",
            domain: "Environmental",
            impact: 2,
            prevention: "Primary",
            quality: "Excellent",
            rationale: "Correct (1°): Prevents falls in dark.",
          },
          {
            id: "remove-throw-rugs",
            domain: "Environmental",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Critical (2°): Immediate hazard removal.",
          },
          {
            id: "bedside-commode-trial",
            domain: "Physical",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Helpful (3°): Manages urgency at night.",
          },
        ],
      },
      personal: {
        title: "Personal Factors",
        content:
          'High Fear of Falling (ABC score < 50%). Values independence ("I\'m not an invalid"). Skeptical of medication. Limits fluids to manage incontinence (increasing fall risk).',
        interventions: [
          {
            id: "cbt-strategies-for-fear-of-falling",
            domain: "Emotional",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Psych management of condition.",
          },
          {
            id: "accepting-falls-are-inevitable",
            domain: "Emotional",
            impact: -1,
            prevention: "Tertiary",
            quality: "Poor",
            rationale: "Negative: Learned helplessness.",
          },
          {
            id: "budgeting-for-home-mods",
            domain: "Financial",
            impact: 1,
            prevention: "Tertiary",
            quality: "OK",
            rationale: "Practical.",
          },
          {
            id: "journaling-for-anxiety",
            domain: "Emotional",
            impact: 2,
            prevention: "Primary",
            quality: "Good",
            rationale: "Good (1°): Coping mechanism.",
          },
          {
            id: "positive-affirmations-for-aging",
            domain: "Spiritual",
            impact: 1,
            prevention: "Primary",
            quality: "OK",
            rationale: "Supportive (1°): Mindset shift.",
          },
          {
            id: "silver-sneakers-membership",
            domain: "Social",
            impact: 2,
            prevention: "Primary",
            quality: "Excellent",
            rationale: "Correct (1°): Active aging engagement.",
          },
        ],
      },
    },
  },
  {
    id: "neuro",
    title: "Neurology: Post-Stroke Wellness",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-indigo-100 text-indigo-800",
    borderColor: "border-indigo-200",
    description:
      "Long-term wellness management for chronic stroke survivors emphasizing neuroplasticity and cardiovascular health.",
    learningObjectives: [
      "Apply neuroplasticity principles to long-term post-stroke wellness management",
      "Address economic stability and transportation as key Social Determinants of Health (SDOH)",
      "Develop strategies to combat social isolation and identity loss following a chronic cerebrovascular event",
    ],
    patient: {
      name: "Marcus",
      age: 54,
      diagnosis: "Left MCA Stroke (2 years post-onset)",
      image: "images/marcus.png",
      history:
        "Successful landscape architect who thrived on site visits and hiking with his two teenage sons. Since the stroke 2 years ago, he feels 'sidelined' watching his family hike without him. He struggles with the role reversal of relying on his wife for driving. He has right hemiparesis and mild expressive aphasia, which frustrates him during client calls, leading him to withdraw from professional consulting.",
      uMatterScores: {
        Physical: 4,
        Emotional: 4,
        Intellectual: 8,
        Social: 6,
        Spiritual: 7,
        Environmental: 8,
        Financial: 6,
        Occupational: 5,
      },
      wellnessAnswers: marcusAnswers,
    },
    sdohFactors: [
      {
        category: "Employment",
        description:
          "Knowledge workers with acquired disabilities face barriers returning to cognitively demanding roles",
      },
      {
        category: "Transportation",
        description:
          "Driving restrictions post-stroke create dependence and limit community participation",
      },
      {
        category: "Social",
        description:
          "Aphasia creates communication barriers that lead to social withdrawal and isolation",
      },
      {
        category: "Healthcare Access",
        description:
          "Comprehensive stroke rehabilitation requires multiple specialists and can be difficult to coordinate",
      },
    ],
    hrsnIndicators: [
      {
        category: "Employment",
        description:
          "On medical leave from architecture firm - role identity crisis and financial uncertainty",
        severity: "Moderate",
      },
      {
        category: "Transportation",
        description:
          "Unable to drive - dependent on wife, limiting independence and work capacity",
        severity: "High",
      },
      {
        category: "Social",
        description:
          "Withdrawing from social situations due to aphasia embarrassment; isolated from family activities",
        severity: "Moderate",
      },
      {
        category: "Healthcare Access",
        description:
          "Multiple chronic conditions (DM, HTN, HLD) requiring ongoing management and coordination",
        severity: "Moderate",
      },
    ],
    criticalNeeds: [
      {
        id: "marcus-secondary-stroke-prevention",
        description:
          "Address cardiovascular risk factors to prevent recurrent stroke (endocrinology and/or cardiology referral for uncontrolled DM/HTN)",
        category: "Medical",
        addressedBy: [
          "cardiovascular-risk-monitoring",
          "ref-endocrinology",
          "ref-cardiology",
          "ref-dietitian",
        ],
      },
      {
        id: "marcus-depression-screening",
        description:
          "Address situational depression and adjustment to disability (psychology or counseling referral)",
        category: "Safety",
        addressedBy: [
          "ref-psychology",
          "ref-counseling",
          "ref-health-psychology",
          "finding-new-athletic-identity",
        ],
      },
    ],
    referralOptions: [
      {
        id: "ref-endocrinology",
        domain: "Physical",
        impact: 3,
        prevention: "Secondary",
        quality: "Excellent",
        rationale:
          "Critical: A1c 7.8% with stroke history - aggressive glycemic control prevents recurrence",
      },
      {
        id: "ref-psychology",
        domain: "Emotional",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Essential: Situational depression, identity loss, adjustment to disability",
      },
      {
        id: "ref-speech-language",
        domain: "Social",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Essential: Expressive aphasia limiting work and social participation",
      },
      {
        id: "ref-driver-rehab",
        domain: "Occupational",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "High impact: Restoring driving independence is key to work/identity",
      },
      {
        id: "ref-vocational-rehab",
        domain: "Occupational",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Helpful: Work accommodations, modified duties, career transition support",
      },
      {
        id: "ref-occupational-therapy",
        domain: "Occupational",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Helpful: Fine motor, typing, work task modifications",
      },
      {
        id: "ref-prosthetist-orthotist",
        domain: "Physical",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Helpful: AFO optimization for improved gait and hiking potential",
      },
      {
        id: "ref-adaptive-sports",
        domain: "Social",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Beneficial: Adaptive hiking, cycling to restore athletic identity",
      },
      {
        id: "ref-dietitian",
        domain: "Physical",
        impact: 2,
        prevention: "Secondary",
        quality: "Good",
        rationale:
          "Supportive: Weight management, diabetic diet for stroke prevention",
      },
      {
        id: "ref-cardiology",
        domain: "Physical",
        impact: 1,
        prevention: "Secondary",
        quality: "OK",
        rationale: "Consider: HTN/HLD management if PCP needs support",
      },
      {
        id: "ref-physiatry",
        domain: "Physical",
        impact: 1,
        prevention: "Tertiary",
        quality: "OK",
        rationale: "Consider: Spasticity management if worsening",
      },
    ],
    populationInterventions: [
      {
        id: "pop-stroke-survivor-networks",
        strategyType: "Community",
        sdohCategory: "Social",
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "High impact: Peer support networks help stroke survivors rebuild identity and social connection",
      },
      {
        id: "pop-return-to-work-advocacy",
        strategyType: "Advocacy",
        sdohCategory: "Employment",
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "System change: Many employers lack understanding of reasonable accommodations for stroke survivors",
      },
      {
        id: "pop-aphasia-awareness-campaigns",
        strategyType: "Education",
        sdohCategory: "Social",
        prevention: "Primary",
        quality: "Excellent",
        rationale:
          "Prevention: Public awareness helps communities support communication disabilities",
      },
      {
        id: "pop-adaptive-recreation-programs",
        strategyType: "Community",
        sdohCategory: "Social",
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Identity restoration: Adaptive sports programs help athletes with disabilities stay active",
      },
      {
        id: "pop-workplace-ada-compliance",
        strategyType: "Policy",
        sdohCategory: "Employment",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "System support: Ensuring employers understand and implement required accommodations",
      },
      {
        id: "pop-medical-transport-networks",
        strategyType: "Community",
        sdohCategory: "Transportation",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Practical: Transportation solutions for those with driving restrictions",
      },
      {
        id: "pop-chronic-disease-education",
        strategyType: "Education",
        sdohCategory: "Healthcare Access",
        prevention: "Secondary",
        quality: "Good",
        rationale:
          "Prevention: Community education on stroke risk factors and warning signs",
      },
      {
        id: "pop-caregiver-support-expansion",
        strategyType: "Policy",
        sdohCategory: "Social",
        prevention: "Tertiary",
        quality: "OK",
        rationale:
          "Family support: Spousal caregivers need respite and support resources",
      },
    ],
    icfData: {
      healthCondition: {
        title: "Health Condition",
        content:
          "L MCA Ischemic Stroke (2 years ago). Residual R Hemiparesis. Comorbidities: Type 2 Diabetes (A1c 7.8%), Hypertension, Hyperlipidemia. BMI 29. History of smoking (quit post-stroke).",
        interventions: [
          {
            id: "cardiovascular-risk-monitoring",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Critical (2°): Preventing recurrence (2nd stroke).",
          },
          {
            id: "limit-fluid-intake-to-avoid-bathroom-trips",
            domain: "Physical",
            impact: -2,
            prevention: "Secondary",
            quality: "Unsafe",
            rationale: "Unsafe: Dehydration risk.",
          },
          {
            id: "generic-multivitamin-therapy",
            domain: "Physical",
            impact: 0,
            prevention: "Primary",
            quality: "Neutral",
            rationale: "Low Value: General health, non-specific.",
          },
        ],
      },
      bodyFunctions: {
        title: "Body Functions & Structures",
        content:
          "R UE Spasticity (MAS 2 in elbow flexors). R LE Spasticity (MAS 1+ gastroc). R Grip strength 15kg (L is 45kg). R Shoulder subluxation (1 finger breadth). Mild Expressive Aphasia (word-finding latency). Decreased CV fitness (VO2 peak 14 ml/kg/min).",
        interventions: [
          {
            id: "adapted-hiit-program",
            domain: "Physical",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Improving capacity/neuroplasticity.",
          },
          {
            id: "overhead-pulleys-for-r-shoulder",
            domain: "Physical",
            impact: -3,
            prevention: "Tertiary",
            quality: "Unsafe",
            rationale: "Contraindicated: Impingement risk.",
          },
          {
            id: "stress-ball-squeezing-repetitive",
            domain: "Physical",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Low Value: Reinforces spasticity.",
          },
          {
            id: "meditation-for-bp-control",
            domain: "Spiritual",
            impact: 2,
            prevention: "Secondary",
            quality: "Good",
            rationale: "Good (2°): Risk factor management.",
          },
        ],
      },
      activities: {
        title: "Activities",
        content:
          "Ambulates with AFO + Cane. Gait: R circumduction, decreased stance time on R. Walking speed 0.8 m/s (limited community). Typing speed reduced 70%. Unable to drive. Difficulty with dual-task walking.",
        interventions: [
          {
            id: "gait-speed-challenges",
            domain: "Physical",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Correct (3°): Functional training.",
          },
          {
            id: "use-wheelchair-for-all-distances",
            domain: "Physical",
            impact: -2,
            prevention: "Tertiary",
            quality: "Poor",
            rationale: "Negative: Learned non-use.",
          },
          {
            id: "adaptive-typing-technology-training",
            domain: "Occupational",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Correct (3°): Compensatory strategy.",
          },
        ],
      },
      participation: {
        title: "Participation",
        content:
          "On medical leave from Architecture firm; feels unable to conduct site visits on uneven terrain. Unable to join family hikes (core identity loss). Withdraws from social dinners due to aphasia embarrassment.",
        interventions: [
          {
            id: "adaptive-hiking-group-participation",
            domain: "Social",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Excellent (3°): Reintegration + Fitness.",
          },
          {
            id: "solo-hiking-on-flat-pavement",
            domain: "Social",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Distractor: Misses social/nature context.",
          },
          {
            id: "aphasia-conversation-cafe",
            domain: "Social",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Social participation.",
          },
        ],
      },
      environmental: {
        title: "Environmental Factors",
        content:
          "Lives in hilly neighborhood (steep driveway). Home office on 2nd floor. Dependent on wife for transport. Office chair non-supportive for hemiplegic side.",
        interventions: [
          {
            id: "accessible-trail-mapping",
            domain: "Environmental",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Helpful (3°): Environmental modification.",
          },
          {
            id: "buying-expensive-stroke-cure-supplements",
            domain: "Financial",
            impact: -2,
            prevention: "Secondary",
            quality: "Unsafe",
            rationale: "Harmful: Financial toxicity.",
          },
          {
            id: "partner-communication-training",
            domain: "Social",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Good (3°): Social support enhancement.",
          },
        ],
      },
      personal: {
        title: "Personal Factors",
        content:
          'Former marathon runner. Identifies strongly as "provider" and "athlete". Currently experiencing situational depression and loss of confidence. Frustrated by slow progress.',
        interventions: [
          {
            id: "finding-new-athletic-identity",
            domain: "Spiritual",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Adaptation.",
          },
          {
            id: "resignation-to-new-normal-limits",
            domain: "Emotional",
            impact: -2,
            prevention: "Tertiary",
            quality: "Poor",
            rationale: "Negative: Fixed mindset.",
          },
          {
            id: "disability-benefits-navigation",
            domain: "Financial",
            impact: 2,
            prevention: "Tertiary",
            quality: "OK",
            rationale: "Practical.",
          },
        ],
      },
    },
  },
  {
    id: "peds",
    title: "Pediatrics: Cerebral Palsy",
    icon: <Activity className="w-6 h-6" />,
    color: "bg-rose-100 text-rose-800",
    borderColor: "border-rose-200",
    description:
      "Promoting fitness, fun, and inclusion for children with developmental disabilities.",
    learningObjectives: [
      "Determine how fitness and inclusion contribute to intellectual and emotional wellness in children",
      "Analyze family-centered care models within a physical therapy context",
      "Evaluate nutrition and sedentary behavior impacts on growth and development in kids with spasticity",
    ],
    patient: {
      name: "Leo",
      age: 8,
      diagnosis: "Spastic Diplegic Cerebral Palsy (GMFCS Level III)",
      image: "images/leo.png",
      history:
        "Uses a posterior walker at school but tires easily in the long hallways. Huge fan of 'The Avengers' and wants to be 'strong like Hulk.' Parents are supportive but overwhelmed; both work full-time. They rely on quick meals, contributing to recent weight gain. Leo is starting to notice he can't keep up with peers during recess tag, leading to frustration and acting out in class.",
      uMatterScores: {
        Physical: 7,
        Emotional: 6,
        Intellectual: 9,
        Social: 7,
        Spiritual: 9,
        Environmental: 9,
        Financial: 6,
        Occupational: 8,
      },
      wellnessAnswers: leoAnswers,
    },
    sdohFactors: [
      {
        category: "Education",
        description:
          "Many schools lack universal design features - long distances, heavy doors, inaccessible playgrounds",
      },
      {
        category: "Social",
        description:
          "Community spaces and birthday party venues often have accessibility barriers excluding children with disabilities",
      },
      {
        category: "Employment",
        description:
          "Families of children with disabilities face significant caregiver burden affecting work/life balance",
      },
      {
        category: "Healthcare Access",
        description:
          "Pediatric specialty care (orthopedics, PT, OT) requires multiple appointments creating scheduling burdens",
      },
    ],
    hrsnIndicators: [
      {
        category: "Education",
        description:
          "School accessibility barriers - long distances, heavy doors, inaccessible playground",
        severity: "High",
      },
      {
        category: "Social",
        description:
          "Peer exclusion - sits out PE/recess, misses birthday parties at inaccessible venues",
        severity: "High",
      },
      {
        category: "Food",
        description:
          "Poor nutrition due to time-poor family relying on quick meals; contributing to weight gain",
        severity: "Moderate",
      },
      {
        category: "Employment",
        description:
          "Caregiver burden - both parents work full-time, limited time for therapy/medical appointments",
        severity: "Moderate",
      },
    ],
    criticalNeeds: [
      {
        id: "leo-school-inclusion",
        description:
          "Address school barriers through IEP/504 accommodations and inclusive PE consultation",
        category: "HRSN",
        addressedBy: [
          "ref-school-services",
          "inclusive-pe-curriculum-consulting",
          "ref-occupational-therapy",
        ],
      },
      {
        id: "leo-caregiver-support",
        description:
          "Address caregiver burden through respite care and community resources",
        category: "HRSN",
        addressedBy: [
          "respite-care-resources-for-parents",
          "ref-respite-care",
          "ref-parent-training",
          "ref-autism-support",
        ],
      },
    ],
    referralOptions: [
      {
        id: "ref-school-services",
        domain: "Occupational",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Critical: IEP modifications, classroom accommodations, school-based therapy coordination",
      },
      {
        id: "ref-occupational-therapy",
        domain: "Occupational",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Essential: Fine motor, dressing, school tasks, sensory needs",
      },
      {
        id: "ref-respite-care",
        domain: "Emotional",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Essential: Prevent caregiver burnout, allow parents to recharge",
      },
      {
        id: "ref-dietitian",
        domain: "Physical",
        impact: 2,
        prevention: "Secondary",
        quality: "Good",
        rationale:
          "Important: Address weight gain, family meal planning for busy schedules",
      },
      {
        id: "ref-recreation-therapy",
        domain: "Social",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Beneficial: Adaptive play, community inclusion, social skills",
      },
      {
        id: "ref-adaptive-sports",
        domain: "Social",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "High value: Sled hockey, adaptive programs for peer participation",
      },
      {
        id: "ref-child-psychology",
        domain: "Emotional",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Helpful: Self-esteem, behavioral concerns, peer comparison coping",
      },
      {
        id: "ref-prosthetist-orthotist",
        domain: "Physical",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Helpful: AFO review, seating, equipment as he grows",
      },
      {
        id: "ref-parent-training",
        domain: "Emotional",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Supportive: Behavior management strategies, advocacy skills",
      },
      {
        id: "ref-orthopedics",
        domain: "Physical",
        impact: 2,
        prevention: "Secondary",
        quality: "Good",
        rationale:
          "Important: Hip surveillance monitoring, surgical planning if needed",
      },
      {
        id: "ref-developmental-peds",
        domain: "Physical",
        impact: 1,
        prevention: "Secondary",
        quality: "OK",
        rationale:
          "Consider: Comprehensive developmental review if new concerns",
      },
      {
        id: "ref-aquatic-therapy",
        domain: "Physical",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Beneficial: Fun fitness, tone management, strengthening",
      },
    ],
    populationInterventions: [
      {
        id: "pop-inclusive-playground-design",
        strategyType: "Policy",
        sdohCategory: "Social",
        prevention: "Primary",
        quality: "Excellent",
        rationale:
          "Universal design: Inclusive playgrounds benefit all children, not just those with disabilities",
      },
      {
        id: "pop-inclusive-pe-curriculum",
        strategyType: "Education",
        sdohCategory: "Education",
        prevention: "Primary",
        quality: "Excellent",
        rationale:
          "Systemic change: Training PE teachers in adapted activities creates lasting inclusion",
      },
      {
        id: "pop-disability-awareness-schools",
        strategyType: "Education",
        sdohCategory: "Social",
        prevention: "Primary",
        quality: "Excellent",
        rationale:
          "Prevention: Early disability awareness reduces stigma and promotes peer acceptance",
      },
      {
        id: "pop-adaptive-recreation-programs",
        strategyType: "Community",
        sdohCategory: "Social",
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Inclusion: Community adaptive sports create peer connections and physical activity opportunities",
      },
      {
        id: "pop-family-leave-policies",
        strategyType: "Policy",
        sdohCategory: "Employment",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Family support: Flexible work policies help caregiving families manage appointments",
      },
      {
        id: "pop-school-health-screening",
        strategyType: "Screening",
        sdohCategory: "Healthcare Access",
        prevention: "Secondary",
        quality: "Good",
        rationale:
          "Early detection: School-based screenings catch developmental concerns early",
      },
      {
        id: "pop-healthy-school-meals",
        strategyType: "Policy",
        sdohCategory: "Food",
        prevention: "Primary",
        quality: "Good",
        rationale:
          "Nutrition: Improved school nutrition helps families with limited time for meal prep",
      },
      {
        id: "pop-caregiver-support-expansion",
        strategyType: "Policy",
        sdohCategory: "Social",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Respite: Expanding respite care access prevents caregiver burnout",
      },
    ],
    icfData: {
      healthCondition: {
        title: "Health Condition",
        content:
          "Spastic Diplegic Cerebral Palsy, GMFCS Level III. Hx of premature birth (28 weeks). Hip surveillance: Migration percentage 25% (R), 20% (L). Vision: Strabismus (corrected).",
        interventions: [
          {
            id: "pain-monitoring-education",
            domain: "Physical",
            impact: 2,
            prevention: "Secondary",
            quality: "Good",
            rationale: "Important (2°): Early detection of complications.",
          },
          {
            id: "ignore-hip-surveillance-to-reduce-stress",
            domain: "Physical",
            impact: -3,
            prevention: "Secondary",
            quality: "Unsafe",
            rationale: "Dangerous: Hip screening is vital (2° prevention).",
          },
          {
            id: "generic-wait-and-see-approach",
            domain: "Intellectual",
            impact: -1,
            prevention: "Tertiary",
            quality: "Poor",
            rationale: "Poor Practice.",
          },
        ],
      },
      bodyFunctions: {
        title: "Body Functions & Structures",
        content:
          "B/L Hamstring/Gastroc spasticity (MAS 2). Popliteal angle -40°. Trunk hypotonia. Weakness in hip abductors/extensors (3/5). High fatigability (energy expenditure index 2x norms).",
        interventions: [
          {
            id: "aquatic-therapy-swimming",
            domain: "Physical",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Fitness & Tone management.",
          },
          {
            id: "aggressive-hamstring-stretching-over-pain-threshold",
            domain: "Physical",
            impact: -2,
            prevention: "Tertiary",
            quality: "Unsafe",
            rationale: "Harmful: Micro-trauma risk.",
          },
          {
            id: "passive-standing-frame-10-mins-per-day",
            domain: "Physical",
            impact: 0,
            prevention: "Secondary",
            quality: "Neutral",
            rationale: "Low Value: Dosage too low for bone density.",
          },
          {
            id: "fatigue-management-games",
            domain: "Intellectual",
            impact: 1,
            prevention: "Tertiary",
            quality: "OK",
            rationale: "Good (3°): Self-regulation.",
          },
        ],
      },
      activities: {
        title: "Activities",
        content:
          "Ambulates with posterior walker (household/school). Max distance 50m before fatigue. Transfers: Floor-to-stand requires external support. Needs assistance for lower body dressing (buttons/shoes).",
        interventions: [
          {
            id: "adaptive-cycling",
            domain: "Physical",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Correct (3°): Recreation & Fitness.",
          },
          {
            id: "passive-movement-by-parents",
            domain: "Physical",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Low Value: No motor learning.",
          },
          {
            id: "dressing-independence-games",
            domain: "Occupational",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Correct (3°): ADL training.",
          },
        ],
      },
      participation: {
        title: "Participation",
        content:
          'Mainstream 3rd grade. Sits out PE/Recess ("too slow" for tag). Misses birthday parties at trampoline parks. Loves "Avengers" but feels like the "weak one".',
        interventions: [
          {
            id: "sled-hockey-team",
            domain: "Social",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Excellent (3°): Inclusion & Participation.",
          },
          {
            id: "home-schooling-to-avoid-bullying",
            domain: "Social",
            impact: -2,
            prevention: "Tertiary",
            quality: "Poor",
            rationale: "Negative: Avoidance.",
          },
          {
            id: "inclusive-pe-curriculum-consulting",
            domain: "Occupational",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Correct (3°): School participation.",
          },
        ],
      },
      environmental: {
        title: "Environmental Factors",
        content:
          "School: Long distances between classes, heavy doors. Playground: Woodchips (inaccessible for walker). Home: 2-story townhome, bedroom upstairs. Parents work full-time (time-poor).",
        interventions: [
          {
            id: "respite-care-resources-for-parents",
            domain: "Emotional",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Caregiver support.",
          },
          {
            id: "move-to-rural-home-with-no-stairs",
            domain: "Environmental",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Distractor.",
          },
          {
            id: "grant-funding-for-adaptive-equipment",
            domain: "Financial",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Removing barriers.",
          },
        ],
      },
      personal: {
        title: "Personal Factors",
        content:
          'Bright, verbal, competitive spirit. Loves superheroes. Becoming self-conscious about walker. Uses fatigue as reason to avoid challenging tasks ("I\'m too tired").',
        interventions: [
          {
            id: "identify-superhero-strengths",
            domain: "Spiritual",
            impact: 2,
            prevention: "Primary",
            quality: "Good",
            rationale: "Good (1°/3°): Building general resilience.",
          },
          {
            id: "focus-solely-on-what-he-cannot-do",
            domain: "Emotional",
            impact: -2,
            prevention: "Tertiary",
            quality: "Unsafe",
            rationale: "Harmful.",
          },
          {
            id: "self-advocacy-training",
            domain: "Emotional",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale: "Correct (3°): Lifelong skill.",
          },
        ],
      },
    },
  },
  {
    id: "sci_dm_homeless",
    title: "SCI & Homelessness: Complex Diabetes",
    icon: <Tent className="w-6 h-6" />,
    color: "bg-orange-100 text-orange-800",
    borderColor: "border-orange-200",
    description:
      "Managing T2DM and Spinal Cord Injury within the constraints of housing instability and resource scarcity.",
    learningObjectives: [
      "Manage complex comorbidities (SCI + T2DM) within the context of housing instability",
      "Identify health-related social needs (HRSNs) and prioritize them for high-risk patients",
      "Implement strategies for professional advocacy and resource linkage in a community health setting",
    ],
    patient: {
      name: "Sam",
      age: 42,
      diagnosis: "T10 Paraplegia (ASIA A), Uncontrolled T2DM",
      image: "images/sam.png",
      history:
        "Former construction foreman injured in a site accident 3 years ago. Lost housing 8 months ago due to medical debt. Staying in a 'high-barrier' shelter requiring daily 7 AM exit. Wheelchair is poorly fitted (too wide). Struggles to manage insulin (vials) due to lack of refrigeration and theft risk. History of recurrent foot ulcers he cannot feel.",
      uMatterScores: {
        Physical: 3,
        Emotional: 4,
        Intellectual: 7,
        Social: 5,
        Spiritual: 7,
        Environmental: 4,
        Financial: 2,
        Occupational: 4,
      },
      wellnessAnswers: samAnswers,
    },
    sdohFactors: [
      {
        category: "Housing",
        description:
          "Inadequate accessible housing stock and high-barrier shelters create homelessness cycles for people with disabilities",
      },
      {
        category: "Financial",
        description:
          "Medical debt is a leading cause of bankruptcy and housing loss in the US healthcare system",
      },
      {
        category: "Food",
        description:
          "Food deserts and lack of refrigeration options in shelters create barriers to managing diabetes",
      },
      {
        category: "Transportation",
        description:
          "Public transit infrastructure often fails ADA accessibility standards, limiting mobility for wheelchair users",
      },
      {
        category: "Healthcare Access",
        description:
          "Fragmented care systems make coordination difficult for complex patients with multiple needs",
      },
    ],
    hrsnIndicators: [
      {
        category: "Housing",
        description:
          "Homeless - staying in high-barrier shelter with daily 7 AM exit requirement",
        severity: "High",
      },
      {
        category: "Food",
        description:
          "Food insecurity - no refrigeration for insulin, limited access to diabetic-appropriate meals",
        severity: "High",
      },
      {
        category: "Financial",
        description:
          "Medical debt caused housing loss; no income, unable to return to construction work",
        severity: "High",
      },
      {
        category: "Safety",
        description:
          "Worsening pressure injury (Grade 2), theft risk for medications/equipment, weather exposure",
        severity: "High",
      },
      {
        category: "Transportation",
        description:
          "Inaccessible public transit stops; wheelchair too wide for many doorways",
        severity: "High",
      },
      {
        category: "Healthcare Access",
        description:
          "Skeptical of healthcare system; difficulty keeping appointments due to shelter schedule",
        severity: "Moderate",
      },
    ],
    criticalNeeds: [
      {
        id: "sam-housing-first",
        description:
          "Address homelessness as root cause of health decline (housing services/social work referral)",
        category: "HRSN",
        addressedBy: [
          "social-work-consult-for-housing-first",
          "ref-social-work",
          "ref-housing-services",
          "community-resource-shelter-mapping",
        ],
      },
      {
        id: "sam-wound-care",
        description:
          "Address worsening pressure injury before it progresses to sepsis/osteomyelitis",
        category: "Safety",
        addressedBy: [
          "visual-skin-inspection-education-mirror",
          "pressure-relief-weight-shifts-every-15m",
          "obtain-ro-cushion-for-wheelchair",
          "ref-wound-care",
          "ref-wheelchair-seating",
        ],
      },
    ],
    referralOptions: [
      {
        id: "ref-social-work",
        domain: "Environmental",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "CRITICAL: Housing First approach - cannot manage health without stable housing",
      },
      {
        id: "ref-housing-services",
        domain: "Environmental",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Essential: Accessible housing placement, shelter navigation",
      },
      {
        id: "ref-wound-care",
        domain: "Physical",
        impact: 3,
        prevention: "Secondary",
        quality: "Excellent",
        rationale:
          "Urgent: Grade 2 pressure injury worsening - prevent sepsis/amputation",
      },
      {
        id: "ref-wheelchair-seating",
        domain: "Physical",
        impact: 3,
        prevention: "Secondary",
        quality: "Excellent",
        rationale:
          "Critical: Proper seating/cushion essential for wound healing and prevention",
      },
      {
        id: "ref-endocrinology",
        domain: "Physical",
        impact: 3,
        prevention: "Secondary",
        quality: "Excellent",
        rationale:
          "Important: A1c 11.2% requires specialist management, heat-stable insulin options",
      },
      {
        id: "ref-vocational-rehab",
        domain: "Occupational",
        impact: 3,
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "High impact: Retraining for sedentary employment, income restoration",
      },
      {
        id: "ref-financial-counseling",
        domain: "Financial",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Helpful: Medical debt navigation, disability benefits, Medicaid",
      },
      {
        id: "ref-case-management",
        domain: "Environmental",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Helpful: Care coordination across fragmented services",
      },
      {
        id: "ref-community-health-worker",
        domain: "Social",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Beneficial: Cultural liaison, navigation, trust building",
      },
      {
        id: "ref-podiatry",
        domain: "Physical",
        impact: 2,
        prevention: "Secondary",
        quality: "Good",
        rationale: "Important: Diabetic foot care despite sensory loss",
      },
      {
        id: "ref-psychology",
        domain: "Emotional",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Supportive: Adjustment, coping, healthcare system trust",
      },
      {
        id: "ref-independent-living",
        domain: "Social",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Beneficial: Peer support, advocacy, skills training",
      },
      {
        id: "ref-medication-assist",
        domain: "Physical",
        impact: 2,
        prevention: "Secondary",
        quality: "Good",
        rationale: "Practical: Free/reduced cost insulin and supplies",
      },
      {
        id: "ref-dme-loaner",
        domain: "Physical",
        impact: 2,
        prevention: "Tertiary",
        quality: "Good",
        rationale: "Practical: Replacement wheelchair, cushion, supplies",
      },
      {
        id: "ref-food-bank",
        domain: "Physical",
        impact: 1,
        prevention: "Tertiary",
        quality: "OK",
        rationale: "Supportive: Food access, though diabetic options limited",
      },
      {
        id: "ref-urology",
        domain: "Physical",
        impact: 1,
        prevention: "Secondary",
        quality: "OK",
        rationale:
          "Consider: Neurogenic bladder management if UTI issues arise",
      },
    ],
    populationInterventions: [
      {
        id: "pop-housing-first-programs",
        strategyType: "Policy",
        sdohCategory: "Housing",
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Evidence-based: Housing First approach shows better health outcomes than treatment-first models",
      },
      {
        id: "pop-accessible-shelter-standards",
        strategyType: "Policy",
        sdohCategory: "Housing",
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "System change: Many shelters lack accessible beds, bathrooms, and flexible hours for medical needs",
      },
      {
        id: "pop-street-medicine-programs",
        strategyType: "Community",
        sdohCategory: "Healthcare Access",
        prevention: "Tertiary",
        quality: "Excellent",
        rationale:
          "Meeting people where they are: Mobile healthcare reaches those who cannot navigate traditional systems",
      },
      {
        id: "pop-medical-debt-reform",
        strategyType: "Advocacy",
        sdohCategory: "Financial",
        prevention: "Primary",
        quality: "Excellent",
        rationale:
          "Root cause: Medical debt drives housing insecurity; policy reform prevents the cycle",
      },
      {
        id: "pop-transit-ada-enforcement",
        strategyType: "Advocacy",
        sdohCategory: "Transportation",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "System level: Enforcing existing ADA requirements for accessible public transit",
      },
      {
        id: "pop-community-health-worker-training",
        strategyType: "Education",
        sdohCategory: "Healthcare Access",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Workforce: Training CHWs to serve people experiencing homelessness",
      },
      {
        id: "pop-diabetic-meal-programs",
        strategyType: "Community",
        sdohCategory: "Food",
        prevention: "Secondary",
        quality: "Good",
        rationale:
          "Practical: Food pantries with diabetes-friendly options address a real gap",
      },
      {
        id: "pop-low-barrier-shelter-model",
        strategyType: "Policy",
        sdohCategory: "Housing",
        prevention: "Tertiary",
        quality: "Good",
        rationale:
          "Harm reduction: Low-barrier shelters allow people to access care without arbitrary requirements",
      },
      {
        id: "pop-peer-support-training",
        strategyType: "Education",
        sdohCategory: "Social",
        prevention: "Tertiary",
        quality: "OK",
        rationale:
          "Lived experience: People with disabilities can support others navigating similar challenges",
      },
    ],
    icfData: {
      healthCondition: {
        title: "Health Condition",
        content:
          "T10 Complete SCI (ASIA A). Type 2 Diabetes (A1c 11.2%). Grade 2 pressure injury on R ischial tuberosity (worsening). Neuropathic pain (6/10).",
        interventions: [
          {
            id: "visual-skin-inspection-education-mirror",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale:
              "Critical (2°): Preventing sepsis/osteomyelitis in setting of sensory loss.",
          },
          {
            id: "switch-to-heat-stable-insulin-pens",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale:
              "Correct (2°): Adapts medical need to environmental constraint (no fridge).",
          },
          {
            id: "prescribe-complex-vial-syringe-regimen",
            domain: "Physical",
            impact: -3,
            prevention: "Secondary",
            quality: "Unsafe",
            rationale:
              "Harmful: Impossible to manage without refrigeration/hygiene, leads to non-adherence.",
          },
          {
            id: "low-sodium-diet-education",
            domain: "Physical",
            impact: 0,
            prevention: "Primary",
            quality: "Neutral",
            rationale:
              "Low Value: Not the priority given A1c and active wound risk.",
          },
        ],
      },
      bodyFunctions: {
        title: "Body Functions & Structures",
        content:
          "Paraplegia (no motor/sensory below T10). Impaired thermoregulation. Autonomic Dysreflexia risk. fluctuating blood glucose causing dizziness.",
        interventions: [
          {
            id: "pressure-relief-weight-shifts-every-15m",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale:
              "Correct (2°): Mandatory to heal current ulcer and prevent new ones.",
          },
          {
            id: "upper-extremity-strengthening",
            domain: "Physical",
            impact: 2,
            prevention: "Tertiary",
            quality: "Good",
            rationale:
              "Correct (3°): Essential for transfers and wheelchair propulsion.",
          },
          {
            id: "hot-packs-for-back-pain",
            domain: "Physical",
            impact: -3,
            prevention: "Tertiary",
            quality: "Unsafe",
            rationale: "Contraindicated: Burn risk due to sensory loss.",
          },
          {
            id: "passive-rom-of-fingers",
            domain: "Physical",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Distractor: Not indicated for T10 injury.",
          },
        ],
      },
      activities: {
        title: "Activities",
        content:
          "Independent w/c propulsion on flat surfaces, dependent on curbs. Transfers: Stand-pivot (unsafe) vs sliding board. Hygiene: difficulty accessing accessible showers.",
        interventions: [
          {
            id: "advanced-wheelchair-skills-curbs",
            domain: "Physical",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Essential for navigating city terrain.",
          },
          {
            id: "self-catheterization-hygiene-education",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale:
              "Correct (2°): Preventing UTI in public restroom settings.",
          },
          {
            id: "encourage-walking-barefoot-to-toughen-feet",
            domain: "Physical",
            impact: -3,
            prevention: "Tertiary",
            quality: "Unsafe",
            rationale:
              "Harmful: Major trauma/ulcer risk for diabetic/SCI foot.",
          },
          {
            id: "fine-motor-coordination-drills",
            domain: "Physical",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Low Value: Not a deficit.",
          },
        ],
      },
      participation: {
        title: "Participation",
        content:
          "Unable to return to construction. Barrier to entering shelters (steps). Socially isolated from former work crew. Spends days in library.",
        interventions: [
          {
            id: "vocational-rehab-referral",
            domain: "Occupational",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale: "Correct (3°): Retraining for sedentary employment.",
          },
          {
            id: "community-resource-shelter-mapping",
            domain: "Environmental",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale: "Correct (2°): Identifying accessible safe havens.",
          },
          {
            id: "suggest-job-requiring-heavy-lifting",
            domain: "Occupational",
            impact: -2,
            prevention: "Tertiary",
            quality: "Poor",
            rationale: "Harmful: Unrealistic and discouraging.",
          },
          {
            id: "solitary-puzzles",
            domain: "Intellectual",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Distractor: Isolating.",
          },
        ],
      },
      environmental: {
        title: "Environmental Factors",
        content:
          "Homeless. Lack of refrigeration. High theft risk for meds/equipment. Inaccessible public transit stops nearby. Weather exposure.",
        interventions: [
          {
            id: "social-work-consult-for-housing-first",
            domain: "Environmental",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale:
              "Correct (3°): addressing the root cause of health disparity.",
          },
          {
            id: "obtain-ro-cushion-for-wheelchair",
            domain: "Physical",
            impact: 3,
            prevention: "Secondary",
            quality: "Excellent",
            rationale:
              "Correct (2°): Essential equipment for tissue integrity.",
          },
          {
            id: "donate-standard-foam-cushion",
            domain: "Physical",
            impact: -2,
            prevention: "Secondary",
            quality: "Poor",
            rationale:
              "Harmful: Inadequate pressure relief for existing ulcer.",
          },
          {
            id: "ergonomic-keyboard",
            domain: "Occupational",
            impact: 0,
            prevention: "Tertiary",
            quality: "Neutral",
            rationale: "Distractor: Low priority.",
          },
        ],
      },
      personal: {
        title: "Personal Factors",
        content:
          'Resilient but exhausted. "Street smart". Skeptical of healthcare system due to past judgment. Deeply worried about foot infection ("I saw guys lose legs").',
        interventions: [
          {
            id: "peer-mentoring-sci-survivors",
            domain: "Social",
            impact: 3,
            prevention: "Tertiary",
            quality: "Excellent",
            rationale:
              "Correct (3°): Building social capital and self-efficacy.",
          },
          {
            id: "motivational-interviewing-for-diabetes",
            domain: "Emotional",
            impact: 2,
            prevention: "Secondary",
            quality: "Good",
            rationale: "Correct (2°): Collaborative approach builds trust.",
          },
          {
            id: "tough-love-regarding-homelessness",
            domain: "Emotional",
            impact: -3,
            prevention: "Tertiary",
            quality: "Unsafe",
            rationale:
              "Harmful: Increases stigma and destroys therapeutic alliance.",
          },
          {
            id: "personality-testing",
            domain: "Intellectual",
            impact: 0,
            prevention: "Primary",
            quality: "Neutral",
            rationale: "Distractor.",
          },
        ],
      },
    },
  },
];
