export type ToolFaq = {
  question: string;
  answer: string;
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
};

export const freeTools: FreeTool[] = [
  {
    slug: "job-rejection-reset",
    title: "Job Rejection Reset Tool (CBT)",
    shortTitle: "Job Rejection Reset",
    description:
      "Use this CBT tool after a job rejection to identify your thinking trap, get a balanced thought, and generate a 7-day confidence reset plan.",
    intro: [
      "Job rejection can trigger self-blame, comparison, and catastrophic thinking. This interactive CBT tool helps you interrupt that loop with a structured reset.",
      "You will get a quick result profile, a balanced thought script, and a next-step plan you can apply immediately.",
    ],
    keywords: [
      "job rejection anxiety",
      "cbt for job rejection",
      "how to deal with job rejection",
      "confidence after rejection",
      "career anxiety help",
    ],
    ctaText: "Get full confidence plan in SereneMind",
    faq: [
      {
        question: "Can this tool help if I got multiple rejections?",
        answer:
          "Yes. It is designed to reduce rejection spirals and help you build one clear action plan for the next week.",
      },
      {
        question: "Is this a replacement for therapy?",
        answer:
          "No. It is a self-help CBT exercise. If distress is severe or persistent, use support from a licensed professional.",
      },
    ],
  },
  {
    slug: "interview-anxiety-planner",
    title: "Interview Anxiety Planner",
    shortTitle: "Interview Anxiety Planner",
    description:
      "Plan interview anxiety support in minutes. Get a personalized prep ladder, calming routine, and confidence plan based on your stress level and timeline.",
    intro: [
      "Interview stress often comes from uncertainty, perfectionism, and fear of judgment. This planner turns that anxiety into clear, manageable preparation steps.",
      "You will get a practical timeline that includes regulation, rehearsal, and exposure-based confidence building.",
    ],
    keywords: [
      "interview anxiety help",
      "how to calm interview anxiety",
      "cbt interview preparation",
      "job interview confidence",
      "public speaking anxiety interview",
    ],
    ctaText: "Save this interview plan in SereneMind",
    faq: [
      {
        question: "How soon before an interview should I start?",
        answer:
          "Even 24 hours helps. If you have more time, use short daily reps to improve confidence and reduce avoidance.",
      },
      {
        question: "What if my anxiety is very high?",
        answer:
          "Start with body regulation and smaller rehearsal steps first, then move to more challenging practice.",
      },
    ],
  },
  {
    slug: "cycle-mood-insight-check",
    title: "Cycle Mood Insight Check",
    shortTitle: "Cycle Mood Insight",
    description:
      "Check how menstrual cycle phase, sleep, and stress may be affecting mood and anxiety. Get a practical daily plan and next-step recommendation.",
    intro: [
      "Hormonal changes can influence emotional sensitivity, energy, and anxiety. This check helps you translate symptoms into a practical same-day support plan.",
      "You will receive a simple result profile and targeted actions based on your current phase and stress load.",
    ],
    keywords: [
      "menstrual anxiety symptoms",
      "cycle mood tracker",
      "pms anxiety help",
      "women anxiety tool",
      "hormones and anxiety",
    ],
    ctaText: "Track cycle and anxiety patterns in SereneMind",
    faq: [
      {
        question: "Is this tool only for PMS?",
        answer:
          "No. It is designed for any cycle phase and supports both physical and emotional symptom patterns.",
      },
      {
        question: "Can this diagnose PMDD or other conditions?",
        answer:
          "No. It is a self-guided support tool, not a diagnosis. Seek clinical evaluation for persistent or severe symptoms.",
      },
    ],
  },
];

export function getToolBySlug(slug: string) {
  return freeTools.find((tool) => tool.slug === slug);
}

