export type ToolFaq = {
  question: string;
  answer: string;
};

export type ToolQuestion = {
  id: string;
  label: string;
  helper?: string;
};

export type ToolResultBand = {
  minScore: number;
  title: string;
  summary: string;
  actions: string[];
};

export type FreeTool = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string[];
  keywords: string[];
  ctaText: string;
  faq: ToolFaq[];
  questions: ToolQuestion[];
  resultBands: ToolResultBand[];
};

const DEFAULT_QUESTIONS: ToolQuestion[] = [
  { id: "distress", label: "How emotionally intense is this right now?", helper: "1 = low, 5 = very high" },
  { id: "sleep", label: "How much has this affected sleep?", helper: "1 = not at all, 5 = severe impact" },
  { id: "focus", label: "How much is this affecting focus and productivity?" },
  { id: "avoidance", label: "How much are you avoiding situations because of this?" },
  { id: "self_talk", label: "How harsh is your self-talk in this area?" },
];

const makeBands = (high: string, medium: string, low: string): ToolResultBand[] => [
  {
    minScore: 20,
    title: high,
    summary:
      "Your current load is high. Start with regulation first, then one practical action. Keep the plan small and repeatable.",
    actions: [
      "Do a 2-minute breathing reset before making decisions.",
      "Pick one low-friction action you can finish today.",
      "Use one balanced thought statement when the loop restarts.",
    ],
  },
  {
    minScore: 14,
    title: medium,
    summary:
      "You have moderate stress signals. Pair one emotional reset with one practical step to protect momentum.",
    actions: [
      "Set one focused work block with a clear stop time.",
      "Use a brief thought reframe before your key task.",
      "Log what helped most so you can repeat it tomorrow.",
    ],
  },
  {
    minScore: 0,
    title: low,
    summary:
      "You are in a steadier zone. Keep momentum with preventative habits and one confidence-building action.",
    actions: [
      "Complete one proactive step while stress is manageable.",
      "Use a short check-in to spot early warning signs.",
      "Carry forward the routine that is currently working.",
    ],
  },
];

