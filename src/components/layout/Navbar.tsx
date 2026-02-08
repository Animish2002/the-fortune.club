"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ContactOverlay } from "@/components/layout/ContactOverlay";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-4 left-0 right-0 z-50 mx-auto max-w-4xl px-4 py-3 rounded-full border border-white/5 transition-all duration-300",
                scrolled
                    ? "bg-black/50 backdrop-blur-md shadow-lg"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
                >
                    TheFortune<span className="text-brand-gold">.Club</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <ContactOverlay>
                        <Button
                            className="rounded-full bg-brand-gold text-black hover:bg-brand-gold/90 hover:text-black hover:scale-105 transition-all duration-300"
                        >
                            Book a Call
                        </Button>
                    </ContactOverlay>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-brand-dark/95 backdrop-blur-xl border-white/10 text-white">
                            <VisuallyHidden>
                                <SheetTitle>Navigation</SheetTitle>
                            </VisuallyHidden>
                            <div className="flex flex-col gap-8 mt-12">
                                <Link
                                    href="/"
                                    className="text-2xl font-bold tracking-tight text-white"
                                >
                                    TheFortune<span className="text-brand-gold">.Club</span>
                                </Link>
                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-2xl font-light text-white/80 hover:text-brand-gold transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-8 flex flex-col gap-6">
                                    <div className="flex justify-start">
                                        <span className="text-white/60 mr-4 self-center">Switch Theme</span>
                                        <ModeToggle />
                                    </div>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full rounded-full bg-brand-gold text-black hover:bg-brand-gold/90 hover:text-black"
                                    >
                                        <ContactOverlay className="w-full">
                                            <div className="w-full h-full flex items-center justify-center">
                                                Book a Call
                                            </div>
                                        </ContactOverlay>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
}
