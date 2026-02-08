"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Vastu Decor",
        category: "Interior Design Portfolio",
        color: "from-amber-500 to-orange-600",
        href: "https://www.vastudecor.site/",
    },
    {
        title: "Anita Ayurveda",
        category: "Wellness & E-Commerce",
        color: "from-green-500 to-emerald-700",
        href: "https://www.anitaayurveda.in/",
    },
    {
        title: "Aadarsh Institute",
        category: "Educational Platform",
        color: "from-blue-500 to-indigo-700",
        href: "https://aadarshinstitute.in/",
    },
    {
        title: "Life First",
        category: "Insurance & Advisory",
        color: "from-sky-400 to-blue-600",
        href: "https://www.life-first.in/",
    },
    {
        title: "Anuj Bagade",
        category: "Personal Portfolio",
        color: "from-purple-500 to-indigo-600",
        href: "https://www.anujbagade.com/",
    },
    {
        title: "Vastu Design",
        category: "Architecture Showcase",
        color: "from-stone-500 to-stone-700",
        href: "https://vastu-design.vercel.app/",
    },
    {
        title: "Pratik Agrawal",
        category: "Professional Portfolio",
        color: "from-rose-500 to-red-700",
        href: "https://www.pratikagrawal.in/",
    },
    {
        title: "WiseVets",
        category: "Veterinary Services",
        color: "from-teal-400 to-cyan-600",
        href: "https://wisevets.pages.dev/",
    },
];

export function Work() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={targetRef} id="work" className="relative h-[400vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Fixed Heading */}
                <div className="absolute top-10 left-6 md:left-20 z-10 max-w-[200px] md:max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                            Selected Work
                        </h2>
                        <p className="text-brand-gold text-lg md:text-xl font-medium">
                            Delivering digital excellence across industries.
                        </p>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Container */}
                <motion.div style={{ x }} className="flex gap-6 md:gap-12 pl-[10vw] md:pl-[30vw] items-center">
                    {projects.map((project, index) => (
                        <Link href={project.href} key={index} target="_blank" className="group">
                            <div
                                className="relative h-[50vh] w-[75vw] md:h-[60vh] md:w-[35vw] flex-shrink-0 cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                            >
                                <Card className="h-full w-full overflow-hidden border-0 bg-neutral-800 relative ring-1 ring-white/10 group-hover:ring-brand-gold/50 transition-all">
                                    {/* Abstract Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />

                                    {/* Placeholder Initials */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h1 className="text-[8rem] md:text-[12rem] font-bold text-white/5 group-hover:text-white/10 transition-colors uppercase tracking-tighter select-none">
                                            {project.title.substring(0, 2)}
                                        </h1>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="text-brand-gold text-xs md:text-sm font-bold uppercase tracking-widest mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-white/80 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                                                <span className="text-sm font-medium">Visit Website</span>
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
