import Link from "next/link";
import { Button } from "@/components/ui/button";
import CurvedLoop from "@/components/ui/curved-loop";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const services = [
    { label: "Custom Software", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "WhatsApp Automation", href: "#services" },
    { label: "Workflow Automation", href: "#services" },
    { label: "Social Media AI", href: "#services" },
    { label: "HRMS & ATS", href: "#services" },
];

const company = [
    { label: "About", href: "#about" },
    { label: "Our Approach", href: "#approach" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
    { label: "Instagram", href: "#", icon: FaInstagram },
    { label: "X / Twitter", href: "#", icon: FaXTwitter },
    { label: "WhatsApp", href: "https://wa.me/", icon: FaWhatsapp },
];

export function Footer() {
    return (
        <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
            {/* Top divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-brand-gold/30 blur-sm" />

            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">

                    {/* Brand block */}
                    <div className="max-w-sm">
                        <Link href="/" className="inline-block mb-5">
                            <span className="font-display text-2xl font-bold text-white tracking-tight">
                                TheFortune<span className="text-brand-gold">.Club</span>
                            </span>
                        </Link>
                        <p className="text-white/45 text-sm leading-relaxed mb-8">
                            AI-powered software development and a complete white-label SaaS ecosystem — built for Indian businesses and global clients who demand quality.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-brand-gold text-black font-semibold hover:bg-brand-gold/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                        >
                            <Link href="#contact">Let&apos;s Build Together</Link>
                        </Button>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
                        <div>
                            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Services</h4>
                            <ul className="space-y-3">
                                {services.map((s) => (
                                    <li key={s.label}>
                                        <Link
                                            href={s.href}
                                            className="text-sm text-white/45 hover:text-brand-gold transition-colors duration-200"
                                        >
                                            {s.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Company</h4>
                            <ul className="space-y-3">
                                {company.map((c) => (
                                    <li key={c.label}>
                                        <Link
                                            href={c.href}
                                            className="text-sm text-white/45 hover:text-brand-gold transition-colors duration-200"
                                        >
                                            {c.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Connect</h4>
                            <ul className="space-y-3">
                                {socials.map((s) => {
                                    const Icon = s.icon;
                                    return (
                                        <li key={s.label}>
                                            <Link
                                                href={s.href}
                                                className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-brand-gold transition-colors duration-200"
                                            >
                                                <Icon className="h-3.5 w-3.5" />
                                                {s.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
                    <p>© 2025 TheFortune.Club. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
                    </div>
                </div>

                {/* Curved marquee */}
                <div className="mt-10 flex justify-center w-full overflow-hidden">
                    <CurvedLoop
                        marqueeText="THE FORTUNE CLUB • BUILD YOUR DIGITAL FUTURE • AI-POWERED DELIVERY • "
                        speed={0.5}
                        curveAmount={80}
                        className="opacity-60 hover:opacity-90 transition-opacity text-brand-gold"
                    />
                </div>
            </div>
        </footer>
    );
}
