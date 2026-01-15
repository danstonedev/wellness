import { User, Brain, Activity, Tent } from 'lucide-react';
import type { Population } from '../types';

export const populations: Population[] = [
    {
        id: 'geriatrics',
        title: 'Geriatrics: Osteoporosis & Fall Risk',
        icon: <User className="w-6 h-6" />,
        color: 'bg-emerald-100 text-emerald-800',
        borderColor: 'border-emerald-200',
        description: 'Wellness strategies for aging adults focusing on bone health, balance, and maintaining independence.',
        patient: {
            name: 'Eleanor',
            age: 78,
            diagnosis: 'Osteoporosis, History of Falls',
            history: "Lives alone in a two-story Victorian home she's owned for 40 years; the upstairs bedroom is becoming hard to access. Retired English teacher who used to host a weekly book club. Her 'pride and joy' rose garden has been neglected since she slipped on wet pavement 6 months ago, leading to a Colles fracture. She admits to limiting fluid intake to avoid rushing to the bathroom at night.",
            uMatterScores: {
                Physical: 3,
                Emotional: 5,
                Intellectual: 9,
                Social: 2,
                Spiritual: 7,
                Environmental: 6,
                Financial: 8,
                Occupational: 4
            }
        },
        icfData: {
            healthCondition: {
                title: 'Health Condition',
                content: 'Post-menopausal Osteoporosis (T-score -2.8 lumbar spine, -2.5 femoral neck). Status post-Left Colles fracture (6 months ago, healed). Comorbidities: Controlled Hypertension, Urge Incontinence (undermanaged), Grade 1 Spondylolisthesis at L4-L5.',
                interventions: [
                    { text: 'Calcium/Vitamin D nutritional counseling', domain: 'Physical', impact: 3, prevention: 'Secondary', rationale: 'Correct (2°): Managing disease progression and preventing fractures.' },
                    { text: 'Education on bone density progression', domain: 'Intellectual', impact: 1, prevention: 'Secondary', rationale: 'Helpful (2°): Improving health literacy to manage condition.' },
                    { text: 'Complete bed rest to conserve energy', domain: 'Physical', impact: -3, prevention: 'Tertiary', rationale: 'Harmful: Immobility accelerates bone loss.' },
                    { text: 'Herbal tea for general relaxation', domain: 'Emotional', impact: 0, prevention: 'Primary', rationale: 'Low Value: Distractor. General wellness but misses key deficits.' }
                ]
            },
            bodyFunctions: {
                title: 'Body Functions & Structures',
                content: 'Thoracic Kyphosis (50°). R Quadriceps strength 3+/5, Glute medius 3/5. Ankle dorsiflexion PROM limited to 0° bilaterally. Vestibular hypofunction (positive Head Impulse Test). Decreased proprioception b/l ankles.',
                interventions: [
                    { text: 'Weight-bearing resistance training', domain: 'Physical', impact: 3, prevention: 'Secondary', rationale: 'Correct (2°): Essential for bone density maintenance.' },
                    { text: 'Vestibular habituation exercises', domain: 'Physical', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): Rehab for specific vestibular impairment.' },
                    { text: 'High-velocity spinal flexion (Crunches)', domain: 'Physical', impact: -3, prevention: 'Tertiary', rationale: 'Contraindicated: Increases fracture risk.' },
                    { text: 'Passive ankle pumps (seated)', domain: 'Physical', impact: 0, prevention: 'Tertiary', rationale: 'Low Value: Too low intensity.' },
                    { text: 'Mindfulness for body awareness', domain: 'Spiritual', impact: 2, prevention: 'Tertiary', rationale: 'Good (3°): Manages fear and proprioception.' }
                ]
            },
            activities: {
                title: 'Activities',
                content: 'Sit-to-stand requires arm use (5xSTS > 15s). Walking endurance limited to <5 mins due to back pain/fatigue. Gait speed 0.6 m/s (household ambulator). Cannot reach overhead cupboards >90° flexion without pain.',
                interventions: [
                    { text: 'Functional sit-to-stand training', domain: 'Physical', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): Functional rehabilitation.' },
                    { text: 'Safe reaching mechanics education', domain: 'Intellectual', impact: 1, prevention: 'Secondary', rationale: 'Helpful (2°): Prevents future injury.' },
                    { text: 'Restrict walking to indoors only', domain: 'Physical', impact: -2, prevention: 'Secondary', rationale: 'Harmful: Avoidance leads to decline.' },
                    { text: 'Upper body ergometer (low resistance)', domain: 'Physical', impact: 0, prevention: 'Tertiary', rationale: 'Low Value: Wrong specificity.' }
                ]
            },
            participation: {
                title: 'Participation',
                content: 'Resigned from book club leadership. Ceased gardening (formerly daily activity). Avoids grocery shopping; relies on neighbor. Misses Sunday church due to fear of stairs.',
                interventions: [
                    { text: 'Return-to-activity plan for gardening', domain: 'Occupational', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Restoring participation.' },
                    { text: 'Community balance classes (Tai Chi)', domain: 'Social', impact: 3, prevention: 'Secondary', rationale: 'Correct (2°): Fall risk reduction + Social.' },
                    { text: 'Watching gardening shows on TV', domain: 'Occupational', impact: 0, prevention: 'Tertiary', rationale: 'Low Value: Passive.' },
                    { text: 'Stop all outings to prevent falls', domain: 'Social', impact: -3, prevention: 'Secondary', rationale: 'Harmful: Severe isolation.' }
                ]
            },
            environmental: {
                title: 'Environmental Factors',
                content: 'Victorian home: 12 steep stairs to bedroom/bath (no handrail on right). Bathroom: Shower over tub (high step-over), no grab bars. Thick Persian rugs (trip hazard) in hallway. Low wattage lighting.',
                interventions: [
                    { text: 'Home safety audit & modification', domain: 'Environmental', impact: 2, prevention: 'Secondary', rationale: 'Correct (2°): Environmental risk reduction.' },
                    { text: 'Install thick plush carpeting', domain: 'Environmental', impact: -2, prevention: 'Secondary', rationale: 'Unsafe: Increases trip hazard.' },
                    { text: 'Proper footwear assessment', domain: 'Physical', impact: 1, prevention: 'Secondary', rationale: 'Good (2°): Safety measure.' }
                ]
            },
            personal: {
                title: 'Personal Factors',
                content: 'High Fear of Falling (ABC score < 50%). Values independence ("I\'m not an invalid"). Skeptical of medication. Limits fluids to manage incontinence (increasing fall risk).',
                interventions: [
                    { text: 'CBT strategies for Fear of Falling', domain: 'Emotional', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Psych management of condition.' },
                    { text: 'Accepting falls are inevitable', domain: 'Emotional', impact: -1, prevention: 'Tertiary', rationale: 'Negative: Learned helplessness.' },
                    { text: 'Budgeting for home mods', domain: 'Financial', impact: 1, prevention: 'Tertiary', rationale: 'Practical.' }
                ]
            }
        }
    },
    {
        id: 'neuro',
        title: 'Neurology: Post-Stroke Wellness',
        icon: <Brain className="w-6 h-6" />,
        color: 'bg-indigo-100 text-indigo-800',
        borderColor: 'border-indigo-200',
        description: 'Long-term wellness management for chronic stroke survivors emphasizing neuroplasticity and cardiovascular health.',
        patient: {
            name: 'Marcus',
            age: 54,
            diagnosis: 'Left MCA Stroke (2 years post-onset)',
            history: "Successful landscape architect who thrived on site visits and hiking with his two teenage sons. Since the stroke 2 years ago, he feels 'sidelined' watching his family hike without him. He struggles with the role reversal of relying on his wife for driving. He has right hemiparesis and mild expressive aphasia, which frustrates him during client calls, leading him to withdraw from professional consulting.",
            uMatterScores: {
                Physical: 4,
                Emotional: 4,
                Intellectual: 8,
                Social: 6,
                Spiritual: 7,
                Environmental: 8,
                Financial: 6,
                Occupational: 5
            }
        },
        icfData: {
            healthCondition: {
                title: 'Health Condition',
                content: 'L MCA Ischemic Stroke (2 years ago). Residual R Hemiparesis. Comorbidities: Type 2 Diabetes (A1c 7.8%), Hypertension, Hyperlipidemia. BMI 29. History of smoking (quit post-stroke).',
                interventions: [
                    { text: 'Cardiovascular risk monitoring', domain: 'Physical', impact: 3, prevention: 'Secondary', rationale: 'Critical (2°): Preventing recurrence (2nd stroke).' },
                    { text: 'Limit fluid intake to avoid bathroom trips', domain: 'Physical', impact: -2, prevention: 'Secondary', rationale: 'Unsafe: Dehydration risk.' },
                    { text: 'Generic multivitamin therapy', domain: 'Physical', impact: 0, prevention: 'Primary', rationale: 'Low Value: General health, non-specific.' }
                ]
            },
            bodyFunctions: {
                title: 'Body Functions & Structures',
                content: 'R UE Spasticity (MAS 2 in elbow flexors). R LE Spasticity (MAS 1+ gastroc). R Grip strength 15kg (L is 45kg). R Shoulder subluxation (1 finger breadth). Mild Expressive Aphasia (word-finding latency). Decreased CV fitness (VO2 peak 14 ml/kg/min).',
                interventions: [
                    { text: 'Adapted HIIT program', domain: 'Physical', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Improving capacity/neuroplasticity.' },
                    { text: 'Overhead pulleys for R shoulder', domain: 'Physical', impact: -3, prevention: 'Tertiary', rationale: 'Contraindicated: Impingement risk.' },
                    { text: 'Stress ball squeezing (repetitive)', domain: 'Physical', impact: 0, prevention: 'Tertiary', rationale: 'Low Value: Reinforces spasticity.' },
                    { text: 'Meditation for BP control', domain: 'Spiritual', impact: 2, prevention: 'Secondary', rationale: 'Good (2°): Risk factor management.' }
                ]
            },
            activities: {
                title: 'Activities',
                content: 'Ambulates with AFO + Cane. Gait: R circumduction, decreased stance time on R. Walking speed 0.8 m/s (limited community). Typing speed reduced 70%. Unable to drive. Difficulty with dual-task walking.',
                interventions: [
                    { text: 'Gait speed challenges', domain: 'Physical', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): Functional training.' },
                    { text: 'Use wheelchair for all distances', domain: 'Physical', impact: -2, prevention: 'Tertiary', rationale: 'Negative: Learned non-use.' },
                    { text: 'Adaptive typing technology training', domain: 'Occupational', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): Compensatory strategy.' }
                ]
            },
            participation: {
                title: 'Participation',
                content: 'On medical leave from Architecture firm; feels unable to conduct site visits on uneven terrain. Unable to join family hikes (core identity loss). Withdraws from social dinners due to aphasia embarrassment.',
                interventions: [
                    { text: 'Adaptive hiking group participation', domain: 'Social', impact: 3, prevention: 'Tertiary', rationale: 'Excellent (3°): Reintegration + Fitness.' },
                    { text: 'Solo hiking on flat pavement', domain: 'Social', impact: 0, prevention: 'Tertiary', rationale: 'Distractor: Misses social/nature context.' },
                    { text: 'Aphasia conversation cafe', domain: 'Social', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Social participation.' }
                ]
            },
            environmental: {
                title: 'Environmental Factors',
                content: 'Lives in hilly neighborhood (steep driveway). Home office on 2nd floor. Dependent on wife for transport. Office chair non-supportive for hemiplegic side.',
                interventions: [
                    { text: 'Accessible trail mapping', domain: 'Environmental', impact: 2, prevention: 'Tertiary', rationale: 'Helpful (3°): Environmental modification.' },
                    { text: 'Buying expensive "Stroke Cure" supplements', domain: 'Financial', impact: -2, prevention: 'Secondary', rationale: 'Harmful: Financial toxicity.' },
                    { text: 'Partner communication training', domain: 'Social', impact: 2, prevention: 'Tertiary', rationale: 'Good (3°): Social support enhancement.' }
                ]
            },
            personal: {
                title: 'Personal Factors',
                content: 'Former marathon runner. Identifies strongly as "provider" and "athlete". Currently experiencing situational depression and loss of confidence. Frustrated by slow progress.',
                interventions: [
                    { text: 'Finding new athletic identity', domain: 'Spiritual', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Adaptation.' },
                    { text: 'Resignation to "new normal" limits', domain: 'Emotional', impact: -2, prevention: 'Tertiary', rationale: 'Negative: Fixed mindset.' },
                    { text: 'Disability benefits navigation', domain: 'Financial', impact: 2, prevention: 'Tertiary', rationale: 'Practical.' }
                ]
            }
        }
    },
    {
        id: 'peds',
        title: 'Pediatrics: Cerebral Palsy',
        icon: <Activity className="w-6 h-6" />,
        color: 'bg-rose-100 text-rose-800',
        borderColor: 'border-rose-200',
        description: 'Promoting fitness, fun, and inclusion for children with developmental disabilities.',
        patient: {
            name: 'Leo',
            age: 8,
            diagnosis: 'Spastic Diplegic Cerebral Palsy (GMFCS Level III)',
            history: "Uses a posterior walker at school but tires easily in the long hallways. Huge fan of 'The Avengers' and wants to be 'strong like Hulk.' Parents are supportive but overwhelmed; both work full-time. They rely on quick meals, contributing to recent weight gain. Leo is starting to notice he can't keep up with peers during recess tag, leading to frustration and acting out in class.",
            uMatterScores: {
                Physical: 6,
                Emotional: 5,
                Intellectual: 8,
                Social: 4,
                Spiritual: 9,
                Environmental: 9,
                Financial: 5,
                Occupational: 7
            }
        },
        icfData: {
            healthCondition: {
                title: 'Health Condition',
                content: 'Spastic Diplegic Cerebral Palsy, GMFCS Level III. Hx of premature birth (28 weeks). Hip surveillance: Migration percentage 25% (R), 20% (L). Vision: Strabismus (corrected).',
                interventions: [
                    { text: 'Pain monitoring education', domain: 'Physical', impact: 2, prevention: 'Secondary', rationale: 'Important (2°): Early detection of complications.' },
                    { text: 'Ignore hip surveillance to reduce stress', domain: 'Physical', impact: -3, prevention: 'Secondary', rationale: 'Dangerous: Hip screening is vital (2° prevention).' },
                    { text: 'Generic "wait and see" approach', domain: 'Intellectual', impact: -1, prevention: 'Tertiary', rationale: 'Poor Practice.' }
                ]
            },
            bodyFunctions: {
                title: 'Body Functions & Structures',
                content: 'B/L Hamstring/Gastroc spasticity (MAS 2). Popliteal angle -40°. Trunk hypotonia. Weakness in hip abductors/extensors (3/5). High fatigability (energy expenditure index 2x norms).',
                interventions: [
                    { text: 'Aquatic therapy (Swimming)', domain: 'Physical', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Fitness & Tone management.' },
                    { text: 'Aggressive hamstring stretching > pain threshold', domain: 'Physical', impact: -2, prevention: 'Tertiary', rationale: 'Harmful: Micro-trauma risk.' },
                    { text: 'Passive standing frame (10 mins/day)', domain: 'Physical', impact: 0, prevention: 'Secondary', rationale: 'Low Value: Dosage too low for bone density.' },
                    { text: 'Fatigue management games', domain: 'Intellectual', impact: 1, prevention: 'Tertiary', rationale: 'Good (3°): Self-regulation.' }
                ]
            },
            activities: {
                title: 'Activities',
                content: 'Ambulates with posterior walker (household/school). Max distance 50m before fatigue. Transfers: Floor-to-stand requires external support. Needs assistance for lower body dressing (buttons/shoes).',
                interventions: [
                    { text: 'Adaptive cycling', domain: 'Physical', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): Recreation & Fitness.' },
                    { text: 'Passive movement by parents', domain: 'Physical', impact: 0, prevention: 'Tertiary', rationale: 'Low Value: No motor learning.' },
                    { text: 'Dressing independence games', domain: 'Occupational', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): ADL training.' }
                ]
            },
            participation: {
                title: 'Participation',
                content: 'Mainstream 3rd grade. Sits out PE/Recess ("too slow" for tag). Misses birthday parties at trampoline parks. Loves "Avengers" but feels like the "weak one".',
                interventions: [
                    { text: 'Sled hockey team', domain: 'Social', impact: 3, prevention: 'Tertiary', rationale: 'Excellent (3°): Inclusion & Participation.' },
                    { text: 'Home schooling to avoid bullying', domain: 'Social', impact: -2, prevention: 'Tertiary', rationale: 'Negative: Avoidance.' },
                    { text: 'Inclusive PE curriculum consulting', domain: 'Occupational', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): School participation.' }
                ]
            },
            environmental: {
                title: 'Environmental Factors',
                content: 'School: Long distances between classes, heavy doors. Playground: Woodchips (inaccessible for walker). Home: 2-story townhome, bedroom upstairs. Parents work full-time (time-poor).',
                interventions: [
                    { text: 'Respite care resources for parents', domain: 'Emotional', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Caregiver support.' },
                    { text: 'Move to rural home with no stairs', domain: 'Environmental', impact: 0, prevention: 'Tertiary', rationale: 'Distractor.' },
                    { text: 'Grant funding for adaptive equipment', domain: 'Financial', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Removing barriers.' }
                ]
            },
            personal: {
                title: 'Personal Factors',
                content: 'Bright, verbal, competitive spirit. Loves superheroes. Becoming self-conscious about walker. Uses fatigue as reason to avoid challenging tasks ("I\'m too tired").',
                interventions: [
                    { text: 'Identify "Superhero Strengths"', domain: 'Spiritual', impact: 2, prevention: 'Primary', rationale: 'Good (1°/3°): Building general resilience.' },
                    { text: 'Focus solely on what he cannot do', domain: 'Emotional', impact: -2, prevention: 'Tertiary', rationale: 'Harmful.' },
                    { text: 'Self-advocacy training', domain: 'Emotional', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): Lifelong skill.' }
                ]
            }
        }
    },
    {
        id: 'sci_dm_homeless',
        title: 'SCI & Homelessness: Complex Diabetes',
        icon: <Tent className="w-6 h-6" />,
        color: 'bg-orange-100 text-orange-800',
        borderColor: 'border-orange-200',
        description: 'Managing T2DM and Spinal Cord Injury within the constraints of housing instability and resource scarcity.',
        patient: {
            name: 'Sam',
            age: 42,
            diagnosis: 'T10 Paraplegia (ASIA A), Uncontrolled T2DM',
            history: "Former construction foreman injured in a site accident 3 years ago. Lost housing 8 months ago due to medical debt. Staying in a 'high-barrier' shelter requiring daily 7 AM exit. Wheelchair is poorly fitted (too wide). Struggles to manage insulin (vials) due to lack of refrigeration and theft risk. History of recurrent foot ulcers he cannot feel.",
            uMatterScores: {
                Physical: 2,
                Emotional: 3,
                Intellectual: 6,
                Social: 4,
                Spiritual: 5,
                Environmental: 1,
                Financial: 1,
                Occupational: 2
            }
        },
        icfData: {
            healthCondition: {
                title: 'Health Condition',
                content: 'T10 Complete SCI (ASIA A). Type 2 Diabetes (A1c 11.2%). Grade 2 pressure injury on R ischial tuberosity (worsening). Neuropathic pain (6/10).',
                interventions: [
                    { text: 'Visual skin inspection education (mirror)', domain: 'Physical', impact: 3, prevention: 'Secondary', rationale: 'Critical (2°): Preventing sepsis/osteomyelitis in setting of sensory loss.' },
                    { text: 'Switch to heat-stable Insulin pens', domain: 'Physical', impact: 3, prevention: 'Secondary', rationale: 'Correct (2°): Adapts medical need to environmental constraint (no fridge).' },
                    { text: 'Prescribe complex vial/syringe regimen', domain: 'Physical', impact: -3, prevention: 'Secondary', rationale: 'Harmful: Impossible to manage without refrigeration/hygiene, leads to non-adherence.' },
                    { text: 'Low-sodium diet education', domain: 'Physical', impact: 0, prevention: 'Primary', rationale: 'Low Value: Not the priority given A1c and active wound risk.' }
                ]
            },
            bodyFunctions: {
                title: 'Body Functions & Structures',
                content: 'Paraplegia (no motor/sensory below T10). Impaired thermoregulation. Autonomic Dysreflexia risk. fluctuating blood glucose causing dizziness.',
                interventions: [
                    { text: 'Pressure relief (weight shifts) every 15m', domain: 'Physical', impact: 3, prevention: 'Secondary', rationale: 'Correct (2°): Mandatory to heal current ulcer and prevent new ones.' },
                    { text: 'Upper extremity strengthening', domain: 'Physical', impact: 2, prevention: 'Tertiary', rationale: 'Correct (3°): Essential for transfers and wheelchair propulsion.' },
                    { text: 'Hot packs for back pain', domain: 'Physical', impact: -3, prevention: 'Tertiary', rationale: 'Contraindicated: Burn risk due to sensory loss.' },
                    { text: 'Passive ROM of fingers', domain: 'Physical', impact: 0, prevention: 'Tertiary', rationale: 'Distractor: Not indicated for T10 injury.' }
                ]
            },
            activities: {
                title: 'Activities',
                content: 'Independent w/c propulsion on flat surfaces, dependent on curbs. Transfers: Stand-pivot (unsafe) vs sliding board. Hygiene: difficulty accessing accessible showers.',
                interventions: [
                    { text: 'Advanced wheelchair skills (curbs)', domain: 'Physical', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Essential for navigating city terrain.' },
                    { text: 'Self-catheterization hygiene education', domain: 'Physical', impact: 3, prevention: 'Secondary', rationale: 'Correct (2°): Preventing UTI in public restroom settings.' },
                    { text: 'Encourage walking barefoot to toughen feet', domain: 'Physical', impact: -3, prevention: 'Tertiary', rationale: 'Harmful: Major trauma/ulcer risk for diabetic/SCI foot.' },
                    { text: 'Fine motor coordination drills', domain: 'Physical', impact: 0, prevention: 'Tertiary', rationale: 'Low Value: Not a deficit.' }
                ]
            },
            participation: {
                title: 'Participation',
                content: 'Unable to return to construction. Barrier to entering shelters (steps). Socially isolated from former work crew. Spends days in library.',
                interventions: [
                    { text: 'Vocational Rehab referral', domain: 'Occupational', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Retraining for sedentary employment.' },
                    { text: 'Community resource/shelter mapping', domain: 'Environmental', impact: 3, prevention: 'Secondary', rationale: 'Correct (2°): Identifying accessible safe havens.' },
                    { text: 'Suggest job requiring heavy lifting', domain: 'Occupational', impact: -2, prevention: 'Tertiary', rationale: 'Harmful: Unrealistic and discouraging.' },
                    { text: 'Solitary puzzles', domain: 'Intellectual', impact: 0, prevention: 'Tertiary', rationale: 'Distractor: Isolating.' }
                ]
            },
            environmental: {
                title: 'Environmental Factors',
                content: 'Homeless. Lack of refrigeration. High theft risk for meds/equipment. Inaccessible public transit stops nearby. Weather exposure.',
                interventions: [
                    { text: 'Social work consult for Housing First', domain: 'Environmental', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): addressing the root cause of health disparity.' },
                    { text: 'Obtain RO cushion for wheelchair', domain: 'Physical', impact: 3, prevention: 'Secondary', rationale: 'Correct (2°): Essential equipment for tissue integrity.' },
                    { text: 'Donate standard foam cushion', domain: 'Physical', impact: -2, prevention: 'Secondary', rationale: 'Harmful: Inadequate pressure relief for existing ulcer.' },
                    { text: 'Ergonomic keyboard', domain: 'Occupational', impact: 0, prevention: 'Tertiary', rationale: 'Distractor: Low priority.' }
                ]
            },
            personal: {
                title: 'Personal Factors',
                content: 'Resilient but exhausted. "Street smart". Skeptical of healthcare system due to past judgment. Deeply worried about foot infection ("I saw guys lose legs").',
                interventions: [
                    { text: 'Peer mentoring (SCI survivors)', domain: 'Social', impact: 3, prevention: 'Tertiary', rationale: 'Correct (3°): Building social capital and self-efficacy.' },
                    { text: 'Motivational Interviewing for diabetes', domain: 'Emotional', impact: 2, prevention: 'Secondary', rationale: 'Correct (2°): Collaborative approach builds trust.' },
                    { text: '"Tough love" regarding homelessness', domain: 'Emotional', impact: -3, prevention: 'Tertiary', rationale: 'Harmful: Increases stigma and destroys therapeutic alliance.' },
                    { text: 'Personality testing', domain: 'Intellectual', impact: 0, prevention: 'Primary', rationale: 'Distractor.' }
                ]
            }
        }
    }
];
