
"use client";

import { useState } from "react";
import StudioNavbar from "@/components/dashboard/StudioNavbar";
import { Plus, FileText, Copy, Edit2, MoreVertical, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Mock Data for Returning User State (Uncomment to test)
// const mockProjects = [
//     { id: 1, title: "Software Engineer V1", lastEdited: "2 days ago", thumbnail: "bg-gray-100" },
//     { id: 2, title: "Creative Director", lastEdited: "5 days ago", thumbnail: "bg-[#F5F2EA]" },
//     { id: 3, title: "Product Manager", lastEdited: "1 week ago", thumbnail: "bg-blue-50/50" },
// ];

const mockProjects: any[] = []; // Default to Empty State

export default function DashboardPage() {
    const [projects, setProjects] = useState(mockProjects);

    return (
        <div className="min-h-screen bg-[#F7F5F0] text-[#2C2C2C] font-sans">
            <StudioNavbar />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Welcome back, John.</h1>
                    <p className="text-gray-500">Ready to craft your next opportunity?</p>
                </motion.div>

                {/* Content Area */}
                {projects.length === 0 ? (
                    // State A: New User (Creation Card)
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl border border-[#E5E5E5] shadow-sm overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[500px]"
                    >
                        {/* Left: Action */}
                        <div className="flex-1 p-12 flex flex-col justify-center items-start">
                            <div className="w-12 h-12 bg-[#D06A4C]/10 rounded-xl flex items-center justify-center text-[#D06A4C] mb-6">
                                <Plus size={24} strokeWidth={3} />
                            </div>
                            <h2 className="font-serif text-3xl font-bold mb-4 text-[#2C2C2C]">Create your first resume.</h2>
                            <p className="text-gray-500 mb-10 leading-relaxed max-w-md">
                                Your career story deserves a masterpiece. Start from a blank canvas or choose from our curated collection of artisan templates.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link href="/resume-builder" className="flex items-center justify-center gap-2 bg-[#D06A4C] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-[#D06A4C]/20 hover:bg-[#b55a3f] transition-all hover:scale-105">
                                    <FileText size={18} />
                                    Start from Scratch
                                </Link>
                                <Link
                                    href="/dashboard/templates"
                                    className="flex items-center justify-center gap-2 bg-transparent text-[#2C2C2C] border-2 border-[#2C2C2C]/10 px-8 py-3.5 rounded-xl font-bold hover:bg-[#2C2C2C] hover:text-white transition-all hover:border-[#2C2C2C]"
                                >
                                    <LayoutTemplate size={18} />
                                    Choose a Template
                                </Link>
                            </div>
                        </div>

                        {/* Right: Illustration */}
                        <div className="flex-1 bg-[#F5F2EA] relative border-l border-[#E5E5E5] flex items-center justify-center overflow-hidden">
                            {/* Abstract decorative elements */}
                            <div className="absolute inset-0 opacity-50">
                                <div className="absolute top-10 right-10 w-64 h-64 bg-[#D06A4C] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                                <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#8B9D83] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                            </div>

                            {/* Card Graphic */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative z-10 w-64 aspect-[1/1.4] bg-white rounded shadow-xl border border-gray-200 p-6 flex flex-col gap-3 transform rotate-3"
                            >
                                <div className="w-1/2 h-3 bg-gray-100 rounded"></div>
                                <div className="w-3/4 h-2 bg-gray-50 rounded"></div>
                                <div className="w-full h-px bg-gray-100 my-2"></div>
                                <div className="space-y-2">
                                    <div className="w-full h-2 bg-gray-50 rounded"></div>
                                    <div className="w-5/6 h-2 bg-gray-50 rounded"></div>
                                    <div className="w-full h-2 bg-gray-50 rounded"></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    // State B: Returning User (Project Grid)
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* New Project Card */}
                        <button className="group h-[300px] border-2 border-dashed border-[#8B9D83]/40 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#D06A4C] hover:bg-[#D06A4C]/5 transition-all duration-300">
                            <div className="w-14 h-14 bg-[#8B9D83]/10 text-[#8B9D83] rounded-full flex items-center justify-center group-hover:bg-[#D06A4C] group-hover:text-white transition-colors duration-300">
                                <Plus size={24} />
                            </div>
                            <span className="font-bold text-[#8B9D83] group-hover:text-[#D06A4C] transition-colors">Create New Resume</span>
                        </button>

                        {/* Project Cards */}
                        {projects.map((project) => (
                            <div key={project.id} className="group relative bg-white h-[300px] rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                {/* Preview Area */}
                                <div className={`h-[200px] w-full ${project.thumbnail} border-b border-gray-50 flex items-center justify-center overflow-hidden`}>
                                    {/* Miniature representation */}
                                    <div className="w-[120px] h-[160px] bg-white shadow-sm border border-gray-100 p-2 text-[4px] text-gray-300 space-y-1 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                                        <div className="w-1/2 h-1 bg-gray-200 mb-1"></div>
                                        <div className="w-full h-0.5 bg-gray-100"></div>
                                        <div className="w-full h-0.5 bg-gray-100"></div>
                                        <div className="w-3/4 h-0.5 bg-gray-100"></div>
                                    </div>

                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 bg-[#2C2C2C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 backdrop-blur-[1px]">
                                        <button className="p-3 bg-white text-[#2C2C2C] rounded-full hover:bg-[#D06A4C] hover:text-white transition-colors shadow-lg" title="Edit">
                                            <Edit2 size={18} />
                                        </button>
                                        <button className="p-3 bg-white text-[#2C2C2C] rounded-full hover:bg-[#D06A4C] hover:text-white transition-colors shadow-lg" title="Duplicate">
                                            <Copy size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-5 flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-[#2C2C2C] leading-tight mb-1 group-hover:text-[#D06A4C] transition-colors">{project.title}</h3>
                                        <p className="text-xs text-gray-400">Edited {project.lastEdited}</p>
                                    </div>
                                    <button className="text-gray-300 hover:text-[#2C2C2C]">
                                        <MoreVertical size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
