
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function StartJourney() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#1A1A1A] text-[#FDFBF7]">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#B85C38] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#B85C38] text-sm font-medium mb-8">
                        <Sparkles size={16} />
                        <span>Ready to make your mark?</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tight leading-tight">
                        Your Legacy <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFBF7] to-[#999]">Begins Here.</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Join thousands of professionals who have elevated their careers with Pinnacle Nexus.
                        Craft a resume that opens doors and tells your unique story.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/register"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#B85C38] text-white rounded-full text-lg font-bold tracking-wide transition-all duration-300 hover:bg-[#a04e2f] hover:scale-105 shadow-lg shadow-[#B85C38]/30"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/templates"
                            className="inline-flex items-center gap-2 px-8 py-4 text-[#FDFBF7] hover:text-[#B85C38] transition-colors font-medium"
                        >
                            Explore Templates first
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
