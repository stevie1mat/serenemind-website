"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { FreeTool } from "@/lib/tools";

type GenericInsightToolProps = {
  tool: FreeTool;
};

export function GenericInsightTool({ tool }: GenericInsightToolProps) {
  const [answers, setAnswers] = useState<Record<string, number>>(
    Object.fromEntries(tool.questions.map((question) => [question.id, 3]))
  );
  const [context, setContext] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () => Object.values(answers).reduce((sum, value) => sum + value, 0),
    [answers]
  );

  const result = useMemo(() => {
    const sortedBands = [...tool.resultBands].sort((a, b) => b.minScore - a.minScore);
    return sortedBands.find((band) => score >= band.minScore) ?? sortedBands[sortedBands.length - 1];
  }, [score, tool.resultBands]);

  const topDrivers = useMemo(() => {
    return tool.questions
      .filter((question) => (answers[question.id] ?? 0) >= 4)
      .map((question) => question.label)
      .slice(0, 3);
  }, [answers, tool.questions]);

  return (
    <section className="rounded-3xl border border-accent/70 bg-white/85 p-6 md:p-8">
      <h2 className="mb-2 text-2xl font-semibold text-foreground">Try this tool now</h2>
      <p className="mb-6 text-sm text-secondary-foreground">
        Rate each area from 1 to 5. Your result appears instantly with a practical action plan.
      </p>

      <div className="grid gap-4">
        {tool.questions.map((question) => (
          <label key={question.id} className="grid gap-2 rounded-xl border border-accent/60 bg-background/55 p-4 text-sm">
            <span className="font-medium text-foreground">{question.label}</span>
            {question.helper && <span className="text-xs text-secondary-foreground">{question.helper}</span>}
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={answers[question.id] ?? 3}
              onChange={(event) =>
                setAnswers((prev) => ({
                  ...prev,
                  [question.id]: Number(event.target.value),
                }))
              }
            />
            <span className="text-xs text-secondary-foreground">Current: {answers[question.id] ?? 3}/5</span>
          </label>
        ))}

        <label className="grid gap-2 text-sm">
          <span className="font-medium text-foreground">Optional context</span>
          <textarea
            rows={3}
            value={context}
            onChange={(event) => setContext(event.target.value)}
            placeholder="Add specific details to make your result more actionable."
            className="rounded-xl border border-accent/70 bg-background/60 p-3 text-foreground outline-none focus:border-foreground"
          />
        </label>

        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-1 inline-flex w-fit items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white transition hover:bg-foreground/90"
        >
          See my result
        </button>
      </div>

      {submitted && (
        <div className="mt-8 rounded-2xl border border-accent/70 bg-background/60 p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
            Result profile
          </p>
          <h3 className="mb-2 text-2xl font-semibold text-foreground">{result.title}</h3>
          <p className="mb-3 text-sm text-secondary-foreground">{result.summary}</p>

          <p className="mb-2 text-sm text-secondary-foreground">
            <span className="font-semibold text-foreground">Score:</span> {score}/{tool.questions.length * 5}
          </p>

          {topDrivers.length > 0 && (
            <p className="mb-3 text-sm text-secondary-foreground">
              <span className="font-semibold text-foreground">Top stress drivers:</span>{" "}
              {topDrivers.join(", ")}.
            </p>
          )}

          {context.trim().length > 0 && (
            <p className="mb-3 text-sm text-secondary-foreground">
              <span className="font-semibold text-foreground">Your context noted:</span>{" "}
              {context.trim().slice(0, 180)}
              {context.trim().length > 180 ? "..." : ""}
            </p>
          )}

          <ul className="mb-5 list-disc space-y-1 pl-5 text-sm text-secondary-foreground">
            {result.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/app"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              {tool.ctaText}
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

