"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Wrench, Bug, ArrowRight, Hammer, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Types
type UpdateType = "feature" | "improvement" | "fix";

interface UpdateItem {
    id: string;
    date: string;
    type: UpdateType;
    title: string;
    description: string;
    image?: string;
    isMajor?: boolean;
}

interface UpcomingItem {
    id: string;
    title: string;
    status: "in-development" | "planned";
    description: string;
}

// Data
const updates: UpdateItem[] = [
    {
        id: "1",
        date: "Feb 14, 2026",
        type: "feature",
        title: "Dark Mode Support",
        description: "Experience Resume Artisan in a whole new light. Toggle between day and night themes seamlessly.",
        isMajor: true,
    },
    {
        id: "2",
        date: "Feb 10, 2026",
        type: "improvement",
        title: "Enhanced PDF Export",
        description: "We've rewritten our rendering engine for pixel-perfect PDF exports, ensuring your resume looks exactly as designed.",
    },
    {
        id: "3",
        date: "Feb 05, 2026",
        type: "fix",
        title: "Mobile Layout Fixes",
        description: "Resolved an issue where the sidebar navigation was overlapping content on smaller screens.",
    },
    {
        id: "4",
        date: "Jan 28, 2026",
        type: "feature",
        title: "AI Writing Assistant",
        description: "Stuck on a bullet point? Our new AI assistant helps you craft impactful descriptions for your experience.",
        isMajor: true,
    },
];

const upcoming: UpcomingItem[] = [
    {
        id: "u1",
        title: "LinkedIn Import",
        status: "in-development",
        description: "One-click import to populate your resume instantly.",
    },
    {
        id: "u2",
        title: "Custom Fonts",
        status: "planned",
        description: "Upload your own font files for ultimate personalization.",
    },
];

export default function UpdatesPage() {
    const [filter, setFilter] = useState<"all" | UpdateType>("all");

    const filteredUpdates = updates.filter(item => filter === "all" || item.type === filter);

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
            <Navbar />
            <main className="flex-grow pt-32 pb-20 px-6 font-sans">
                <div className="max-w-4xl mx-auto">

                    {/* 1. Hero Section */}
                    <div className="mb-20 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-serif text-5xl md:text-6xl text-[#2C2C2C] mb-6 tracking-tight"
                        >
                            The Evolution of <br className="hidden md:block" />
                            <span className="italic text-[#D06A4C]">Artisan.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-stone-500 max-w-xl mx-auto mb-10 text-lg"
                        >
                            We are constantly crafting better tools for your career journey. Here is what’s new.
                        </motion.p>

                        {/* Filters */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            <FilterButton active={filter === "all"} onClick={() => setFilter("all")} label="All" />
                            <FilterButton active={filter === "feature"} onClick={() => setFilter("feature")} label="New Features" color="terracotta" />
                            <FilterButton active={filter === "improvement"} onClick={() => setFilter("improvement")} label="Improvements" color="sage" />
                            <FilterButton active={filter === "fix"} onClick={() => setFilter("fix")} label="Fixes" color="gray" />
                        </motion.div>
                    </div>

                    {/* 2. Released Timeline */}
                    <div className="relative mb-32">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#E7E5E4] -translate-x-1/2" />

                        <div className="space-y-16">
                            <AnimatePresence mode="popLayout">
                                {filteredUpdates.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start group"
                                    >
                                        {/* Timeline Node */}
                                        <div className={cn(
                                            "absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full border-2 bg-[#F7F5F0] -translate-x-1/2 z-10 transition-colors duration-300",
                                            item.isMajor ? "border-[#D06A4C] group-hover:bg-[#D06A4C]" : "border-stone-300 group-hover:border-[#D06A4C]"
                                        )} />

                                        {/* Date (Left Side on Desktop) */}
                                        <div className="md:text-right pl-12 md:pl-0 pt-0.5">
                                            <span className="font-mono text-sm text-stone-400 font-medium block">{item.date}</span>
                                            <div className="md:hidden mt-2">
                                                {/* Render Card content here for mobile if needed, but grid handles layouts nicely */}
                                            </div>
                                        </div>

                                        {/* Content Card (Right Side on Desktop, stacked on mobile) */}
                                        <div className="pl-12 md:pl-0 md:pr-12 md:col-start-2 -mt-2">
                                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                                                <div className="flex items-center justify-between mb-3">
                                                    <Badge type={item.type} />
                                                </div>
                                                <h3 className="font-bold text-xl text-[#2C2C2C] mb-2">{item.title}</h3>
                                                <p className="text-stone-600 leading-relaxed text-sm">{item.description}</p>
                                            </div>
                                        </div>

                                        {/* Connecting Line for Mobile legibility */}
                                        <div className="md:hidden absolute left-4 top-4 w-8 h-px bg-stone-200" />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* 3. On the Horizon Section */}
                    <div className="relative pt-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-stone-200 border-t border-dashed border-stone-300" />
                            <h2 className="text-stone-400 font-serif italic text-xl">On the Horizon</h2>
                            <div className="h-px flex-1 bg-stone-200 border-t border-dashed border-stone-300" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80 hover:opacity-100 transition-opacity">
                            {upcoming.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative bg-[#F0EFE9] border-2 border-dashed border-[#2C2C2C]/10 rounded-xl p-6 cursor-help"
                                >
                                    <div className="absolute top-4 right-4">
                                        <StatusPill status={item.status} />
                                    </div>
                                    <h3 className="font-bold text-[#2C2C2C] mb-2 flex items-center gap-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-stone-500 text-sm">{item.description}</p>

                                    {/* Tooltip */}
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#2C2C2C] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        We're hammering away at this! <Hammer size={12} className="inline ml-1" />
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2C2C2C]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

// --- Components ---

function FilterButton({ active, onClick, label, color = "default" }: { active: boolean, onClick: () => void, label: string, color?: "terracotta" | "sage" | "gray" | "default" }) {
    const activeColors = {
        terracotta: "bg-[#D06A4C] text-white border-[#D06A4C]",
        sage: "bg-[#8B9D83] text-white border-[#8B9D83]",
        gray: "bg-stone-500 text-white border-stone-500",
        default: "bg-[#2C2C2C] text-white border-[#2C2C2C]",
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                active ? activeColors[color] : "bg-transparent border-stone-300 text-stone-500 hover:border-stone-400 hover:text-[#2C2C2C]"
            )}
        >
            {label}
        </button>
    );
}

function Badge({ type }: { type: UpdateType }) {
    const styles = {
        feature: { label: "New Feature", icon: Sparkles, color: "text-[#D06A4C] bg-[#D06A4C]/10" },
        improvement: { label: "Improvement", icon: Wrench, color: "text-[#8B9D83] bg-[#8B9D83]/10" },
        fix: { label: "Fix", icon: Bug, color: "text-stone-500 bg-stone-100" },
    };

    const style = styles[type];
    const Icon = style.icon;

    return (
        <span className={cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold", style.color)}>
            <Icon size={12} />
            {style.label}
        </span>
    );
}

function StatusPill({ status }: { status: "in-development" | "planned" }) {
    const styles = {
        "in-development": "bg-yellow-100 text-yellow-700",
        "planned": "bg-stone-200 text-stone-500",
    };

    return (
        <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", styles[status])}>
            {status === "in-development" ? "In Dev" : "Planned"}
        </span>
    );
}
