"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type TriggerKey =
  | "blanking_out"
  | "being_judged"
  | "technical_questions"
  | "salary_negotiation"
  | "video_interview";

const TRIGGER_LABEL: Record<TriggerKey, string> = {
  blanking_out: "Blanking out",
  being_judged: "Being judged",
  technical_questions: "Technical questions",
  salary_negotiation: "Salary conversation",
  video_interview: "Video interview pressure",
};

export function InterviewAnxietyPlannerTool({ ctaText }: { ctaText: string }) {
  const [daysUntil, setDaysUntil] = useState(5);
  const [anxiety, setAnxiety] = useState(7);
  const [trigger, setTrigger] = useState<TriggerKey>("blanking_out");
  const [dailyPrepMinutes, setDailyPrepMinutes] = useState(20);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const riskScore = anxiety + (daysUntil <= 2 ? 3 : daysUntil <= 5 ? 2 : 1);
    const band = riskScore >= 11 ? "High Prep Risk" : riskScore >= 8 ? "Moderate Prep Risk" : "Steady Readiness";
    const focus =
      trigger === "blanking_out"
        ? "Use answer frameworks and timed recall reps."
        : trigger === "being_judged"
          ? "Use cognitive reframing for mind-reading and rejection fear."
          : trigger === "technical_questions"
            ? "Use targeted weak-topic reps with error logs."
            : trigger === "salary_negotiation"
              ? "Practice two clear range statements and one boundary line."
              : "Run camera practice and concise answer timing.";

    const rehearsalCount =
      dailyPrepMinutes >= 45 ? "2 full mocks + 1 short drill" : dailyPrepMinutes >= 20 ? "1 mock + 1 short drill" : "1 short drill";

    return {
      band,
      focus,
      rehearsalCount,
      plan: [
        "2 minutes: breathing reset before preparation.",
        "10-20 minutes: focused rehearsal on your biggest anxiety trigger.",
        "5 minutes: write one balanced thought and one confidence note.",
      ],
    };
  }, [anxiety, daysUntil, trigger, dailyPrepMinutes]);

  return (
    <section className="rounded-3xl border border-accent/70 bg-white/85 p-6 md:p-8">
      <h2 className="mb-2 text-2xl font-semibold text-foreground">Build your interview plan</h2>
      <p className="mb-6 text-sm text-secondary-foreground">
        Enter your current context to get a personalized anxiety-aware interview prep ladder.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Days until interview</span>
          <input
            type="number"
            min={1}
            max={60}
            value={daysUntil}
            onChange={(e) => setDaysUntil(Math.min(60, Math.max(1, Number(e.target.value) || 1)))}
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Anxiety level (1-10)</span>
          <input
            type="number"
            min={1}
            max={10}
            value={anxiety}
            onChange={(e) => setAnxiety(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          />
        </label>

        <label className="grid gap-2 text-sm md:col-span-2">
          <span className="font-medium text-foreground">Biggest trigger</span>
          <select
            value={trigger}
            onChange={(e) => setTrigger(e.target.value as TriggerKey)}
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          >
            {(Object.keys(TRIGGER_LABEL) as TriggerKey[]).map((key) => (
              <option key={key} value={key}>
                {TRIGGER_LABEL[key]}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm md:col-span-2">
          <span className="font-medium text-foreground">Prep time per day (minutes)</span>
          <input
            type="number"
            min={10}
            max={120}
            step={5}
            value={dailyPrepMinutes}
            onChange={(e) =>
              setDailyPrepMinutes(Math.min(120, Math.max(10, Number(e.target.value) || 10)))
            }
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="mt-6 inline-flex w-fit items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition hover:bg-foreground/90"
      >
        Generate interview plan
      </button>

      {submitted && (
        <div className="mt-8 rounded-2xl border border-accent/70 bg-background/60 p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            Result profile
          </p>
          <h3 className="mb-3 text-2xl font-semibold text-foreground">{result.band}</h3>
          <p className="mb-2 text-sm text-secondary-foreground">
            <span className="font-semibold text-foreground">Primary focus:</span> {result.focus}
          </p>
          <p className="mb-4 text-sm text-secondary-foreground">
            <span className="font-semibold text-foreground">Daily rehearsal target:</span>{" "}
            {result.rehearsalCount}
          </p>
          <ul className="mb-5 list-disc space-y-1 pl-5 text-sm text-secondary-foreground">
            {result.plan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/app"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              {ctaText}
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center rounded-full border border-accent/80 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-background"
            >
              Try another free tool
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

