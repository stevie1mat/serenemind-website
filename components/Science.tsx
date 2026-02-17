"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Moon, Sun } from "lucide-react";

const phases = [
    {
        title: "Cognitive Reframing",
        desc: "Challenge Thoughts",
        details: "Learn to identify and challenge negative thought patterns (ANTs) that drive anxiety.",
        icon: Brain,
        color: "bg-pink-100 text-pink-600",
    },
    {
        title: "Behavioral Activation",
        desc: "Take Action",
        details: "Break the cycle of avoidance by engaging in positive activities that boost your mood and confidence.",
        icon: Sun,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "Mindfulness",
        desc: "Stay Present",
        details: "Ground yourself in the moment using breathing exercises and sensory awareness techniques.",
        icon: Zap,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Exposure Therapy",
        desc: "Build Courage",
        details: "Gradually face your fears in a safe, controlled way to reduce their power over time.",
        icon: Moon,
        color: "bg-indigo-100 text-indigo-600",
    },
];

export function Science() {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden" id="science">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4xl mb-4">
                        Backed by Science: <span className="text-primary italic">CBT Works.</span>
                    </h2>
                    <p className="text-secondary-foreground text-lg">
                        SereneMind uses evidence-based Cognitive Behavioral Therapy principles to help you feel better, faster.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                        >
                            <div className={`w-12 h-12 rounded-xl ${phase.color} flex items-center justify-center mb-4`}>
                                <phase.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-xl font-medium mb-1">{phase.title}</h3>
                            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{phase.desc}</div>
                            <p className="text-sm text-foreground/80 leading-relaxed">
                                {phase.details}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
