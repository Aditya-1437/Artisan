"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-secondary/20"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                                A
                            </div>
                            <span className="font-serif font-bold text-2xl text-foreground tracking-tight">
                                Artisan<span className="text-primary">.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/templates"
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            Templates
                        </Link>
                        <Link
                            href="#"
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            Examples
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-foreground/80 hover:text-primary transition-colors font-medium"
                        >
                            Pricing
                        </Link>
                        <div className="flex items-center ml-4">
                            <Link
                                href="/login"
                                className="bg-primary text-white px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-primary/20 hover:bg-primary-hover hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary transition-colors p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-secondary/20 animate-fade-in absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                        <Link
                            href="/templates"
                            className="block px-3 py-3 text-base font-medium text-foreground hover:bg-secondary/10 rounded-lg"
                        >
                            Templates
                        </Link>
                        <Link
                            href="#"
                            className="block px-3 py-3 text-base font-medium text-foreground hover:bg-secondary/10 rounded-lg"
                        >
                            Examples
                        </Link>
                        <Link
                            href="/pricing"
                            className="block px-3 py-3 text-base font-medium text-foreground hover:bg-secondary/10 rounded-lg"
                        >
                            Pricing
                        </Link>
                        <div className="pt-4 flex flex-col gap-3">
                            <Link
                                href="/login"
                                className="w-full text-center px-4 py-3 bg-primary text-white rounded-xl font-medium shadow-md hover:bg-primary-hover transition-colors"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
