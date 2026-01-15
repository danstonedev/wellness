import type { WellnessAnswers } from '../types';
import { wellnessQuestions } from './wellnessQuestions';

// Helper to create answer with question
const q = (domain: keyof typeof wellnessQuestions, idx: number, answer: 1 | 2 | 3 | 4 | 5, note?: string) => ({
    question: wellnessQuestions[domain][idx],
    answer,
    note
});

// Eleanor (Geriatrics - Osteoporosis & Fall Risk) - Scores: P3, E5, I9, So2, Sp7, En6, F8, O4
export const eleanorAnswers: WellnessAnswers = {
    Physical: [
        q('Physical', 0, 1, "Haven't exercised since the fall 6 months ago"),
        q('Physical', 1, 2, "Nocturia disrupts sleep; limiting fluids to avoid bathroom"),
        q('Physical', 2, 3, "Hard to shop and cook alone now"),
        q('Physical', 3, 5, "Never smoked, rarely drinks"),
        q('Physical', 4, 2, "Limiting fluids intentionally to reduce bathroom trips"),
        q('Physical', 5, 3, "Behind on bone density medication"),
        q('Physical', 6, 2, "Skeptical of doctors since fracture"),
        q('Physical', 7, 1, "Fatigue limits me to one task per day")
    ],
    Emotional: [
        q('Emotional', 0, 3, "Keep things inside, don't want to burden others"),
        q('Emotional', 1, 2, "Fear of falling causes constant anxiety"),
        q('Emotional', 2, 3, "Trying to stay positive but it's hard"),
        q('Emotional', 3, 3, "Life has simplified but not by choice"),
        q('Emotional', 4, 2, "The fall changed everything"),
        q('Emotional', 5, 2, "Every step is a decision now"),
        q('Emotional', 6, 4, "I don't express anger, I just withdraw"),
        q('Emotional', 7, 3, "I was proud and capable before")
    ],
    Intellectual: [
        q('Intellectual', 0, 5, "Still love learning new things"),
        q('Intellectual', 1, 5, "Read voraciously when I can focus"),
        q('Intellectual', 2, 5, "Follow news and current events daily"),
        q('Intellectual', 3, 4, "Miss going to book club and library"),
        q('Intellectual', 4, 5, "Reading is my sanctuary"),
        q('Intellectual', 5, 4, "Former English teacher, always editing"),
        q('Intellectual', 6, 5, "I see nuance in everything"),
        q('Intellectual', 7, 5, "Curious about everything")
    ],
    Social: [
        q('Social', 0, 2, "Avoiding people rather than improving interactions"),
        q('Social', 1, 2, "Rely on one neighbor, feel like a burden"),
        q('Social', 2, 3, "Talk on phone but rarely see anyone"),
        q('Social', 3, 3, "I think about others but can't help them"),
        q('Social', 4, 1, "Stopped book club, church, gardening club"),
        q('Social', 5, 2, "Most friends have passed or moved away"),
        q('Social', 6, 1, "Only one neighbor checks on me"),
        q('Social', 7, 1, "Can't get to church or community events")
    ],
    Spiritual: [
        q('Spiritual', 0, 4, "Teaching gave my life meaning, now what?"),
        q('Spiritual', 1, 4, "My faith connects me to something greater"),
        q('Spiritual', 2, 5, "Lots of time to reflect these days"),
        q('Spiritual', 3, 4, "I understand suffering more now"),
        q('Spiritual', 4, 4, "Pray daily, miss church community"),
        q('Spiritual', 5, 5, "Strong moral compass"),
        q('Spiritual', 6, 4, "Forgiveness comes easier with age"),
        q('Spiritual', 7, 4, "Values guide me even when scared")
    ],
    Environmental: [
        q('Environmental', 0, 3, "Aware but limited in what I can do"),
        q('Environmental', 1, 5, "This house is becoming my prison"),
        q('Environmental', 2, 2, "Don't know what resources exist for me"),
        q('Environmental', 3, 3, "Used to recycle, now waste piles up"),
        q('Environmental', 4, 2, "Can't participate in community like before"),
        q('Environmental', 5, 2, "Neighbor is wonderful but I need more"),
        q('Environmental', 6, 2, "Garden is neglected, can't risk walking on grass"),
        q('Environmental', 7, 3, "House has hazards everywhere now")
    ],
    Financial: [
        q('Financial', 0, 5, "Pension and savings are stable"),
        q('Financial', 1, 5, "No financial stress"),
        q('Financial', 2, 5, "Good savings from teaching career"),
        q('Financial', 3, 5, "House is paid off"),
        q('Financial', 4, 4, "Don't spend much anymore"),
        q('Financial', 5, 4, "Can afford doctors, just don't trust them"),
        q('Financial', 6, 5, "Financially secure"),
        q('Financial', 7, 4, "Conservative with money")
    ],
    Occupational: [
        q('Occupational', 0, 4, "Teaching was my calling"),
        q('Occupational', 1, 2, "Miss the purpose work provided"),
        q('Occupational', 2, 2, "Retired but feel aimless now"),
        q('Occupational', 3, 3, "No work, but no balance either"),
        q('Occupational', 4, 2, "Used to feel valued as a teacher"),
        q('Occupational', 5, 2, "No professional development needed"),
        q('Occupational', 6, 3, "Was always reliable"),
        q('Occupational', 7, 2, "Habits have deteriorated since the fall")
    ]
};

