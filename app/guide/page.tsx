"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, X, ArrowRight, ArrowLeft } from "lucide-react";

// Insights Data
const guideData = [
    {
        id: "header",
        title: "The Professional Header",
        goldenRule: "Make it effortless for recruiters to contact you.",
        dos: [
            "Use a clean, professional email address.",
            "Include a link to your up-to-date LinkedIn profile.",
            "Add your portfolio website if applicable.",
        ],
        donts: [
            "Include your full physical address (City, State is enough).",
            "Add personal details like marital status or age.",
            "Use unprofessional email providers.",
        ]
    },
    {
        id: "summary",
        title: "The Impact Summary",
        goldenRule: "Your elevator pitch in 3-4 sentences.",
        dos: [
            "Highlight your most impressive achievements immediately.",
            "Tailor the summary to the specific role you want.",
            "Quantify years of experience and key skills.",
        ],
        donts: [
            "Use generic buzzwords like 'hard-working' or 'team player'.",
            "Write an objective statement instead of a summary.",
            "Make it longer than a short paragraph.",
        ]
    },
    {
        id: "experience",
        title: "Writing Your Experience",
        goldenRule: "Focus on impact and results, not just daily responsibilities.",
        dos: [
            "Start bullet points with strong action verbs (e.g., Spearheaded, Optimized).",
            "Quantify achievements with numbers, percentages, or dollar amounts.",
            "Use the XYZ formula: Accomplished [X] as measured by [Y], by doing [Z].",
        ],
        donts: [
            "List every single task you performed.",
            "Use passive language (e.g., 'Responsible for...').",
            "Leave wide unexplained gaps in employment without context.",
        ]
    },
    {
        id: "education",
        title: "Education & Skills",
        goldenRule: "Keep it relevant and easy to scan for keywords.",
        dos: [
            "List skills relevant to the job description.",
            "Include certifications that add value to your profile.",
            "Mention academic honors if you are a recent graduate.",
        ],
        donts: [
            "List your high school if you have a college degree.",
            "Include outdated or irrelevant skills (e.g., Microsoft Word).",
            "Over-design the skills section with complex progress bars.",
        ]
    }
];

