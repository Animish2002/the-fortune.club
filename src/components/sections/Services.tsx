"use client";

import {
    ArrowUpRight,
    CheckCircle2,
    Bot,
    Globe,
    Zap,
    Users,
    HeadphonesIcon,
    BarChart3,
    Workflow,
    Smartphone,
    Code2,
    Share2,
    Briefcase,
} from "lucide-react";
import { motion, useMotionValue, useTransform, type Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Globe3D } from "@/components/ui/Globe3D";
import { FaWhatsapp } from "react-icons/fa";

// ─── Types ──────────────────────────────────────────────────────────────────

interface BentoItem {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    href?: string;
    feature: "globe" | "typing" | "metrics" | "checklist" | "icons" | "chart" | "tags";
    bullets?: string[];
    metrics?: Array<{ label: string; value: number; suffix?: string }>;
    typingText?: string;
    tags?: string[];
    className?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const bentoItems: BentoItem[] = [
    {
        id: "software",
        title: "Custom Software Development",
        description: "Enterprise-grade web, SaaS, and backend systems built with AI-assisted speed and QA-first delivery.",
        icon: Code2,
        href: "#",
        feature: "globe",
        bullets: [
            "AI-Accelerated Development",
            "Cloud-Native Architecture",
            "API-First Design",
            "Rigorous QA & Testing",
            "Scalable from Day One",
        ],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: "whatsapp",
        title: "WhatsApp Automation",
        description: "AI-powered chatbot with lead management and bulk marketing on Meta's platform.",
        icon: FaWhatsapp,
        href: "#",
        feature: "checklist",
        bullets: ["AI Chatbot", "Lead Management", "Bulk Marketing", "Live Chat"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "social",
        title: "Social Media Management",
        description: "Complete social presence with AI content generation and competitor analysis.",
        icon: Share2,
        href: "#",
        feature: "metrics",
        metrics: [
            { label: "Organic Growth", value: 320, suffix: "%" },
            { label: "Page Speed", value: 99, suffix: "/100" },
        ],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "workflow",
        title: "Workflow Automation",
        description: "No-code platform connecting your apps and streamlining business processes end to end.",
        icon: Workflow,
        href: "#",
        feature: "typing",
        typingText: `trigger("lead_captured")\n  .filter(score > 80)\n  .notify("sales_team")\n  .createDeal(CRM)\n  .schedule(followup, "2d")`,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        description: "Cross-platform iOS & Android apps — native performance, polished UI.",
        icon: Smartphone,
        href: "#",
        feature: "tags",
        tags: ["React Native", "Flutter", "iOS", "Android", "App Store"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "ats",
        title: "Application Tracking System",
        description: "End-to-end recruitment management — from job posting to hiring.",
        icon: Briefcase,
        href: "#",
        feature: "checklist",
        bullets: ["Job Posting", "Candidate Tracking", "Interview Scheduling", "Email Integration"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "support",
        title: "Ticket & Live Chat",
        description: "Omnichannel customer support with SLA tracking and agent performance insights.",
        icon: HeadphonesIcon,
        href: "#",
        feature: "checklist",
        bullets: ["Live Chat", "Ticket Management", "Agent Performance", "SLA Reports"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "hrms",
        title: "HRMS System",
        description: "Complete human resource management — from attendance and leave to payroll.",
        icon: Users,
        href: "#",
        feature: "checklist",
        bullets: ["Employee Management", "Attendance & Leave", "Payroll Processing", "Expense Management"],
        className: "md:col-span-1 md:row-span-1",
    },
];

// ─── Animations ──────────────────────────────────────────────────────────────

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

// ─── Feature sub-components ──────────────────────────────────────────────────

function ChecklistFeature({ bullets }: { bullets: string[] }) {
    return (
        <ul className="mt-4 space-y-2.5">
            {bullets.map((b, i) => (
                <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i }}
                    className="flex items-center gap-2.5"
                >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold" />
                    </div>
                    <span className="text-sm text-white/70">{b}</span>
                </motion.li>
            ))}
        </ul>
    );
}

function MetricsFeature({ metrics }: { metrics: BentoItem["metrics"] }) {
    if (!metrics) return null;
    return (
        <div className="mt-4 space-y-3">
            {metrics.map((m, i) => (
                <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                        <span className="text-white/60">{m.label}</span>
                        <span className="font-semibold text-brand-gold">{m.value}{m.suffix}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(100, m.value)}%` }}
                            transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                            className="h-full rounded-full bg-brand-gold"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

function TypingFeature({ text }: { text: string }) {
    const [displayed, setDisplayed] = useState("");
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        if (idx < text.length) {
            const t = setTimeout(() => {
                setDisplayed((p) => p + text[idx]);
                setIdx((p) => p + 1);
            }, 28 + Math.random() * 24);
            return () => clearTimeout(t);
        }
    }, [idx, text]);
    return (
        <div className="mt-4 rounded-xl border border-white/8 bg-black/60 p-4 font-mono text-[11px] leading-relaxed text-brand-gold/80">
            <div className="mb-2.5 flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
            </div>
            <pre className="whitespace-pre-wrap">{displayed}<span className="animate-pulse">▌</span></pre>
        </div>
    );
}

function TagsFeature({ tags }: { tags: string[] }) {
    return (
        <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
                <span
                    key={i}
                    className="rounded-full border border-brand-gold/20 bg-brand-gold/8 px-3 py-1 text-xs font-medium text-brand-gold/80"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}

// ─── Bento card ──────────────────────────────────────────────────────────────

function BentoCard({ item, className }: { item: BentoItem; className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-80, 80], [2, -2]);
    const rotateY = useTransform(x, [-80, 80], [-2, 2]);
    const Icon = item.icon;

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * 80);
        y.set(((e.clientY - r.top) / r.height - 0.5) * 80);
    }
    function onMouseLeave() { x.set(0); y.set(0); }

    return (
        <motion.div
            className={cn("h-full", className)}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
            variants={fadeInUp}
        >
            <Link
                href={item.href ?? "#"}
                className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm transition-all duration-500 hover:border-brand-gold/25 hover:bg-white/6 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
                {/* hover glow */}
                <div className="absolute -inset-6 bg-brand-gold/4 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-brand-gold transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-5 w-5" />
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-white/20 transition-colors duration-300 group-hover:text-brand-gold" />
                    </div>

                    {/* Text */}
                    <h3 className="font-display mb-2 text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-brand-gold">
                        {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{item.description}</p>

                    {/* Feature */}
                    <div className="mt-auto pt-2">
                        {item.feature === "globe" && (
                            <div className="flex flex-col gap-6 md:flex-row md:items-center">
                                <div className="h-64 w-full md:h-72 md:w-1/2"><Globe3D /></div>
                                {item.bullets && <div className="md:w-1/2"><ChecklistFeature bullets={item.bullets} /></div>}
                            </div>
                        )}
                        {item.feature === "checklist" && item.bullets && <ChecklistFeature bullets={item.bullets} />}
                        {item.feature === "metrics" && item.metrics && <MetricsFeature metrics={item.metrics} />}
                        {item.feature === "typing" && item.typingText && <TypingFeature text={item.typingText} />}
                        {item.feature === "tags" && item.tags && <TagsFeature tags={item.tags} />}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Services() {
    return (
        <section id="services" className="py-28 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/8 px-4 py-1.5"
                    >
                        <Zap className="h-3.5 w-3.5 text-brand-gold" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Complete Ecosystem</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl font-bold tracking-[-0.02em] md:text-5xl mb-4"
                    >
                        Your Complete{" "}
                        <span className="text-gold-shimmer">Solution Stack</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
                    >
                        From custom-built software to a ready-made SaaS suite — all managed from one Central Reseller Panel, all white-labeled for your brand.
                    </motion.p>
                </div>

                {/* Bento grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={stagger}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-4 md:grid-cols-3 auto-rows-[minmax(220px,auto)]"
                >
                    {/* Custom Software — 2×2 */}
                    <BentoCard item={bentoItems[0]} className="md:col-span-2 md:row-span-2" />
                    {/* WhatsApp */}
                    <BentoCard item={bentoItems[1]} className="md:col-span-1" />
                    {/* Social Media */}
                    <BentoCard item={bentoItems[2]} className="md:col-span-1" />
                    {/* Workflow */}
                    <BentoCard item={bentoItems[3]} className="md:col-span-1" />
                    {/* Mobile */}
                    <BentoCard item={bentoItems[4]} className="md:col-span-1" />
                    {/* ATS */}
                    <BentoCard item={bentoItems[5]} className="md:col-span-1" />
                    {/* Support */}
                    <BentoCard item={bentoItems[6]} className="md:col-span-1" />
                    {/* HRMS */}
                    <BentoCard item={bentoItems[7]} className="md:col-span-1" />
                </motion.div>

                {/* Bottom callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-brand-gold/15 bg-brand-gold/5 px-8 py-5"
                >
                    <BarChart3 className="h-5 w-5 shrink-0 text-brand-gold" />
                    <p className="text-sm font-medium text-white/70">
                        All 6 SaaS products managed from a{" "}
                        <span className="text-brand-gold font-semibold">single Central Reseller Panel</span>
                        {" "}— your branding, your clients, your revenue.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
