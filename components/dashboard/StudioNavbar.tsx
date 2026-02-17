
"use client";

import Link from "next/link";
import { Settings, Layout, FileText, Briefcase, LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StudioNavbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    const handleLogout = () => {
        // Here you would clear auth state/tokens
        router.push("/");
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-lg shadow-black/5 rounded-full px-6 py-3 flex items-center gap-8 relative">
                {/* Logo */}
                <Link href="/dashboard" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-[#D06A4C] flex items-center justify-center text-white font-serif font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                        A
                    </div>
                </Link>

                {/* Center Navigation */}
                <div className="hidden md:flex items-center gap-1 bg-[#F7F5F0] rounded-full p-1 border border-gray-200/50">
                    <Link
                        href="/dashboard"
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                            isActive("/dashboard")
                                ? "bg-white text-[#2C2C2C] shadow-sm"
                                : "text-gray-500 hover:text-[#2C2C2C] hover:bg-white/50"
                        )}
                    >
                        <Layout size={14} />
                        Studio
                    </Link>
                    <Link
                        href="/dashboard/templates"
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                            isActive("/dashboard/templates")
                                ? "bg-white text-[#2C2C2C] shadow-sm"
                                : "text-gray-500 hover:text-[#2C2C2C] hover:bg-white/50"
                        )}
                    >
                        <FileText size={14} />
                        Inspiration
                    </Link>
                    <Link
                        href="#"
                        className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-400 cursor-not-allowed flex items-center gap-2"
                        title="Coming Soon"
                    >
                        <Briefcase size={14} />
                        Job Tracker
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 pl-2 border-l border-gray-200 relative">
                    <div className="relative">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="w-8 h-8 rounded-full bg-[#2C2C2C] text-white flex items-center justify-center text-xs font-bold ring-2 ring-white hover:bg-[#D06A4C] transition-colors shadow-sm"
                        >
                            JD
                        </button>

                        <AnimatePresence>
                            {isProfileOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-full right-0 mt-4 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 z-50 origin-top-right"
                                >
                                    <div className="px-4 py-3 border-b border-gray-50">
                                        <p className="text-sm font-bold text-[#2C2C2C]">John Doe</p>
                                        <p className="text-xs text-gray-500 truncate">john@example.com</p>
                                    </div>
                                    <div className="p-1">
                                        <Link href="/dashboard/settings" className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                            <User size={14} />
                                            Profile Settings
                                        </Link>
                                        <Link href="/dashboard/settings" className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                            <Settings size={14} />
                                            Preferences
                                        </Link>
                                        <div className="h-px bg-gray-100 my-1"></div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left"
                                        >
                                            <LogOut size={14} />
                                            Log Out
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </nav>
    );
}
