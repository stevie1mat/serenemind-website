import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Women CBT Anxiety Articles",
  description:
    "Evidence-based women CBT anxiety articles on thought reframing, breathing techniques, and practical mental wellness habits.",
  keywords: [
    "women cbt",
    "cbt for women",
    "women cbt articles",
    "anxiety articles",
    "cbt articles",
    "anxiety relief guide",
    "mental wellness resources",
  ],
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Women CBT Anxiety Articles | SereneMind",
    description:
      "Read practical women CBT guides on anxiety management, CBT skills, and daily mental wellness routines.",
    url: "/articles",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Women CBT Anxiety Articles | SereneMind",
    description:
      "Practical women CBT anxiety guides designed for real daily use.",
    images: ["/twitter-image"],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SereneMind Women CBT Articles",
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteConfig.url}/articles/${article.slug}`,
    name: article.title,
  })),
};

export default function ArticlesPage() {
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
            Women CBT Anxiety Articles
          </h1>
          <p className="max-w-2xl text-base text-secondary-foreground md:text-lg">
            Practical, research-aligned women CBT guides on anxiety relief, thought reframing,
            breathing routines, and behavior change.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-2xl border border-accent/60 bg-white/80 shadow-sm"
            >
              <Link href={`/articles/${article.slug}`} className="block">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  width={1200}
                  height={630}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[16/9] h-auto w-full object-cover"
                />
              </Link>
              <div className="p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
                {article.readTime}
              </p>
              <h2 className="mb-2 text-2xl font-semibold leading-snug text-foreground">
                <Link href={`/articles/${article.slug}`} className="hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="mb-5 text-sm text-secondary-foreground">{article.excerpt}</p>
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white transition hover:bg-foreground/90"
              >
                Read article
              </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