// Marcus (Neurology - Post-Stroke) - Scores: P4, E4, I8, So6, Sp7, En8, F6, O5
export const marcusAnswers: WellnessAnswers = {
    Physical: [
        q('Physical', 0, 2, "Try to walk but limited by hemiparesis"),
        q('Physical', 1, 3, "Sleep is fragmented, anxiety about another stroke"),
        q('Physical', 2, 3, "Wife helps with diet but I miss my old eating"),
        q('Physical', 3, 5, "Quit smoking after the stroke"),
        q('Physical', 4, 4, "Drink water regularly"),
        q('Physical', 5, 4, "Take prevention seriously now"),
        q('Physical', 6, 4, "See doctors regularly for monitoring"),
        q('Physical', 7, 2, "Fatigue hits hard by afternoon")
    ],
    Emotional: [
        q('Emotional', 0, 2, "Frustration comes out as withdrawal"),
        q('Emotional', 1, 2, "Stress about work and identity"),
        q('Emotional', 2, 3, "Trying but progress is slow"),
        q('Emotional', 3, 2, "Work-life balance gone - can't work"),
        q('Emotional', 4, 3, "Learning to adapt but it's hard"),
        q('Emotional', 5, 2, "Everything feels like a big decision"),
        q('Emotional', 6, 3, "Internalize anger, sometimes snap at wife"),
        q('Emotional', 7, 2, "Feel like a shadow of who I was")
    ],
    Intellectual: [
        q('Intellectual', 0, 5, "Mind is sharp, body won't cooperate"),
        q('Intellectual', 1, 4, "Still read architecture journals"),
        q('Intellectual', 2, 5, "Follow news daily"),
        q('Intellectual', 3, 4, "Miss site visits and seeing projects"),
        q('Intellectual', 4, 4, "Audiobooks help with fatigue"),
        q('Intellectual', 5, 3, "Aphasia makes communication harder"),
        q('Intellectual', 6, 5, "Analytical mind still strong"),
        q('Intellectual', 7, 5, "Open to learning adaptive strategies")
    ],
    Social: [
        q('Social', 0, 3, "Working on patience with family"),
        q('Social', 1, 4, "Wife is incredibly supportive"),
        q('Social', 2, 2, "Aphasia makes conversation difficult"),
        q('Social', 3, 4, "Think about impact on family constantly"),
        q('Social', 4, 2, "Avoid dinners due to speech embarrassment"),
        q('Social', 5, 4, "Family is positive influence"),
        q('Social', 6, 4, "Strong family bond"),
        q('Social', 7, 2, "Can't participate in community like before")
    ],
    Spiritual: [
        q('Spiritual', 0, 3, "Questioning purpose since stroke"),
        q('Spiritual', 1, 4, "Nature always connected me to something bigger"),
        q('Spiritual', 2, 5, "Lots of time to reflect now"),
        q('Spiritual', 3, 4, "Understand others' struggles more"),
        q('Spiritual', 4, 4, "Hiking was my meditation, miss it"),
        q('Spiritual', 5, 5, "Strong moral foundation"),
        q('Spiritual', 6, 4, "Learning to forgive my body"),
        q('Spiritual', 7, 4, "Values guide recovery decisions")
    ],
    Environmental: [
        q('Environmental', 0, 4, "Always cared about environment"),
        q('Environmental', 1, 5, "Hilly neighborhood is challenging"),
        q('Environmental', 2, 4, "Know about stroke resources"),
        q('Environmental', 3, 4, "Still recycle and conserve"),
        q('Environmental', 4, 3, "Want to improve community access"),
        q('Environmental', 5, 5, "Family is very supportive"),
        q('Environmental', 6, 2, "Can't access trails anymore"),
        q('Environmental', 7, 4, "Home adapted for my needs")
    ],
    Financial: [
        q('Financial', 0, 3, "On medical leave, income reduced"),
        q('Financial', 1, 4, "Can meet needs but worried long-term"),
        q('Financial', 2, 4, "Some savings from career"),
        q('Financial', 3, 3, "Medical debt is growing"),
        q('Financial', 4, 3, "Wife managing finances more now"),
        q('Financial', 5, 4, "Good insurance from firm"),
        q('Financial', 6, 3, "Uncertain about future income"),
        q('Financial', 7, 3, "Making harder decisions now")
    ],
    Occupational: [
        q('Occupational', 0, 4, "Architecture is still my passion"),
        q('Occupational', 1, 2, "Can't do the work I loved"),
        q('Occupational', 2, 3, "Maybe consulting could work"),
        q('Occupational', 3, 2, "No work to balance"),
        q('Occupational', 4, 2, "Identity tied to being a provider"),
        q('Occupational', 5, 3, "Learning adaptive technology"),
        q('Occupational', 6, 4, "Was always dependable"),
        q('Occupational', 7, 3, "Working on sleep and stress")
    ]
};

