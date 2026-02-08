import Link from "next/link";
import { Button } from "@/components/ui/button";
import CurvedLoop from "@/components/ui/curved-loop";

export function Footer() {
    return (
        <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-md">
                        <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                            TheFortune<span className="text-brand-gold">.Club</span>
                        </Link>
                        <p className="text-white/60 text-lg mb-8">
                            Helping businesses built their digital fortune through premium software, automation, and design.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-brand-gold text-black hover:bg-brand-gold/90 hover:scale-105 transition-transform duration-300"
                        >
                            <Link href="#contact">Let's Build Your Digital Fortune</Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
                        <div>
                            <h4 className="text-white font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-white/60">
                                <li><Link href="#" className="hover:text-white transition-colors">Software</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Automation</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Design</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">SEO</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-white/60">
                                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="#work" className="hover:text-white transition-colors">Work</Link></li>
                                <li><Link href="#approach" className="hover:text-white transition-colors">Approach</Link></li>
                                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Socials</h4>
                            <ul className="space-y-2 text-white/60">
                                <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                    <p>© 2024 TheFortune.Club. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

                <div className="mt-8 flex justify-center w-full overflow-hidden">
                    <CurvedLoop
                        marqueeText="THE FORTUNE CLUB • BUILD YOUR FUTURE • "
                        speed={0.5}
                        curveAmount={80}
                        className="opacity-80 hover:opacity-100 transition-opacity text-brand-gold"
                    />
                </div>
            </div>
        </footer>
    );
}
