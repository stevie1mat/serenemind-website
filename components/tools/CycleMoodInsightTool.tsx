"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type CyclePhase = "menstrual" | "follicular" | "ovulation" | "luteal" | "unsure";

const SYMPTOMS = [
  "Irritability",
  "Anxiety spikes",
  "Low mood",
  "Low energy",
  "Sleep disruption",
  "Bloating or cramps",
];

const PHASE_WEIGHT: Record<CyclePhase, number> = {
  menstrual: 2,
  follicular: 0,
  ovulation: 1,
  luteal: 3,
  unsure: 1,
};

export function CycleMoodInsightTool({ ctaText }: { ctaText: string }) {
  const [phase, setPhase] = useState<CyclePhase>("luteal");
  const [stress, setStress] = useState(7);
  const [sleep, setSleep] = useState(5);
  const [symptoms, setSymptoms] = useState<string[]>(["Anxiety spikes"]);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const score = stress + (11 - sleep) + symptoms.length + PHASE_WEIGHT[phase];
    const profile =
      score >= 16
        ? "High Hormone + Stress Load"
        : score >= 11
          ? "Moderate Mood Load"
          : "Stable Support Window";

    const topPriority =
      score >= 16
        ? "Reduce load and protect recovery"
        : score >= 11
          ? "Balance tasks with regulation"
          : "Build momentum gently";

    const plan =
      score >= 16
        ? [
            "2-minute breathing reset before decisions.",
            "Cut non-essential tasks by 20% today.",
            "Use one grounding statement when anxiety spikes.",
          ]
        : score >= 11
          ? [
              "Use one focused work block and one recovery break.",
              "Eat and hydrate on schedule to stabilize energy.",
              "Log mood and symptoms at day end for pattern tracking.",
            ]
          : [
              "Keep your current rhythm and add one confidence action.",
              "Do one preventive stress reset before evening.",
              "Track wins to reinforce emotional stability.",
            ];

    return {
      profile,
      topPriority,
      plan,
    };
  }, [phase, stress, sleep, symptoms.length]);

  const toggleSymptom = (value: string) => {
    setSymptoms((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <section className="rounded-3xl border border-accent/70 bg-white/85 p-6 md:p-8">
      <h2 className="mb-2 text-2xl font-semibold text-foreground">Get your cycle mood result</h2>
      <p className="mb-6 text-sm text-secondary-foreground">
        Use your current phase, stress, and sleep to generate a practical same-day support plan.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Cycle phase</span>
          <select
            value={phase}
            onChange={(e) => setPhase(e.target.value as CyclePhase)}
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          >
            <option value="menstrual">Menstrual</option>
            <option value="follicular">Follicular</option>
            <option value="ovulation">Ovulation</option>
            <option value="luteal">Luteal</option>
            <option value="unsure">Not sure</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Stress level (1-10)</span>
          <input
            type="number"
            min={1}
            max={10}
            value={stress}
            onChange={(e) => setStress(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          />
        </label>

        <label className="grid gap-2 text-sm md:col-span-2">
          <span className="font-medium text-foreground">Sleep quality last night (1-10)</span>
          <input
            type="number"
            min={1}
            max={10}
            value={sleep}
            onChange={(e) => setSleep(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          />
        </label>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-sm font-medium text-foreground">Symptoms today</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {SYMPTOMS.map((symptom) => (
            <label
              key={symptom}
              className="flex items-center gap-2 rounded-xl border border-accent/70 bg-background/60 p-3 text-sm text-foreground"
            >
              <input
                type="checkbox"
                checked={symptoms.includes(symptom)}
                onChange={() => toggleSymptom(symptom)}
              />
              <span>{symptom}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="mt-6 inline-flex w-fit items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition hover:bg-foreground/90"
      >
        See cycle mood result
      </button>

      {submitted && (
        <div className="mt-8 rounded-2xl border border-accent/70 bg-background/60 p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            Result profile
          </p>
          <h3 className="mb-3 text-2xl font-semibold text-foreground">{result.profile}</h3>
          <p className="mb-4 text-sm text-secondary-foreground">
            <span className="font-semibold text-foreground">Top priority:</span>{" "}
            {result.topPriority}
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

