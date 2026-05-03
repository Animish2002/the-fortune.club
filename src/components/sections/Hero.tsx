"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactOverlay } from "@/components/layout/ContactOverlay";
import { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

interface Particle {
    x: number;
    y: number;
    duration: number;
    delay: number;
}

const stats = [
    { value: "6", label: "SaaS Products" },
    { value: "AI", label: "Powered Dev" },
    { value: "100%", label: "White-Label Ready" },
    { value: "QA", label: "First Delivery" },
];

const trustBadges = [
    "WhatsApp Automation",
    "Custom Software",
    "AI Workflows",
    "Mobile Apps",
    "HRMS & ATS",
    "Social Media AI",
];

export function Hero() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        setParticles(
            Array.from({ length: 24 }, () => ({
                x: Math.random() * 1200 - 600,
                y: Math.random() * 1200 - 600,
                duration: Math.random() * 6 + 6,
                delay: Math.random() * 6,
            }))
        );
    }, []);

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32">
            <Spotlight />

            {/* Background layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Fine grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
                {/* Gold glow top-left */}
                <div className="absolute -top-32 -left-32 h-[700px] w-[700px] rounded-full bg-brand-gold/15 blur-[140px] opacity-50 animate-pulse" />
                {/* Blue glow bottom-right */}
                <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-800/20 blur-[130px] opacity-40" />
                {/* Subtle centre */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-brand-gold/5 blur-[100px]" />
            </div>

            {/* Content */}
            <div className="z-10 flex max-w-5xl flex-col items-center text-center">

                {/* Status pill */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand-gold/20 bg-brand-gold/8 px-5 py-2 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-80" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
                    </span>
                    <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold/90">
                        Accepting New Clients — Q3 2025
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display mb-6 text-5xl font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-7xl lg:text-[84px]"
                >
                    One Partner.
                    <br />
                    <span className="text-gold-shimmer">
                        Complete Digital Power.
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mb-4 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl"
                >
                    We build AI-powered custom software and hand you a complete
                    ready-made SaaS suite — WhatsApp bots, HRMS, ATS, and more.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mb-12 max-w-xl text-base text-white/40 md:text-lg"
                >
                    All white-labeled. All under your brand. Delivered faster with AI.
                </motion.p>

                {/* CTA row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 sm:flex-row"
                >
                    <ContactOverlay>
                        <Button
                            size="lg"
                            className="group relative h-14 overflow-hidden rounded-full bg-brand-gold px-8 text-base font-bold text-black shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-all duration-300 hover:bg-brand-gold/90 hover:scale-105 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:text-black"
                        >
                            <span className="mr-2">Start Your Project</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </ContactOverlay>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-14 rounded-full border-white/10 bg-white/[0.04] px-8 text-base font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:text-white"
                    >
                        <Link href="#services">Explore the Ecosystem</Link>
                    </Button>
                </motion.div>

                {/* Stat strip */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
                    className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-4"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-1 bg-brand-dark px-6 py-5 transition-colors duration-300 hover:bg-white/[0.04]"
                        >
                            <span className="font-display text-2xl font-semibold text-brand-gold">
                                {stat.value}
                            </span>
                            <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Trust badge row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="mt-10 flex flex-wrap justify-center gap-2"
                >
                    {trustBadges.map((badge, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/50"
                        >
                            <CheckCircle className="h-3 w-3 text-brand-gold/70" />
                            {badge}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/25">Scroll</span>
                <div className="h-10 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>

            {/* Micro particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: p.x, y: p.y }}
                        animate={{ opacity: [0, 0.6, 0], y: [0, -120], scale: [0, 1.8, 0] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
                        className="absolute left-1/2 top-1/2 h-0.5 w-0.5 rounded-full bg-brand-gold/40"
                    />
                ))}
            </div>
        </section>
    );
}
