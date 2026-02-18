"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type SelfTalkKey =
  | "im_not_good_enough"
  | "i_will_never_get_hired"
  | "everyone_else_is_better"
  | "i_ruined_my_future";

const SELF_TALK_OPTIONS: Array<{ value: SelfTalkKey; label: string }> = [
  { value: "im_not_good_enough", label: "I am not good enough." },
  { value: "i_will_never_get_hired", label: "I will never get hired." },
  { value: "everyone_else_is_better", label: "Everyone else is better than me." },
  { value: "i_ruined_my_future", label: "I ruined my career future." },
];

const TRAP_MAP: Record<SelfTalkKey, { trap: string; balanced: string; action: string }> = {
  im_not_good_enough: {
    trap: "Labeling",
    balanced:
      "One rejection is feedback on fit and timing, not a final verdict on my ability.",
    action: "Write 3 job-relevant strengths and one role where each strength fits.",
  },
  i_will_never_get_hired: {
    trap: "Catastrophizing",
    balanced:
      "This is one outcome, not all outcomes. Hiring timelines are uneven and skill-based growth changes results.",
    action: "Apply to one role today and ask one person for targeted feedback this week.",
  },
  everyone_else_is_better: {
    trap: "Comparison bias",
    balanced:
      "I am seeing other people’s highlights, not their full process. My progress can still be meaningful and fast.",
    action: "Run one interview simulation and improve one answer, not your entire profile.",
  },
  i_ruined_my_future: {
    trap: "All-or-nothing thinking",
    balanced:
      "Careers are built in pivots. A setback can still become a better direction with next-step action.",
    action: "Set a 7-day reset plan: resume update, role targeting, and two strategic applications.",
  },
};

export function JobRejectionResetTool({ ctaText }: { ctaText: string }) {
  const [eventText, setEventText] = useState("");
  const [selfTalk, setSelfTalk] = useState<SelfTalkKey>("im_not_good_enough");
  const [distress, setDistress] = useState(7);
  const [confidence, setConfidence] = useState(4);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const base = TRAP_MAP[selfTalk];
    const loadScore = distress + (11 - confidence);
    const profile =
      loadScore >= 14 ? "High Emotional Load" : loadScore >= 10 ? "Moderate Emotional Load" : "Recovery Momentum";
    const nextStep =
      loadScore >= 14
        ? "Today: do regulation first, then complete one low-pressure career action."
        : loadScore >= 10
          ? "Today: complete one practical task and one confidence rep."
          : "Today: maintain momentum with a focused application block.";

    return {
      trap: base.trap,
      balancedThought: base.balanced,
      action: base.action,
      profile,
      nextStep,
    };
  }, [selfTalk, distress, confidence]);

  return (
    <section className="rounded-3xl border border-accent/70 bg-white/85 p-6 md:p-8">
      <h2 className="mb-2 text-2xl font-semibold text-foreground">Try the tool now</h2>
      <p className="mb-6 text-sm text-secondary-foreground">
        Fill this in based on your latest rejection. You will get a CBT pattern and a practical reset.
      </p>

      <div className="grid gap-4">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">What happened?</span>
          <textarea
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
            rows={3}
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
            placeholder="Example: I reached final round and got rejected by email."
          />
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Main self-talk right now</span>
          <select
            value={selfTalk}
            onChange={(e) => setSelfTalk(e.target.value as SelfTalkKey)}
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          >
            {SELF_TALK_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm">
            <span className="font-medium text-foreground">Distress now (1-10)</span>
            <input
              type="number"
              min={1}
              max={10}
              value={distress}
              onChange={(e) => setDistress(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
              className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
            />
          </label>

          <label className="grid gap-2 text-sm">
            <span className="font-medium text-foreground">Confidence now (1-10)</span>
            <input
              type="number"
              min={1}
              max={10}
              value={confidence}
              onChange={(e) => setConfidence(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
              className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-2 inline-flex w-fit items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition hover:bg-foreground/90"
        >
          See my result
        </button>
      </div>

      {submitted && (
        <div className="mt-8 rounded-2xl border border-accent/70 bg-background/60 p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            Result profile
          </p>
          <h3 className="mb-4 text-2xl font-semibold text-foreground">{result.profile}</h3>
          <p className="mb-2 text-sm text-secondary-foreground">
            <span className="font-semibold text-foreground">Likely thinking trap:</span> {result.trap}
          </p>
          <p className="mb-2 text-sm text-secondary-foreground">
            <span className="font-semibold text-foreground">Balanced thought:</span>{" "}
            {result.balancedThought}
          </p>
          <p className="mb-2 text-sm text-secondary-foreground">
            <span className="font-semibold text-foreground">Next action:</span> {result.action}
          </p>
          <p className="mb-5 text-sm text-secondary-foreground">
            <span className="font-semibold text-foreground">Today plan:</span> {result.nextStep}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/app"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              {ctaText}
            </Link>
            <Link
              href="/app"
              className="inline-flex items-center rounded-full border border-accent/80 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-background"
            >
              View app links
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
