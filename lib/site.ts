const defaultSiteUrl = "https://serenemindcbt.com";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
const normalizedSiteUrl = configuredSiteUrl
  .trim()
  .replace(/^https?:\/\/www\.serenemindcbt\.com/i, "https://serenemindcbt.com")
  .replace(/\/+$/, "");

export const siteConfig = {
  name: "SereneMind CBT",
  shortName: "SereneMind",
  defaultTitle: "SereneMind CBT | Anxiety Relief App with AI & CBT Tools",
  description:
    "SereneMind CBT helps you manage anxiety with evidence-based CBT tools, mood tracking, guided exercises, and supportive AI check-ins.",
  url: normalizedSiteUrl || defaultSiteUrl,
  email: "support@serenemindcbt.com",
  appStoreUrl:
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://apps.apple.com/us/search?term=SereneMind%20CBT",
  playStoreUrl:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    "https://play.google.com/store/apps/details?id=com.steviemat.serenemindcbt",
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
