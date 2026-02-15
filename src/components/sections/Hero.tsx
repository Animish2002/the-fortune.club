"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactOverlay } from "@/components/layout/ContactOverlay";
import { useState, useEffect } from "react";

interface Particle {
    x: number;
    y: number;
    duration: number;
    delay: number;
}

export function Hero() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate random particle positions only on client-side to avoid hydration errors
        setParticles(
            Array.from({ length: 20 }, () => ({
                x: Math.random() * 1000 - 500,
                y: Math.random() * 1000 - 500,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
            }))
        );
    }, []);
    return (
        <section className="relative flex h-screen min-h-[800px] w-full flex-col items-center justify-center overflow-hidden px-4">
            {/* Background Elements */}
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-brand-gold/20 blur-[120px] opacity-40 animate-pulse mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-900/20 blur-[120px] opacity-30 mix-blend-screen" />
                <div className="absolute top-[40%] left-[20%] h-[300px] w-[300px] rounded-full bg-brand-gold/10 blur-[100px] opacity-20 animate-pulse delay-1000 duration-[4000ms]" />
                <div className="absolute top-[20%] right-[20%] h-[200px] w-[200px] rounded-full bg-blue-500/10 blur-[80px] opacity-20 animate-pulse delay-500 duration-[5000ms]" />
            </div>

            <div className="z-10 flex max-w-5xl flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
                >
                    <span className="mr-2 flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                        Accepting New Clients for Q3
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
                >
                    Engineering Digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                        Advantage
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mb-10 max-w-2xl text-lg text-white/60 md:text-xl"
                >
                    We build premium software solutions, automation systems, and high-performance landing pages that scale your business.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <ContactOverlay>
                        <Button
                            size="lg"
                            className="group relative h-14 rounded-full bg-brand-gold px-8 text-lg font-semibold text-black hover:bg-brand-gold/90 hover:scale-105 hover:text-black transition-all duration-300"
                        >
                            <span className="mr-2">Start Your Project</span>
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Button>
                    </ContactOverlay>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-14 rounded-full border-white/10 bg-white/5 px-8 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                    >
                        <Link href="#work">View Our Work</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>

            {/* Micro Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: particle.x,
                            y: particle.y,
                        }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            y: [0, -100],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "linear",
                        }}
                        className="absolute left-1/2 top-1/2 w-1 h-1 bg-brand-gold/30 rounded-full"
                    />
                ))}
            </div>
        </section>
    );
}
