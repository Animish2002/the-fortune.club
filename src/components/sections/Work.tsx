"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        num: "01",
        title: "Vastu Decor",
        category: "Interior Design",
        type: "Portfolio Website",
        description: "Luxury interior design portfolio with curated project galleries, service pages, and a client inquiry automation flow.",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
        accent: "#f59e0b",
        href: "https://www.vastudecor.site/",
    },
    {
        num: "02",
        title: "Anita Ayurveda",
        category: "Wellness & E-Commerce",
        type: "Online Store",
        description: "Wellness brand with Ayurvedic product catalog, editorial blog, and WhatsApp-integrated purchase flow.",
        tags: ["Next.js", "Shopify API", "WhatsApp"],
        accent: "#10b981",
        href: "https://www.anitaayurveda.in/",
    },
    {
        num: "03",
        title: "Aadarsh Institute",
        category: "Education",
        type: "Platform Website",
        description: "Educational institute platform with course listings, admissions pipeline, and real-time inquiry management.",
        tags: ["React", "Node.js", "MongoDB"],
        accent: "#6366f1",
        href: "https://aadarshinstitute.in/",
    },
    {
        num: "04",
        title: "Life First",
        category: "Finance & Insurance",
        type: "Advisory Platform",
        description: "Insurance advisory site with policy comparison tools, premium calculators, and lead capture automation.",
        tags: ["Next.js", "Tailwind CSS", "Analytics"],
        accent: "#0ea5e9",
        href: "https://www.life-first.in/",
    },
    {
        num: "05",
        title: "Anuj Bagade",
        category: "Personal Branding",
        type: "Portfolio",
        description: "High-impact personal brand portfolio with animated project showcases and integrated contact workflow.",
        tags: ["React", "Framer Motion", "GSAP"],
        accent: "#8b5cf6",
        href: "https://www.anujbagade.com/",
    },
    {
        num: "06",
        title: "Vastu Design",
        category: "Architecture",
        type: "Showcase Site",
        description: "Architecture firm portfolio with high-res project renders, material breakdowns, and spatial storytelling.",
        tags: ["Next.js", "GSAP", "Three.js"],
        accent: "#D4AF37",
        href: "https://vastu-design.vercel.app/",
    },
    {
        num: "07",
        title: "Pratik Agrawal",
        category: "Personal Brand",
        type: "Portfolio",
        description: "Professional portfolio with achievement timeline, speaking engagements, and media feature highlights.",
        tags: ["Next.js", "Framer Motion"],
        accent: "#f43f5e",
        href: "https://www.pratikagrawal.in/",
    },
    {
        num: "08",
        title: "WiseVets",
        category: "Veterinary Services",
        type: "Service Platform",
        description: "Veterinary services platform with appointment booking, pet health resources, and clinic locator.",
        tags: ["React", "Node.js", "Booking API"],
        accent: "#06b6d4",
        href: "https://wisevets.pages.dev/",
    },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
    return (
        <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-[58vh] w-[78vw] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] transition-all duration-500 hover:border-brand-gold/25 hover:shadow-[0_0_60px_rgba(0,0,0,0.6)] md:h-[62vh] md:w-[34vw]"
        >
            {/* Thin accent line at top */}
            <div
                className="h-0.5 w-full shrink-0 transition-all duration-500 group-hover:opacity-100 opacity-60"
                style={{ background: `linear-gradient(to right, transparent, ${project.accent}, transparent)` }}
            />

            {/* Visual area — dark with subtle accent glow */}
            <div className="relative flex-1 overflow-hidden">
                {/* Accent radial glow */}
                <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.accent}18 0%, transparent 70%)` }}
                />

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />

                {/* Large watermark number */}
                <span
                    className="absolute bottom-0 right-4 select-none font-display text-[8rem] font-black leading-none opacity-[0.04] md:text-[10rem]"
                    style={{ color: project.accent }}
                >
                    {project.num}
                </span>

                {/* Center logo mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl font-display text-2xl font-black transition-all duration-500 group-hover:scale-110"
                        style={{
                            background: `${project.accent}12`,
                            border: `1.5px solid ${project.accent}30`,
                            color: project.accent,
                            boxShadow: `0 0 40px ${project.accent}20`,
                        }}
                    >
                        {project.title.substring(0, 2).toUpperCase()}
                    </div>
                </div>

                {/* Category badge — top left */}
                <div className="absolute left-5 top-5">
                    <span
                        className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
                        style={{ background: `${project.accent}15`, color: project.accent }}
                    >
                        {project.category}
                    </span>
                </div>

                {/* Arrow — top right */}
                <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/30 transition-all duration-300 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10 group-hover:text-brand-gold">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-12 bg-linear-to-t from-[#0f0f0f] to-transparent" />
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-3 border-t border-white/5 p-5">
                <div className="flex items-center justify-between gap-2">
                    <span
                        className="rounded-md px-2 py-0.5 text-[10px] font-semibold"
                        style={{ background: `${project.accent}12`, color: project.accent }}
                    >
                        {project.type}
                    </span>
                    <ExternalLink className="h-3 w-3 shrink-0 text-white/15 transition-colors group-hover:text-brand-gold" />
                </div>

                <h3 className="font-display text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-brand-gold md:text-2xl">
                    {project.title}
                </h3>

                <p className="line-clamp-2 text-[12px] leading-relaxed text-white/35">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-3">
                    {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-white/8 bg-white/3 px-2 py-0.5 text-[9px] text-white/35">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export function Work() {
    const targetRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [scrollDistance, setScrollDistance] = useState(0);

    const { scrollYProgress } = useScroll({ target: targetRef });

    // Pixel-based x: moves exactly as far as the track overflows the viewport
    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    useEffect(() => {
        const measure = () => {
            if (!trackRef.current || !targetRef.current) return;
            const dist = trackRef.current.scrollWidth - window.innerWidth;
            setScrollDistance(dist);
            // Set section height = viewport height + scroll distance
            // so the sticky element stays pinned for exactly that long
            targetRef.current.style.height = `calc(100vh + ${dist}px)`;
        };

        // Delay one frame so the track has rendered at full width
        const raf = requestAnimationFrame(measure);
        window.addEventListener("resize", measure);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", measure);
        };
    }, []);

    return (
        <section ref={targetRef} id="work" className="relative bg-brand-dark" style={{ height: "400vh" }}>
            <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">

                {/* Section header */}
                <div className="absolute top-10 left-6 z-10 md:left-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-3"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/20 bg-brand-gold/8 px-4 py-1.5">
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Selected Work</span>
                        </div>
                        <h2 className="font-display text-3xl font-bold tracking-[-0.02em] leading-tight text-white md:text-5xl">
                            Built for real
                            <br />
                            <span className="text-gold-shimmer">businesses.</span>
                        </h2>
                        <p className="text-sm text-white/35">
                            {projects.length} live projects · 8 industries
                        </p>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-8 left-6 z-10 flex items-center gap-2.5 md:left-16">
                    <div className="flex gap-1.5">
                        <div className="h-1 w-5 rounded-full bg-brand-gold/50" />
                        <div className="h-1 w-1.5 rounded-full bg-white/15" />
                        <div className="h-1 w-1.5 rounded-full bg-white/15" />
                    </div>
                    <span className="text-[11px] text-white/25">scroll to explore</span>
                </div>

                {/* Cards track */}
                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className="flex items-center gap-5 pl-[8vw] md:pl-[26vw]"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.num}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.04 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}

                    {/* End cap */}
                    <div className="flex h-[58vh] w-[36vw] shrink-0 flex-col items-center justify-center gap-4 md:h-[62vh] md:w-[16vw]">
                        <div className="rounded-full border border-brand-gold/20 bg-brand-gold/8 p-4">
                            <ArrowUpRight className="h-5 w-5 text-brand-gold" />
                        </div>
                        <p className="text-center text-sm text-white/25">More coming soon</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
