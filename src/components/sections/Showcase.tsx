"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Zap, ShieldCheck, LayoutDashboard, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Card visuals ─────────────────────────────────────────────────────────────

function SpeedVisual() {
    const [progress, setProgress] = useState({ ai: 0, std: 0 });
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.4 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let frame = 0;
        const t = setInterval(() => {
            frame++;
            setProgress({
                ai:  Math.min(100, frame * 5),
                std: Math.min(100, frame * 1.6),
            });
            if (frame >= 20) clearInterval(t);
        }, 80);
        return () => clearInterval(t);
    }, [inView]);

    const bars = [
        { label: "With AI", value: progress.ai,  color: "#D4AF37", tag: "3× faster" },
        { label: "Standard", value: progress.std, color: "#6b7280", tag: "baseline"  },
    ];

    return (
        <div ref={ref} className="w-full space-y-4">
            {bars.map((b) => (
                <div key={b.label} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <span className="text-[11px] font-medium text-white/60">{b.label}</span>
                        <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold tabular-nums" style={{ color: b.color }}>
                                {Math.round(b.value)}%
                            </span>
                            <span className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold"
                                style={{ background: `${b.color}18`, color: b.color }}>
                                {b.tag}
                            </span>
                        </div>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-white/6 overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-100"
                            style={{ width: `${b.value}%`, background: b.color, boxShadow: `0 0 10px ${b.color}50` }}
                        />
                    </div>
                </div>
            ))}
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-brand-gold/20 bg-brand-gold/8 px-3 py-2">
                <Zap className="h-3.5 w-3.5 shrink-0 text-brand-gold" />
                <span className="text-[11px] text-white/60">AI handles boilerplate, tests, and code review</span>
            </div>
        </div>
    );
}

