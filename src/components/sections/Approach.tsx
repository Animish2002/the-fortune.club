"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Lightbulb, Palette, Code2, Rocket, Sparkles } from "lucide-react";

const steps = [
    {
        title: "Discover",
        description:
            "We dive deep into your business model, identifying bottlenecks and opportunities for automation and growth.",
        number: "01",
        icon: Lightbulb,
    },
    {
        title: "Design",
        description:
            "Our designers craft a premium, high-converting visual identity that resonates with your target audience.",
        number: "02",
        icon: Palette,
    },
    {
        title: "Develop",
        description:
            "We engineer robust solutions using cutting-edge tech (Next.js, AI) ensuring speed, security, and scalability.",
        number: "03",
        icon: Code2,
    },
    {
        title: "Deploy",
        description:
            "Seamless launch with rigorous testing. We handle the technical complexities so you can focus on business.",
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
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-blue-900/5 opacity-50" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* Radial Spotlight */}
            <motion.div
                style={{
                    opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]),
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px]"
            />

            {/* Floating Particles */}
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
                        <span className="text-sm font-medium text-brand-gold">Our Process</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold bg-[length:200%_auto] animate-gradient">
                            Streamlined
                        </span>{" "}
                        Approach
                    </h2>

                    {/* Animated Underline */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6"
                    />

                    <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        A proven methodology to transform your vision into a digital powerhouse,
                        delivered with precision and excellence.
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Central Timeline Line with Glow */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 h-full -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-gold to-yellow-500 shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                        />

                        {/* Traveling Particle */}
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

            {/* Add CSS for gradient animation */}
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}

function TimelineItem({
    step,
    index,
}: {
    step: { title: string; description: string; number: string; icon: any };
    index: number;
}) {
    const isEven = index % 2 === 0;
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const Icon = step.icon;

    useEffect(() => {
        if (hasAnimated) {
            const target = parseInt(step.number);
            const duration = 1000;
            const steps = 30;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

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
            className={`relative flex items-center ${isEven ? "md:justify-start" : "md:justify-end"
                }`}
        >
            {/* Timeline Node with Pulsing Rings */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10">
                <div className="relative">
                    {/* Pulsing Rings */}
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full border-2 border-brand-gold"
                    />

                    {/* Core Node */}
                    <div className="w-5 h-5 rounded-full bg-brand-dark border-2 border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.7)]" />
                </div>
            </div>

            {/* Content Card */}
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-full md:w-[calc(50%-40px)] ml-[60px] md:ml-0 ${isEven ? "md:mr-[40px]" : "md:ml-[40px]"
                    }`}
            >
                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-500">

                    {/* Card Content */}
                    <div className="relative p-8">
                        {/* Header with Icon and Number */}
                        <div className="flex items-start justify-between mb-6">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="p-3 rounded-xl bg-brand-gold/10 border border-brand-gold/20"
                            >
                                <Icon className="h-6 w-6 text-brand-gold" />
                            </motion.div>

                            <div className="text-8xl font-bold text-white/5 leading-none select-none">
                                {String(count).padStart(2, '0')}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold text-white mb-4">
                            {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/70 text-lg leading-relaxed">
                            {step.description}
                        </p>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 h-[2px] bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
