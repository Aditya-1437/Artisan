"use client";

import React, { useState } from "react";
import { User, Briefcase, Shield, Camera, X, Check, CheckCircle2, ArrowLeft, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Types
type Tab = "profile" | "preferences" | "security";

interface ExperienceLevel {
    id: string;
    label: string;
    years: string;
}

const experienceLevels: ExperienceLevel[] = [
    { id: "entry", label: "Entry Level", years: "0-2y" },
    { id: "mid", label: "Mid-Level", years: "3-5y" },
    { id: "senior", label: "Senior/Exec", years: "5y+" },
];

export default function SettingsPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<Tab>("profile");
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const [profile, setProfile] = useState({
        fullName: "John Doe",
        headline: "Senior Product Designer",
        email: "john@example.com",
        phone: "+1 (555) 000-0000",
    });

    const [preferences, setPreferences] = useState({
        experienceLevel: "mid",
        targetRoles: ["Product Designer", "UX Researcher"] as string[],
        workStyle: "remote", // remote, hybrid, onsite
    });

    const [newRole, setNewRole] = useState("");

    // Handler for adding roles
    const handleAddRole = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && newRole.trim()) {
            if (!preferences.targetRoles.includes(newRole.trim())) {
                setPreferences({
                    ...preferences,
                    targetRoles: [...preferences.targetRoles, newRole.trim()],
                });
            }
            setNewRole("");
        }
    };

    const removeRole = (role: string) => {
        setPreferences({
            ...preferences,
            targetRoles: preferences.targetRoles.filter((r) => r !== role),
        });
    };

    const handleSave = async () => {
        setIsSaving(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSaving(false);
        setShowSuccess(true);

        // Redirect after showing success message
        setTimeout(() => {
            router.push("/dashboard");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#F7F5F0] p-6 md:p-12 font-sans flex flex-col items-center justify-center relative">

            {/* Success Success Tile / Toast */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white border border-[#D06A4C]/20 shadow-xl shadow-[#D06A4C]/10 rounded-2xl px-8 py-4 flex items-center gap-4"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#D06A4C]/10 flex items-center justify-center text-[#D06A4C]">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#2C2C2C]">Changes Saved!</h4>
                            <p className="text-sm text-stone-500">Redirecting to dashboard...</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-3xl border border-stone-200 shadow-xl shadow-stone-200/50 overflow-hidden flex flex-col md:flex-row min-h-[600px] mt-12 md:mt-0"
            >

                {/* Sidebar */}
                <aside className="w-full md:w-64 border-r border-stone-100 bg-white/50 p-6 flex flex-col justify-between">
                    <div>
                        <div className="mb-8 pl-4">
                            <h2 className="font-serif text-2xl font-bold text-[#2C2C2C]">Settings</h2>
                            <p className="text-xs text-stone-500 mt-1">Manage your account</p>
                        </div>

                        <nav className="flex flex-col gap-1">
                            <SidebarItem
                                active={activeTab === "profile"}
                                onClick={() => setActiveTab("profile")}
                                icon={<User size={18} />}
                                label="General Profile"
                            />
                            <SidebarItem
                                active={activeTab === "preferences"}
                                onClick={() => setActiveTab("preferences")}
                                icon={<Briefcase size={18} />}
                                label="Career Preferences"
                            />
                            <SidebarItem
                                active={activeTab === "security"}
                                onClick={() => setActiveTab("security")}
                                icon={<Shield size={18} />}
                                label="Account Security"
                            />
                        </nav>
                    </div>

                    {/* Integrated Back Button */}
                    <div className="mt-8 pt-6 border-t border-stone-100">
                        <Link
                            href="/dashboard"
                            className="w-full flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-[#D06A4C] hover:bg-stone-50 rounded-lg transition-all duration-200 group"
                        >
                            <div className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-[#D06A4C] transition-colors">
                                <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
                            </div>
                            <span className="font-medium text-sm">Back to Dashboard</span>
                        </Link>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="flex-1 p-8 md:p-12 relative overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="h-full pb-20"
                        >
                            {activeTab === "profile" && (
                                <div className="space-y-8 max-w-2xl">
                                    {/* Header */}
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2C2C2C] flex items-center gap-2">
                                            General Profile
                                            <span className="text-xs font-normal text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">Public</span>
                                        </h3>
                                        <p className="text-stone-500 text-sm mt-1">Your digital identity card.</p>
                                    </div>

                                    {/* Avatar Section */}
                                    <div className="flex items-center gap-6">
                                        <div className="relative group cursor-pointer">
                                            <div className="w-24 h-24 rounded-full bg-[#8B9D83]/20 flex items-center justify-center text-[#D06A4C] font-serif text-3xl overflow-hidden border-2 border-transparent group-hover:border-[#D06A4C] transition-colors">
                                                JD
                                            </div>
                                            <div className="absolute inset-0 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                <Camera className="text-white drop-shadow-md" size={24} />
                                            </div>
                                        </div>
                                        <div>
                                            <button className="text-sm font-medium text-[#D06A4C] hover:text-[#A04C32] transition-colors">
                                                Upload New Picture
                                            </button>
                                            <p className="text-xs text-stone-400 mt-1">JPG, GIF or PNG. Max size 800K</p>
                                        </div>
                                    </div>

                                    {/* Form Fields */}
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="Full Name"
                                                value={profile.fullName}
                                                onChange={(v) => setProfile({ ...profile, fullName: v })}
                                            />
                                            <InputField
                                                label="Headline"
                                                value={profile.headline}
                                                onChange={(v) => setProfile({ ...profile, headline: v })}
                                                placeholder="e.g. Senior Product Designer"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                label="Email Address"
                                                value={profile.email}
                                                onChange={(v) => setProfile({ ...profile, email: v })}
                                                type="email"
                                            />
                                            <InputField
                                                label="Phone Number"
                                                value={profile.phone}
                                                onChange={(v) => setProfile({ ...profile, phone: v })}
                                                type="tel"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "preferences" && (
                                <div className="space-y-10 max-w-2xl">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#2C2C2C]">Career Preferences</h3>
                                        <p className="text-stone-500 text-sm mt-1">Customize your AI-generated suggestions.</p>
                                    </div>

                                    {/* Experience Level */}
                                    <div className="space-y-3">
                                        <label className="text-sm font-semibold text-[#2C2C2C]">Experience Level</label>
                                        <div className="grid grid-cols-3 gap-4">
                                            {experienceLevels.map((level) => (
                                                <div
                                                    key={level.id}
                                                    onClick={() => setPreferences({ ...preferences, experienceLevel: level.id })}
                                                    className={cn(
                                                        "relative cursor-pointer rounded-xl p-4 border transition-all duration-200 hover:shadow-md",
                                                        preferences.experienceLevel === level.id
                                                            ? "border-[#D06A4C] bg-[#D06A4C]/5 shadow-sm"
                                                            : "border-stone-200 bg-white hover:border-[#D06A4C]/30"
                                                    )}
                                                >
                                                    {preferences.experienceLevel === level.id && (
                                                        <div className="absolute top-2 right-2 text-[#D06A4C]">
                                                            <CheckCircle2 size={16} fill="currentColor" className="text-white" />
                                                        </div>
                                                    )}
                                                    <p className={cn(
                                                        "font-medium text-sm",
                                                        preferences.experienceLevel === level.id ? "text-[#D06A4C]" : "text-stone-600"
                                                    )}>
                                                        {level.label}
                                                    </p>
                                                    <p className="text-xs text-stone-400 mt-0.5">{level.years}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Target Roles */}
                                    <div className="space-y-3">
                                        <label className="text-sm font-semibold text-[#2C2C2C]">Target Roles</label>
                                        <div className="min-h-[50px] p-2 border-b border-stone-300 focus-within:border-[#D06A4C] transition-colors flex flex-wrap gap-2">
                                            {preferences.targetRoles.map((role) => (
                                                <span key={role} className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8B9D83]/20 text-[#2C2C2C] rounded-full text-sm">
                                                    {role}
                                                    <button onClick={() => removeRole(role)} className="hover:text-red-500">
                                                        <X size={14} />
                                                    </button>
                                                </span>
                                            ))}
                                            <input
                                                type="text"
                                                value={newRole}
                                                onChange={(e) => setNewRole(e.target.value)}
                                                onKeyDown={handleAddRole}
                                                placeholder={preferences.targetRoles.length === 0 ? "Type a role and hit enter..." : ""}
                                                className="bg-transparent outline-none flex-1 min-w-[120px] text-sm py-1"
                                            />
                                        </div>
                                        <p className="text-xs text-stone-400">Press Enter to add a role.</p>
                                    </div>

                                    {/* Work Style */}
                                    <div className="space-y-3">
                                        <label className="text-sm font-semibold text-[#2C2C2C]">Work Style Preference</label>
                                        <div className="flex items-center p-1 bg-stone-100 rounded-lg w-fit">
                                            {['remote', 'hybrid', 'onsite'].map((style) => (
                                                <button
                                                    key={style}
                                                    onClick={() => setPreferences({ ...preferences, workStyle: style })}
                                                    className={cn(
                                                        "px-4 py-1.5 rounded-md text-sm font-medium transition-all capitalize",
                                                        preferences.workStyle === style
                                                            ? "bg-white text-[#2C2C2C] shadow-sm"
                                                            : "text-stone-500 hover:text-stone-700"
                                                    )}
                                                >
                                                    {style}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "security" && (
                                <div className="text-center py-20">
                                    <Shield className="w-16 h-16 text-stone-200 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-stone-400">Security Settings</h3>
                                    <p className="text-stone-300 text-sm">Coming soon.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Floating Save Button */}
                    <motion.div
                        className="absolute bottom-8 right-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            onClick={handleSave}
                            disabled={isSaving || showSuccess}
                            className={cn(
                                "bg-[#D06A4C] hover:bg-[#A04C32] text-white px-6 py-3 rounded-full shadow-lg shadow-[#D06A4C]/20 font-medium active:scale-95 transition-all flex items-center gap-2",
                                (isSaving || showSuccess) && "opacity-80 cursor-not-allowed active:scale-100"
                            )}
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Saving...
                                </>
                            ) : showSuccess ? (
                                <>
                                    <Check size={18} />
                                    Saved
                                </>
                            ) : (
                                <>
                                    <Check size={18} />
                                    Save Changes
                                </>
                            )}
                        </button>
                    </motion.div>

                </main>
            </motion.div>
        </div>
    );
}

// Sub-components

function SidebarItem({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-200 relative group",
                active ? "bg-[#D06A4C]/5 text-[#D06A4C]" : "text-stone-500 hover:bg-stone-50 hover:text-[#2C2C2C]"
            )}
        >
            {active && (
                <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#D06A4C] rounded-r-full"
                />
            )}
            <span className={cn("transition-colors", active ? "text-[#D06A4C]" : "group-hover:text-[#2C2C2C]")}>
                {icon}
            </span>
            <span className="font-medium text-sm">{label}</span>
        </button>
    );
}

function InputField({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
    return (
        <div className="space-y-1 group">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-stone-200 py-2 text-[#2C2C2C] placeholder:text-stone-300 focus:outline-none focus:border-[#D06A4C] transition-colors"
            />
        </div>
    );
}
