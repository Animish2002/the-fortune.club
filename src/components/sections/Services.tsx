"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, Zap, BarChart3 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// ─── Visual Mocks ────────────────────────────────────────────────────────────

function CodeMock() {
    const [dots, setDots] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setDots((d) => (d + 1) % 4), 600);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="rounded-xl overflow-hidden border border-white/8 bg-[#0d1117] font-mono text-[11px] w-full">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-[#161b22] border-b border-white/5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                <div className="ml-3 flex gap-0">
                    <span className="px-3 py-0.5 text-brand-gold border-b border-brand-gold text-[10px]">app.ts</span>
                    <span className="px-3 py-0.5 text-white/30 text-[10px]">api/routes.ts</span>
                </div>
            </div>
            <div className="p-3 space-y-1.5 leading-relaxed">
                <div>
                    <span className="text-purple-400">import</span>
                    <span className="text-white/60"> &#123; FortuneAI &#125; </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400"> &apos;@fortune/sdk&apos;</span>
                </div>
                <div className="h-1" />
                <div>
                    <span className="text-blue-400">const</span>
                    <span className="text-white"> agent </span>
                    <span className="text-white/40">=</span>
                    <span className="text-yellow-300"> new FortuneAI</span>
                    <span className="text-white/60">(&#123;</span>
                </div>
                <div className="pl-4">
                    <span className="text-sky-300">model</span>
                    <span className="text-white/40">: </span>
                    <span className="text-green-400">&apos;claude-3-5&apos;</span>
                    <span className="text-white/40">,</span>
                </div>
                <div className="pl-4">
                    <span className="text-sky-300">mode</span>
                    <span className="text-white/40">: </span>
                    <span className="text-green-400">&apos;build-and-test&apos;</span>
                </div>
                <div><span className="text-white/60">&#125;)</span></div>
                <div className="h-1" />
                <div>
                    <span className="text-purple-400">await</span>
                    <span className="text-white"> agent</span>
                    <span className="text-white/40">.</span>
                    <span className="text-yellow-300">buildFeature</span>
                    <span className="text-white/60">(</span>
                    <span className="text-green-400">&apos;payment-module&apos;</span>
                    <span className="text-white/60">)</span>
                    <span className="text-white/30">{".".repeat(dots)}</span>
                </div>
            </div>
            <div className="px-3 pb-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-1 text-[10px] text-brand-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse inline-block" />
                    AI Copilot Active
                </div>
                <span className="text-[10px] text-green-400">3× faster delivery</span>
            </div>
        </div>
    );
}

