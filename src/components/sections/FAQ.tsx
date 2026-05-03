"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowUpRight, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Replace with your actual Cal.com link ────────────────────────────────────
const CAL_LINK = "https://cal.com/thefortune-club";

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqs = [
    {
        q: "Do you write custom code or use no-code / low-code tools?",
        a: "We write everything from scratch using a modern, AI-first tech stack — Next.js, React Native, Node.js, and cloud-native infrastructure. We use AI as a co-pilot to accelerate development, not to replace engineering discipline. The result is clean, scalable, production-grade code that you fully own.",
    },
    {
        q: "How long does a typical project take?",
        a: "It depends on scope, but here's a realistic guide: a landing page or simple automation takes 1–2 weeks. A full custom web or mobile app takes 4–10 weeks depending on features. Our SaaS products (WhatsApp bot, HRMS, ATS, etc.) are ready-to-deploy within days of onboarding since they're already built — we just white-label them for you.",
    },
    {
        q: "What is the Central Reseller Panel and how does white-labeling work?",
        a: "The Central Reseller Panel is a single dashboard that lets you manage all 6 of our SaaS products — WhatsApp Automation, Social Media AI, Workflow Builder, ATS, Ticket Support, and HRMS — under your own brand. Your clients never see \"TheFortune.Club\". They see your logo, your domain, your business. You set the pricing and collect the revenue.",
    },
    {
        q: "Which type of businesses do you work with?",
        a: "We work with Indian SMEs, startups, and enterprises across industries — retail, healthcare, HR, logistics, and more. We also serve international clients who need reliable, cost-effective software built to global standards. If your business needs to automate, grow digitally, or launch a software product, we're a fit.",
    },
    {
        q: "How do you use AI in your development process?",
        a: "AI speeds up our build cycle — from writing boilerplate to generating test cases and reviewing code. But every feature goes through human QA before it ships. We use AI as an accelerator, not a shortcut. You get faster delivery without sacrificing quality or security.",
    },
    {
        q: "What happens after the project is delivered?",
        a: "We don't disappear after go-live. Every project comes with a post-launch support window for bug fixes. After that, we offer flexible maintenance retainers based on your needs — monthly check-ins, feature additions, performance monitoring. We aim to be your long-term technology partner, not a one-off vendor.",
    },
    {
        q: "Do you handle hosting, deployment, and infrastructure?",
        a: "Yes. We handle everything from code to cloud — deployment on AWS, Vercel, or your preferred provider, CI/CD pipelines, SSL, and monitoring setup. You get a live, production-ready product, not just a codebase handed over in a zip file.",
    },
    {
        q: "What's the first step to getting started?",
        a: "Book a free discovery call. In 30 minutes, we'll understand your business, your goals, and what you need built. From there we'll send a clear proposal with timeline, deliverables, and pricing — no hidden costs, no vague estimates.",
    },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ faq, isOpen, onToggle }: {
    faq: { q: string; a: string };
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={cn(
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                isOpen
                    ? "border-brand-gold/25 bg-brand-gold/4"
                    : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
            )}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
                <span className={cn(
                    "font-display font-medium text-base leading-snug transition-colors duration-300",
                    isOpen ? "text-brand-gold" : "text-white/85"
                )}>
                    {faq.q}
                </span>
                <span className={cn(
                    "shrink-0 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                        ? "border-brand-gold/40 bg-brand-gold/10 text-brand-gold rotate-0"
                        : "border-white/15 bg-white/5 text-white/50"
                )}>
                    {isOpen ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="px-6 pb-6">
                            <div className="h-px bg-brand-gold/15 mb-5" />
                            <p className="text-white/55 text-sm leading-7">{faq.a}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── FAQPage JSON-LD (GEO: +40% AI citation boost) ───────────────────────────

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
        },
    })),
};

// ─── Section ─────────────────────────────────────────────────────────────────

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <section id="faq" className="py-28 px-4 bg-brand-dark overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* Header — split layout like inspiration */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/8 px-4 py-1.5"
                        >
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">FAQs</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.1] text-white"
                        >
                            All your questions,
                            <br />
                            <span className="text-gold-shimmer">answered.</span>
                        </motion.h2>
                    </div>

                    {/* Right: subtitle + CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-col items-start md:items-end gap-5 md:pt-2"
                    >
                        <p className="text-white/45 text-sm leading-relaxed md:text-right max-w-xs">
                            Everything you need to know before working with us.
                            Still have questions? Book a call.
                        </p>
                        <a
                            href={CAL_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 rounded-2xl border border-brand-gold/20 bg-brand-gold/8 px-5 py-3 transition-all duration-300 hover:bg-brand-gold hover:border-brand-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                        >
                            <CalendarDays className="h-5 w-5 text-brand-gold group-hover:text-black transition-colors" />
                            <span className="font-display font-semibold text-white group-hover:text-black transition-colors">
                                Book a Call
                            </span>
                            <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand-gold/15 group-hover:bg-black/15 transition-colors">
                                <ArrowUpRight className="h-4 w-4 text-brand-gold group-hover:text-black transition-colors" />
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/8 mb-6" />

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3"
                >
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            faq={faq}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>

                {/* Bottom callout — like inspiration's gradient card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-8 text-center"
                >
                    {/* Gradient blobs */}
                    <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-brand-gold/10 blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-blue-500/8 blur-3xl" />

                    <div className="relative z-10">
                        <p className="font-display text-xl font-semibold text-white mb-2">
                            Still not sure where to start?
                        </p>
                        <p className="text-white/45 text-sm mb-6 max-w-md mx-auto">
                            Jump on a free 30-minute discovery call. We&apos;ll map out exactly what your business needs — custom software, the SaaS ecosystem, or both.
                        </p>
                        <a
                            href={CAL_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-semibold text-black text-sm shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-brand-gold/90 hover:scale-105"
                        >
                            <CalendarDays className="h-4 w-4" />
                            Schedule a Free Call
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
        </>
    );
}