export const freeTools: FreeTool[] = [
  {
    slug: "job-rejection-reset",
    title: "Job Rejection Reset Tool (CBT)",
    shortTitle: "Job Rejection Reset",
    description:
      "Use this CBT tool after a job rejection to identify emotional load, reframe self-talk, and get a practical next-step plan.",
    intro: [
      "Job rejection can trigger catastrophic thinking and confidence drops. This tool gives you a structured reset instead of a spiral.",
      "You will get a result profile, immediate coping actions, and a next-step recommendation linked to the app.",
    ],
    keywords: ["job rejection anxiety", "cbt for job rejection", "how to deal with job rejection", "career confidence tool", "confidence after rejection"],
    ctaText: "Get full confidence plan in SereneMind",
    faq: [
      { question: "Can this help after multiple rejections?", answer: "Yes. It helps reduce the emotional loop and refocuses you on the next controllable step." },
      { question: "Is this a diagnosis?", answer: "No. It is a self-guided CBT support tool and not medical advice." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Rejection Recovery Load", "Moderate Rejection Recovery Load", "Recovery Momentum"),
  },
  {
    slug: "interview-anxiety-planner",
    title: "Interview Anxiety Planner",
    shortTitle: "Interview Anxiety Planner",
    description:
      "Plan interview anxiety support in minutes with a personalized prep focus and practical confidence actions.",
    intro: [
      "Interview anxiety often mixes performance fear and uncertainty. This tool converts stress into a clear prep structure.",
      "Use your result to decide whether to prioritize regulation, rehearsal, or exposure-based confidence reps.",
    ],
    keywords: ["interview anxiety help", "how to calm interview anxiety", "cbt interview preparation", "job interview confidence", "interview stress tool"],
    ctaText: "Save this interview plan in SereneMind",
    faq: [
      { question: "Can I use this one day before an interview?", answer: "Yes. Even short focused reps can reduce anxiety and improve control." },
      { question: "Does this replace interview coaching?", answer: "No. It complements coaching by improving emotional regulation and execution." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Interview Stress Load", "Moderate Interview Stress Load", "Steady Interview Readiness"),
  },
  {
    slug: "cycle-mood-insight-check",
    title: "Cycle Mood Insight Check",
    shortTitle: "Cycle Mood Insight",
    description:
      "Check how menstrual-cycle-related stress patterns may be affecting mood and anxiety, then get a practical daily plan.",
    intro: [
      "Hormonal shifts can change emotional sensitivity and energy. This tool helps translate symptoms into useful action.",
      "You get a same-day support profile and a clear next-step recommendation.",
    ],
    keywords: ["menstrual anxiety symptoms", "cycle mood tracker", "pms anxiety help", "women anxiety tool", "hormones and anxiety"],
    ctaText: "Track cycle and anxiety patterns in SereneMind",
    faq: [
      { question: "Does this diagnose PMDD?", answer: "No. It is a support tool. For diagnosis, speak with a licensed clinician." },
      { question: "Can I use this outside PMS days?", answer: "Yes. It is useful in any cycle phase." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Cycle-Linked Mood Load", "Moderate Cycle-Linked Mood Load", "Stable Cycle Support Window"),
  },
  {
    slug: "pms-overwhelm-reset",
    title: "PMS Overwhelm Reset Tool",
    shortTitle: "PMS Overwhelm Reset",
    description: "Quick tool for PMS emotional overload. Get immediate grounding steps and a simple recovery plan.",
    intro: [
      "PMS overwhelm can amplify irritability, worry, and fatigue. This tool helps reduce overload before it escalates.",
      "Use your result to prioritize energy protection, emotional regulation, and realistic daily goals.",
    ],
    keywords: ["pms overwhelm", "pms anxiety help", "how to calm pms mood swings", "premenstrual stress", "women mental health tool"],
    ctaText: "Open PMS support in SereneMind",
    faq: [
      { question: "Is this only for severe PMS?", answer: "No. It helps at mild, moderate, and high symptom levels." },
      { question: "Should I track results over time?", answer: "Yes. Tracking helps identify repeating patterns and better interventions." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High PMS Overwhelm Load", "Moderate PMS Overwhelm Load", "Steady PMS Management"),
  },
  {
    slug: "period-pain-stress-check",
    title: "Period Pain & Stress Check",
    shortTitle: "Period Pain Stress Check",
    description:
      "Assess how period pain and stress interact with mood and focus. Get a practical same-day coping plan.",
    intro: [
      "Physical discomfort and emotional strain can reinforce each other. This check helps you interrupt that loop with structured support.",
      "You receive an action plan focused on pacing, regulation, and recovery.",
    ],
    keywords: ["period pain anxiety", "menstrual stress check", "period mood support", "period pain coping tool", "women wellness check"],
    ctaText: "Track period and stress in SereneMind",
    faq: [
      { question: "Can this replace medical care for pain?", answer: "No. Severe or worsening pain should be evaluated by a healthcare professional." },
      { question: "Why include emotional questions?", answer: "Because stress and pain often amplify each other, and both influence daily functioning." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Pain + Stress Load", "Moderate Pain + Stress Load", "Stable Pain-Stress Control"),
  },
  {
    slug: "burnout-vs-anxiety-check",
    title: "Burnout vs Anxiety Check",
    shortTitle: "Burnout vs Anxiety",
    description:
      "Screen your current pattern for burnout-like overload versus anxiety-driven threat loops and get next steps.",
    intro: [
      "Many women experience both burnout and anxiety, but the interventions can differ. This tool helps identify your dominant pattern today.",
      "Your result focuses on energy protection, boundaries, and thought-load reduction.",
    ],
    keywords: ["burnout or anxiety", "burnout test women", "work anxiety check", "emotional exhaustion tool", "cbt burnout support"],
    ctaText: "Build recovery plan in SereneMind",
    faq: [
      { question: "Can burnout and anxiety happen together?", answer: "Yes, and often do. The tool is meant to guide priorities, not give diagnosis." },
      { question: "What should I do after the result?", answer: "Start with one realistic action from your plan and track how symptoms change this week." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Burnout-Anxiety Overlap", "Moderate Burnout-Anxiety Overlap", "Manageable Workload Stress"),
  },
  {
    slug: "workplace-boundary-script-builder",
    title: "Workplace Boundary Script Builder",
    shortTitle: "Boundary Script Builder",
    description:
      "Generate assertive boundary support guidance for work stress, over-commitment, and people-pleasing loops.",
    intro: [
      "Workplace anxiety often worsens when boundaries are unclear. This tool helps you reset communication and workload expectations.",
      "You get a clear profile and actions you can apply before your next difficult conversation.",
    ],
    keywords: ["work boundary script", "assertive communication at work", "people pleasing anxiety", "work stress boundaries", "women workplace anxiety"],
    ctaText: "Save boundary scripts in SereneMind",
    faq: [
      { question: "Will this write full scripts?", answer: "This version gives your boundary profile and action framework. In-app tools provide deeper script support." },
      { question: "Can this help with manager conversations?", answer: "Yes. It is designed for workload, deadlines, and expectation-setting stress." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Boundary Strain", "Moderate Boundary Strain", "Healthy Boundary Stability"),
  },
  {
    slug: "imposter-syndrome-reframe-tool",
    title: "Imposter Syndrome Reframe Tool",
    shortTitle: "Imposter Syndrome Reframe",
    description:
      "Use CBT-style reframing to reduce imposter syndrome thoughts and improve confidence before high-pressure tasks.",
    intro: [
      "Imposter syndrome can distort evidence and amplify self-doubt. This tool helps you ground your thoughts in facts.",
      "Your result identifies your current confidence load and gives structured reframe actions.",
    ],
    keywords: ["imposter syndrome help", "cbt imposter syndrome", "self doubt at work", "confidence reframe tool", "women leadership anxiety"],
    ctaText: "Continue confidence work in SereneMind",
    faq: [
      { question: "Can this help before presentations?", answer: "Yes. It is useful before any performance or visibility moment." },
      { question: "Is imposter syndrome a diagnosis?", answer: "No. It is a common thought pattern, not a formal diagnosis." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Imposter Loop Activation", "Moderate Imposter Loop Activation", "Grounded Confidence State"),
  },
  {
    slug: "social-anxiety-conversation-planner",
    title: "Social Anxiety Conversation Planner",
    shortTitle: "Social Anxiety Planner",
    description:
      "Plan social interactions with less overthinking. Get a pre-conversation reset and post-conversation reflection guide.",
    intro: [
      "Social anxiety often increases before and after conversations through prediction and rumination loops.",
      "This planner helps reduce anticipatory fear and post-event self-criticism.",
    ],
    keywords: ["social anxiety conversation", "how to stop social anxiety", "social anxiety planning tool", "conversation anxiety help", "overthinking after social events"],
    ctaText: "Track social confidence in SereneMind",
    faq: [
      { question: "Will this remove social anxiety immediately?", answer: "It aims to reduce intensity and recovery time through structured practice." },
      { question: "Can I use this for work networking?", answer: "Yes. It works well for networking, meetings, and difficult conversations." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Social Anxiety Load", "Moderate Social Anxiety Load", "Steady Social Readiness"),
  },
  {
    slug: "panic-episode-recovery-plan",
    title: "Panic Episode Recovery Plan Tool",
    shortTitle: "Panic Recovery Plan",
    description:
      "Get a step-by-step panic recovery sequence to reduce physical intensity and recover faster after episodes.",
    intro: [
      "Panic can feel physically overwhelming and leave lingering fear of recurrence. This tool creates a practical recovery structure.",
      "Use the result to guide breathing, grounding, and post-episode cognitive recovery.",
    ],
    keywords: ["panic attack recovery", "panic episode help", "panic attack coping plan", "anxiety panic tool", "how to calm panic fast"],
    ctaText: "Open panic tools in SereneMind",
    faq: [
      { question: "Can this stop panic instantly?", answer: "It may not stop panic immediately but can reduce intensity and speed recovery." },
      { question: "Should I seek medical care for severe symptoms?", answer: "Yes. New or severe symptoms should be medically evaluated." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Panic Recovery Need", "Moderate Panic Recovery Need", "Preventive Panic Readiness"),
  },
  {
    slug: "sleep-anxiety-reset-tool",
    title: "Sleep Anxiety Reset Tool",
    shortTitle: "Sleep Anxiety Reset",
    description:
      "Assess bedtime anxiety and racing thoughts, then get a practical wind-down and nighttime reset plan.",
    intro: [
      "Sleep anxiety can be sustained by hyperarousal, late rumination, and fear of not sleeping enough.",
      "This tool gives a realistic wind-down sequence that focuses on consistency over perfection.",
    ],
    keywords: ["sleep anxiety help", "racing thoughts at night", "how to calm anxiety before sleep", "insomnia anxiety tool", "bedtime stress reset"],
    ctaText: "Build sleep plan in SereneMind",
    faq: [
      { question: "Can this help with insomnia?", answer: "It supports anxiety-related sleep disruption but is not a medical treatment plan." },
      { question: "Should I do this nightly?", answer: "Yes. Repetition improves nervous-system predictability at bedtime." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Sleep-Anxiety Activation", "Moderate Sleep-Anxiety Activation", "Stable Night Routine"),
  },
  {
    slug: "overthinking-stop-plan",
    title: "Overthinking Stop Plan",
    shortTitle: "Overthinking Stop Plan",
    description:
      "Identify rumination load and get a concrete thought-interruption and action-restart sequence.",
    intro: [
      "Overthinking often feels productive but usually repeats fear without resolution.",
      "This tool helps you switch from rumination to one useful next action.",
    ],
    keywords: ["how to stop overthinking", "rumination anxiety help", "overthinking tool", "cbt overthinking", "anxious thought loops"],
    ctaText: "Break thought loops in SereneMind",
    faq: [
      { question: "Will this stop thoughts completely?", answer: "No. It helps reduce loop duration and improve your recovery speed." },
      { question: "Can I use this multiple times a day?", answer: "Yes. It is designed for repeated short interventions." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Rumination Load", "Moderate Rumination Load", "Thought Clarity Momentum"),
  },
  {
    slug: "breakup-emotional-reset-tool",
    title: "Breakup Emotional Reset Tool",
    shortTitle: "Breakup Reset",
    description:
      "Get support after breakup anxiety and emotional overwhelm with a practical stabilization and recovery plan.",
    intro: [
      "Relationship loss can trigger grief, self-blame, and anxiety spikes. This tool helps stabilize the first response.",
      "Your result gives a recovery profile and immediate support actions.",
    ],
    keywords: ["breakup anxiety help", "emotional recovery after breakup", "cbt breakup tool", "heartbreak coping plan", "women breakup stress"],
    ctaText: "Continue recovery in SereneMind",
    faq: [
      { question: "Can this help with intense emotional swings?", answer: "Yes. It is designed to provide structure during emotional overload." },
      { question: "Does this replace counseling?", answer: "No. It is a self-help tool and can complement therapy support." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Breakup Recovery Load", "Moderate Breakup Recovery Load", "Early Emotional Stabilization"),
  },
  {
    slug: "mom-guilt-reframe-tool",
    title: "Mom Guilt Reframe Tool",
    shortTitle: "Mom Guilt Reframe",
    description:
      "Reduce mom-guilt thought loops using CBT reframing and practical self-compassion planning.",
    intro: [
      "Parental guilt often comes from impossible standards and comparison pressure.",
      "This tool helps you reset expectations and choose one realistic, value-aligned action.",
    ],
    keywords: ["mom guilt help", "parent anxiety tool", "self compassion for moms", "cbt for mom guilt", "motherhood stress support"],
    ctaText: "Build mom support plan in SereneMind",
    faq: [
      { question: "Is this only for new moms?", answer: "No. It can help at any parenting stage." },
      { question: "Can this reduce comparison stress?", answer: "Yes. It targets comparison and self-judgment patterns directly." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Mom-Guilt Pressure", "Moderate Mom-Guilt Pressure", "Grounded Parenting Confidence"),
  },
  {
    slug: "postpartum-stress-check",
    title: "Postpartum Stress Check",
    shortTitle: "Postpartum Stress Check",
    description:
      "Check postpartum emotional load and get practical daily stabilization actions for anxiety and overwhelm.",
    intro: [
      "Postpartum phases can include rapid emotional and physical shifts. This tool helps structure support and recovery.",
      "Use the result to prioritize regulation, rest protection, and support requests.",
    ],
    keywords: ["postpartum anxiety help", "postpartum stress check", "new mom mental health tool", "postpartum mood support", "women postpartum anxiety"],
    ctaText: "Access postpartum support in SereneMind",
    faq: [
      { question: "Is this a postpartum depression test?", answer: "No. It is a support check, not a diagnostic assessment." },
      { question: "What if symptoms feel severe?", answer: "Seek urgent support from a licensed healthcare professional." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Postpartum Stress Load", "Moderate Postpartum Stress Load", "Postpartum Stability Window"),
  },
  {
    slug: "health-anxiety-reality-check",
    title: "Health Anxiety Reality Check Tool",
    shortTitle: "Health Anxiety Check",
    description:
      "Assess health anxiety loops and get a practical plan to reduce checking, reassurance cycles, and catastrophic interpretation.",
    intro: [
      "Health anxiety often grows through repeated checking and worst-case assumptions.",
      "This tool helps you identify loop intensity and shift toward evidence-based grounding.",
    ],
    keywords: ["health anxiety help", "illness anxiety tool", "stop symptom checking anxiety", "cbt health anxiety", "hypochondria coping"],
    ctaText: "Manage health anxiety in SereneMind",
    faq: [
      { question: "Should I ignore medical symptoms?", answer: "No. Use appropriate medical care. This tool targets anxiety loops, not diagnosis." },
      { question: "Can this help reduce reassurance seeking?", answer: "Yes. It provides structured alternatives to reassurance cycles." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Health-Anxiety Loop", "Moderate Health-Anxiety Loop", "Grounded Health Perspective"),
  },
  {
    slug: "confidence-before-presentation-tool",
    title: "Presentation Confidence Reset Tool",
    shortTitle: "Presentation Confidence",
    description:
      "Reduce presentation anxiety with a quick confidence profile and targeted prep actions.",
    intro: [
      "Presentation anxiety can include fear of blanking, judgment, and visible nervousness.",
      "This tool helps you focus on controllable rehearsal and regulation steps.",
    ],
    keywords: ["presentation anxiety help", "public speaking anxiety tool", "confidence before presentation", "cbt public speaking", "women leadership confidence"],
    ctaText: "Practice confidence in SereneMind",
    faq: [
      { question: "Can this help for virtual presentations?", answer: "Yes. The planning approach works for both virtual and in-person delivery." },
      { question: "How often should I use it?", answer: "Use before key talks and during rehearsal week for better consistency." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Presentation Anxiety Load", "Moderate Presentation Anxiety Load", "Confident Presentation Readiness"),
  },
  {
    slug: "decision-anxiety-clarity-tool",
    title: "Decision Anxiety Clarity Tool",
    shortTitle: "Decision Clarity Tool",
    description:
      "Break decision paralysis by assessing anxiety load and generating a practical next-step decision frame.",
    intro: [
      "Decision anxiety often comes from fear of regret and perfection pressure.",
      "This tool helps you reduce paralysis and choose one workable next move.",
    ],
    keywords: ["decision anxiety help", "decision paralysis tool", "how to make decisions with anxiety", "overthinking decisions", "cbt decision making"],
    ctaText: "Build decision clarity in SereneMind",
    faq: [
      { question: "Can this choose for me?", answer: "No. It helps you structure judgment and reduce anxiety friction." },
      { question: "Is this useful for career decisions?", answer: "Yes. It is built for high-stakes and everyday decisions." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Decision Paralysis Load", "Moderate Decision Paralysis Load", "Practical Decision Momentum"),
  },
  {
    slug: "perfectionism-reset-tool",
    title: "Perfectionism Reset Tool",
    shortTitle: "Perfectionism Reset",
    description:
      "Assess perfectionism-driven anxiety and generate a progress-focused action plan.",
    intro: [
      "Perfectionism can increase anxiety, delay action, and create chronic dissatisfaction.",
      "This tool shifts focus from perfect outcomes to consistent forward progress.",
    ],
    keywords: ["perfectionism anxiety", "how to stop perfectionism", "cbt perfectionism", "progress not perfection tool", "work perfectionism stress"],
    ctaText: "Reset perfectionism in SereneMind",
    faq: [
      { question: "Can perfectionism look like procrastination?", answer: "Yes. Fear of imperfection often drives avoidance and delay." },
      { question: "What is the first step?", answer: "Set a good-enough completion standard and finish one small task today." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Perfectionism Strain", "Moderate Perfectionism Strain", "Healthy Progress Orientation"),
  },
  {
    slug: "career-direction-confidence-check",
    title: "Career Direction Confidence Check",
    shortTitle: "Career Direction Check",
    description:
      "Check uncertainty-related career anxiety and get a practical confidence-building action plan.",
    intro: [
      "Career uncertainty can trigger fear, indecision, and comparison stress.",
      "This check helps you turn uncertainty into a clear, staged confidence strategy.",
    ],
    keywords: ["career anxiety help", "career direction uncertainty", "career confidence tool", "women career stress", "career decision anxiety"],
    ctaText: "Create your career plan in SereneMind",
    faq: [
      { question: "Is this for career change anxiety?", answer: "Yes. It supports both career changes and in-role confidence stress." },
      { question: "How should I use the result?", answer: "Pick one low-risk action this week and track emotional response over time." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Career Uncertainty Load", "Moderate Career Uncertainty Load", "Career Confidence Momentum"),
  },
  {
    slug: "salary-negotiation-anxiety-tool",
    title: "Salary Negotiation Anxiety Tool",
    shortTitle: "Salary Negotiation Anxiety",
    description:
      "Reduce salary negotiation anxiety with practical preparation and confidence-focused action steps.",
    intro: [
      "Negotiation stress often includes rejection fear and self-worth concerns. This tool helps you prepare with clearer emotional control.",
      "Use the result to shape your script, timing, and confidence routine.",
    ],
    keywords: ["salary negotiation anxiety", "how to negotiate salary with anxiety", "women salary negotiation confidence", "negotiation stress tool", "career anxiety negotiation"],
    ctaText: "Save negotiation prep in SereneMind",
    faq: [
      { question: "Can this help first-time negotiators?", answer: "Yes. It is especially useful when negotiation feels unfamiliar or intimidating." },
      { question: "Does it provide legal or HR advice?", answer: "No. It focuses on emotional readiness and practical communication structure." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Negotiation Stress Load", "Moderate Negotiation Stress Load", "Negotiation Readiness Momentum"),
  },
  {
    slug: "relationship-boundary-anxiety-tool",
    title: "Relationship Boundary Anxiety Tool",
    shortTitle: "Relationship Boundary Tool",
    description:
      "Assess relationship boundary anxiety and get practical communication and self-regulation steps.",
    intro: [
      "Boundary anxiety can show up as guilt, fear of conflict, and over-explaining.",
      "This tool gives a simple profile and immediate actions for calmer, clearer communication.",
    ],
    keywords: ["relationship boundary anxiety", "how to set boundaries without guilt", "relationship anxiety tool", "assertive communication relationship", "women boundary support"],
    ctaText: "Build boundary confidence in SereneMind",
    faq: [
      { question: "Can this help with family boundaries too?", answer: "Yes. The same framework applies across partners, family, and friends." },
      { question: "What if setting boundaries increases anxiety first?", answer: "That is common. Structured practice usually improves confidence over time." },
    ],
    questions: DEFAULT_QUESTIONS,
    resultBands: makeBands("High Relationship Boundary Strain", "Moderate Relationship Boundary Strain", "Boundary Confidence Growth"),
  },
];

export function getToolBySlug(slug: string) {
  return freeTools.find((tool) => tool.slug === slug);
}

