"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [animationState, setAnimationState] = useState<"IDLE" | "FLYING" | "PROCESSING" | "SUCCESS" | "LANDING">("IDLE");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAnimationState("FLYING");

        // Phase 1: Flying to server (1.5s)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setAnimationState("PROCESSING");

        // Phase 2: Server processing (1.5s)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setAnimationState("SUCCESS");

        // Phase 3: Success signal (1s)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setAnimationState("LANDING");

        // Phase 4: Landing transition (0.8s) - match animation duration
        await new Promise((resolve) => setTimeout(resolve, 800));
        router.push("/login");
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

            {/* Animation Overlay */}
            {animationState !== "IDLE" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-50 bg-[#e3e0d8]/90 backdrop-blur-sm flex flex-col items-center justify-center"
                >
                    <div className="relative w-full max-w-2xl h-64 flex items-center justify-between px-10">
                        {/* Server Icon */}
                        <motion.div
                            className="absolute right-10 md:right-32 text-gray-800 flex flex-col items-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                <line x1="6" y1="18" x2="6.01" y2="18"></line>
                            </svg>
                            <motion.div
                                className="mt-2 font-mono text-xs font-bold uppercase tracking-widest"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            >
                                HQ Server
                            </motion.div>

                            {/* Processing Signals */}
                            {animationState === "PROCESSING" && (
                                <motion.div
                                    className="absolute -top-4 -right-4"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1.2 }}
                                >
                                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
                                </motion.div>
                            )}

                            {/* Success Signal */}
                            {(animationState === "SUCCESS" || animationState === "LANDING") && (
                                <motion.div
                                    className="absolute -top-6 -right-6"
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                >
                                    <div className="bg-green-600 text-white rounded-full p-2 shadow-lg border-2 border-white">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Paper Plane */}
                        <motion.div
                            className="absolute"
                            initial={{ left: "10%", top: "50%", scale: 1, rotate: 0 }}
                            animate={
                                animationState === "FLYING" ? { left: "70%", top: "50%", rotate: 10, scale: 0.8 } :
                                    animationState === "PROCESSING" ? { left: "75%", top: "50%", rotate: 0, scale: 0.8 } :
                                        animationState === "SUCCESS" ? { left: "75%", top: "50%", rotate: 0, scale: 0.8 } :
                                            animationState === "LANDING" ? { left: "150%", top: "20%", rotate: -10, scale: 1.5, opacity: 0 } : {}
                            }
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 drop-shadow-xl" style={{ filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.2))" }}>
                                <path d="M2 12L22 2L15 22L11 13L2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#fcfbf9" />
                            </svg>
                            {/* Trail effect */}
                            <motion.div
                                className="absolute top-1/2 right-full w-24 h-1 bg-gradient-to-r from-transparent to-gray-400/50"
                                style={{ transformOrigin: "right center" }}
                                animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                            />
                        </motion.div>

                        {/* Status Text */}
                        <motion.div
                            className="absolute bottom-10 w-full text-center font-mono text-sm tracking-widest text-gray-600 uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {animationState === "FLYING" && "Dispatching Application..."}
                            {animationState === "PROCESSING" && "Verifying Credentials..."}
                            {animationState === "SUCCESS" && "Registration Confirmed."}
                            {animationState === "LANDING" && "Redirecting to Portal..."}
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* Background decoration */}
            <div className="absolute top-20 left-20 w-40 h-40 bg-[#c5c2b9] rounded-full blur-3xl opacity-40 transform -translate-y-1/2" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#dfdbd1] rounded-full blur-3xl opacity-60" />

            <motion.div
                initial={{ y: 50, opacity: 0, rotate: 1 }}
                animate={animationState === "IDLE" ? { y: 0, opacity: 1, rotate: -1 } : { y: 100, opacity: 0, rotate: 5 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="bg-[#fcfbf9] w-full max-w-md p-8 md:p-12 shadow-[10px_10px_30px_rgba(0,0,0,0.15)] relative border border-[#e5e5e5] z-10"
                style={{
                    backgroundImage:
                        "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "center center",
                }}
            >
                {/* ... existing card visuals ... */}
                <div className="absolute -top-3 -right-3 w-12 h-24 z-20 pointer-events-none transform rotate-180">
                    <svg viewBox="0 0 50 100" fill="none" stroke="#555" strokeWidth="2" className="drop-shadow-sm">
                        <path d="M15 10 L15 60 A 10 10 0 0 0 35 60 L 35 5" />
                        <path d="M35 5 A 10 10 0 0 0 15 5" />
                        <path d="M15 10 L 15 5" />
                        <path d="M35 5 L35 70 A 12 12 0 0 1 11 70 L 11 20" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-2 font-mono text-[10px] text-gray-400 uppercase tracking-widest opacity-60">
                        <Link href="/" className="hover:text-gray-600 transition-colors">ROOT</Link>
                        <span>/</span>
                        <span className="text-gray-600 font-bold">REGISTER</span>
                    </div>

                    <header className="mb-8 text-center border-b-2 border-dashed border-gray-300 pb-4">
                        <h1 className="font-mono text-2xl md:text-3xl font-bold text-gray-800 tracking-tighter uppercase">
                            New Applicant Registration
                        </h1>
                        <p className="font-mono text-xs text-gray-500 mt-2 uppercase tracking-widest">
                            Join the Elite Network &bull; Form REG-001
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group relative">
                            <label
                                htmlFor="name"
                                className="block font-mono text-xs font-bold text-gray-600 uppercase tracking-wider mb-1"
                            >
                                Full Legal Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full bg-transparent border-none py-2 px-1 text-xl font-hand text-gray-900 focus:outline-none placeholder-gray-300 relative z-10"
                                    placeholder="Jane Doe"
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
                                            animate={{ pathLength: formData.name ? 1 : 0 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <label
                                htmlFor="email"
                                className="block font-mono text-xs font-bold text-gray-600 uppercase tracking-wider mb-1"
                            >
                                Electronic Mail Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full bg-transparent border-none py-2 px-1 text-xl font-hand text-gray-900 focus:outline-none placeholder-gray-300 relative z-10"
                                    placeholder="jane@example.com"
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
                                            animate={{ pathLength: formData.email ? 1 : 0 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <label
                                htmlFor="password"
                                className="block font-mono text-xs font-bold text-gray-600 uppercase tracking-wider mb-1"
                            >
                                Desired Security Code
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
                                    className="w-full bg-transparent border-none py-2 px-1 text-xl font-hand text-gray-900 focus:outline-none placeholder-gray-300 relative z-10"
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
                                <span className="font-hand text-sm text-gray-400 rotate-[-2deg]">Already have a file?</span>
                                <Link
                                    href="/login"
                                    className="font-mono text-xs text-blue-800 hover:text-blue-900 hover:underline decoration-wavy transition-colors"
                                >
                                    Retrieve Record
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={animationState !== "IDLE"}
                                className="relative overflow-hidden group px-8 py-3 bg-gray-900 text-white font-mono uppercase tracking-[0.2em] text-xs hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                            >
                                <span className="relative z-10">
                                    {animationState !== "IDLE" ? "Filing..." : "Register"}
                                </span>
                            </button>
                        </div>

                        <div className="absolute -bottom-16 -right-16 opacity-10 pointer-events-none transform rotate-[-45deg] z-0">
                            <div className="text-9xl font-mono font-bold text-red-900">CONFIDENTIAL</div>
                        </div>

                    </form>

                    <footer className="mt-12 pt-4 border-t border-gray-200 flex justify-between items-end opacity-60">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-gray-400 uppercase tracking-wider">Form Ref.</span>
                            <span className="text-[10px] font-mono text-gray-600">REG-001-Y</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-[8px] font-mono text-gray-400 uppercase tracking-wider text-right">
                                Approved By<br />Systems
                            </div>
                            <div className="h-10 w-24 border-b border-gray-300 flex items-end justify-center pb-1">
                                <span className="font-hand text-gray-400 text-lg opacity-40">~System</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </motion.div>
        </div>
    );
}