export default function ResumeGuidePage() {
    const [activeSection, setActiveSection] = useState<string>("experience");

    const activeData = guideData.find(d => d.id === activeSection) || guideData[2];

    return (
        <div className="min-h-screen bg-[#F7F5F0] font-sans text-[#2C2C2C] selection:bg-[#D06A4C]/20 relative">
            {/* Back Button */}
            <div className="absolute top-8 left-6 md:left-12 z-10">
                <Link href="/" className="flex items-center gap-2 text-stone-500 hover:text-[#D06A4C] transition-colors font-medium">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>

            {/* 1. The Hero Section */}
            <section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                >
                    The Anatomy of a <span className="text-[#D06A4C] italic">Standout Resume</span>.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-stone-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                >
                    Click on any section of the blueprint below to uncover the secrets of writing a resume that gets past the algorithms and impresses human recruiters.
                </motion.p>
            </section>

            {/* 2. The Interactive Explorer */}
            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: The Blueprint */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7 bg-white shadow-xl shadow-black/5 rounded-[2rem] p-8 md:p-12 border border-stone-100 flex items-center justify-center relative overflow-hidden"
                    >
                        {/* Decorative background grid */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2C2C2C 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                        {/* Dummy Resume Blueprint Container */}
                        <div className="relative w-full max-w-[500px] aspect-[1/1.414] bg-white border border-stone-200 shadow-sm flex flex-col p-6 font-serif">

                            {/* Header Zone */}
                            <div
                                onClick={() => setActiveSection("header")}
                                className={`mb-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 text-center 
                                    ${activeSection === "header" ? "border-solid border-[#D06A4C] bg-orange-50/40" : "border-dashed border-[#8B9D83]/40 hover:border-[#8B9D83] hover:bg-stone-50"}
                                `}
                            >
                                <div className="h-6 w-48 bg-stone-300 rounded mb-2 mx-auto" />
                                <div className="h-3 w-64 bg-stone-200 rounded mx-auto" />
                            </div>

                            {/* Summary Zone */}
                            <div
                                onClick={() => setActiveSection("summary")}
                                className={`mb-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 
                                    ${activeSection === "summary" ? "border-solid border-[#D06A4C] bg-orange-50/40" : "border-dashed border-[#8B9D83]/40 hover:border-[#8B9D83] hover:bg-stone-50"}
                                `}
                            >
                                <div className="h-4 w-24 bg-stone-300 rounded mb-3" />
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-stone-200 rounded" />
                                    <div className="h-2 w-full bg-stone-200 rounded" />
                                    <div className="h-2 w-3/4 bg-stone-200 rounded" />
                                </div>
                            </div>

                            {/* Experience Zone */}
                            <div
                                onClick={() => setActiveSection("experience")}
                                className={`flex-1 mb-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 
                                    ${activeSection === "experience" ? "border-solid border-[#D06A4C] bg-orange-50/40" : "border-dashed border-[#8B9D83]/40 hover:border-[#8B9D83] hover:bg-stone-50"}
                                `}
                            >
                                <div className="h-4 w-32 bg-stone-300 rounded mb-4" />

                                <div className="mb-4">
                                    <div className="flex justify-between mb-2">
                                        <div className="h-3 w-40 bg-stone-300 rounded" />
                                        <div className="h-3 w-20 bg-stone-200 rounded" />
                                    </div>
                                    <div className="space-y-2 pl-4">
                                        <div className="h-2 w-full bg-stone-200 rounded" />
                                        <div className="h-2 w-11/12 bg-stone-200 rounded" />
                                        <div className="h-2 w-4/5 bg-stone-200 rounded" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <div className="h-3 w-36 bg-stone-300 rounded" />
                                        <div className="h-3 w-20 bg-stone-200 rounded" />
                                    </div>
                                    <div className="space-y-2 pl-4">
                                        <div className="h-2 w-full bg-stone-200 rounded" />
                                        <div className="h-2 w-10/12 bg-stone-200 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* Education & Skills Zone */}
                            <div
                                onClick={() => setActiveSection("education")}
                                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 
                                    ${activeSection === "education" ? "border-solid border-[#D06A4C] bg-orange-50/40" : "border-dashed border-[#8B9D83]/40 hover:border-[#8B9D83] hover:bg-stone-50"}
                                `}
                            >
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <div className="h-4 w-24 bg-stone-300 rounded mb-3" />
                                        <div className="h-3 w-full bg-stone-200 rounded mb-2" />
                                        <div className="h-2 w-2/3 bg-stone-200 rounded" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-4 w-16 bg-stone-300 rounded mb-3" />
                                        <div className="flex flex-wrap gap-1">
                                            <div className="h-4 w-16 bg-stone-200 rounded-full" />
                                            <div className="h-4 w-20 bg-stone-200 rounded-full" />
                                            <div className="h-4 w-14 bg-stone-200 rounded-full" />
                                            <div className="h-4 w-24 bg-stone-200 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Right Column: The Insights Panel */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-24">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeData.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5 border border-stone-100"
                                >
                                    <h2 className="font-serif text-3xl font-bold text-[#2C2C2C] mb-6">
                                        {activeData.title}
                                    </h2>

                                    {/* The Golden Rule */}
                                    <div className="pl-5 py-2 border-l-4 border-[#D06A4C] bg-orange-50/50 rounded-r-xl mb-8">
                                        <p className="font-semibold text-[#D06A4C] text-sm uppercase tracking-wider mb-1">The Golden Rule</p>
                                        <p className="text-stone-700 italic">{activeData.goldenRule}</p>
                                    </div>

                                    <div className="space-y-8">
                                        {/* Do's */}
                                        <div>
                                            <h3 className="flex items-center gap-2 font-bold text-[#8B9D83] mb-4 text-lg">
                                                <Check className="p-1 bg-[#8B9D83]/20 rounded-full" size={24} />
                                                Do This
                                            </h3>
                                            <ul className="space-y-3">
                                                {activeData.dos.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-stone-600 leading-relaxed">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B9D83] shrink-0 mt-2" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Dont's */}
                                        <div>
                                            <h3 className="flex items-center gap-2 font-bold text-[#D06A4C] mb-4 text-lg">
                                                <X className="p-1 bg-[#D06A4C]/20 rounded-full" size={24} />
                                                Avoid This
                                            </h3>
                                            <ul className="space-y-3">
                                                {activeData.donts.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-stone-600 leading-relaxed">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#D06A4C] shrink-0 mt-2" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. The Bottom Action Bar */}
            <section className="bg-[#EDF1EE] py-20 px-6 border-t border-stone-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-[#2C2C2C]">
                        Ready to put this into practice?
                    </h2>
                    <Link
                        href="/resume-builder"
                        className="inline-flex items-center gap-3 bg-[#D06A4C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b5583b] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#D06A4C]/30 active:scale-95"
                    >
                        Start Building Your Resume <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
