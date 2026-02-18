import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download SereneMind CBT",
  description:
    "Download SereneMind CBT on iPhone and Android. Access anxiety relief tools, CBT exercises, breathing support, and guided check-ins.",
  alternates: {
    canonical: "/app",
  },
  openGraph: {
    title: "Download SereneMind CBT",
    description:
      "Get SereneMind CBT on the App Store or Google Play and start your anxiety support plan.",
    url: "/app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download SereneMind CBT",
    description:
      "Install SereneMind CBT on iPhone or Android.",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: `${siteConfig.url}/app`,
  downloadUrl: [siteConfig.appStoreUrl, siteConfig.playStoreUrl],
};

export default function AppDownloadPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <Header />

      <section className="container mx-auto max-w-5xl px-4 pb-20 pt-32">
        <div className="rounded-3xl border border-accent/70 bg-white/85 p-8 md:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
            SereneMind CBT
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Download the App
          </h1>
          <p className="mb-8 max-w-2xl text-base text-secondary-foreground md:text-lg">
            Choose your platform to get SereneMind CBT and start using guided anxiety relief,
            thought reframing, breathing exercises, and progress tracking.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-accent/60 bg-background/60 p-6 transition hover:bg-background"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
                iPhone & iPad
              </p>
              <h2 className="mb-2 text-2xl font-semibold text-foreground">Download on App Store</h2>
              <p className="text-sm text-secondary-foreground">
                Opens Apple App Store listing in a new tab.
              </p>
            </a>

            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-accent/60 bg-background/60 p-6 transition hover:bg-background"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
                Android
              </p>
              <h2 className="mb-2 text-2xl font-semibold text-foreground">Get it on Google Play</h2>
              <p className="text-sm text-secondary-foreground">
                Opens Google Play listing in a new tab.
              </p>
            </a>
          </div>

          <div className="mt-10 rounded-2xl border border-accent/60 bg-background/60 p-5">
            <h3 className="mb-2 text-lg font-semibold text-foreground">Need help finding the listing?</h3>
            <p className="text-sm text-secondary-foreground">
              If the store listing is not live yet in your region, check back shortly. You can also
              contact us at{" "}
              <a className="underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition hover:bg-foreground/90"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

