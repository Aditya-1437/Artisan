"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import CentralCanvas from "../../components/builder/CentralCanvas";
import FloatingToolbox from "../../components/builder/FloatingToolbox";
import DownloadModal from "../../components/builder/DownloadModal";
import { useBuilderStore } from "../../lib/store/useBuilderStore";
// Import palettes when created
import ProfilePalette from "../../components/builder/palettes/ProfilePalette";
import SummaryPalette from "../../components/builder/palettes/SummaryPalette";
import ExperiencePalette from "../../components/builder/palettes/ExperiencePalette";
import EducationPalette from "../../components/builder/palettes/EducationPalette";
import AchievementsPalette from "../../components/builder/palettes/AchievementsPalette";
import SkillsPalette from "../../components/builder/palettes/SkillsPalette";
import CoverLetterPalette from "../../components/builder/palettes/CoverLetterPalette";

export default function ResumeBuilderStudio() {
    const activePalette = useBuilderStore(state => state.activePalette);

    const renderPalette = () => {
        switch (activePalette) {
            case "profile":
                return <ProfilePalette key="profile" />;
            case "summary":
                return <SummaryPalette key="summary" />;
            case "experience":
                return <ExperiencePalette key="experience" />;
            case "education":
                return <EducationPalette key="education" />;
            case "achievements":
                return <AchievementsPalette key="achievements" />;
            case "skills":
                return <SkillsPalette key="skills" />;
            case "cover-letter":
                return <CoverLetterPalette key="cover-letter" />;
            default:
                return null;
        }
    };

    return (
        <div className="relative w-full h-screen bg-[#F7F5F0] print:bg-white overflow-hidden print:overflow-visible font-sans text-[#2C2C2C]">
            {/* Ambient Background layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60 print:hidden">
                <motion.div
                    animate={{
                        x: [0, 50, 0, -50, 0],
                        y: [0, 30, -30, 0],
                        scale: [1, 1.1, 0.9, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-[#D06A4C]/15 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0, 40, 0],
                        y: [0, -40, 40, 0],
                        scale: [1, 0.9, 1.1, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] bg-[#8B9D83]/20 rounded-full blur-[140px]"
                />

                {/* Noise texture overlay for premium paper feel */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            </div>

            {/* Desktop Layout Frame */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 md:p-12 lg:p-20 print:p-0 print:static print:block">

                {/* Top header navigation (minimal) */}
                <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-40 pointer-events-none print:hidden">
                    <h1 className="font-serif text-2xl font-bold tracking-tight text-[#2C2C2C] opacity-80">Artisan Studio</h1>

                    <div className="flex items-center gap-3 pointer-events-auto">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white/50 hover:bg-white text-stone-600 hover:text-stone-900 border border-white/60 shadow-sm backdrop-blur-md rounded-xl text-sm font-semibold transition-all"
                        >
                            <ArrowLeft size={16} /> Dashboard
                        </Link>

                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#2C2C2C] hover:bg-black text-white shadow-md rounded-xl text-sm font-semibold transition-all"
                        >
                            <Save size={16} /> Save & Exit
                        </Link>
                    </div>
                </header>

                {/* Central Canvas Container */}
                <div className="relative w-full h-full flex justify-center items-start overflow-y-auto pt-32 pb-48 px-4 sm:px-8 pointer-events-auto custom-scrollbar print:p-0 print:overflow-visible print:block print:w-full">
                    {/* The majestic 3D box shadow providing the 'desk' illusion */}
                    <motion.div
                        layout
                        className="relative z-10 w-full max-w-[210mm] min-h-[297mm] h-max bg-white pointer-events-auto shrink-0 mb-20 print:mb-0 print:shadow-none print:max-w-none print:w-[210mm] print:h-[297mm]"
                        style={{
                            boxShadow: "0 40px 100px -20px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)"
                        }}
                    >
                        <CentralCanvas />
                    </motion.div>
                </div>
            </div>

            {/* The Floating UI Layers */}
            <div className="absolute inset-0 z-40 pointer-events-none print:hidden">
                {/* Floating Form Palettes */}
                <AnimatePresence mode="wait">
                    {activePalette && (
                        <div className="absolute left-8 lg:left-16 xl:left-32 top-1/2 -translate-y-1/2 w-[400px] max-h-[85vh] pointer-events-auto">
                            {renderPalette()}
                        </div>
                    )}
                </AnimatePresence>

                {/* Floating Toolbox Dock */}
                <FloatingToolbox />
            </div>

            {/* Download Modal - Print Hidden by default via its own state, but ensuring it never prints */}
            <div className="print:hidden">
                <DownloadModal />
            </div>
        </div>
    );
}
