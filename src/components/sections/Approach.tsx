"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Lightbulb, Palette, Code2, Rocket, Sparkles,
    CheckCircle, ArrowRight, Zap, Shield, Clock, Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
    {
        number: "01",
        title: "Discover",
        subtitle: "We learn your business inside-out",
        icon: Lightbulb,
        color: "from-amber-500/20 to-orange-500/5",
        dot: "bg-amber-400",
        description:
            "No templates. No assumptions. We deep-dive into your goals, gaps, and audience before a single wireframe is drawn.",
        bullets: [
            "Business model & bottleneck analysis",
            "Audience and competitor research",
            "Tech stack recommendation",
            "Clear scope & timeline agreed upfront",
        ],
        visual: <DiscoverVisual />,
    },
    {
        number: "02",
        title: "Design",
        subtitle: "You approve every layer before we build",
        icon: Palette,
        color: "from-blue-500/20 to-indigo-500/5",
        dot: "bg-blue-400",
        description:
            "Sleek, high-converting UI and a solid technical architecture — both delivered before code starts. You see it before we build it.",
        bullets: [
            "High-fidelity UI mockups & prototypes",
            "System architecture planning",
            "Database & API schema design",
            "Client sign-off at every stage",
        ],
        visual: <DesignVisual />,
    },
    {
        number: "03",
        title: "Develop",
        subtitle: "AI-accelerated. QA-verified at every milestone",
        icon: Code2,
        color: "from-green-500/20 to-emerald-500/5",
        dot: "bg-green-400",
        description:
            "Our team builds with AI as a co-pilot — 3× faster delivery without cutting corners. Every feature is tested before it ships.",
        bullets: [
            "AI-assisted development (3× speed)",
            "Milestone-by-milestone QA reviews",
            "Weekly progress updates",
            "Code you fully own",
        ],
        visual: <DevelopVisual />,
    },
    {
        number: "04",
        title: "Deploy & Scale",
        subtitle: "Live. Monitored. Ready to grow",
        icon: Rocket,
        color: "from-purple-500/20 to-violet-500/5",
        dot: "bg-purple-400",
        description:
            "We handle the full launch — deployment, performance testing, monitoring setup. Then we stay available as your business scales.",
        bullets: [
            "End-to-end production deployment",
            "Performance & security testing",
            "Post-launch monitoring & support",
            "Scale-ready infrastructure",
        ],
        visual: <DeployVisual />,
    },
];

const AUTO_INTERVAL = 5000;

// ─── Step Visuals ─────────────────────────────────────────────────────────────

function DiscoverVisual() {
    const questions = [
        { label: "What are you building?", answer: "A customer automation platform", done: true },
        { label: "Who is your audience?", answer: "Indian SMBs, 10–200 employees", done: true },
        { label: "What's your timeline?", answer: "MVP in 6 weeks", done: false },
    ];
    return (
        <div className="w-full space-y-3">
            <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Discovery Session · Live</span>
            </div>
            {questions.map((q, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className={cn(
                        "rounded-xl border p-4 transition-all",
                        q.done
                            ? "border-amber-500/20 bg-amber-500/5"
                            : "border-white/8 bg-white/3"
                    )}
                >
                    <div className="text-[10px] uppercase tracking-wider text-white/30 mb-1.5">{q.label}</div>
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-sm text-white/80 font-medium">{q.answer}</span>
                        {q.done
                            ? <CheckCircle className="h-4 w-4 shrink-0 text-amber-400" />
                            : <div className="h-4 w-4 rounded-full border-2 border-white/20 border-dashed animate-spin shrink-0" />
                        }
                    </div>
                </motion.div>
            ))}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/8 px-4 py-3 flex items-center gap-3"
            >
                <Lightbulb className="h-4 w-4 text-amber-400 shrink-0" />
                <p className="text-xs text-amber-300/80">Proposal ready in 24 hours after discovery</p>
            </motion.div>
        </div>
    );
}

