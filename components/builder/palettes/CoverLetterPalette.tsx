"use client";
import { motion } from "framer-motion";

export default function CoverLetterPalette() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            className="w-full bg-white/70 backdrop-blur-3xl rounded-[2rem] p-8 shadow-xl border border-white/60"
        >
            <h2 className="text-xl font-serif font-bold text-[#2C2C2C]">Cover Letter</h2>
            <p className="mt-4 text-stone-500">Cover letter editor coming soon.</p>
        </motion.div>
    );
}
