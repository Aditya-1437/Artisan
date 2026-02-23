"use client";

import { motion } from "framer-motion";
import { useBuilderStore } from "@/lib/store/useBuilderStore";
import { Wrench, X } from "lucide-react";

export default function SkillsPalette() {
    const skills = useBuilderStore(state => state.resumeData.skills);
    const updateSkills = useBuilderStore(state => state.updateSkills);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="w-full bg-white/70 backdrop-blur-3xl rounded-[2rem] p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] border border-white/60 pointer-events-auto flex flex-col"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-white shadow-md shadow-stone-700/30">
                        <Wrench size={20} />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-[#2C2C2C]">Skills</h2>
                </div>
                <button
                    onClick={() => useBuilderStore.getState().setActivePalette(null)}
                    className="p-2 text-stone-400 hover:text-stone-800 transition-colors rounded-full hover:bg-stone-100"
                >
                    <X size={20} />
                </button>
            </div>

            <p className="text-sm text-stone-500 mb-4 font-medium">
                List your core skills, separated by commas. (e.g., React, Node.js, UI/UX Design)
            </p>

            <div className="relative group flex-1">
                <textarea
                    placeholder="React, Next.js, Framer Motion, TypeScript..."
                    value={skills}
                    onChange={(e) => updateSkills(e.target.value)}
                    className="w-full h-32 bg-white/50 border border-white/50 rounded-2xl py-4 px-5 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/30 focus:bg-white transition-all shadow-sm resize-none"
                />
            </div>
        </motion.div>
    );
}
