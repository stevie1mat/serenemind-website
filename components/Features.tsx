"use client";

import { motion } from "framer-motion";
import { BrainCircuit, MapPin, PackageOpen, CalendarDays, ShoppingBag, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export function Features() {
    return (
        <section className="container mx-auto px-4 py-24 md:py-32" id="features">
            <div className="mb-16 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-serif font-medium text-foreground md:text-5xl">
                    Wellness, reimagined with AI.
                </h2>
                <p className="mt-4 text-lg text-secondary-foreground">
                    SereneMind connects your feelings with actionable tools.
                    Let Renne guide you through patterns, anxious thoughts, and safety planning.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 auto-rows-[minmax(250px,auto)]">

                {/* Feature 1: Mood Tracking (Large) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl bg-secondary/30 p-8 flex flex-col gap-6 group hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background shadow-sm">
                            <CalendarDays className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Pattern Recognition</h3>
                        <p className="text-secondary-foreground max-w-sm">
                            Beyond simple emojis. Spot triggers and trends in your mood over time, helping you understand the &quot;why&quot; behind your feelings.
                        </p>
                    </div>

                    {/* UI Mockup for Tracking */}
                    <div className="relative h-auto min-h-[220px] bg-background rounded-2xl shadow-sm border border-border/50 p-6 overflow-hidden flex flex-col justify-between">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3">
                            <span className="font-semibold text-sm">Recent Check-ins</span>
                            <span className="text-xs text-secondary-foreground bg-secondary px-2 py-1 rounded-full">Weekly View</span>
                        </div>
                        <div className="flex justify-around text-center opacity-70">
                            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                                <div key={i} className="text-xs font-medium w-6">{d}</div>
                            ))}
                        </div>
                        <div className="flex justify-around mt-4">
                            {[1, 2, 3, 4, 5, 4, 5].map((level, i) => (
                                <div key={i} className={cn(
                                    "w-8 h-8 flex items-center justify-center text-sm rounded-full transition-all",
                                    i === 6 ? "bg-accent text-accent-foreground font-bold shadow-md scale-110" : "text-muted-foreground hover:bg-gray-50"
                                )}>
                                    <div className={cn("w-2 h-2 rounded-full",
                                        level >= 4 ? "bg-green-400" : level === 3 ? "bg-yellow-400" : "bg-orange-400"
                                    )} />
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex gap-3">
                            <div className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-medium flex items-center gap-1.5 w-max">
                                <BrainCircuit className="w-4 h-4" /> Anxiety Reduced
                            </div>
                            <div className="px-3 py-2 rounded-lg bg-green-100 text-green-700 text-xs font-medium flex items-center gap-1.5 w-max">
                                Building Resilience
                            </div>
                        </div>
                    </div>

                    {/* New "Daily Insight" Sub-card to fill space */}
                    <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 border border-white/40 shadow-sm">
                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                            <BrainCircuit className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-serif font-semibold text-foreground">Daily Insight</h4>
                            <p className="text-sm text-secondary-foreground mt-1">
                                You often feel anxious on Sunday evenings. Let&apos;s plan a calming ritual for tonight.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Feature 2: CBT Toolkit (Wide) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="col-span-1 md:col-span-2 lg:col-span-2 bg-secondary/20 border border-gray-100 rounded-3xl p-8 flex flex-col sm:flex-row gap-8 group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[#FFF0F3] opacity-30 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

                    <div className="flex-1 relative z-10">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">CBT Toolkit</h3>
                        <p className="text-secondary-foreground">
                            Feeling overwhelmed? Access instant tools like the Thought Challenger (`Mind Lab`) and Visual Breathing to regain control.
                        </p>
                    </div>

                    {/* Toolkit UI Mockup */}
                    <div className="w-full sm:w-1/2 h-40 sm:h-auto bg-[#FAFAFA] rounded-2xl border border-gray-200 relative overflow-hidden flex flex-col items-center justify-center shadow-inner gap-3 p-4">
                        <div className="w-full bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center">
                                <BrainCircuit className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-semibold text-foreground">Mind Lab</div>
                        </div>
                        <div className="w-full bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center">
                                <PackageOpen className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-semibold text-foreground">Box Breathing</div>
                        </div>
                    </div>
                </motion.div>

                {/* Feature 3: Safety Planning (Tall) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="col-span-1 lg:col-span-1 lg:row-span-1 bg-primary/5 rounded-3xl p-8 relative overflow-hidden group hover:shadow-lg transition-all"
                >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                        <ShoppingBag className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">Safety Plan</h3>
                    <p className="text-sm text-secondary-foreground mt-2 mb-6">
                        Keep your coping strategies and emergency contacts in one accessible place.
                    </p>

                    {/* Safety Plan UI */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-primary/10 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-foreground">My Warning Signs</span>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="text-[10px] bg-red-50 text-red-600 px-2 py-1 rounded-md">Racing Heart</span>
                            <span className="text-[10px] bg-red-50 text-red-600 px-2 py-1 rounded-md">Isolation</span>
                        </div>
                        <div className="text-right text-xs text-muted-foreground">Tap to view plan</div>
                    </div>
                </motion.div>

                {/* Feature 4: Renne AI Guide */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="col-span-1 lg:col-span-1 lg:row-span-1 bg-white border border-gray-100 rounded-3xl p-8 group hover:shadow-lg transition-all"
                >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-sm">
                        <Bell className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">Renne AI</h3>
                    <p className="text-sm text-secondary-foreground mt-2">
                        Your compassionate companion. Renne provides personalized comfort and check-ins when you need them most.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                        <div className="bg-gray-50 p-2 rounded-lg flex items-center gap-2 opacity-40 blur-[1px]">
                            <div className="w-8 h-8 bg-gray-200 rounded-full" />
                            <div className="h-2 w-24 bg-gray-200 rounded" />
                        </div>
                        <div className="bg-white border border-gray-100 p-3 rounded-xl flex items-center gap-3 shadow-md scale-105 origin-left">
                            <div className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                <span className="text-xs">🌸</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-foreground">Renne</span>
                                <span className="text-[10px] text-muted-foreground leading-tight">I&apos;m here for you. How is your anxiety today?</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
