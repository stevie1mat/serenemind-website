import Link from "next/link";
import { freeTools } from "@/lib/tools";

export function FreeToolsSection() {
  return (
    <section className="border-t border-accent/40 bg-background py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
              Try it now
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Free interactive tools for women
            </h2>
            <p className="mt-2 max-w-3xl text-secondary-foreground">
              Get fast support for job rejection stress, interview anxiety, and cycle-linked mood
              changes with practical CBT-based mini tools.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex w-fit items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition hover:bg-foreground/90"
          >
            View all tools
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {freeTools.map((tool) => (
            <article key={tool.slug} className="rounded-2xl border border-accent/70 bg-white/85 p-5">
              <h3 className="mb-2 text-xl font-semibold text-foreground">{tool.shortTitle}</h3>
              <p className="mb-4 text-sm text-secondary-foreground">{tool.description}</p>
              <Link
                href={`/tools/${tool.slug}`}
                className="inline-flex items-center rounded-full border border-accent/80 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-background"
              >
                Try tool
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