// Leo (Pediatrics - Cerebral Palsy) - Scores: P6, E5, I8, So4, Sp9, En9, F5, O7
export const leoAnswers: WellnessAnswers = {
    Physical: [
        q('Physical', 0, 3, "PT exercises and swimming sometimes"),
        q('Physical', 1, 4, "Sleep pretty well, tired after school"),
        q('Physical', 2, 2, "Mom and Dad get fast food a lot"),
        q('Physical', 3, 5, "I'm 8!"),
        q('Physical', 4, 4, "Drink juice boxes and water"),
        q('Physical', 5, 4, "Wash hands like they tell me"),
        q('Physical', 6, 4, "Go to lots of doctor appointments"),
        q('Physical', 7, 2, "Get really tired in the long hallways")
    ],
    Emotional: [
        q('Emotional', 0, 3, "Sometimes I get really frustrated"),
        q('Emotional', 1, 2, "It's hard when I can't keep up"),
        q('Emotional', 2, 3, "I try to keep trying"),
        q('Emotional', 3, 3, "School and home are okay"),
        q('Emotional', 4, 3, "New things are hard but I try"),
        q('Emotional', 5, 3, "Some things worry me"),
        q('Emotional', 6, 2, "Sometimes I act out when mad"),
        q('Emotional', 7, 3, "I want to be like other kids")
    ],
    Intellectual: [
        q('Intellectual', 0, 5, "I love learning new superhero facts!"),
        q('Intellectual', 1, 5, "School is fun, I like reading"),
        q('Intellectual', 2, 4, "I know what's happening in the world"),
        q('Intellectual', 3, 4, "Wish I could go to more museums"),
        q('Intellectual', 4, 5, "Love comic books and chapter books"),
        q('Intellectual', 5, 4, "Working on writing, it's hard"),
        q('Intellectual', 6, 4, "I understand both sides sometimes"),
        q('Intellectual', 7, 5, "New ideas are cool!")
    ],
    Social: [
        q('Social', 0, 3, "Trying not to get mad at recess"),
        q('Social', 1, 4, "Mom and Dad love me"),
        q('Social', 2, 4, "I can talk to people"),
        q('Social', 3, 4, "I try to be nice"),
        q('Social', 4, 2, "Can't do recess games like tag"),
        q('Social', 5, 4, "My family is great"),
        q('Social', 6, 3, "Have a few friends at school"),
        q('Social', 7, 2, "Miss birthday parties at trampoline parks")
    ],
    Spiritual: [
        q('Spiritual', 0, 5, "I want to be a superhero and help people!"),
        q('Spiritual', 1, 5, "Superheroes show me anything is possible"),
        q('Spiritual', 2, 4, "I think about what's important"),
        q('Spiritual', 3, 5, "I feel bad when others are sad"),
        q('Spiritual', 4, 4, "Sometimes I think quiet thoughts"),
        q('Spiritual', 5, 5, "I know right from wrong"),
        q('Spiritual', 6, 4, "I forgive my friends"),
        q('Spiritual', 7, 5, "I try to do the right thing")
    ],
    Environmental: [
        q('Environmental', 0, 5, "Recycle bins are cool"),
        q('Environmental', 1, 5, "The playground woodchips are hard for my walker"),
        q('Environmental', 2, 4, "School has helpers"),
        q('Environmental', 3, 5, "I put things in the right bins"),
        q('Environmental', 4, 4, "I want to help my school"),
        q('Environmental', 5, 5, "My family helps me a lot"),
        q('Environmental', 6, 4, "Love playing outside when I can"),
        q('Environmental', 7, 5, "My room is awesome with posters")
    ],
    Financial: [
        q('Financial', 0, 3, "Mom and Dad work a lot"),
        q('Financial', 1, 3, "Sometimes they worry about money"),
        q('Financial', 2, 3, "I don't know about savings"),
        q('Financial', 3, 3, "They talk about bills sometimes"),
        q('Financial', 4, 2, "I don't know about budgets"),
        q('Financial', 5, 3, "Doctors cost a lot, I hear"),
        q('Financial', 6, 3, "I hope we're okay"),
        q('Financial', 7, 2, "I'm 8, I don't make money decisions")
    ],
    Occupational: [
        q('Occupational', 0, 5, "Being a student is my job and I like it!"),
        q('Occupational', 1, 4, "School is pretty fun"),
        q('Occupational', 2, 5, "I'm learning for the future"),
        q('Occupational', 3, 4, "School and home are balanced"),
        q('Occupational', 4, 4, "I feel good when I do well"),
        q('Occupational', 5, 4, "I'm learning new things every day"),
        q('Occupational', 6, 4, "I try to be responsible"),
        q('Occupational', 7, 3, "I'm working on getting more sleep")
    ]
};

