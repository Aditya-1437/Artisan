"use client";

import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Wrench, Download, FileText, Award } from "lucide-react";
import { useBuilderStore } from "@/lib/store/useBuilderStore";

export default function FloatingToolbox() {
    const activePalette = useBuilderStore(state => state.activePalette);
    const setActivePalette = useBuilderStore(state => state.setActivePalette);

    const tools = [
        { id: "profile", label: "Profile", icon: <User size={22} /> },
        { id: "summary", label: "Summary", icon: <FileText size={22} /> },
        { id: "experience", label: "Experience", icon: <Briefcase size={22} /> },
        { id: "education", label: "Education", icon: <GraduationCap size={22} /> },
        { id: "achievements", label: "Achievements", icon: <Award size={22} /> },
        { id: "skills", label: "Skills", icon: <Wrench size={22} /> },
    ];

    return (
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
        >
            <div className="flex items-center gap-2 p-2.5 bg-white/70 backdrop-blur-3xl border border-white/80 rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)]">
                {tools.map((tool) => {
                    const isActive = activePalette === tool.id;

                    return (
                        <motion.button
                            key={tool.id}
                            onClick={() => setActivePalette(isActive ? null : tool.id)}
                            className={`
                                relative flex items-center justify-center w-14 h-14 rounded-full transition-colors duration-300
                                ${isActive
                                    ? "bg-[#D06A4C] text-white shadow-lg shadow-[#D06A4C]/30"
                                    : "bg-transparent text-stone-500 hover:text-stone-800 hover:bg-white/50"
                                }
                            `}
                            whileHover={{ scale: 1.15, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", bounce: 0.6 }}
                            title={tool.label}
                        >
                            {tool.icon}
                            {isActive && (
                                <motion.div
                                    layoutId="activeToolIndicator"
                                    className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-[#D06A4C]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </motion.button>
                    );
                })}

                <div className="w-[1px] h-8 bg-stone-300/50 mx-2" />

                <motion.button
                    onClick={() => useBuilderStore.getState().setDownloadModalOpen(true)}
                    className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-[#2C2C2C] text-white shadow-xl shadow-black/10 hover:bg-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Export PDF"
                >
                    <Download size={20} />
                </motion.button>
            </div>
        </motion.div>
    );
}