function QAVisual() {
    const [visible, setVisible] = useState(0);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const tests = [
        { name: "Unit tests",         status: "pass", ms: "12ms"  },
        { name: "Integration suite",  status: "pass", ms: "84ms"  },
        { name: "E2E flows",          status: "pass", ms: "231ms" },
        { name: "Security scan",      status: "pass", ms: "9ms"   },
        { name: "Performance budget", status: "pass", ms: "44ms"  },
    ];

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.4 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let i = 0;
        const t = setInterval(() => {
            i++;
            setVisible(i);
            if (i >= tests.length) clearInterval(t);
        }, 300);
        return () => clearInterval(t);
    }, [inView]);

    return (
        <div ref={ref} className="w-full space-y-1.5">
            <div className="mb-3 flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
                <div className="h-px flex-1 bg-white/6" />
                <span>Test Suite</span>
                <div className="h-px flex-1 bg-white/6" />
            </div>
            {tests.map((t, i) => (
                <div
                    key={t.name}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/3 px-3 py-2"
                    style={{
                        opacity: visible > i ? 1 : 0,
                        transform: visible > i ? "translateX(0)" : "translateX(-8px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                >
                    <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/15 text-[9px] text-green-400">✓</span>
                        <span className="text-[11px] text-white/70">{t.name}</span>
                    </div>
                    <span className="text-[10px] tabular-nums text-white/25">{t.ms}</span>
                </div>
            ))}
            {visible >= tests.length && (
                <div className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-green-500/20 bg-green-500/8 py-2 text-[11px] font-semibold text-green-400">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    All 5 checks passed — ready to ship
                </div>
            )}
        </div>
    );
}

function WhiteLabelVisual() {
    const [activeProduct, setActiveProduct] = useState(0);
    const products = ["WhatsApp Bot", "Social Media AI", "Workflow Builder", "ATS", "Live Chat", "HRMS"];

    useEffect(() => {
        const t = setInterval(() => setActiveProduct((a) => (a + 1) % products.length), 1200);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="w-full space-y-3">
            {/* Your brand pill */}
            <div className="flex items-center gap-2 rounded-xl border border-brand-gold/25 bg-brand-gold/8 px-4 py-2.5">
                <div className="h-7 w-7 rounded-lg bg-brand-gold/20 flex items-center justify-center text-[10px] font-bold text-brand-gold">YB</div>
                <div>
                    <div className="text-[11px] font-semibold text-white">Your Brand</div>
                    <div className="text-[9px] text-white/35">yourbrand.com · custom domain</div>
                </div>
                <div className="ml-auto rounded-full bg-green-500/15 px-2 py-0.5 text-[9px] font-semibold text-green-400">Live</div>
            </div>

            {/* Central panel arrow */}
            <div className="flex items-center gap-2 px-2">
                <div className="h-px flex-1 bg-white/8" />
                <div className="rounded-lg border border-white/10 bg-white/4 px-2.5 py-1 text-[9px] text-white/40">Central Reseller Panel</div>
                <div className="h-px flex-1 bg-white/8" />
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-3 gap-1.5">
                {products.map((p, i) => (
                    <div
                        key={p}
                        className="rounded-lg px-2 py-2 text-center text-[9px] font-medium transition-all duration-500"
                        style={{
                            background: activeProduct === i ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.03)",
                            border: `1px solid ${activeProduct === i ? "rgba(212,175,55,0.3)" : "rgba(255,255,255,0.06)"}`,
                            color: activeProduct === i ? "#D4AF37" : "rgba(255,255,255,0.35)",
                        }}
                    >
                        {p}
                    </div>
                ))}
            </div>
            <div className="text-center text-[10px] text-white/25">Your clients never see "TheFortune.Club"</div>
        </div>
    );
}

function PartnerVisual() {
    const phases = [
        { label: "Discovery",      desc: "Goals & scope",          color: "#6366f1", done: true  },
        { label: "Build & Launch", desc: "Design → Dev → Deploy",  color: "#D4AF37", done: true  },
        { label: "Support Window", desc: "Bug fixes included",      color: "#10b981", done: true  },
        { label: "Growth Retainer",desc: "Features & monitoring",  color: "#0ea5e9", done: false },
    ];

    return (
        <div className="w-full space-y-0">
            {phases.map((phase, i) => (
                <div key={phase.label} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                        <div
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                            style={{
                                background: `${phase.color}20`,
                                border: `1.5px solid ${phase.color}`,
                                color: phase.color,
                            }}
                        >
                            {phase.done ? "✓" : i + 1}
                        </div>
                        {i < phases.length - 1 && (
                            <div className="my-1 w-px flex-1 bg-white/8" style={{ height: "28px" }} />
                        )}
                    </div>
                    <div className="pb-4">
                        <div className="text-[11px] font-semibold text-white/80">{phase.label}</div>
                        <div className="text-[10px] text-white/30">{phase.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ─── Feature card ─────────────────────────────────────────────────────────────

interface FeatureDef {
    icon: React.ElementType;
    eyebrow: string;
    title: string;
    body: string;
    visual: React.ReactNode;
    accent: string;
    className?: string;
}

function FeatureCard({ card }: { card: FeatureDef }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] p-6 flex flex-col gap-5",
                card.className
            )}
        >
            {/* Subtle corner glow */}
            <div
                className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `${card.accent}20` }}
            />

            {/* Header */}
            <div className="flex items-start gap-3">
                <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                    style={{ background: `${card.accent}15`, borderColor: `${card.accent}30` }}
                >
                    <card.icon className="h-4.5 w-4.5" style={{ color: card.accent }} />
                </div>
                <div>
                    <div className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: card.accent }}>
                        {card.eyebrow}
                    </div>
                    <h3 className="font-display font-bold text-white text-base leading-snug">{card.title}</h3>
                </div>
            </div>

            {/* Visual */}
            <div className="flex-1">{card.visual}</div>

            {/* Body */}
            <p className="text-sm text-white/40 leading-relaxed border-t border-white/5 pt-4">{card.body}</p>
        </motion.div>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────

const features: FeatureDef[] = [
    {
        icon: Zap,
        eyebrow: "Speed",
        title: "Delivered 3× Faster With AI",
        body: "We use Claude, Copilot, and Cursor as co-pilots — not shortcuts. Every line is reviewed. You get speed without sacrificing code quality.",
        visual: <SpeedVisual />,
        accent: "#D4AF37",
    },
    {
        icon: ShieldCheck,
        eyebrow: "Quality",
        title: "QA-First, Every Single Build",
        body: "Unit tests, integration checks, security scans, and E2E flows run before any feature ships. Our QA gate catches what AI misses.",
        visual: <QAVisual />,
        accent: "#10b981",
    },
    {
        icon: LayoutDashboard,
        eyebrow: "White-Label",
        title: "Your Brand, Our Software",
        body: "All 6 SaaS products run under your branding via one Central Reseller Panel. Your clients see your logo — you capture the revenue.",
        visual: <WhiteLabelVisual />,
        accent: "#8b5cf6",
    },
    {
        icon: HeartHandshake,
        eyebrow: "Partnership",
        title: "We Don't Disappear at Launch",
        body: "Every project includes post-launch support. After that, flexible retainers cover monitoring, feature additions, and long-term growth.",
        visual: <PartnerVisual />,
        accent: "#0ea5e9",
    },
];

export function Showcase() {
    return (
        <section className="py-28 px-4 bg-brand-dark overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-14 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/8 px-4 py-1.5"
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Why Us</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.1] text-white mb-4"
                    >
                        Not a freelancer.{" "}
                        <span className="text-gold-shimmer">Not a bloated agency.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/45 max-w-xl mx-auto text-base leading-relaxed"
                    >
                        We work like your dedicated technical co-founder — fast, accountable, and invested in your outcome.
                    </motion.p>
                </div>

                {/* 2×2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((card) => (
                        <FeatureCard key={card.title} card={card} />
                    ))}
                </div>

            </div>
        </section>
    );
}
