"use client";

import { TextureButton } from "@/components/ui/texture-button";
import {
    TextureCardStyled,
    TextureCardHeader,
    TextureCardTitle,
    TextureCardContent,
    TextureCardFooter,
    TextureSeparator,
} from "@/components/ui/texture-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_50%)]" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Left Side: Text Info */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Let's Build Your <br />
                                <span className="text-brand-gold">Digital Fortune</span>
                            </h2>
                            <p className="text-neutral-400 text-lg max-w-md">
                                Ready to transform your digital presence? Reach out to us and let's discuss how we can elevate your brand.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                    <Mail className="w-6 h-6 text-brand-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email Us</h4>
                                    <p className="text-neutral-500">hello@thefortune.club</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                    <Phone className="w-6 h-6 text-brand-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Call Us</h4>
                                    <p className="text-neutral-500">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                    <MapPin className="w-6 h-6 text-brand-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Visit Us</h4>
                                    <p className="text-neutral-500">123 Innovation Dr, Tech City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="flex-1 w-full max-w-md">
                        <TextureCardStyled className="w-full bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                            <TextureCardHeader className="flex flex-col gap-1 items-center justify-center p-6 border-b border-white/5 bg-white/5">
                                <div className="p-3 bg-neutral-950 rounded-full mb-3 border border-white/10 shadow-inner">
                                    <Mail className="h-6 w-6 text-brand-gold" />
                                </div>
                                <TextureCardTitle className="text-xl text-white font-semibold tracking-wide">Send us a message</TextureCardTitle>
                                <p className="text-center text-sm text-neutral-400">
                                    Fill out the form below and we'll get back to you shortly.
                                </p>
                            </TextureCardHeader>

                            <TextureCardContent className="p-6">
                                <form className="flex flex-col gap-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="first_name" className="text-xs uppercase tracking-wider text-neutral-400 font-medium ml-1">First Name</Label>
                                            <Input
                                                id="first_name"
                                                placeholder="John"
                                                className="bg-neutral-950/50 border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 text-white placeholder:text-neutral-700 h-11"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last_name" className="text-xs uppercase tracking-wider text-neutral-400 font-medium ml-1">Last Name</Label>
                                            <Input
                                                id="last_name"
                                                placeholder="Doe"
                                                className="bg-neutral-950/50 border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 text-white placeholder:text-neutral-700 h-11"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-xs uppercase tracking-wider text-neutral-400 font-medium ml-1">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="bg-neutral-950/50 border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 text-white placeholder:text-neutral-700 h-11"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-xs uppercase tracking-wider text-neutral-400 font-medium ml-1">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project..."
                                            className="min-h-[120px] bg-neutral-950/50 border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 text-white placeholder:text-neutral-700 resize-none"
                                        />
                                    </div>
                                </form>
                            </TextureCardContent>

                            <TextureSeparator />

                            <TextureCardFooter className="bg-neutral-950/50 p-4 border-t border-white/5">
                                <TextureButton variant="accent" className="w-full h-12 text-base font-bold tracking-wide shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20 transition-all">
                                    <div className="flex gap-2 items-center justify-center">
                                        Send Message
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </TextureButton>
                            </TextureCardFooter>
                        </TextureCardStyled>
                    </div>

                </div>
            </div>
        </section>
    );
}
