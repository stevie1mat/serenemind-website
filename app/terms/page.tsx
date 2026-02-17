import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using the SereneMind CBT website and app.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | SereneMind CBT",
    description: "Read the terms and conditions for using SereneMind CBT.",
    url: "/terms",
    type: "article",
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32">
      <h1 className="mb-8 text-4xl font-serif font-bold">Terms & Conditions</h1>
      <p className="mb-8 text-secondary-foreground">Last updated: February 17, 2026</p>

      <div className="space-y-8 leading-relaxed text-foreground/80">
        <section>
          <h2 className="mb-4 text-2xl font-serif font-semibold">1. Acceptance of Terms</h2>
          <p>
            By using SereneMind CBT, you agree to these Terms & Conditions. If you do not agree,
            please discontinue use of the website and app.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-serif font-semibold">2. Informational Use Only</h2>
          <p>
            SereneMind CBT provides educational and self-help content. It is not a substitute for
            professional medical or mental health advice, diagnosis, or treatment.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-serif font-semibold">3. Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and
            for activity under your account. Please provide accurate information and use the service
            lawfully.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-serif font-semibold">4. Safety Notice</h2>
          <p>
            If you are in immediate danger, experiencing a medical emergency, or considering
            self-harm, contact local emergency services or a licensed crisis resource immediately.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-serif font-semibold">5. Contact</h2>
          <p>
            Questions about these terms can be sent to:
            <br />
            <br />
            <strong>SereneMind Support</strong>
            <br />
            {siteConfig.email}
          </p>
        </section>
      </div>
    </div>
  );
}

