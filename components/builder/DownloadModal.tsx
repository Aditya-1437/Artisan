"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { useBuilderStore } from "@/lib/store/useBuilderStore";

export default function DownloadModal() {
    const isDownloadModalOpen = useBuilderStore(state => state.isDownloadModalOpen);
    const setDownloadModalOpen = useBuilderStore(state => state.setDownloadModalOpen);
    const fullName = useBuilderStore(state => state.resumeData.personalInfo.fullName);

    // Default filename derived from user's name
    const defaultFilename = fullName ? `${fullName.replace(/\s+/g, '_')}_Resume` : "My_Resume";
    const [filename, setFilename] = useState(defaultFilename);

    if (!isDownloadModalOpen) return null;

    const handleDownload = () => {
        if (!filename.trim()) return;

        // The browser's Print-to-PDF uses the document title as the default file name.
        // We temporarily change the document title, trigger print, and change it back!
        // This ensures the resulting PDF is perfectly ATS-readable text instead of an image block!
        const originalTitle = document.title;
        document.title = filename;

        // Use a small timeout to let the browser update the document title before opening the print dialog
        setTimeout(() => {
            window.print();

            // Clean up: Reset title and close modal after print dialog opens
            document.title = originalTitle;
            setDownloadModalOpen(false);
        }, 100);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setDownloadModalOpen(false)}
                    className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm pointer-events-auto"
                />

                {/* Modal Dialog */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 pointer-events-auto border border-stone-200"
                >
                    <button
                        onClick={() => setDownloadModalOpen(false)}
                        className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 transition-colors rounded-full hover:bg-stone-100"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="w-12 h-12 rounded-full bg-[#2C2C2C] flex items-center justify-center text-white shadow-lg mb-4">
                            <Download size={24} />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] mb-2">Export Resume</h2>
                        <p className="text-stone-500 text-sm">
                            Name your file and save it as a PDF. Using the browser&apos;s PDF save ensures your resume is perfectly ATS-friendly and text-selectable!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                value={filename}
                                onChange={(e) => setFilename(e.target.value)}
                                className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 px-5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#D06A4C]/50 focus:bg-white transition-all font-medium"
                                placeholder="E.g., John_Doe_Resume"
                            />
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-400 font-medium select-none pointer-events-none">
                                .pdf
                            </span>
                        </div>

                        <button
                            onClick={handleDownload}
                            className="w-full py-4 bg-[#D06A4C] hover:bg-[#b5583b] text-white rounded-2xl font-bold shadow-lg shadow-[#D06A4C]/30 transition-all active:scale-[0.98]"
                        >
                            Download PDF
                        </button>

                        <p className="text-xs text-center text-stone-400 pt-2">
                            Tip: Make sure &quot;Background graphics&quot; is disabled and &quot;Margins&quot; are set to None in your print settings for the best result.
                        </p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
