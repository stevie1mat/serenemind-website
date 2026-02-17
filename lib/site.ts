export const siteConfig = {
  name: "SereneMind CBT",
  shortName: "SereneMind",
  defaultTitle: "SereneMind CBT | Anxiety Relief App with AI & CBT Tools",
  description:
    "SereneMind CBT helps you manage anxiety with evidence-based CBT tools, mood tracking, guided exercises, and supportive AI check-ins.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.serenemindcbt.com").replace(/\/+$/, ""),
  email: "support@serenemindcbt.com",
  keywords: [
    "anxiety relief app",
    "CBT app",
    "mental wellness app",
    "mood tracker",
    "cognitive behavioral therapy",
    "panic attack help",
    "guided breathing",
    "women wellness app",
  ],
} as const;