function DesignVisual() {
    const screens = [
        { label: "Dashboard", w: "w-full" },
        { label: "Mobile", w: "w-1/2" },
        { label: "Components", w: "w-3/4" },
    ];
    return (
        <div className="w-full space-y-3">
            <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Design Review v2.1</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/25 text-[10px] text-blue-300 font-medium">Awaiting Approval</span>
            </div>
            {screens.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: i * 0.15, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-xl border border-white/8 bg-[#111] p-3"
                >
                    <div className="flex items-center gap-1.5 mb-2">
                        <div className="h-2 w-2 rounded-full bg-red-500/50" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                        <div className="h-2 w-2 rounded-full bg-green-500/50" />
                        <span className="ml-2 text-[10px] text-white/30">{s.label}.fig</span>
                    </div>
                    <div className="space-y-1.5">
                        <div className={`h-2 ${s.w} rounded-full bg-brand-gold/30`} />
                        <div className="h-1.5 w-full rounded-full bg-white/8" />
                        <div className="h-1.5 w-4/5 rounded-full bg-white/5" />
                        <div className="grid grid-cols-3 gap-1 mt-2">
                            {[1, 2, 3].map((n) => (
                                <div key={n} className="h-6 rounded-lg bg-white/5 border border-white/5" />
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function DevelopVisual() {
    const [line, setLine] = useState(0);
    const lines = [
        { code: "const agent = new FortuneAI({ mode: 'build' })", color: "text-white/70" },
        { code: "await agent.generateFeature('auth-system')", color: "text-yellow-300" },
        { code: "✓ Tests passed  (48/48)", color: "text-green-400" },
        { code: "✓ QA review complete", color: "text-green-400" },
        { code: "→ Pushing to staging...", color: "text-blue-400" },
    ];
    useEffect(() => {
        if (line < lines.length) {
            const t = setTimeout(() => setLine((l) => l + 1), 800);
            return () => clearTimeout(t);
        }
    }, [line, lines.length]);

    return (
        <div className="w-full">
            <div className="rounded-xl border border-white/8 bg-[#0d1117] overflow-hidden font-mono text-[11px]">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#161b22] border-b border-white/5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                    <span className="ml-2 text-white/30 text-[10px]">fortune-ai · terminal</span>
                    <div className="ml-auto flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-[9px]">AI Copilot Active</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 min-h-36">
                    {lines.slice(0, line).map((l, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`leading-relaxed ${l.color}`}
                        >
                            <span className="text-white/20 mr-2 select-none">{String(i + 1).padStart(2, "0")}</span>
                            {l.code}
                        </motion.div>
                    ))}
                    {line < lines.length && (
                        <span className="text-brand-gold animate-pulse">▌</span>
                    )}
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: line >= 3 ? 1 : 0 }}
                className="mt-3 flex items-center justify-between rounded-xl border border-green-500/20 bg-green-500/8 px-4 py-2.5"
            >
                <span className="text-xs text-green-400 font-medium">3× faster than traditional dev</span>
                <Zap className="h-4 w-4 text-green-400" />
            </motion.div>
        </div>
    );
}

function DeployVisual() {
    const metrics = [
        { label: "Uptime", value: "99.9%", icon: Shield, color: "text-green-400" },
        { label: "Response", value: "< 200ms", icon: Clock, color: "text-blue-400" },
        { label: "Users live", value: "Active", icon: Users, color: "text-purple-400" },
    ];
    return (
        <div className="w-full space-y-3">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-xl border border-green-500/25 bg-green-500/8 px-5 py-4 flex items-center gap-4"
            >
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/15">
                    <Rocket className="h-5 w-5 text-green-400" />
                    <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping" />
                </div>
                <div>
                    <div className="text-sm font-semibold text-white">Deployment Successful</div>
                    <div className="text-xs text-green-400/70">thefortune.club · Production · v2.4.1</div>
                </div>
                <CheckCircle className="h-5 w-5 text-green-400 ml-auto shrink-0" />
            </motion.div>

            <div className="grid grid-cols-3 gap-2">
                {metrics.map((m, i) => {
                    const Icon = m.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="rounded-xl border border-white/8 bg-white/3 p-3 text-center"
                        >
                            <Icon className={`h-4 w-4 mx-auto mb-1.5 ${m.color}`} />
                            <div className={`text-sm font-bold ${m.color}`}>{m.value}</div>
                            <div className="text-[10px] text-white/30 mt-0.5">{m.label}</div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="rounded-xl border border-white/8 bg-white/3 p-3"
            >
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/30 uppercase tracking-wider">Live Traffic</span>
                    <span className="text-[10px] text-green-400">↑ Normal</span>
                </div>
                <div className="flex items-end gap-1 h-8">
                    {[3, 5, 4, 7, 6, 8, 7, 9, 8, 10, 9, 10].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.7 + i * 0.05, ease: "easeOut" }}
                            style={{ height: `${h * 10}%` }}
                            className="flex-1 rounded-sm bg-brand-gold/40 origin-bottom"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function Approach() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(() => {
            setActive((a) => (a + 1) % steps.length);
        }, AUTO_INTERVAL);
        return () => clearInterval(t);
    }, [paused]);

    const step = steps[active];

    return (
        <section id="approach" className="py-28 px-4 bg-brand-dark overflow-hidden relative">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[40px_40px]" />
            {/* Gold glow behind active area */}
            <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/6 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/8 px-4 py-1.5"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">How We Work</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-4"
                    >
                        From idea to{" "}
                        <span className="text-gold-shimmer">live product</span>
                        <br className="hidden md:block" /> in four steps
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/45 max-w-xl mx-auto text-base leading-relaxed"
                    >
                        Every project follows the same rigorous process — so you always know exactly what's happening and what's next.
                    </motion.p>
                </div>

                {/* Step tabs */}
                <div
                    className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-10 rounded-2xl border border-white/8 bg-white/3 p-1.5"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    {steps.map((s, i) => {
                        const SIcon = s.icon;
                        const isActive = active === i;
                        return (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={cn(
                                    "relative flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 text-left",
                                    isActive
                                        ? "bg-white/8 border border-white/10"
                                        : "hover:bg-white/4"
                                )}
                            >
                                {/* Progress bar for active */}
                                {isActive && !paused && (
                                    <motion.div
                                        key={`progress-${active}`}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full origin-left"
                                    />
                                )}

                                <div className={cn(
                                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                                    isActive
                                        ? "bg-brand-gold/15 border-brand-gold/30 text-brand-gold"
                                        : "bg-white/5 border-white/8 text-white/40"
                                )}>
                                    <SIcon className="h-4 w-4" />
                                </div>

                                <div className="min-w-0">
                                    <div className={cn(
                                        "text-[10px] font-mono uppercase tracking-wider transition-colors",
                                        isActive ? "text-brand-gold" : "text-white/30"
                                    )}>
                                        {s.number}
                                    </div>
                                    <div className={cn(
                                        "font-display font-semibold text-sm leading-tight transition-colors",
                                        isActive ? "text-white" : "text-white/50"
                                    )}>
                                        {s.title}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Content panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-2xl border border-white/8 bg-white/3 overflow-hidden"
                    >
                        {/* Left — text */}
                        <div className={`p-8 lg:p-10 relative bg-linear-to-br ${step.color}`}>
                            {/* Big watermark number */}
                            <div className="absolute top-4 right-6 font-display text-[120px] font-bold text-white/4 leading-none select-none pointer-events-none">
                                {step.number}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`h-2 w-2 rounded-full ${step.dot}`} />
                                    <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                                        Step {step.number}
                                    </span>
                                </div>

                                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-brand-gold/80 text-sm font-medium mb-5">
                                    {step.subtitle}
                                </p>
                                <p className="text-white/55 text-base leading-relaxed mb-8">
                                    {step.description}
                                </p>

                                <ul className="space-y-3">
                                    {step.bullets.map((b, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.07 }}
                                            className="flex items-start gap-3"
                                        >
                                            <ArrowRight className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                                            <span className="text-sm text-white/70">{b}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Next step hint */}
                                {active < steps.length - 1 && (
                                    <button
                                        onClick={() => setActive(active + 1)}
                                        className="mt-8 inline-flex items-center gap-2 text-xs text-white/30 hover:text-brand-gold transition-colors group"
                                    >
                                        Next: {steps[active + 1].title}
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Right — visual */}
                        <div className="p-8 lg:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/5 bg-brand-dark">
                            <div className="w-full max-w-sm">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`visual-${active}`}
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.96 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {step.visual}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Step dots nav */}
                <div className="flex justify-center gap-2 mt-6">
                    {steps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setActive(i); setPaused(true); }}
                            className={cn(
                                "rounded-full transition-all duration-300",
                                active === i
                                    ? "w-6 h-2 bg-brand-gold"
                                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
