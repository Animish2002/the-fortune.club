"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Lightbulb, Palette, Code2, Rocket, Sparkles } from "lucide-react";

const steps = [
    {
        title: "Discover",
        description:
            "We start by understanding your business — goals, gaps, audience, and growth opportunities. No templates, no assumptions. Just a clear picture of what you need built.",
        number: "01",
        icon: Lightbulb,
    },
    {
        title: "Design",
        description:
            "We craft a sleek, high-converting UI and a solid technical architecture — before a single line of code is written. You approve every layer before we build it.",
        number: "02",
        icon: Palette,
    },
    {
        title: "Develop",
        description:
            "Our team builds with AI-assisted development — faster delivery without cutting corners. Every feature is reviewed, tested, and QA-verified at each milestone.",
        number: "03",
        icon: Code2,
    },
    {
        title: "Deploy & Scale",
        description:
            "We handle the launch end-to-end — performance testing, deployment, and monitoring. After go-live, we stay available to scale as your business grows.",
        number: "04",
        icon: Rocket,
    },
];

export function Approach() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="approach" className="py-32 relative bg-brand-dark overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-gold/5 via-transparent to-blue-900/5 opacity-50" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[48px_48px]" />

            {/* Radial spotlight */}
            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-gold/10 rounded-full blur-[120px]"
            />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                        }}
                        animate={{
                            opacity: [0, 0.3, 0],
                            y: [0, -150],
                            scale: [0, 1.2, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "linear",
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        className="absolute w-1 h-1 bg-brand-gold/40 rounded-full"
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20"
                    >
                        <Sparkles className="h-4 w-4 text-brand-gold" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Our Process</span>
                    </motion.div>

                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-4">
                        Our{" "}
                        <span className="text-gold-shimmer">Streamlined</span>{" "}
                        Approach
                    </h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-linear-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6"
                    />

                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A proven four-step methodology — from understanding your business to shipping software that scales.
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 h-full -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 w-full bg-linear-to-b from-brand-gold to-yellow-500 shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                        />
                        <motion.div
                            style={{ top: lineHeight }}
                            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                        />
                    </div>

                    <div className="flex flex-col gap-16 md:gap-28">
                        {steps.map((step, index) => (
                            <TimelineItem key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({
    step,
    index,
}: {
    step: { title: string; description: string; number: string; icon: React.ElementType };
    index: number;
}) {
    const isEven = index % 2 === 0;
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const Icon = step.icon;

    useEffect(() => {
        if (hasAnimated) {
            const target = parseInt(step.number);
            const stepCount = 30;
            const increment = target / stepCount;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, 1000 / stepCount);

            return () => clearInterval(timer);
        }
    }, [hasAnimated, step.number]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => setHasAnimated(true)}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`relative flex items-center ${isEven ? "md:justify-start" : "md:justify-end"}`}
        >
            {/* Timeline node */}
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                <div className="relative">
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full border-2 border-brand-gold"
                    />
                    <div className="w-5 h-5 rounded-full bg-brand-dark border-2 border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.7)]" />
                </div>
            </div>

            {/* Content card */}
            <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-full md:w-[calc(50%-40px)] ml-15 md:ml-0 ${isEven ? "md:mr-10" : "md:ml-10"}`}
            >
                <div className="group relative rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-brand-gold/20">
                    <div className="relative p-8">
                        <div className="flex items-start justify-between mb-6">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="p-3 rounded-xl bg-brand-gold/10 border border-brand-gold/20"
                            >
                                <Icon className="h-6 w-6 text-brand-gold" />
                            </motion.div>

                            <div className="text-8xl font-bold text-white/5 leading-none select-none font-display">
                                {String(count).padStart(2, "0")}
                            </div>
                        </div>

                        <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                            {step.title}
                        </h3>

                        <p className="text-white/60 text-base leading-relaxed">
                            {step.description}
                        </p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 h-0.5 bg-linear-to-r from-brand-gold/0 via-brand-gold/40 to-brand-gold/0"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
