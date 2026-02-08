"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Showcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen py-32 relative overflow-hidden flex flex-col items-center justify-center bg-black"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-black to-brand-dark" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
                <motion.div style={{ opacity }} className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Flawless on <span className="text-brand-gold">Every Screen</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl">
                        Responsive design isn't just about resizing. It's about adapting the
                        experience. We ensure your digital presence is perfect across the
                        entire ecosystem.
                    </p>
                </motion.div>

                {/* Device Ecosystem */}
                <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">

                    {/* 1. Desktop Monitor (Back Center) */}
                    <motion.div
                        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
                        className="absolute z-0 top-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] lg:w-[800px] aspect-video"
                    >
                        <DeviceFrame type="monitor">
                            <div className="w-full h-full bg-neutral-900 flex items-center justify-center overflow-hidden relative group">
                                <div className="absolute inset-0 bg-grid-white/[0.05]" />
                                {/* Screen UI - Dashboard */}
                                <div className="w-full h-full p-4 flex flex-col gap-3 opacity-100">
                                    {/* Header */}
                                    <div className="w-full h-8 border-b border-white/10 flex items-center justify-between px-2 bg-neutral-800/50 rounded-t-md">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
                                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
                                        </div>
                                        <div className="w-1/3 h-2 bg-white/20 rounded-full" />
                                    </div>
                                    {/* Main Content */}
                                    <div className="flex-1 flex gap-4">
                                        {/* Sidebar */}
                                        <div className="w-1/4 h-full bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col gap-2">
                                            <div className="w-full h-2 bg-white/20 rounded" />
                                            <div className="w-3/4 h-2 bg-white/10 rounded" />
                                            <div className="w-5/6 h-2 bg-white/10 rounded" />
                                        </div>
                                        {/* Chart Area */}
                                        <div className="flex-1 h-full bg-black/40 rounded-lg border border-white/5 p-3 relative overflow-hidden flex items-end justify-between gap-2">
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/10 to-transparent" />
                                            {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                                <div key={i} className="w-full bg-gradient-to-t from-brand-gold to-brand-gold/50 rounded-t-sm" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DeviceFrame>
                    </motion.div>

                    {/* 2. Laptop (Front Left) */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -20]) }}
                        className="absolute z-10 bottom-20 left-[5%] md:left-[10%] w-[50%] md:w-[45%] lg:w-[500px] aspect-[16/10]"
                    >
                        <DeviceFrame type="laptop">
                            <div className="w-full h-full bg-neutral-900 relative overflow-hidden flex flex-col">
                                {/* Header */}
                                <div className="w-full h-6 bg-neutral-800/50 flex items-center px-3 border-b border-white/10">
                                    <div className="w-16 h-2 bg-white/20 rounded-full" />
                                </div>
                                {/* Body */}
                                <div className="flex-1 p-3 grid grid-cols-2 gap-3">
                                    <div className="col-span-2 h-16 bg-gradient-to-r from-brand-gold/20 to-brand-gold/5 rounded-md border border-brand-gold/10 flex items-center px-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-gold/20" />
                                        <div className="ml-3 space-y-2">
                                            <div className="w-24 h-2 bg-brand-gold/80 rounded" />
                                            <div className="w-16 h-2 bg-white/30 rounded" />
                                        </div>
                                    </div>
                                    <div className="h-full bg-white/5 rounded-md border border-white/5" />
                                    <div className="h-full bg-white/5 rounded-md border border-white/5" />
                                </div>
                            </div>
                        </DeviceFrame>
                    </motion.div>

                    {/* 3. Tablet (Front Right) */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ y: useTransform(scrollYProgress, [0, 1], [120, -40]) }}
                        className="absolute z-20 bottom-32 right-[10%] md:right-[15%] w-[25%] md:w-[20%] lg:w-[280px] aspect-[3/4]"
                    >
                        <DeviceFrame type="tablet">
                            <div className="w-full h-full bg-neutral-900 relative overflow-hidden p-3 flex flex-col gap-3">
                                <div className="w-full h-2/5 bg-neutral-800/50 rounded-lg border border-white/10 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border-2 border-white/10" />
                                </div>
                                <div className="w-full h-1/5 bg-white/5 rounded-lg border border-white/5" />
                                <div className="w-full h-2/5 bg-gradient-to-br from-brand-gold/30 to-transparent rounded-lg border border-brand-gold/20" />
                            </div>
                        </DeviceFrame>
                    </motion.div>

                    {/* 4. Mobile (Front Center-Right) */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute z-30 -bottom-10 right-[25%] md:right-[30%] w-[12%] md:w-[10%] lg:w-[140px] aspect-[9/19.5]"
                    >
                        <DeviceFrame type="mobile">
                            <div className="w-full h-full bg-neutral-900 relative overflow-hidden flex flex-col">
                                <div className="h-1/4 bg-brand-gold/10 border-b border-brand-gold/20 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-brand-gold text-black text-xs flex items-center justify-center font-bold shadow-lg shadow-brand-gold/20">TC</div>
                                </div>
                                <div className="flex-1 p-2 flex flex-col gap-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-full h-8 bg-white/5 rounded border border-white/5 flex items-center px-2">
                                            <div className="w-4 h-4 rounded-full bg-white/20" />
                                            <div className="ml-2 w-12 h-1 bg-white/10 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </DeviceFrame>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// --- Device Frame Component ---

interface DeviceFrameProps {
    children: React.ReactNode;
    type: "monitor" | "laptop" | "tablet" | "mobile";
    className?: string;
}

function DeviceFrame({ children, type, className }: DeviceFrameProps) {
    const frameStyles = {
        monitor: "rounded-xl border-[4px] md:border-[8px] border-neutral-700/50 bg-neutral-900 shadow-2xl shadow-black/50 ring-1 ring-white/20",
        laptop: "rounded-lg border-[3px] md:border-[6px] border-neutral-700/50 bg-neutral-900 shadow-xl shadow-black/50 ring-1 ring-white/20",
        tablet: "rounded-xl border-[3px] md:border-[6px] border-neutral-700/50 bg-neutral-900 shadow-lg shadow-black/50 ring-1 ring-white/20",
        mobile: "rounded-[1.5rem] md:rounded-[2rem] border-[3px] md:border-[6px] border-neutral-700/50 bg-neutral-900 shadow-lg shadow-black/50 ring-1 ring-white/20",
    };

    return (
        <div className={cn("relative group", className)}>
            {/* Ambient Glow behind device */}
            <div className="absolute -inset-4 bg-brand-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Screen Container */}
            <div className={cn("relative overflow-hidden w-full h-full transform transition-transform duration-500", frameStyles[type])}>
                {/* Shiny Bezel Reflection */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[inherit] pointer-events-none z-20" />

                {/* Screen Gloss */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-10 opacity-30" />

                {/* Content */}
                <div className="w-full h-full relative z-0">
                    {children}
                </div>
            </div>

            {/* Monitor Stand */}
            {type === "monitor" && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-b-lg z-[-1] shadow-xl flex items-center justify-center border-t border-black/50">
                    <div className="w-16 h-1 bg-black/30 rounded-full" />
                </div>
            )}
            {/* Laptop Base */}
            {type === "laptop" && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-b-md z-[-1] shadow-lg border-t border-black/50" />
            )}
        </div>
    );
}
