"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, MessageSquare } from "lucide-react";
import FeedbackModal from "./FeedbackModal";

export default function Footer() {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    return (
        <footer className="bg-white border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-serif font-bold text-xl">
                                A
                            </div>
                            <span className="font-serif font-bold text-2xl text-foreground tracking-tight">
                                Artisan<span className="text-primary">.</span>
                            </span>
                        </Link>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                            Empowering professionals to tell their career stories with elegance and impact.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Product</h3>
                        <ul className="space-y-3 text-sm text-foreground/60">
                            <li><Link href="#" className="hover:text-primary transition-colors">Templates</Link></li>
                            <li><Link href="/updates" className="hover:text-primary transition-colors">Updates</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-foreground/60">
                            <li><Link href="/guide" className="hover:text-primary transition-colors">Resume Guide</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Career Blog</Link></li>
                            <li><Link href="/interview-prep" className="hover:text-primary transition-colors">Interview Prep</Link></li>
                            <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm text-foreground/60">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/40">
                    <p>&copy; {new Date().getFullYear()} Artisan Resume. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed with intent.</p>
                </div>
            </div>

            <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
        </footer>
    );
}
