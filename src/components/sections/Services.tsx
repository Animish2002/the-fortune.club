"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, Zap, BarChart3, SlidersHorizontal, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// ─── Visual Mocks ────────────────────────────────────────────────────────────

const AI_TOOLS = [
    { name: "Claude Sonnet",    role: "Architecture & code review",   color: "#D97706" },
    { name: "GitHub Copilot",   role: "Inline completion & refactor", color: "#6366f1" },
    { name: "Cursor",           role: "AI-native editor",             color: "#10b981" },
    { name: "GPT-4o",           role: "Planning & documentation",     color: "#0ea5e9" },
    { name: "v0 by Vercel",     role: "UI component generation",      color: "#8b5cf6" },
];

function CodeMock() {
    const [dots, setDots] = useState(0);
    const [activeAI, setActiveAI] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setDots((d) => (d + 1) % 4), 600);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        const t = setInterval(() => setActiveAI((a) => (a + 1) % AI_TOOLS.length), 2000);
        return () => clearInterval(t);
    }, []);

    const stats = [
        { value: "47+",  label: "Projects Shipped" },
        { value: "3×",   label: "Faster Delivery"  },
        { value: "100%", label: "QA Pass Rate"      },
    ];

    return (
        <div className="flex h-full w-full flex-col gap-3 self-stretch">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2">
                {stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/6 bg-white/3 px-2 py-2.5 text-center">
                        <div className="font-display text-base font-bold text-brand-gold">{s.value}</div>
                        <div className="mt-0.5 text-[9px] leading-tight text-white/35">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Code editor */}
            <div className="overflow-hidden rounded-xl border border-white/8 bg-[#0d1117] font-mono text-[11px]">
                <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#161b22] px-3 py-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                    <div className="ml-3 flex">
                        <span className="border-b border-brand-gold px-3 py-0.5 text-[10px] text-brand-gold">app.ts</span>
                        <span className="px-3 py-0.5 text-[10px] text-white/30">api/routes.ts</span>
                    </div>
                </div>
                <div className="space-y-1.5 p-3 leading-relaxed">
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
                        <span className="text-green-400">&apos;claude-sonnet-4&apos;</span>
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
                <div className="flex items-center justify-between px-3 pb-3">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/10 px-2.5 py-1 text-[10px] text-brand-gold">
                        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
                        AI Copilot Active
                    </div>
                    <span className="text-[10px] text-green-400">3× faster delivery</span>
                </div>
            </div>

            {/* AI Tools stack */}
            <div className="flex-1 overflow-hidden rounded-xl border border-white/8 bg-white/2 p-3">
                <div className="mb-2.5 flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-widest text-white/30">AI Stack</span>
                    <div className="h-px flex-1 bg-white/5" />
                    <span className="text-[9px] text-brand-gold">{AI_TOOLS.length} systems active</span>
                </div>
                <div className="space-y-1.5">
                    {AI_TOOLS.map((tool, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-all duration-500"
                            style={{
                                background: activeAI === i ? `${tool.color}12` : "rgba(255,255,255,0.02)",
                                border: `1px solid ${activeAI === i ? `${tool.color}35` : "rgba(255,255,255,0.06)"}`,
                            }}
                        >
                            <div
                                className="h-2 w-2 shrink-0 rounded-full"
                                style={{
                                    background: tool.color,
                                    boxShadow: activeAI === i ? `0 0 8px ${tool.color}90` : "none",
                                    transition: "box-shadow 0.5s ease",
                                }}
                            />
                            <span
                                className="flex-1 text-[10px] font-semibold transition-colors duration-500"
                                style={{ color: activeAI === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)" }}
                            >
                                {tool.name}
                            </span>
                            <span className="text-[9px] text-white/25">{tool.role}</span>
                            {activeAI === i && (
                                <span className="animate-pulse text-[9px] font-semibold text-brand-gold">● live</span>
                            )}
                        </div>
                    ))}
                </div>
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
    const [count, setCount] = useState(0);
    const [hovered, setHovered] = useState<number | null>(null);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const TARGET = 12400;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let cur = 0;
        const step = Math.ceil(TARGET / 60);
        const t = setInterval(() => {
            cur += step;
            if (cur >= TARGET) { setCount(TARGET); clearInterval(t); }
            else setCount(cur);
        }, 16);
        return () => clearInterval(t);
    }, [inView]);

    const posts = [
        { gradient: "from-indigo-500 to-violet-500",  Icon: FaInstagram,  type: "Photo",    time: "9:00 AM"  },
        { gradient: "from-pink-500 to-rose-500",       Icon: FaXTwitter,   type: "Thread",   time: "10:30 AM" },
        { gradient: "from-cyan-500 to-sky-500",        Icon: FaLinkedinIn, type: "Article",  time: "11:00 AM" },
        { gradient: "from-emerald-500 to-green-500",   Icon: FaInstagram,  type: "Reel",     time: "1:00 PM"  },
        { gradient: "from-amber-400 to-orange-500",    Icon: FaFacebook,   type: "Post",     time: "2:00 PM"  },
        { gradient: "from-violet-500 to-purple-600",   Icon: FaInstagram,  type: "Story",    time: "3:30 PM"  },
        { gradient: "from-rose-500 to-red-600",        Icon: FaXTwitter,   type: "Poll",     time: "5:00 PM"  },
        { gradient: "from-sky-500 to-blue-600",        Icon: FaLinkedinIn, type: "Carousel", time: "6:00 PM"  },
        { gradient: "from-teal-400 to-emerald-500",    Icon: FaInstagram,  type: "Collab",   time: "8:00 PM"  },
    ];

    return (
        <div ref={ref} className="space-y-3 w-full">
            <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-white/35">Scheduled Posts</span>
                <span className="rounded-full border border-brand-gold/25 bg-brand-gold/15 px-2 py-0.5 text-[9px] font-medium text-brand-gold">
                    AI Generated
                </span>
            </div>

            <div className="grid grid-cols-3 gap-1">
                {posts.map((post, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-linear-to-br ${post.gradient}`}
                    >
                        {/* Platform icon */}
                        <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                            <post.Icon className="h-2.5 w-2.5 text-white" />
                        </div>
                        {/* Post type + time */}
                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-1.5 pb-1.5 pt-3">
                            <div className="flex items-end justify-between">
                                <span className="text-[8px] font-semibold leading-none text-white">{post.type}</span>
                                <span className="text-[7px] leading-none text-white/55">{post.time}</span>
                            </div>
                        </div>
                        {/* Hover overlay */}
                        <div
                            className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/75"
                            style={{ transform: hovered === i ? "translateY(0)" : "translateY(100%)", transition: "transform 0.25s ease" }}
                        >
                            <span className="text-[8px] font-bold text-brand-gold">AI Generated ✓</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/7 bg-white/4 px-3 py-2.5">
                <div>
                    <div className="text-[10px] text-white/40">Followers</div>
                    <div className="font-display text-xl font-bold tabular-nums tracking-tight text-white">
                        {count.toLocaleString("en-IN")}
                    </div>
                </div>
                <div className="rounded-lg bg-green-500/10 px-2.5 py-1 text-[11px] text-green-400">↑ 18% this week</div>
            </div>
        </div>
    );
}

function WorkflowMock() {
    const [activeNode, setActiveNode] = useState(-1);

    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            setActiveNode(i % 4);
            i++;
        }, 900);
        return () => clearInterval(t);
    }, []);

    const nodes = [
        { Icon: Zap,               label: "Trigger", sub: "New Lead",    color: "#6366f1" },
        { Icon: SlidersHorizontal, label: "Filter",  sub: "Score > 60", color: "#f59e0b" },
        { Icon: Mail,              label: "Action",  sub: "Send Email", color: "#10b981" },
        { Icon: MessageCircle,     label: "Notify",  sub: "WhatsApp",   color: "#D4AF37" },
    ];

    return (
        <div className="flex flex-col gap-5 w-full">
            {/* Nodes + flex connectors — mt-[23px] aligns line center with icon center (48px/2 - 1.5px/2) */}
            <div className="flex items-start w-full">
                {nodes.map((node, i) => (
                    <Fragment key={i}>
                        {/* Node */}
                        <div className="flex shrink-0 flex-col items-center gap-2">
                            <div
                                className="flex h-12 w-12 items-center justify-center rounded-xl"
                                style={{
                                    background: activeNode >= i ? `${node.color}20` : "rgba(255,255,255,0.04)",
                                    border: `1.5px solid ${activeNode >= i ? node.color : "rgba(255,255,255,0.08)"}`,
                                    boxShadow: activeNode >= i ? `0 0 18px ${node.color}45` : "none",
                                    transition: "all 0.5s ease",
                                }}
                            >
                                <node.Icon
                                    className="h-5 w-5"
                                    style={{ color: activeNode >= i ? node.color : "rgba(255,255,255,0.3)", transition: "color 0.5s ease" }}
                                />
                            </div>
                            <div className="text-center">
                                <div
                                    className="text-[10px] font-semibold"
                                    style={{ color: activeNode >= i ? "white" : "rgba(255,255,255,0.4)", transition: "color 0.4s ease" }}
                                >
                                    {node.label}
                                </div>
                                <div className="text-[9px] text-white/30">{node.sub}</div>
                            </div>
                        </div>

                        {/* Connector — only between nodes */}
                        {i < nodes.length - 1 && (
                            <div className="relative flex-1 shrink" style={{ marginTop: "23px", height: "1.5px" }}>
                                {/* Dashed track */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: "repeating-linear-gradient(to right, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 5px, transparent 5px, transparent 10px)",
                                    }}
                                />
                                {/* Colored fill — grows left-to-right when lit */}
                                <div
                                    className="absolute inset-y-0 left-0"
                                    style={{
                                        width: activeNode > i ? "100%" : "0%",
                                        background: node.color,
                                        boxShadow: activeNode > i ? `0 0 6px ${node.color}70` : "none",
                                        transition: "width 0.5s ease, box-shadow 0.4s ease",
                                    }}
                                />
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>

            {/* Status bar */}
            <div className="flex items-center gap-2 rounded-xl border border-green-500/15 bg-green-500/8 px-3 py-2">
                <div className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
                <span className="text-[11px] text-green-400">Workflow active · 2,841 runs today</span>
            </div>
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
    const [rowsVisible, setRowsVisible] = useState(0);
    const [showToast, setShowToast] = useState(false);
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let r = 0;
        const interval = setInterval(() => {
            r++;
            setRowsVisible(r);
            if (r >= 3) clearInterval(interval);
        }, 200);
        const toastTimer = setTimeout(() => setShowToast(true), 1200);
        return () => { clearInterval(interval); clearTimeout(toastTimer); };
    }, [inView]);

    const rows = [
        { name: "Amit Sharma", role: "Dev Lead", salary: "₹85,000", status: "Present",  present: true },
        { name: "Priya Mehta", role: "Designer", salary: "₹65,000", status: "Present",  present: true },
        { name: "Rahul Gupta", role: "Manager",  salary: "₹95,000", status: "On Leave", present: false },
    ];

    return (
        <div ref={ref} className="relative w-full space-y-1.5 overflow-hidden pb-1">
            <div className="grid grid-cols-4 gap-2 border-b border-white/5 px-2 pb-1">
                {["Employee", "Role", "Salary", "Status"].map((h) => (
                    <div key={h} className="text-[9px] uppercase tracking-wider text-white/25">{h}</div>
                ))}
            </div>

            {rows.map((r, i) => (
                <div
                    key={r.name}
                    className="grid grid-cols-4 gap-2 items-center rounded-xl border border-white/5 bg-white/4 px-2 py-2"
                    style={{
                        opacity: rowsVisible > i ? 1 : 0,
                        transform: rowsVisible > i ? "translateY(0)" : "translateY(8px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                >
                    <div className="truncate text-[10px] font-medium text-white">{r.name}</div>
                    <div className="truncate text-[10px] text-white/40">{r.role}</div>
                    <div className="text-[10px] font-semibold text-brand-gold">{r.salary}</div>
                    <div className={cn(
                        "rounded-full px-1.5 py-0.5 text-center text-[9px] font-semibold",
                        r.present ? "bg-green-500/15 text-green-400" : "bg-orange-500/15 text-orange-400"
                    )}>
                        {r.status}
                    </div>
                </div>
            ))}

            {/* Slide-up toast */}
            <div
                className="absolute bottom-0 left-1/2 flex items-center gap-2 whitespace-nowrap rounded-xl border border-green-500/30 bg-black/90 px-4 py-2 shadow-xl"
                style={{
                    transform: `translateX(-50%) translateY(${showToast ? "0" : "60px"})`,
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-green-500/30 bg-green-500/15 text-[10px]">✓</div>
                <span className="text-[11px] font-semibold text-green-400">Payroll Processed</span>
                <span className="text-[11px] text-white/50">₹2,45,000 disbursed</span>
            </div>
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
    visualAlign?: string;
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
                    "relative flex-1 overflow-hidden p-4 flex min-h-45",
                    card.visualAlign ?? "items-center justify-center",
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
        visualAlign: "items-start",
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
