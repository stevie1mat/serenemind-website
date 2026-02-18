export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  imageCreditName: string;
  imageCreditUrl: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  sections: ArticleSection[];
  faq: ArticleFaq[];
};

export const articles: Article[] = [
  {
    slug: "cbt-for-anxiety-step-by-step",
    title: "CBT for Anxiety: A Step-by-Step Guide You Can Use Daily",
    description:
      "Learn a practical CBT routine for anxiety relief. Follow a simple daily process to identify anxious thoughts, reframe them, and take helpful action.",
    excerpt:
      "Use this daily CBT workflow to break anxiety loops and build calmer habits.",
    imageSrc:
      "https://images.pexels.com/photos/6958391/pexels-photo-6958391.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    imageAlt: "Woman meditating at home in a bright room",
    imageCreditName: "Thirdman",
    imageCreditUrl: "https://www.pexels.com/photo/a-woman-in-black-active-wear-meditating-at-home-6958391/",
    keywords: [
      "cbt for anxiety",
      "cognitive behavioral therapy anxiety",
      "anxiety coping skills",
      "how to manage anxiety",
      "anxiety relief techniques",
    ],
    publishedAt: "2026-02-17T08:00:00.000Z",
    updatedAt: "2026-02-17T08:00:00.000Z",
    readTime: "8 min read",
    sections: [
      {
        heading: "Why CBT works for anxiety",
        paragraphs: [
          "Anxiety often grows when thoughts, feelings, and behaviors reinforce each other. CBT helps break that cycle. You learn to notice fear-based thoughts, test whether they are accurate, and choose actions that reduce avoidance.",
          "The key is consistency, not perfection. Small daily reps make anxious thoughts feel less automatic and less believable over time.",
        ],
      },
      {
        heading: "Step 1: Name the trigger and the thought",
        paragraphs: [
          "When anxiety spikes, write one sentence for the trigger and one sentence for your main thought. Keep it specific.",
          "Example: Trigger: I have a team meeting tomorrow. Thought: I will freeze and look incompetent.",
        ],
      },
      {
        heading: "Step 2: Rate intensity before doing anything",
        paragraphs: [
          "Rate anxiety from 0 to 10. This gives you a baseline and helps you see progress after you practice a tool.",
          "Many people skip this, but it is one of the fastest ways to prove to yourself that skills are working.",
        ],
      },
      {
        heading: "Step 3: Challenge the thought with evidence",
        paragraphs: [
          "Ask: What is the evidence for this thought? What is the evidence against it? What would I tell a friend in this same situation?",
          "Your goal is not fake positivity. Your goal is a balanced thought that is realistic and usable.",
        ],
        bullets: [
          "Look for facts, not feelings alone.",
          "Avoid all-or-nothing language like always, never, ruined.",
          "Create one alternative thought you can repeat during stress.",
        ],
      },
      {
        heading: "Step 4: Pick one behavior that reduces avoidance",
        paragraphs: [
          "Anxiety shrinks when you take action that matches your values. Choose one small step you can do now.",
          "If your fear is social, send one message. If your fear is performance, rehearse for five minutes. If your fear is uncertainty, set a timer and start.",
        ],
      },
      {
        heading: "Step 5: Re-rate anxiety and log what worked",
        paragraphs: [
          "After the skill, rate anxiety again from 0 to 10. Even a small drop matters.",
          "Save your pattern: trigger, thought, balanced thought, action, and result. Over a few weeks, this becomes your personal anxiety playbook.",
        ],
      },
      {
        heading: "A simple daily CBT routine",
        paragraphs: [
          "Use this sequence once per day: check in, identify one anxious thought, write one balanced thought, take one value-based action, and review your score change.",
          "If you use SereneMind CBT, these steps map directly to the Thought Journal, breathing tools, and action planning features so you can stay consistent.",
        ],
      },
    ],
    faq: [
      {
        question: "How long does CBT take to help anxiety?",
        answer:
          "Some people feel short-term relief in days, but stronger pattern change usually takes a few weeks of regular practice.",
      },
      {
        question: "Can I do CBT on my own?",
        answer:
          "Yes, many CBT tools are self-guided. If anxiety is severe or persistent, working with a licensed therapist is recommended.",
      },
    ],
  },
  {
    slug: "stop-anxiety-thought-spirals",
    title: "How to Stop Anxiety Thought Spirals Before They Take Over",
    description:
      "A practical guide to interrupt anxious rumination. Learn how to catch thought spirals early, regulate your body, and redirect to useful action.",
    excerpt:
      "Learn the exact sequence to interrupt rumination and regain mental control.",
    imageSrc:
      "https://images.pexels.com/photos/6802935/pexels-photo-6802935.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    imageAlt: "Woman meditating indoors in a calm home space",
    imageCreditName: "Vlada Karpovich",
    imageCreditUrl: "https://www.pexels.com/photo/woman-meditating-at-home-6802935/",
    keywords: [
      "how to stop overthinking",
      "anxiety thought spiral",
      "rumination anxiety",
      "intrusive anxious thoughts",
      "anxiety reframe",
    ],
    publishedAt: "2026-02-17T08:00:00.000Z",
    updatedAt: "2026-02-17T08:00:00.000Z",
    readTime: "7 min read",
    sections: [
      {
        heading: "What an anxiety spiral looks like",
        paragraphs: [
          "Thought spirals usually start with uncertainty. Your brain predicts the worst outcome, then treats that prediction as fact.",
          "The spiral keeps looping because the problem feels urgent, but the thinking is repetitive rather than productive.",
        ],
      },
      {
        heading: "Use the 3-part interrupt: Notice, Name, Narrow",
        paragraphs: [
          "Notice: Catch the moment you start replaying the same fear.",
          "Name: Label the loop clearly, such as mind reading, catastrophizing, or worst-case planning.",
          "Narrow: Ask one focused question: What is the next useful action in the next 10 minutes?",
        ],
      },
      {
        heading: "Regulate your body first",
        paragraphs: [
          "When your nervous system is activated, logic is harder to access. Use a brief regulation step before trying to think clearly.",
        ],
        bullets: [
          "Do 4-7-8 breathing for 2 minutes.",
          "Name five things you can see and feel.",
          "Relax your jaw and lengthen your exhale.",
        ],
      },
      {
        heading: "Convert fear into a testable statement",
        paragraphs: [
          "Replace broad fear with a testable prediction. Instead of I will fail everything, write: I might struggle in the first five minutes of this task.",
          "Now you can test it. Small tests weaken spirals because they replace imagined certainty with real data.",
        ],
      },
      {
        heading: "Set a rumination boundary",
        paragraphs: [
          "Give yourself a short worry window, such as 10 minutes. After that, move to one action.",
          "Boundaries help because they teach your brain that fear gets time, but not full control of the day.",
        ],
      },
      {
        heading: "Build a rapid response plan",
        paragraphs: [
          "Prepare a one-page response for your most common spiral: trigger, common thought, balanced response, and first action.",
          "When anxiety hits, you do not need to invent a new strategy. You follow your plan.",
        ],
      },
    ],
    faq: [
      {
        question: "Is overthinking the same as anxiety?",
        answer:
          "Not always, but anxiety often drives overthinking through threat prediction and uncertainty intolerance.",
      },
      {
        question: "What if the thoughts keep coming back?",
        answer:
          "That is normal. The goal is not zero anxious thoughts. The goal is faster recovery and less time trapped in the loop.",
      },
    ],
  },
  {
    slug: "breathing-exercises-for-panic-and-anxiety",
    title: "Breathing Exercises for Panic and Anxiety That Actually Help",
    description:
      "Learn simple breathing techniques for panic and anxiety, including 4-7-8 and paced breathing. Use these methods to reduce physical symptoms quickly.",
    excerpt:
      "Use short breathing protocols to lower panic intensity and regain control.",
    imageSrc:
      "https://images.pexels.com/photos/7520244/pexels-photo-7520244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    imageAlt: "Woman practicing a breathing exercise with eyes closed",
    imageCreditName: "Darina Belonogova",
    imageCreditUrl: "https://www.pexels.com/photo/woman-doing-a-breathing-exercise-7520244/",
    keywords: [
      "breathing exercises for anxiety",
      "panic attack breathing technique",
      "4-7-8 breathing",
      "how to calm anxiety fast",
      "nervous system regulation",
    ],
    publishedAt: "2026-02-17T08:00:00.000Z",
    updatedAt: "2026-02-17T08:00:00.000Z",
    readTime: "6 min read",
    sections: [
      {
        heading: "Why breathing works during anxiety",
        paragraphs: [
          "Anxiety increases heart rate, muscle tension, and shallow breathing. Slow, structured breathing signals safety to your nervous system and can reduce symptoms within minutes.",
          "Breathing does not solve every cause of anxiety, but it helps you regain enough control to think clearly and choose the next step.",
        ],
      },
      {
        heading: "Method 1: 4-7-8 breathing",
        paragraphs: [
          "Inhale through your nose for 4 counts, hold for 7, exhale slowly for 8. Repeat for 4 rounds.",
          "Keep your exhale soft and longer than your inhale. The long exhale is what helps downshift your stress response.",
        ],
      },
      {
        heading: "Method 2: Box breathing",
        paragraphs: [
          "Inhale for 4, hold for 4, exhale for 4, hold for 4. Repeat for 2 to 3 minutes.",
          "This pattern is useful when your mind feels scattered and you need a steady rhythm.",
        ],
      },
      {
        heading: "Method 3: Extended exhale breathing",
        paragraphs: [
          "Inhale for 4 counts and exhale for 6 to 8 counts without holding. Continue for 2 to 5 minutes.",
          "This is often the easiest option during panic because it has fewer steps.",
        ],
      },
      {
        heading: "Common mistakes that reduce results",
        paragraphs: [
          "Many people breathe too fast, force deep breaths, or stop after 20 seconds. Slow and gentle is better than intense.",
        ],
        bullets: [
          "Do not force full lung breaths.",
          "Keep shoulders relaxed and jaw unclenched.",
          "Use a visible timer so you complete at least two minutes.",
        ],
      },
      {
        heading: "When to use each method",
        paragraphs: [
          "Use 4-7-8 for strong anxiety spikes. Use box breathing for focus before meetings or tasks. Use extended exhale when panic symptoms feel intense.",
          "In SereneMind CBT, you can pair breathing with a quick check-in and thought reframing so physical and cognitive symptoms are addressed together.",
        ],
      },
    ],
    faq: [
      {
        question: "Can breathing stop a panic attack immediately?",
        answer:
          "It may not stop panic instantly, but it often lowers intensity and shortens recovery time when used early and consistently.",
      },
      {
        question: "How often should I practice anxiety breathing?",
        answer:
          "Practice once or twice daily when calm, then use it during stress. Training in calm moments improves results under pressure.",
      },
    ],
  },
  {
    slug: "anxiety-journal-prompts-that-help",
    title: "20 Anxiety Journal Prompts That Help You Reframe Faster",
    description:
      "Use these anxiety journal prompts to identify thought patterns, challenge fear-based beliefs, and build balanced responses you can reuse.",
    excerpt:
      "A practical list of journal prompts to reduce overthinking and build clarity.",
    imageSrc:
      "https://images.pexels.com/photos/8055493/pexels-photo-8055493.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    imageAlt: "Close-up of a person writing in a notebook",
    imageCreditName: "Annushka Ahuja",
    imageCreditUrl: "https://www.pexels.com/photo/woman-writing-in-notebook-8055493/",
    keywords: [
      "anxiety journal prompts",
      "thought journal for anxiety",
      "cbt journaling prompts",
      "how to journal for anxiety",
      "reframing anxious thoughts",
    ],
    publishedAt: "2026-02-17T08:00:00.000Z",
    updatedAt: "2026-02-17T08:00:00.000Z",
    readTime: "9 min read",
    sections: [
      {
        heading: "Why journaling reduces anxiety",
        paragraphs: [
          "Journaling slows down anxious thinking and makes patterns visible. Once thoughts are on paper, they become easier to question.",
          "CBT journaling works best when prompts move you from fear statements to evidence, perspective, and action.",
        ],
      },
      {
        heading: "Prompts to identify the pattern",
        paragraphs: ["Use these first to map the moment clearly."],
        bullets: [
          "What happened right before my anxiety rose?",
          "What is the exact thought repeating right now?",
          "What am I predicting will happen?",
          "Which feeling is strongest in my body?",
          "What am I avoiding because of this fear?",
        ],
      },
      {
        heading: "Prompts to challenge the thought",
        paragraphs: ["Use these to test whether the thought is accurate or distorted."],
        bullets: [
          "What evidence supports this fear?",
          "What evidence does not support it?",
          "What is a more balanced way to describe this situation?",
          "If a friend said this, what would I say back?",
          "What is possible, not just probable?",
        ],
      },
      {
        heading: "Prompts to move into action",
        paragraphs: ["Use these when you want to stop looping and start acting."],
        bullets: [
          "What is one step I can complete in 10 minutes?",
          "What outcome is in my control today?",
          "What boundary would reduce stress here?",
          "What would progress look like, even if small?",
          "What support do I need to ask for right now?",
        ],
      },
      {
        heading: "Prompts for recovery after a hard day",
        paragraphs: ["Use these to reset and prevent next-day carryover anxiety."],
        bullets: [
          "What did I handle better than I expected?",
          "What helped my anxiety come down, even slightly?",
          "What trigger should I plan for tomorrow?",
          "What balanced thought do I want ready next time?",
          "What is one kind sentence I can end with?",
        ],
      },
      {
        heading: "How to make journaling consistent",
        paragraphs: [
          "Set a 5-minute timer and use three prompts, not twenty. Consistency beats depth on difficult days.",
          "In SereneMind CBT, structured journaling prompts are paired with mood tracking so you can see what thoughts repeat and what interventions work best.",
        ],
      },
    ],
    faq: [
      {
        question: "How long should an anxiety journal entry be?",
        answer:
          "Short entries are fine. Even three to five sentences can be enough if you identify the thought and write one balanced response.",
      },
      {
        question: "Should I journal during panic?",
        answer:
          "Start with breathing or grounding first. Once intensity lowers, journaling can help process the episode and prevent future spirals.",
      },
    ],
  },
  {
    slug: "exposure-therapy-ladder-for-anxiety",
    title: "Exposure Therapy Ladder for Anxiety: Build Confidence Step by Step",
    description:
      "Create an exposure ladder to reduce avoidance and anxiety. Learn how to rank fears, choose starting steps, and track progress safely.",
    excerpt:
      "A clear guide to creating and using an exposure ladder for social anxiety, panic, and phobias.",
    imageSrc:
      "https://images.pexels.com/photos/5104098/pexels-photo-5104098.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    imageAlt: "Person walking up metal stairs",
    imageCreditName: "Kayley",
    imageCreditUrl: "https://www.pexels.com/photo/black-metal-stairs-5104098/",
    keywords: [
      "exposure therapy ladder",
      "how to face anxiety triggers",
      "reduce avoidance behavior",
      "social anxiety exposure exercises",
      "cbt exposure practice",
    ],
    publishedAt: "2026-02-17T08:00:00.000Z",
    updatedAt: "2026-02-17T08:00:00.000Z",
    readTime: "8 min read",
    sections: [
      {
        heading: "What an exposure ladder does",
        paragraphs: [
          "Anxiety stays strong when you repeatedly avoid feared situations. An exposure ladder helps you face those situations gradually so your nervous system can relearn safety.",
          "You do not start with the hardest fear. You start with manageable reps and build upward.",
        ],
      },
      {
        heading: "Step 1: Define one fear target",
        paragraphs: [
          "Pick one specific fear pattern, such as speaking in meetings, riding elevators, or making phone calls.",
          "The clearer the target, the easier it is to design useful exposure steps.",
        ],
      },
      {
        heading: "Step 2: List 10 exposure steps from easy to hard",
        paragraphs: [
          "Rate each step from 0 to 10 for anxiety intensity. Keep early steps around 3 to 4 out of 10.",
        ],
        bullets: [
          "Read your meeting comment out loud alone.",
          "Record yourself saying it.",
          "Say one sentence in a small call.",
          "Contribute one point in a team meeting.",
          "Ask one follow-up question in a group setting.",
        ],
      },
      {
        heading: "Step 3: Repeat each step until anxiety drops",
        paragraphs: [
          "Stay with a step long enough for anxiety to reduce during the practice. Repetition matters more than intensity.",
          "Track your pre and post anxiety score each session. Move up only when the current step feels meaningfully easier.",
        ],
      },
      {
        heading: "Step 4: Prevent safety behaviors",
        paragraphs: [
          "Safety behaviors can hide progress. For example, over-rehearsing every sentence or constantly checking for reassurance may keep fear alive.",
          "Aim for reasonable preparation, then complete the exposure without extra protection behaviors.",
        ],
      },
      {
        heading: "Step 5: Review and reinforce wins",
        paragraphs: [
          "After each rep, log what happened versus what anxiety predicted. This is where confidence grows.",
          "Exposure is not about feeling zero fear. It is about proving you can function and recover even when anxiety is present.",
        ],
      },
      {
        heading: "When to get professional support",
        paragraphs: [
          "If anxiety feels overwhelming, complex trauma is present, or avoidance severely disrupts daily life, complete exposure work with a licensed therapist.",
          "Self-guided tools are useful, but safety and pacing matter.",
        ],
      },
    ],
    faq: [
      {
        question: "How long should I stay on one ladder step?",
        answer:
          "Stay until anxiety is more manageable and your confidence increases. This often takes multiple reps over several days.",
      },
      {
        question: "Can exposure make anxiety worse?",
        answer:
          "Temporary discomfort is expected, but structured, gradual exposure typically reduces fear over time when paced correctly.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
