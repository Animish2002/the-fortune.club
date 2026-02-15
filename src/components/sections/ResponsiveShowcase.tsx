"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ResponsiveShowcase() {
    return (
        <section className="py-32 relative bg-brand-dark overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Flawless on{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">
                            Every Screen
                        </span>
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Responsive design isn't just about resizing. It's about adapting the experience. We ensure your digital presence is perfect across the entire ecosystem.
                    </p>
                </motion.div>

                {/* Devices Display - Stacked Layout */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Desktop - Main Focus */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-30"
                    >
                        <div className="bg-neutral-900 rounded-t-2xl p-3 border border-white/10 shadow-2xl">
                            {/* Browser Chrome */}
                            <div className="flex items-center gap-3 mb-3 px-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex-1 h-7 bg-neutral-800 rounded-lg flex items-center px-3">
                                    <div className="text-xs text-white/40">thefortuneclub.com</div>
                                </div>
                            </div>

                            {/* Screen Content */}
                            <div className="relative aspect-[16/9] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 rounded-lg overflow-hidden border border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent" />

                                {/* Simulated Navigation */}
                                <div className="flex items-center justify-between p-6 border-b border-white/5">
                                    <div className="h-3 w-24 bg-brand-gold/40 rounded" />
                                    <div className="flex gap-4">
                                        <div className="h-2 w-12 bg-white/20 rounded" />
                                        <div className="h-2 w-12 bg-white/20 rounded" />
                                        <div className="h-2 w-12 bg-white/20 rounded" />
                                    </div>
                                </div>

                                {/* Simulated Content */}
                                <div className="p-8 space-y-6">
                                    <div className="space-y-3">
                                        <div className="h-4 bg-brand-gold/30 rounded w-2/3" />
                                        <div className="h-3 bg-white/20 rounded w-1/2" />
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-32 bg-white/5 rounded-lg border border-white/10 p-3">
                                            <div className="h-2 bg-brand-gold/20 rounded w-3/4 mb-2" />
                                            <div className="h-1.5 bg-white/10 rounded w-1/2" />
                                        </div>
                                        <div className="h-32 bg-white/5 rounded-lg border border-white/10 p-3">
                                            <div className="h-2 bg-brand-gold/20 rounded w-3/4 mb-2" />
                                            <div className="h-1.5 bg-white/10 rounded w-1/2" />
                                        </div>
                                        <div className="h-32 bg-white/5 rounded-lg border border-white/10 p-3">
                                            <div className="h-2 bg-brand-gold/20 rounded w-3/4 mb-2" />
                                            <div className="h-1.5 bg-white/10 rounded w-1/2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/5 mx-auto h-3 bg-neutral-900 rounded-b-2xl border-x border-b border-white/10" />
                    </motion.div>

                    {/* Tablet - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute -left-8 md:-left-20 bottom-0 z-20 w-64 md:w-80"
                    >
                        <div className="bg-neutral-900 rounded-3xl p-4 border border-white/10 shadow-2xl">
                            <div className="relative aspect-[3/4] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 rounded-2xl overflow-hidden border border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent" />

                                {/* Simulated Content */}
                                <div className="p-6 space-y-4">
                                    <div className="h-3 bg-brand-gold/30 rounded w-3/4" />
                                    <div className="h-2 bg-white/20 rounded w-1/2" />

                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        <div className="h-24 bg-white/5 rounded-lg border border-white/10" />
                                        <div className="h-24 bg-white/5 rounded-lg border border-white/10" />
                                        <div className="h-24 bg-white/5 rounded-lg border border-white/10" />
                                        <div className="h-24 bg-white/5 rounded-lg border border-white/10" />
                                    </div>
                                </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="flex justify-center mt-3">
                                <div className="w-12 h-1 bg-white/20 rounded-full" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute -right-4 md:-right-16 bottom-0 z-20 w-40 md:w-48"
                    >
                        <div className="bg-neutral-900 rounded-[2.5rem] p-3 border border-white/10 shadow-2xl">
                            {/* Notch */}
                            <div className="flex justify-center mb-2">
                                <div className="w-24 h-6 bg-neutral-950 rounded-full" />
                            </div>

                            <div className="relative aspect-[9/19] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 rounded-[2rem] overflow-hidden border border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent" />

                                {/* Simulated Content */}
                                <div className="p-4 space-y-3">
                                    <div className="h-2 bg-brand-gold/30 rounded w-4/5" />
                                    <div className="h-1.5 bg-white/20 rounded w-2/3" />

                                    <div className="space-y-2 mt-4">
                                        <div className="h-16 bg-white/5 rounded-xl border border-white/10" />
                                        <div className="h-16 bg-white/5 rounded-xl border border-white/10" />
                                        <div className="h-16 bg-white/5 rounded-xl border border-white/10" />
                                    </div>
                                </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="flex justify-center mt-2">
                                <div className="w-20 h-1 bg-white/30 rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Device Labels - Below the showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-3 gap-8 mt-32 md:mt-40 max-w-4xl mx-auto"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-brand-gold mb-2">Desktop</div>
                        <p className="text-white/60">Full-featured experience</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-brand-gold mb-2">Tablet</div>
                        <p className="text-white/60">Optimized layouts</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-brand-gold mb-2">Mobile</div>
                        <p className="text-white/60">Touch-first design</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
