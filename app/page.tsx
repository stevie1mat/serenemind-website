import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Science } from "@/components/Science";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Privacy } from "@/components/Privacy";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { FreeToolsSection } from "@/components/FreeToolsSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
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
  url: siteConfig.url,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is my data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your mental health data is encrypted and stored securely. We do not sell your personal information to third parties.",
      },
    },
    {
      "@type": "Question",
      name: "What is CBT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cognitive Behavioral Therapy (CBT) is an evidence-based method that helps identify and reframe unhelpful thought patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Is the app free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core features are free, including mood tracking and anxiety relief tools. Optional premium features may include deeper insights.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <Hero />
      <Science />
      <Features />
      <FreeToolsSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Privacy />
      <Footer />
    </main>
  );
}
