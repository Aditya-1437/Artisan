"use client";

import { motion } from "framer-motion";
import { useBuilderStore } from "@/lib/store/useBuilderStore";
import { Briefcase, Plus, Trash2, X } from "lucide-react";

export default function ExperiencePalette() {
    const experience = useBuilderStore(state => state.resumeData.experience);
    const addExperience = useBuilderStore(state => state.addExperience);
    const updateExperience = useBuilderStore(state => state.updateExperience);
    const removeExperience = useBuilderStore(state => state.removeExperience);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="w-full bg-white/70 backdrop-blur-3xl rounded-[2rem] p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] border border-white/60 pointer-events-auto max-h-[85vh] flex flex-col"
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8B9D83] flex items-center justify-center text-white shadow-md shadow-[#8B9D83]/30">
                        <Briefcase size={20} />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-[#2C2C2C]">Experience</h2>
                </div>

                <div className="flex items-center gap-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={addExperience}
                        className="flex items-center gap-2 px-4 py-2 bg-stone-100 text-[#2C2C2C] text-sm font-semibold rounded-full hover:bg-white border border-stone-200 shadow-sm"
                    >
                        <Plus size={16} /> Add
                    </motion.button>
                    <button
                        onClick={() => useBuilderStore.getState().setActivePalette(null)}
                        className="p-2 text-stone-400 hover:text-stone-800 transition-colors rounded-full hover:bg-stone-100"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6">
                {experience.map((exp) => (
                    <motion.div
                        key={exp.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="p-5 bg-white/60 rounded-2xl border border-white shadow-sm relative group"
                    >
                        <button
                            onClick={() => removeExperience(exp.id)}
                            className="absolute top-4 right-4 text-stone-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={16} />
                        </button>

                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Role Title"
                                value={exp.role}
                                onChange={(e) => updateExperience(exp.id, { role: e.target.value })}
                                className="w-full bg-transparent text-lg font-bold text-stone-800 placeholder:text-stone-400 focus:outline-none placeholder:font-normal"
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    value={exp.company}
                                    onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                                    className="w-full bg-white/50 border border-white/50 rounded-xl py-2 px-4 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#8B9D83]/50"
                                />
                                <input
                                    type="text"
                                    placeholder="Date Range"
                                    value={exp.date}
                                    onChange={(e) => updateExperience(exp.id, { date: e.target.value })}
                                    className="w-full bg-white/50 border border-white/50 rounded-xl py-2 px-4 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#8B9D83]/50"
                                />
                            </div>
                            <textarea
                                placeholder="Describe your achievements and responsibilities..."
                                value={exp.description}
                                onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                                className="w-full h-24 bg-white/50 border border-white/50 rounded-xl py-3 px-4 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#8B9D83]/50 resize-none"
                            />
                        </div>
                    </motion.div>
                ))}

                {experience.length === 0 && (
                    <div className="text-center py-8 text-stone-400 text-sm">
                        No experience added yet. Click Add to begin.
                    </div>
                )}
            </div>
        </motion.div>
    );
}
