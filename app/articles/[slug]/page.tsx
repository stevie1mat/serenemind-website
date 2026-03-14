import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { articles, getArticleBySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  return `${siteConfig.url}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seoKeywords = Array.from(
    new Set([...article.keywords, "women cbt", "cbt for women", "women anxiety cbt"])
  );
  const seoTitle = `${article.title} | Women CBT`;
  const seoDescription = `${article.description} Women-focused CBT guidance for practical anxiety relief.`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: "article",
      url: `/articles/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [toAbsoluteUrl(article.imageSrc)],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [toAbsoluteUrl(article.imageSrc)],
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

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
        name: "Articles",
        item: `${siteConfig.url}/articles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/articles/${article.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: "SereneMind CBT Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: toAbsoluteUrl(article.imageSrc),
    keywords: [...article.keywords, "women cbt", "cbt for women", "women anxiety cbt"].join(", "),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-32">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-secondary-foreground">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link href="/articles" className="hover:underline">
            Articles
          </Link>
        </nav>

        <header className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            {article.readTime}
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {article.title}
          </h1>
          <p className="text-base text-secondary-foreground md:text-lg">{article.description}</p>
        </header>

        <figure className="mb-10 overflow-hidden rounded-2xl border border-accent/60 bg-white/70">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            width={1200}
            height={630}
            sizes="(max-width: 1024px) 100vw, 960px"
            className="aspect-[16/9] h-auto w-full object-cover"
            priority
          />
          <figcaption className="px-4 py-2 text-xs text-secondary-foreground">
            Photo:{" "}
            <a
              href={article.imageCreditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {article.imageCreditName} / Pexels
            </a>
          </figcaption>
        </figure>

        <div className="space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-2xl font-semibold text-foreground">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-secondary-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-accent/60 bg-white/80 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Frequently asked questions</h2>
          <div className="space-y-5">
            {article.faq.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{item.question}</h3>
                <p className="text-secondary-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-accent/60 bg-white/80 p-6">
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Next steps</h2>
          <p className="mb-4 text-secondary-foreground">
            For urgent or severe symptoms, contact local emergency services or a licensed mental
            health professional. For daily support, use structured tools consistently.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition hover:bg-foreground/90"
          >
            Explore SereneMind CBT
          </Link>
        </section>
      </article>

      <section className="container mx-auto max-w-5xl px-4 pb-20">
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Related articles</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <article key={item.slug} className="rounded-2xl border border-accent/60 bg-white/80 p-5">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                <Link href={`/articles/${item.slug}`} className="hover:underline">
                  {item.title}
                </Link>
              </h3>
              <p className="mb-4 text-sm text-secondary-foreground">{item.excerpt}</p>
              <Link href={`/articles/${item.slug}`} className="text-sm font-medium text-foreground underline">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
