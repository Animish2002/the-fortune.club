"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
    {
        title: "Discover",
        description:
            "We dive deep into your business model, identifying bottlenecks and opportunities for automation and growth.",
        number: "01",
    },
    {
        title: "Design",
        description:
            "Our designers craft a premium, high-converting visual identity that resonates with your target audience.",
        number: "02",
    },
    {
        title: "Develop",
        description:
            "We engineer robust solutions using cutting-edge tech (Next.js, AI) ensuring speed, security, and scalability.",
        number: "03",
    },
    {
        title: "Deploy",
        description:
            "Seamless launch with rigorous testing. We handle the technical complexities so you can focus on business.",
        number: "04",
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
        <section id="approach" className="py-24 relative bg-brand-dark overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Streamlined Approach</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        A proven methodology to transform your vision into a digital powerhouse.
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative max-w-4xl mx-auto">
                    {/* Central Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 h-full -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 w-full bg-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                        />
                    </div>

                    <div className="flex flex-col gap-12 md:gap-24">
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
    step: { title: string; description: string; number: string };
    index: number;
}) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative flex items-center ${isEven ? "md:justify-start" : "md:justify-end"
                }`}
        >
            {/* Timeline Node */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-gold z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

            {/* Content Card */}
            <div
                className={`bg-brand-dark w-full md:w-[calc(50%-40px)] ml-[60px] md:ml-0 ${isEven ? "md:mr-[40px] md:text-right" : "md:ml-[40px] md:text-left"
                    }`}
            >
                <Card className="border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden">
                    <CardHeader>
                        <div
                            className={`text-6xl font-bold text-white/5 mb-[-20px] leading-none select-none ${isEven ? "md:mr-[-10px]" : "md:ml-[-10px]"
                                }`}
                        >
                            {step.number}
                        </div>
                        <CardTitle className="text-2xl text-brand-gold">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white/60">{step.description}</p>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
}
