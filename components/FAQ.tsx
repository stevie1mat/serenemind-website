"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "Is my data private?",
        a: "Absolutely. Your mental health data is encrypted and stored securely. We never sell your personal information to third parties.",
    },
    {
        q: "What is CBT?",
        a: "Cognitive Behavioral Therapy (CBT) is an evidence-based approach that helps you identify and change negative thought patterns. SereneMind guides you through these techniques.",
    },
    {
        q: "Is the app free to use?",
        a: "Yes! Core features like mood tracking, basic journaling, and standard anxiety relief tools are free forever. Premium content offers deeper insights and advanced exercises.",
    },
    {
        q: "Can I share my progress with my therapist?",
        a: "Yes. You can export your mood logs and thought records to share with your healthcare provider for more effective sessions.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background" id="faq">
            <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Got questions? We&apos;ve got answers.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="border border-border/50 rounded-xl overflow-hidden bg-secondary/20"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left hover:bg-secondary/40 transition-colors"
                                aria-expanded={openIndex === i}
                            >
                                <span className="font-medium text-foreground text-lg">{faq.q}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                                )}
                            </button>
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
