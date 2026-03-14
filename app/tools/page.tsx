import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { freeTools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

const toolsHubKeywords = Array.from(
  new Set([
    ...freeTools.flatMap((tool) => tool.keywords),
    "women cbt",
    "cbt for women",
    "women cbt tools",
    "women anxiety cbt tools",
  ])
).slice(0, 80);

export const metadata: Metadata = {
  title: "Free Women CBT Anxiety Tools",
  description:
    "Try free interactive women CBT anxiety tools: job rejection reset, interview anxiety planner, and cycle mood insight check.",
  keywords: toolsHubKeywords,
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Free Women CBT Anxiety Tools",
    description:
      "Interactive women CBT tools for career stress, interview anxiety, and cycle-linked mood support.",
    url: "/tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Women CBT Anxiety Tools",
    description:
      "Use these free interactive women CBT anxiety tools and continue in SereneMind CBT.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SereneMind Women CBT Free Tools",
  itemListElement: freeTools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.title,
    url: `${siteConfig.url}/tools/${tool.slug}`,
  })),
};

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header />

      <section className="container mx-auto max-w-5xl px-4 pb-20 pt-32">
        <div className="mb-10">
          <h1 className="mb-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Free Women CBT Anxiety Tools
          </h1>
          <p className="max-w-3xl text-base text-secondary-foreground md:text-lg">
            Use these women-focused CBT tools to get immediate insight and practical next steps for
            anxiety, confidence, and cycle-linked mood patterns. Each tool ends with a personalized
            result you can carry into the SereneMind app.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {freeTools.map((tool) => (
            <article
              key={tool.slug}
              className="rounded-2xl border border-accent/70 bg-white/85 p-6 shadow-sm"
            >
              <h2 className="mb-2 text-2xl font-semibold text-foreground">
                <Link href={`/tools/${tool.slug}`} className="hover:underline">
                  {tool.shortTitle}
                </Link>
              </h2>
              <p className="mb-5 text-sm text-secondary-foreground">{tool.description}</p>
              <Link
                href={`/tools/${tool.slug}`}
                className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white transition hover:bg-foreground/90"
              >
                Try this tool
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-accent/70 bg-white/85 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Why these tools work</h2>
          <p className="mb-3 text-secondary-foreground">
            These tools use core CBT principles: identify the thought pattern, test assumptions,
            regulate physical stress, and choose one practical action. This format helps reduce
            emotional overload and supports better decisions under pressure.
          </p>
          <p className="text-secondary-foreground">
            For deeper support, daily tracking, and AI-guided planning, continue in the SereneMind
            CBT app after your result.
          </p>
        </section>
      </section>

      <Footer />
    </main>
  );
}
