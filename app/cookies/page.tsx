"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Components ---

const CookieRow = ({
    icon,
    title,
    description,
    isLocked,
    isActive,
    onToggle,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    isLocked?: boolean;
    isActive: boolean;
    onToggle?: () => void;
}) => (
    <div className="flex items-center justify-between py-6 border-b border-gray-100 last:border-0">
        <div className="flex items-start gap-4 pr-4">
            <div className="mt-1 text-[#8B9D83]">{icon}</div>
            <div>
                <h3 className="text-[#2C2C2C] font-semibold text-lg">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-1 max-w-sm">
                    {description}
                </p>
            </div>
        </div>

        {/* Toggle Control */}
        <div className="shrink-0">
            {isLocked ? (
                <div className="flex items-center gap-2 text-gray-400 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
                    <Shield size={12} />
                    <span>Always On</span>
                </div>
            ) : (
                <button
                    onClick={onToggle}
                    className={cn(
                        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#D06A4C] focus:ring-offset-2",
                        isActive ? "bg-[#D06A4C]" : "bg-gray-200"
                    )}
                >
                    <span
                        className={cn(
                            "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                            isActive ? "translate-x-6" : "translate-x-1"
                        )}
                    />
                </button>
            )}
        </div>
    </div>
);

export default function CookiePolicyPage() {
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        // In a real app, this would save to a cookie/localStorage/backend
        console.log("Saving preferences:", { analytics: analyticsEnabled });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="min-h-screen bg-[#F7F5F0] text-[#2C2C2C] font-sans selection:bg-[#D06A4C]/20 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2C2C2C]">
                            Cookie Policy.
                        </h1>
                        <p className="text-lg text-[#8B9D83] font-medium">
                            How we use small data to make your experience better.
                        </p>
                    </header>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                        <div className="p-8 md:p-10">
                            {/* Top Section: Explanation */}
                            <div className="mb-8 text-gray-700 leading-relaxed">
                                <p>
                                    We use cookies (small text files stored on your device) to run
                                    Artisan smoothly. Some are strictly necessary to keep you
                                    logged in, while others help us understand how you use the
                                    studio so we can improve it. You can manage your preferences
                                    below.
                                </p>
                            </div>

                            {/* Bottom Section: Interactive Preferences */}
                            <div className="mt-8">
                                <CookieRow
                                    icon={<Shield className="w-6 h-6" />}
                                    title="Strictly Necessary"
                                    description="Required for the app to function securely (like logging in and saving your resume)."
                                    isActive={true}
                                    isLocked={true}
                                />

                                <CookieRow
                                    icon={<LineChart className="w-6 h-6" />}
                                    title="Analytics & Performance"
                                    description="Helps us understand how you navigate the studio so we can build better tools."
                                    isActive={analyticsEnabled}
                                    onToggle={() => setAnalyticsEnabled(!analyticsEnabled)}
                                />
                            </div>
                        </div>

                        {/* Action Bar */}
                        <div className="bg-gray-50 px-8 py-6 border-t border-stone-100 flex items-center justify-between">
                            <span className="text-sm text-gray-500 italic">
                                {isSaved ? "Preferences saved!" : "Settings apply to this browser only."}
                            </span>
                            <button
                                onClick={handleSave}
                                className="bg-[#D06A4C] hover:bg-[#b85b40] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg active:scale-95"
                            >
                                {isSaved ? "Saved" : "Save Preferences"}
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
