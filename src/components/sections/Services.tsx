"use client";

import {
    ArrowUpRight,
    CheckCircle2,
    Clock,
    Mic,
    Plus,
    Sparkles,
    Zap,
    Code2,

    CreditCard,
    Bot,
    Search,
    Layout,
    Globe,
    Database,
    Server
} from "lucide-react";
import {
    motion,
    useMotionValue,
    useTransform,
    type Variants,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Globe3D } from "@/components/ui/Globe3D";
import { FaWhatsapp } from "react-icons/fa";

// --- Interfaces ---

interface BentoItem {
    id: string;
    title: string;
    description: string;
    icons?: boolean;
    href?: string;
    feature?:
    | "chart"
    | "counter"
    | "code"
    | "timeline"
    | "spotlight"
    | "icons"
    | "typing"
    | "metrics"
    | "voice"
    | "globe";
    spotlightItems?: string[];
    timeline?: Array<{ year: string; event: string }>;
    code?: string;
    codeLang?: string;
    typingText?: string;
    metrics?: Array<{
        label: string;
        value: number;
        suffix?: string;
        color?: string;
    }>;
    statistic?: {
        value: string;
        label: string;
        start?: number;
        end?: number;
        suffix?: string;
    };
    size?: "sm" | "md" | "lg";
    className?: string;
}

// --- Data ---

const bentoItems: BentoItem[] = [
    {
        id: "software",
        title: "Software Solutions",
        description:
            "Enterprise-grade architectures scaling seamlessly with cloud-native technologies.",
        href: "#",
        feature: "globe",
        spotlightItems: [
            "Microservices Architecture",
            "Cloud-Native Systems",
            "API-First Design",
            "High-Performance DBs",
            "Real-time Processing",
        ],
        className: "col-span-1 md:col-span-2 md:row-span-2",
    },
    {
        id: "seo",
        title: "SEO Ranking",
        description:
            "Dominate search results.",
        href: "#",
        feature: "metrics",
        metrics: [
            { label: "Organic Traffic", value: 320, suffix: "%", color: "gold" },
            { label: "Page Speed", value: 99, suffix: "/100", color: "gold" }
        ],
        className: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
        id: "whatsapp",
        title: "WhatsApp Bot",
        description:
            "24/7 Customer engagement.",
        href: "#",
        feature: "icons",
        size: "sm",
        className: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
        id: "payment",
        title: "Revenue Growth",
        description:
            "Seamless payment integrations.",
        href: "#",
        feature: "chart",
        statistic: {
            label: "Conversion",
            value: "100",
            start: 0,
            end: 98,
            suffix: "%"
        },
        className: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
        id: "ai-agents",
        title: "AI Agents & Automation",
        description:
            "Intelligent workflows that work while you sleep.",
        href: "#",
        feature: "typing",
        typingText:
            "const agent = new FortuneAI({\n  model: 'gpt-4o',\n  capabilities: ['coding', 'analysis'],\n  memory: true\n});\n\nawait agent.automate('workflow_v2');",
        className: "col-span-1 md:col-span-1 md:row-span-1",
    },
];

// --- Animations ---

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

// --- Components ---

const SpotlightFeature = ({ items }: { items: string[] }) => (
    <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
            <motion.li
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                key={`spotlight-${index}`}
                transition={{ delay: 0.1 * index }}
            >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/10">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-gold" />
                </div>
                <span className="text-white/80 text-sm font-medium">
                    {item}
                </span>
            </motion.li>
        ))}
    </ul>
);

const ChartAnimation = ({ value }: { value: number }) => (
    <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
            animate={{ width: `${value}%` }}
            className="h-full rounded-full bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            initial={{ width: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        />
    </div>
);

const CounterAnimation = ({
    start,
    end,
    suffix = "",
}: {
    start: number;
    end: number;
    suffix?: string;
}) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        // Basic counter logic
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        let current = start;
        const increment = (end - start) / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [start, end]);

    return (
        <div className="flex items-baseline gap-1">
            <span className="font-bold text-4xl text-brand-gold">
                {count.toFixed(0)}
            </span>
            <span className="font-medium text-white/80 text-xl">
                {suffix}
            </span>
        </div>
    );
};

const IconsFeature = () => (
    <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 p-3 border border-white/5">
            <FaWhatsapp className="h-6 w-6 text-green-500" />
            <span className="text-xs text-white/60">WhatsApp</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 p-3 border border-white/5">
            <Globe className="h-6 w-6 text-blue-500" />
            <span className="text-xs text-white/60">Web</span>
        </div>
    </div>
);

const TypingCodeFeature = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(
                () => {
                    setDisplayedText((prev) => prev + text[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                },
                30 + Math.random() * 30
            );
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <div className="relative mt-4 rounded-lg bg-black/50 border border-white/10 p-4 font-mono text-xs text-brand-gold/90 shadow-inner">
            <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <pre className="whitespace-pre-wrap overflow-x-hidden">
                {displayedText}
                <span className="animate-pulse text-brand-gold">|</span>
            </pre>
        </div>
    );
};

