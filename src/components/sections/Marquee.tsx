"use client";

import { motion } from "framer-motion";

const items = [
    "WhatsApp Automation",
    "Custom Software",
    "Mobile App Dev",
    "HRMS & Payroll",
    "AI-Powered Dev",
    "Social Media AI",
    "Workflow Builder",
    "ATS Recruitment",
    "Ticket & Live Chat",
    "White-Label SaaS",
];

const Separator = () => (
    <span className="text-black/30 text-2xl font-light select-none">◆</span>
);

export function Marquee() {
    const doubled = [...items, ...items];

    return (
        <section className="py-3.5 bg-brand-gold overflow-hidden border-y border-black/10">
            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex items-center gap-8 shrink-0"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {doubled.concat(doubled).map((item, i) => (
                        <div key={i} className="flex items-center gap-8 shrink-0">
                            <span className="text-lg md:text-xl font-bold text-black uppercase tracking-widest">
                                {item}
                            </span>
                            <Separator />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
