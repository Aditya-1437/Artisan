"use client";

import { motion } from "framer-motion";
import { useBuilderStore } from "@/lib/store/useBuilderStore";
import { User, Mail, Phone, MapPin, Link as LinkIcon, Globe, X } from "lucide-react";

export default function ProfilePalette() {
    const { personalInfo } = useBuilderStore(state => state.resumeData);
    const updatePersonalInfo = useBuilderStore(state => state.updatePersonalInfo);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="w-full bg-white/70 backdrop-blur-3xl rounded-[2rem] p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] border border-white/60 pointer-events-auto"
        >
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D06A4C] flex items-center justify-center text-white shadow-md shadow-[#D06A4C]/30">
                        <User size={20} />
                    </div>
                    <h2 className="text-xl font-serif font-bold text-[#2C2C2C]">Profile & Details</h2>
                </div>
                <button
                    onClick={() => useBuilderStore.getState().setActivePalette(null)}
                    className="p-2 text-stone-400 hover:text-stone-800 transition-colors rounded-full hover:bg-stone-100"
                >
                    <X size={20} />
                </button>
            </div>

            <div className="space-y-5">
                {/* Full Name Input */}
                <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#D06A4C] transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={personalInfo.fullName}
                        onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
                        className="w-full bg-white/50 border border-white/50 rounded-2xl py-3.5 pl-12 pr-4 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D06A4C]/30 focus:bg-white transition-all shadow-sm"
                    />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#D06A4C] transition-colors" size={18} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={personalInfo.email}
                            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
                            className="w-full bg-white/50 border border-white/50 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D06A4C]/30 focus:bg-white transition-all shadow-sm"
                        />
                    </div>
                    <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#D06A4C] transition-colors" size={18} />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={personalInfo.phone}
                            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
                            className="w-full bg-white/50 border border-white/50 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D06A4C]/30 focus:bg-white transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#D06A4C] transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Location"
                        value={personalInfo.location}
                        onChange={(e) => updatePersonalInfo({ location: e.target.value })}
                        className="w-full bg-white/50 border border-white/50 rounded-2xl py-3.5 pl-12 pr-4 text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D06A4C]/30 focus:bg-white transition-all shadow-sm"
                    />
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#D06A4C] transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="LinkedIn"
                            value={personalInfo.linkedin}
                            onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
                            className="w-full bg-white/50 border border-white/50 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D06A4C]/30 focus:bg-white transition-all shadow-sm"
                        />
                    </div>
                    <div className="relative group">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-[#D06A4C] transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Portfolio"
                            value={personalInfo.website}
                            onChange={(e) => updatePersonalInfo({ website: e.target.value })}
                            className="w-full bg-white/50 border border-white/50 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D06A4C]/30 focus:bg-white transition-all shadow-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-[#2C2C2C] text-white font-medium rounded-xl shadow-lg border border-white/10"
                >
                    Save Details
                </motion.button>
            </div>
        </motion.div>
    );
}