// Sam (SCI & Homelessness) - Scores: P2, E3, I6, So4, Sp5, En1, F1, O2
export const samAnswers: WellnessAnswers = {
    Physical: [
        q('Physical', 0, 2, "Wheelchair propulsion is my only exercise"),
        q('Physical', 1, 1, "Shelter kicks me out at 7am, no real sleep"),
        q('Physical', 2, 1, "Eat what I can find or what shelters give"),
        q('Physical', 3, 3, "Quit drinking after the accident"),
        q('Physical', 4, 2, "Hard to stay hydrated without clean water access"),
        q('Physical', 5, 1, "Can't do self-cath hygienically in public restrooms"),
        q('Physical', 6, 2, "ER when desperate, no regular care"),
        q('Physical', 7, 1, "Exhausted from surviving")
    ],
    Emotional: [
        q('Emotional', 0, 2, "Keep emotions locked down"),
        q('Emotional', 1, 2, "Constant stress, survival mode"),
        q('Emotional', 2, 3, "Still here, that's resilience"),
        q('Emotional', 3, 1, "No work, no balance, just survival"),
        q('Emotional', 4, 3, "Had to adapt to everything"),
        q('Emotional', 5, 2, "Every decision could be dangerous"),
        q('Emotional', 6, 2, "Anger simmers but I control it"),
        q('Emotional', 7, 2, "Feel invisible")
    ],
    Intellectual: [
        q('Intellectual', 0, 4, "Watch people, learn the streets"),
        q('Intellectual', 1, 3, "Library is my refuge, read there"),
        q('Intellectual', 2, 4, "Keep up with news in the library"),
        q('Intellectual', 3, 3, "Library has programs sometimes"),
        q('Intellectual', 4, 3, "Read when I can focus"),
        q('Intellectual', 5, 3, "Communication is survival"),
        q('Intellectual', 6, 4, "See all sides of every situation"),
        q('Intellectual', 7, 4, "Open to anything that helps")
    ],
    Social: [
        q('Social', 0, 3, "Learning to ask for help"),
        q('Social', 1, 2, "Lost my work crew, my people"),
        q('Social', 2, 3, "Can talk my way through things"),
        q('Social', 3, 3, "Try not to burden others"),
        q('Social', 4, 2, "Avoid shelters when I can"),
        q('Social', 5, 2, "Street people help each other sometimes"),
        q('Social', 6, 2, "No real network, everyone is struggling"),
        q('Social', 7, 2, "Can't participate, just survive")
    ],
    Spiritual: [
        q('Spiritual', 0, 3, "Purpose? Surviving is purpose now"),
        q('Spiritual', 1, 3, "Connected to something, not sure what"),
        q('Spiritual', 2, 4, "Lots of time to think"),
        q('Spiritual', 3, 4, "See suffering everywhere, understand it"),
        q('Spiritual', 4, 3, "Quiet moments under bridges"),
        q('Spiritual', 5, 4, "Know right from wrong"),
        q('Spiritual', 6, 3, "Forgiveness is hard but I try"),
        q('Spiritual', 7, 3, "Values got me through so far")
    ],
    Environmental: [
        q('Environmental', 0, 2, "I'm part of the environment, ignored like it"),
        q('Environmental', 1, 5, "Environment is killing me - exposure, no bathroom access"),
        q('Environmental', 2, 2, "Know some resources but barriers everywhere"),
        q('Environmental', 3, 2, "Can't focus on environment when homeless"),
        q('Environmental', 4, 1, "Can't improve anything from out here"),
        q('Environmental', 5, 1, "No supportive people, just other homeless"),
        q('Environmental', 6, 2, "Sleep outside, that's nature I guess"),
        q('Environmental', 7, 1, "No living space to organize")
    ],
    Financial: [
        q('Financial', 0, 1, "No control, no money"),
        q('Financial', 1, 1, "Can't meet basic needs consistently"),
        q('Financial', 2, 1, "No savings, had to spend everything"),
        q('Financial', 3, 1, "Medical debt destroyed me"),
        q('Financial', 4, 1, "Nothing to budget"),
        q('Financial', 5, 1, "Can't afford care, just ER"),
        q('Financial', 6, 1, "No future financially"),
        q('Financial', 7, 2, "Limited options, limited decisions")
    ],
    Occupational: [
        q('Occupational', 0, 3, "Construction was my identity, aligned with values"),
        q('Occupational', 1, 1, "Can't do my work anymore"),
        q('Occupational', 2, 2, "Need retraining but homeless"),
        q('Occupational', 3, 1, "No work, no balance"),
        q('Occupational', 4, 1, "Used to feel good about my work"),
        q('Occupational', 5, 2, "Learning library computer skills"),
        q('Occupational', 6, 3, "Was very reliable before"),
        q('Occupational', 7, 1, "Survival doesn't leave room for good habits")
    ]
};
