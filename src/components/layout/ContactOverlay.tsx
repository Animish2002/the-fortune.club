"use client";

import {
    ExpandableScreen,
    ExpandableScreenTrigger,
    ExpandableScreenContent,
} from "@/components/ui/expandable-screen";
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
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactOverlayProps {
    children?: React.ReactNode;
    className?: string;
}

export function ContactOverlay({ children, className }: ContactOverlayProps) {
    return (
        <ExpandableScreen layoutId="contact-overlay">
            <ExpandableScreenTrigger className={className}>
                {children || (
                    <div className="bg-brand-gold text-black px-6 py-2 rounded-full font-medium hover:bg-brand-gold/90 transition-colors">
                        Book a Call
                    </div>
                )}
            </ExpandableScreenTrigger>

            <ExpandableScreenContent className="bg-neutral-950 items-center justify-center flex">
                <div className="w-full max-w-4xl mx-auto p-4 md:p-12 h-full flex flex-col justify-center">

                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Ready to <span className="text-brand-gold">Scale?</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                            Fill out the details below and we'll schedule a discovery call to discuss your digital future.
                        </p>
                    </div>

                    <TextureCardStyled className="w-full max-w-lg mx-auto bg-neutral-900/50">
                        <TextureCardHeader className="flex flex-col gap-1 items-center justify-center p-6 border-b border-white/5">
                            <div className="p-3 bg-neutral-900 rounded-full mb-3 border border-white/10">
                                <Mail className="h-6 w-6 text-brand-gold" />
                            </div>
                            <TextureCardTitle className="text-xl ">Contact Request</TextureCardTitle>
                        </TextureCardHeader>

                        <TextureCardContent className="p-6">
                            <form className="flex flex-col gap-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="overlay_first" className="text-neutral-300">First Name</Label>
                                        <Input
                                            id="overlay_first"
                                            className="bg-neutral-900/50 border-white/10 focus:border-brand-gold/50 text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="overlay_last" className="text-neutral-300">Last Name</Label>
                                        <Input
                                            id="overlay_last"
                                            className="bg-neutral-900/50 border-white/10 focus:border-brand-gold/50 text-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="overlay_email" className="text-neutral-300">Email</Label>
                                    <Input
                                        id="overlay_email"
                                        type="email"
                                        className="bg-neutral-900/50 border-white/10 focus:border-brand-gold/50 text-white"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="overlay_message" className="text-neutral-300">Project Details</Label>
                                    <Textarea
                                        id="overlay_message"
                                        className="min-h-[100px] bg-neutral-900/50 border-white/10 focus:border-brand-gold/50 text-white resize-none"
                                    />
                                </div>
                            </form>
                        </TextureCardContent>

                        <TextureSeparator />

                        <TextureCardFooter className="bg-neutral-900/30 p-4">
                            <TextureButton variant="accent" className="w-full h-12 text-base font-semibold">
                                <div className="flex gap-2 items-center justify-center">
                                    Submit Request
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </TextureButton>
                        </TextureCardFooter>
                    </TextureCardStyled>

                </div>
            </ExpandableScreenContent>
        </ExpandableScreen>
    );
}
