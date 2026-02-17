"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network delay for the "stamp" effect
        await new Promise((resolve) => setTimeout(resolve, 1500));
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen bg-[#e3e0d8] flex items-center justify-center p-4 overflow-hidden relative font-sans">
            {/* Wood grain / Desk texture simulation */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' opacity='0.5'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`
                }}
            />

            {/* Background elements - Desk Objects */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#d4d1c9] rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#ccc9bf] rounded-full blur-3xl opacity-50" />

            {/* Scattered paper effects */}
            <motion.div
                initial={{ rotate: 10, x: -100, opacity: 0 }}
                animate={{ rotate: 5, x: 0, opacity: 0.8 }}
                transition={{ delay: 0.2 }}
                className="absolute top-20 right-20 w-40 h-52 bg-white shadow-md rotate-6 hidden md:block z-0"
            >
                <div className="p-4 font-hand text-[10px] text-gray-400 break-words">
                    Notes: Needs review by HR. Urgent processing required for this candidate.
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0, rotate: -2 }}
                animate={{ y: 0, opacity: 1, rotate: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="bg-[#fcfbf9] w-full max-w-md md:max-w-lg p-8 md:p-12 shadow-[10px_10px_30px_rgba(0,0,0,0.15)] relative border border-[#e5e5e5] z-10"
                style={{
                    backgroundImage:
                        "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "center center",
                }}
            >
                {/* Visual Elements: Paper Clip, Coffee Stain */}
                <div className="absolute -top-4 -left-4 w-12 h-24 z-20 pointer-events-none">
                    <svg viewBox="0 0 50 100" fill="none" stroke="#555" strokeWidth="2" className="drop-shadow-sm">
                        <path d="M15 10 L15 60 A 10 10 0 0 0 35 60 L 35 5" />
                        <path d="M35 5 A 10 10 0 0 0 15 5" />
                        <path d="M15 10 L 15 5" />
                        {/* More complex clip shape approximation */}
                        <path d="M35 5 L35 70 A 12 12 0 0 1 11 70 L 11 20" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10 pointer-events-none rotate-45 z-0">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <filter id="noiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <circle cx="100" cy="100" r="80" stroke="#795548" strokeWidth="15" fill="none" style={{ filter: "url(#noiseFilter)" }} />
                        <circle cx="100" cy="100" r="80" stroke="#5D4037" strokeWidth="2" fill="none" opacity="0.5" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-2 font-mono text-[10px] text-gray-400 uppercase tracking-widest opacity-60">
                        <Link href="/" className="hover:text-gray-600 transition-colors">ROOT</Link>
                        <span>/</span>
                        <span className="text-gray-600 font-bold">LOGIN</span>
                    </div>

                    <header className="mb-10 text-center border-b-2 border-dashed border-gray-300 pb-6 relative">
                        <div className="absolute top-0 right-0 transform rotate-12 border-2 border-red-800 text-red-800 px-2 py-1 text-[10px] font-bold uppercase opacity-30 tracking-widest">
                            Official Copy
                        </div>
                        <h1 className="font-mono text-3xl md:text-5xl font-bold text-gray-800 tracking-tighter uppercase mb-2">
                            Login
                        </h1>
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-[0.2em]">
                            Pinnacle Nexus &bull; Employment Portal
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="group relative">
                            <label
                                htmlFor="username"
                                className="block font-mono text-xs font-bold text-gray-600 uppercase tracking-wider mb-2"
                            >
                                01. Candidate Identification
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="username"
                                    required
                                    value={formData.username}
                                    onChange={(e) =>
                                        setFormData({ ...formData, username: e.target.value })
                                    }
                                    className="w-full bg-transparent border-none py-2 px-1 text-2xl font-hand text-gray-900 focus:outline-none placeholder-gray-300 relative z-10"
                                    placeholder="John Doe"
                                />
                                {/* SVG Handwriting Line */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px]">
                                    <svg className="w-full h-3 overflow-visible" preserveAspectRatio="none">
                                        <path d="M0,1 L100,1.5 Q150,0.5 200,1.2 T400,1"
                                            fill="none"
                                            stroke="#ccc"
                                            strokeWidth="1.5"
                                            vectorEffect="non-scaling-stroke"
                                            strokeDasharray="4 2"
                                        />
                                        <motion.path
                                            d="M0,1.2 L100,1.7 Q150,0.7 200,1.4 T400,1.2"
                                            fill="none"
                                            stroke="#1a1a1a"
                                            strokeWidth="2"
                                            vectorEffect="non-scaling-stroke"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: formData.username ? 1 : 0 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <label
                                htmlFor="password"
                                className="block font-mono text-xs font-bold text-gray-600 uppercase tracking-wider mb-2"
                            >
                                02. Secure Access PIN
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    required
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                    className="w-full bg-transparent border-none py-2 px-1 text-2xl font-hand text-gray-900 focus:outline-none placeholder-gray-300 relative z-10"
                                    placeholder="••••••••"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[2px]">
                                    <svg className="w-full h-3 overflow-visible" preserveAspectRatio="none">
                                        <path d="M0,1 L100,1.5 Q150,0.5 200,1.2 T400,1"
                                            fill="none"
                                            stroke="#ccc"
                                            strokeWidth="1.5"
                                            vectorEffect="non-scaling-stroke"
                                            strokeDasharray="4 2"
                                        />
                                        <motion.path
                                            d="M0,1.2 L100,1.7 Q150,0.7 200,1.4 T400,1.2"
                                            fill="none"
                                            stroke="#1a1a1a"
                                            strokeWidth="2"
                                            vectorEffect="non-scaling-stroke"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: formData.password ? 1 : 0 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex justify-between items-end">
                            <div className="flex flex-col gap-1">
                                <span className="font-hand text-sm text-gray-400 rotate-[-2deg]">Don't have a file?</span>
                                <Link
                                    href="/register"
                                    className="font-mono text-xs text-blue-800 hover:text-blue-900 hover:underline decoration-wavy transition-colors"
                                >
                                    Start Application
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative overflow-hidden group px-8 py-3 bg-gray-900 text-white font-mono uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                            >
                                <span className="relative z-10">
                                    {isSubmitting ? "Reviewing..." : "Process Login"}
                                </span>
                                {isSubmitting && (
                                    <motion.div
                                        initial={{ scale: 3, opacity: 0, rotate: -20 }}
                                        animate={{ scale: 1, opacity: 1, rotate: -12 }}
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                                    >
                                        <div className="border-[5px] border-red-700 text-red-700 font-bold text-2xl px-4 py-2 opacity-90 uppercase bg-[#fcfbf9] tracking-widest mix-blend-multiply">
                                            APPROVED
                                        </div>
                                    </motion.div>
                                )}
                            </button>
                        </div>
                    </form>

                    <footer className="mt-12 pt-4 border-t border-gray-200 flex justify-between items-end opacity-60">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-gray-400 uppercase tracking-wider">Doc. Ref.</span>
                            <span className="text-[10px] font-mono text-gray-600">LR-8842-BV</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-[8px] font-mono text-gray-400 uppercase tracking-wider text-right">
                                HR Dept.<br />Signature
                            </div>
                            <div className="h-10 w-24 border-b border-gray-300 flex items-end justify-center pb-1">
                                <span className="font-hand text-gray-400 text-lg opacity-40">~Admin</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </motion.div>
        </div>
    );
}
