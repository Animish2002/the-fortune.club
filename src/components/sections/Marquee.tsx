"use client";

import { motion } from "framer-motion";

const items = [
    "Web Development",
    "UI/UX Design",
    "React / Next.js",
    "Automation",
    "SEO Optimization",
    "E-Commerce",
    "App Development",
    "Consulting",
];

export function Marquee() {
    return (
        <section className="py-10 bg-brand-gold overflow-hidden">
            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex gap-16 md:gap-32 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {items.concat(items).concat(items).map((item, index) => (
                        <span
                            key={index}
                            className="text-4xl md:text-7xl font-bold text-black uppercase tracking-tighter"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
