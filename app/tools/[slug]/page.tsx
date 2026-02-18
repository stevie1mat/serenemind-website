import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { freeTools, getToolBySlug } from "@/lib/tools";
import { siteConfig } from "@/lib/site";
import { GenericInsightTool } from "@/components/tools/GenericInsightTool";

type ToolPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return freeTools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: ToolPageProps): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    return {
      title: "Tool Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title: tool.title,
      description: tool.description,
      url: `/tools/${tool.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.title,
      description: tool.description,
    },
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();
  const relatedTools = freeTools
    .filter((item) => item.slug !== tool.slug)
    .slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteConfig.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${siteConfig.url}/tools`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.shortTitle,
        item: `${siteConfig.url}/tools/${tool.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="container mx-auto max-w-4xl px-4 pb-20 pt-32">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-secondary-foreground">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link href="/tools" className="hover:underline">
            Tools
          </Link>
        </nav>

        <header className="mb-8">
          <h1 className="mb-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            {tool.title}
          </h1>
          <p className="text-base text-secondary-foreground md:text-lg">{tool.description}</p>
        </header>

        <section className="mb-8 rounded-2xl border border-accent/70 bg-white/85 p-6">
          {tool.intro.map((paragraph) => (
            <p key={paragraph} className="mb-3 text-secondary-foreground last:mb-0">
              {paragraph}
            </p>
          ))}
        </section>

        <GenericInsightTool tool={tool} />

        <section className="mt-8 rounded-2xl border border-accent/70 bg-white/85 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Frequently asked questions</h2>
          <div className="space-y-4">
            {tool.faq.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{item.question}</h3>
                <p className="text-secondary-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-accent/70 bg-white/85 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Related internal links</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {relatedTools.map((item) => (
              <Link
                key={item.slug}
                href={`/tools/${item.slug}`}
                className="rounded-xl border border-accent/60 bg-background/55 p-4 text-sm font-medium text-foreground transition hover:bg-background"
              >
                {item.shortTitle}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools"
              className="rounded-full border border-accent/70 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-background"
            >
              Browse all tools
            </Link>
            <Link
              href="/articles"
              className="rounded-full border border-accent/70 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-background"
            >
              Read anxiety articles
            </Link>
            <Link
              href="/app"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white transition hover:bg-foreground/90"
            >
              Continue in app
            </Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