const MetricsFeature = ({
    metrics,
}: {
    metrics: Array<{
        label: string;
        value: number;
        suffix?: string;
        color?: string;
    }>;
}) => {
    return (
        <div className="mt-4 space-y-4">
            {metrics.map((metric, index) => (
                <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                        <span className="text-white/70">{metric.label}</span>
                        <span className="text-brand-gold font-bold">{metric.value}{metric.suffix}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(100, metric.value)}%` }}
                            transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                            className="h-full bg-brand-gold rounded-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

function AIInput_Voice() {
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className="w-full py-4 flex flex-col items-center">
            <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsAnimating(true)}
                onMouseLeave={() => setIsAnimating(false)}
            >
                <div className={cn(
                    "h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300",
                    isAnimating ? "bg-brand-gold text-black scale-110 shadow-[0_0_30px_rgba(212,175,55,0.4)]" : "bg-white/10 text-white"
                )}>
                    <Mic className="h-6 w-6" />
                </div>

                {/* Ripple Effect */}
                {isAnimating && (
                    <>
                        <div className="absolute inset-0 rounded-full border border-brand-gold/50 animate-ping" />
                        <div className="absolute -inset-2 rounded-full border border-brand-gold/30 animate-pulse" />
                    </>
                )}
            </div>
            <p className="mt-4 text-xs font-mono text-white/50">
                {isAnimating ? "Listening..." : "Hover to speak"}
            </p>
        </div>
    );
}

const BentoCard = ({ item, className }: { item: BentoItem; className?: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [2, -2]);
    const rotateY = useTransform(x, [-100, 100], [-2, 2]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 100);
        y.set(yPct * 100);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }

    return (
        <motion.div
            className={cn("h-full", className)}
            onHoverEnd={handleMouseLeave}
            onHoverStart={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            variants={fadeInUp}
        >
            <Link
                href={item.href || "#"}
                className="group relative flex h-full flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-brand-gold/30 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden"
            >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-brand-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                            {item.feature === 'globe' && <Globe className="h-5 w-5" />}
                            {item.feature === 'spotlight' && <Layout className="h-5 w-5" />}
                            {item.feature === 'typing' && <Bot className="h-5 w-5" />}
                            {item.feature === 'icons' && <FaWhatsapp className="h-5 w-5" />}
                            {item.feature === 'chart' && <CreditCard className="h-5 w-5" />}
                            {item.feature === 'metrics' && <Search className="h-5 w-5" />}
                            {item.feature === 'voice' && <Mic className="h-5 w-5" />}
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-brand-gold transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-sm text-white/60 mb-4">
                        {item.description}
                    </p>

                    <div className="mt-auto">
                        {item.feature === "globe" && (
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-full md:w-1/2 h-80 md:h-96">
                                    <Globe3D />
                                </div>
                                {item.spotlightItems && (
                                    <div className="w-full md:w-1/2">
                                        <SpotlightFeature items={item.spotlightItems} />
                                    </div>
                                )}
                            </div>
                        )}
                        {item.feature === "spotlight" && item.spotlightItems && (
                            <SpotlightFeature items={item.spotlightItems} />
                        )}
                        {item.feature === "typing" && item.typingText && (
                            <TypingCodeFeature text={item.typingText} />
                        )}
                        {item.feature === "chart" && item.statistic && (
                            <div className="pt-2">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-white/70">{item.statistic.label}</span>
                                    <span className="text-brand-gold font-bold">{item.statistic.value}{item.statistic.suffix}</span>
                                </div>
                                <ChartAnimation value={item.statistic.end || 0} />
                            </div>
                        )}
                        {item.feature === "metrics" && item.metrics && (
                            <MetricsFeature metrics={item.metrics} />
                        )}
                        {item.feature === "icons" && <IconsFeature />}
                        {item.feature === "voice" && <AIInput_Voice />}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export function Services() {
    return (
        <section id="services" className="py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Digital <span className="text-brand-gold">Capabilities</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 max-w-2xl mx-auto"
                    >
                        We build architectures that scale, agents that think, and interfaces that convert.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
                >
                    {/* 1. Software Solutions (Large) */}
                    <BentoCard item={bentoItems[0]} className="md:col-span-2 md:row-span-2" />

                    {/* 2. SEO */}
                    <BentoCard item={bentoItems[1]} className="md:col-span-1 md:row-span-1" />

                    {/* 3. WhatsApp */}
                    <BentoCard item={bentoItems[2]} className="md:col-span-1 md:row-span-1" />

                    {/* 4. Payment */}
                    <BentoCard item={bentoItems[3]} className="md:col-span-1 md:row-span-1" />

                    {/* 5. AI Agents */}
                    <BentoCard item={bentoItems[4]} className="md:col-span-1 md:row-span-1" />



                    {/* 6. Voice AI (New Feature) */}
                    <BentoCard
                        item={{
                            id: "voice",
                            title: "Voice AI",
                            description: "Natural language voice interaction.",
                            href: "#",
                            feature: "voice"
                        }}
                        className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-brand-gold/10 to-transparent"
                    />

                </motion.div>
            </div>
        </section>
    );
}
