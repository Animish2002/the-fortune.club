"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, CalendarDays, ArrowUpRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const CAL_LINK = "https://cal.com/thefortune-club";

const contactInfo = [
    {
        icon: Mail,
        label: "Email Us",
        value: "hello@thefortune.club",
        href: "mailto:hello@thefortune.club",
    },
    {
        icon: MapPin,
        label: "Based In",
        value: "Mumbai, India — serving clients globally",
        href: null,
    },
];

export function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSent(true);
    }

    return (
        <section id="contact" className="py-28 px-4 bg-brand-dark overflow-hidden relative">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-brand-gold/6 blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-14 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/8 px-4 py-1.5"
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Get In Touch</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.1] text-white mb-4"
                    >
                        Let&apos;s build your{" "}
                        <span className="text-gold-shimmer">digital fortune</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/45 max-w-md mx-auto text-base leading-relaxed"
                    >
                        Tell us what you&apos;re building. We&apos;ll respond within 24 hours with a clear plan and honest pricing.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

                    {/* Left — info + cal.com */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 flex flex-col gap-5"
                    >
                        {/* Contact info cards */}
                        {contactInfo.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/2 p-5"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-gold/20 bg-brand-gold/8">
                                    <item.icon className="h-4 w-4 text-brand-gold" />
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-wider text-white/30 mb-0.5">{item.label}</div>
                                    {item.href ? (
                                        <a href={item.href} className="text-sm font-medium text-white hover:text-brand-gold transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-medium text-white">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Cal.com CTA */}
                        <div className="relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-gold/6 p-5">
                            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-gold/10 blur-2xl" />
                            <div className="relative">
                                <CalendarDays className="h-6 w-6 text-brand-gold mb-3" />
                                <p className="font-display font-semibold text-white text-sm mb-1">Prefer a call?</p>
                                <p className="text-white/40 text-xs leading-relaxed mb-4">
                                    Book a free 30-min discovery call — no pressure, just clarity.
                                </p>
                                <a
                                    href={CAL_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all hover:bg-brand-gold/90 hover:scale-105"
                                >
                                    <CalendarDays className="h-3.5 w-3.5" />
                                    Schedule Free Call
                                    <ArrowUpRight className="h-3 w-3" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-3"
                    >
                        <div className="rounded-2xl border border-white/8 bg-[#0f0f0f] overflow-hidden">
                            {/* Form header */}
                            <div className="border-b border-white/5 px-6 py-4">
                                <p className="font-display font-semibold text-white text-sm">Send us a message</p>
                                <p className="text-white/35 text-xs mt-0.5">We reply within 24 hours on business days</p>
                            </div>

                            {sent ? (
                                <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-lg">✓</div>
                                    <p className="font-display font-semibold text-white">Message sent!</p>
                                    <p className="text-white/40 text-sm">We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-wider text-white/35">Your Name</label>
                                            <input
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                placeholder="Rahul Sharma"
                                                className={cn(
                                                    "w-full rounded-xl border border-white/8 bg-white/3 px-3.5 py-2.5 text-sm text-white placeholder:text-white/20",
                                                    "focus:border-brand-gold/40 focus:bg-brand-gold/4 focus:outline-none transition-colors"
                                                )}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] uppercase tracking-wider text-white/35">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                placeholder="rahul@company.in"
                                                className={cn(
                                                    "w-full rounded-xl border border-white/8 bg-white/3 px-3.5 py-2.5 text-sm text-white placeholder:text-white/20",
                                                    "focus:border-brand-gold/40 focus:bg-brand-gold/4 focus:outline-none transition-colors"
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider text-white/35">What are you building?</label>
                                        <textarea
                                            required
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="Tell us about your project — what you need, timeline, and any tech preferences..."
                                            rows={5}
                                            className={cn(
                                                "w-full rounded-xl border border-white/8 bg-white/3 px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 resize-none",
                                                "focus:border-brand-gold/40 focus:bg-brand-gold/4 focus:outline-none transition-colors"
                                            )}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group w-full flex items-center justify-center gap-2 rounded-xl bg-brand-gold py-3 font-display font-bold text-black text-sm shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all hover:bg-brand-gold/90 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
                                    >
                                        <Send className="h-3.5 w-3.5" />
                                        Send Message
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
