"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "The 'Mind Lab' tool helped me de-escalate a panic attack in minutes. Having these tools in my pocket makes me feel so much safer.",
        author: "Emily R.",
        location: "Toronto, ON",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        quote: "I never realized how much my mood fluctuated until I started tracking it. The insights are spot on and really help me plan my week.",
        author: "Sarah L.",
        location: "Vancouver, BC",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    },
    {
        quote: "A beautiful, calming app that doesn't feel clinical. It's like a warm hug when I'm feeling overwhelmed.",
        author: "Chloe M.",
        location: "Montreal, QC",
        avatar: "https://randomuser.me/api/portraits/women/89.jpg",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-primary/5 relative overflow-hidden" id="community">
            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl mb-4">
                        Trusted by Thousands of <span className="text-primary">Users</span>.
                    </h2>
                    <p className="text-secondary-foreground text-lg">
                        Join the community that&apos;s prioritizing mental wellness every day.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                                    ))}
                                </div>
                                <p className="text-foreground/80 italic mb-6 leading-relaxed">
                                    &quot;{t.quote}&quot;
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={t.avatar}
                                        alt={t.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground text-sm">{t.author}</div>
                                    <div className="text-xs text-muted-foreground">{t.location}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