function WhatsAppMock() {
    return (
        <div className="rounded-xl overflow-hidden border border-white/8 w-full">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#075e54]">
                <div className="h-7 w-7 rounded-full bg-green-400 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="h-4 w-4 text-white" />
                </div>
                <div>
                    <div className="text-white text-[11px] font-semibold">Fortune Bot</div>
                    <div className="text-green-300 text-[9px]">● Online</div>
                </div>
            </div>
            <div className="bg-[#111b21] p-3 space-y-2">
                <div className="flex">
                    <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white/10 px-2.5 py-1.5 text-[10px] text-white leading-relaxed">
                        Hi, I&apos;d like to automate my business 👋
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-lg rounded-tr-none bg-[#dcf8c6] px-2.5 py-1.5 text-[10px] text-black leading-relaxed">
                        Welcome! What type of business do you run?
                        <div className="text-right text-[8px] text-black/40 mt-0.5">✓✓</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="max-w-[80%] rounded-lg rounded-tl-none bg-white/10 px-2.5 py-1.5 text-[10px] text-white">
                        E-commerce store
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/25 text-[9px] text-green-400 font-medium">
                        ✓ Lead captured · Added to CRM
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialMock() {
    const posts = [
        "from-pink-500 to-rose-400",
        "from-blue-500 to-indigo-400",
        "from-purple-500 to-violet-400",
        "from-amber-400 to-orange-500",
        "from-teal-500 to-cyan-400",
        "from-green-500 to-emerald-400",
    ];
    return (
        <div className="space-y-3 w-full">
            <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-white/35">Scheduled Posts</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/25 text-[9px] text-brand-gold font-medium">
                    AI Generated
                </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
                {posts.map((g, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`aspect-square rounded-lg bg-linear-to-br ${g} opacity-75`}
                    />
                ))}
            </div>
            <div className="space-y-1.5">
                <div className="flex justify-between text-[10px]">
                    <span className="text-white/40">Organic Reach</span>
                    <span className="text-brand-gold font-semibold">+320%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "78%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-brand-gold"
                    />
                </div>
            </div>
        </div>
    );
}

function WorkflowMock() {
    const nodes = [
        { label: "Lead Captured", color: "bg-blue-500/15 border-blue-500/30 text-blue-300" },
        { label: "Score ≥ 80?", color: "bg-yellow-500/15 border-yellow-500/30 text-yellow-300" },
        { label: "Notify Sales", color: "bg-green-500/15 border-green-500/30 text-green-300" },
        { label: "Add to CRM", color: "bg-purple-500/15 border-purple-500/30 text-purple-300" },
    ];
    return (
        <div className="flex flex-col items-center gap-0.5 w-full">
            {nodes.map((n, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`w-full px-3 py-2 rounded-lg border text-[10px] font-medium text-center ${n.color}`}
                    >
                        {n.label}
                    </motion.div>
                    {i < nodes.length - 1 && (
                        <div className="flex flex-col items-center">
                            <div className="w-px h-2 bg-white/15" />
                            <div className="text-white/20 text-[8px]">▼</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function MobileMock() {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="relative w-28 h-52 rounded-4xl border-2 border-white/15 bg-[#111] overflow-hidden shadow-2xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-white/15" />
                <div className="pt-6 px-2.5 space-y-2">
                    <div className="h-5 w-full rounded-lg bg-brand-gold/20 flex items-center px-2">
                        <div className="h-1.5 w-12 rounded-full bg-brand-gold/60" />
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                        <div className="h-14 rounded-lg bg-white/5 border border-white/5" />
                        <div className="h-14 rounded-lg bg-white/5 border border-white/5" />
                    </div>
                    <div className="h-2 w-3/4 rounded-full bg-white/8" />
                    <div className="h-2 w-1/2 rounded-full bg-white/5" />
                    <div className="h-8 w-full rounded-xl bg-brand-gold/25 mt-1 flex items-center justify-center">
                        <div className="h-1.5 w-14 rounded-full bg-brand-gold/70" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ATSMock() {
    const columns = [
        { title: "Applied", color: "bg-blue-500/10 border-blue-500/20", dot: "bg-blue-400", cards: ["Rahul M.", "Priya S.", "Akash V."] },
        { title: "Interview", color: "bg-amber-500/10 border-amber-500/20", dot: "bg-amber-400", cards: ["Amit K.", "Sneha R."] },
        { title: "Hired", color: "bg-green-500/10 border-green-500/20", dot: "bg-green-400", cards: ["Neha B."] },
    ];
    return (
        <div className="grid grid-cols-3 gap-1.5 w-full h-full">
            {columns.map((col) => (
                <div key={col.title} className={`rounded-xl border p-2 ${col.color}`}>
                    <div className="flex items-center gap-1 mb-2">
                        <div className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
                        <div className="text-[9px] font-semibold text-white/60 uppercase tracking-wide">{col.title}</div>
                    </div>
                    <div className="space-y-1">
                        {col.cards.map((c) => (
                            <div key={c} className="rounded-lg bg-white/6 px-1.5 py-1.5 text-[9px] text-white/80 font-medium">
                                {c}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function TicketMock() {
    const tickets = [
        { id: "#1042", title: "API integration issue", badge: "Open", cls: "bg-red-500/10 text-red-400 border-red-500/20" },
        { id: "#1041", title: "Dashboard slow load", badge: "Resolved", cls: "bg-green-500/10 text-green-400 border-green-500/20" },
        { id: "#1040", title: "Payment gateway error", badge: "In Progress", cls: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    ];
    return (
        <div className="space-y-2 w-full">
            <div className="flex items-center gap-1.5 mb-3">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-[10px] text-white/40">3 agents online · Avg reply 2 min</span>
            </div>
            {tickets.map((t) => (
                <div key={t.id} className="flex items-center justify-between rounded-xl bg-white/4 border border-white/5 px-3 py-2">
                    <div>
                        <div className="text-[9px] text-white/30 mb-0.5">{t.id}</div>
                        <div className="text-[11px] text-white font-medium">{t.title}</div>
                    </div>
                    <div className={`shrink-0 px-2 py-0.5 rounded-full border text-[9px] font-semibold ${t.cls}`}>
                        {t.badge}
                    </div>
                </div>
            ))}
        </div>
    );
}

function HRMSMock() {
    const rows = [
        { name: "Amit Sharma", role: "Dev Lead", salary: "₹85,000", status: "Present", s: "bg-green-500/15 text-green-400" },
        { name: "Priya Mehta", role: "Designer", salary: "₹65,000", status: "Present", s: "bg-green-500/15 text-green-400" },
        { name: "Rahul Gupta", role: "Manager", salary: "₹95,000", status: "On Leave", s: "bg-orange-500/15 text-orange-400" },
    ];
    return (
        <div className="w-full space-y-1.5">
            <div className="grid grid-cols-4 gap-2 px-2 pb-1 border-b border-white/5">
                {["Employee", "Role", "Salary", "Status"].map((h) => (
                    <div key={h} className="text-[9px] uppercase tracking-wider text-white/25">{h}</div>
                ))}
            </div>
            {rows.map((r) => (
                <div key={r.name} className="grid grid-cols-4 gap-2 rounded-xl bg-white/4 border border-white/5 px-2 py-2 items-center">
                    <div className="text-[10px] text-white font-medium truncate">{r.name}</div>
                    <div className="text-[10px] text-white/40 truncate">{r.role}</div>
                    <div className="text-[10px] text-brand-gold font-semibold">{r.salary}</div>
                    <div className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold text-center ${r.s}`}>{r.status}</div>
                </div>
            ))}
        </div>
    );
}

// ─── Card ────────────────────────────────────────────────────────────────────

interface CardDef {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    visual: React.ReactNode;
    className?: string;
    visualBg?: string;
    href?: string;
}

function BentoCard({ card }: { card: CardDef }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotX = useTransform(y, [-60, 60], [1.5, -1.5]);
    const rotY = useTransform(x, [-60, 60], [-1.5, 1.5]);

    return (
        <motion.div
            onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                x.set(((e.clientX - r.left) / r.width - 0.5) * 60);
                y.set(((e.clientY - r.top) / r.height - 0.5) * 60);
            }}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("h-full", card.className)}
        >
            <Link
                href={card.href ?? "#"}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] transition-all duration-500 hover:border-brand-gold/20 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
                {/* Visual area */}
                <div className={cn(
                    "relative flex-1 overflow-hidden p-4 flex items-center justify-center min-h-45",
                    card.visualBg ?? "bg-[#111111]"
                )}>
                    {card.visual}
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
                </div>

                {/* Text */}
                <div className="p-5 border-t border-white/5">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 mb-1.5">
                            <div className="text-brand-gold">{card.icon}</div>
                            <h3 className="font-display font-semibold text-white text-base leading-snug group-hover:text-brand-gold transition-colors duration-300">
                                {card.title}
                            </h3>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-white/20 group-hover:text-brand-gold transition-colors mt-0.5" />
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">{card.desc}</p>
                </div>
            </Link>
        </motion.div>
    );
}

// ─── Cards data ───────────────────────────────────────────────────────────────

import {
    Code2, Share2, Workflow, Smartphone, Briefcase,
    HeadphonesIcon, Users,
} from "lucide-react";

const cards: CardDef[] = [
    {
        id: "software",
        title: "Custom Software & AI Dev",
        desc: "Enterprise apps built 3× faster with AI-assisted development and rigorous QA at every milestone.",
        icon: <Code2 className="h-4 w-4" />,
        visual: <CodeMock />,
        visualBg: "bg-[#0d1117]",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: "whatsapp",
        title: "WhatsApp Automation",
        desc: "AI chatbot, bulk marketing, and lead capture on Meta's platform.",
        icon: <FaWhatsapp className="h-4 w-4" />,
        visual: <WhatsAppMock />,
    },
    {
        id: "social",
        title: "Social Media Management",
        desc: "AI content generation, post scheduling, analytics, and competitor tracking.",
        icon: <Share2 className="h-4 w-4" />,
        visual: <SocialMock />,
    },
    {
        id: "workflow",
        title: "Workflow Automation",
        desc: "No-code visual builder connecting your apps with trigger-action logic.",
        icon: <Workflow className="h-4 w-4" />,
        visual: <WorkflowMock />,
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        desc: "Cross-platform iOS & Android apps with native performance.",
        icon: <Smartphone className="h-4 w-4" />,
        visual: <MobileMock />,
    },
    {
        id: "ats",
        title: "Application Tracking System",
        desc: "End-to-end recruitment — job posting, tracking, interviews, hiring.",
        icon: <Briefcase className="h-4 w-4" />,
        visual: <ATSMock />,
    },
    {
        id: "ticket",
        title: "Ticket & Live Chat",
        desc: "Omnichannel support with SLA tracking and agent performance insights.",
        icon: <HeadphonesIcon className="h-4 w-4" />,
        visual: <TicketMock />,
    },
    {
        id: "hrms",
        title: "HRMS System",
        desc: "Complete HR management — attendance, payroll, leave, and expenses.",
        icon: <Users className="h-4 w-4" />,
        visual: <HRMSMock />,
        className: "md:col-span-2",
    },
];

// ─── Section ─────────────────────────────────────────────────────────────────

export function Services() {
    return (
        <section id="services" className="py-28 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-14 text-center">
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
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/45 max-w-xl mx-auto text-base leading-relaxed"
                    >
                        Custom-built software plus a ready-made SaaS suite — all white-labeled, all managed from one Central Panel.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 auto-rows-[minmax(280px,auto)]">
                    {/* Row 1+2: Software (2×2) | WhatsApp | Social */}
                    <BentoCard card={cards[0]} />
                    <BentoCard card={cards[1]} />
                    <BentoCard card={cards[2]} />

                    {/* Row 3: Workflow | Mobile | ATS */}
                    <BentoCard card={cards[3]} />
                    <BentoCard card={cards[4]} />
                    <BentoCard card={cards[5]} />

                    {/* Row 4: Ticket | HRMS (wide) */}
                    <BentoCard card={cards[6]} />
                    <BentoCard card={cards[7]} />
                </div>

                {/* Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-brand-gold/12 bg-brand-gold/4 px-8 py-5"
                >
                    <BarChart3 className="h-5 w-5 shrink-0 text-brand-gold" />
                    <p className="text-sm text-white/55">
                        All 6 SaaS products managed from a{" "}
                        <span className="text-brand-gold font-semibold">single Central Reseller Panel</span>
                        {" "}— your branding, your clients, your revenue.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
