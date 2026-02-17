"use client";

import React, { useState } from "react";
import { Shield, Smartphone, Laptop, AlertTriangle, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Custom Toggle Component ---
interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const CustomToggle = ({ checked, onChange }: ToggleProps) => {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={cn(
                "w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none flex items-center",
                checked ? "bg-[#D06A4C]" : "bg-stone-300"
            )}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={cn(
                    "w-4 h-4 bg-white rounded-full shadow-sm"
                )}
                animate={{
                    x: checked ? 24 : 0
                }}
            />
        </button>
    );
};

// --- Input Field Component (Reused style) ---
interface SecurityInputProps {
    label: string;
    placeholder?: string;
    type?: string;
}

const SecurityInput = ({ label, placeholder, type = "text" }: SecurityInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
        <div className="space-y-1">
            <label className="text-xs font-semibold text-stone-500 uppercase tracking-wider">{label}</label>
            <div className="relative group">
                <input
                    type={isPassword && showPassword ? "text" : type}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-b border-stone-200 py-2 text-[#2C2C2C] placeholder:text-stone-300 focus:outline-none focus:border-[#D06A4C] transition-colors pr-8"
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-2 text-stone-400 hover:text-[#D06A4C] transition-colors"
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                )}
            </div>
        </div>
    );
};

// --- Main Security Settings Component ---
const SecuritySettings = () => {
    const [twoFactor, setTwoFactor] = useState(false);
    const [loginNotifications, setLoginNotifications] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdatePassword = () => {
        setIsUpdating(true);
        // Simulate API call
        setTimeout(() => setIsUpdating(false), 2000);
    };

    return (
        <div className="space-y-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div>
                <h3 className="text-xl font-bold text-[#2C2C2C] flex items-center gap-2">
                    Account Security
                    <Shield className="w-5 h-5 text-[#D06A4C]" />
                </h3>
                <p className="text-stone-500 text-sm mt-1">Manage your password and authentication methods.</p>
            </div>

            {/* Section A: Password & Authentication */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                <h4 className="font-serif text-lg font-medium text-[#2C2C2C] mb-6">Password & Authentication</h4>
                <div className="space-y-6">
                    <SecurityInput label="Current Password" type="password" placeholder="••••••••" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SecurityInput label="New Password" type="password" placeholder="Min. 8 characters" />
                        <SecurityInput label="Confirm New Password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="pt-2 flex justify-end">
                        <button
                            onClick={handleUpdatePassword}
                            disabled={isUpdating}
                            className={cn(
                                "relative px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 overflow-hidden group",
                                isUpdating
                                    ? "text-[#D06A4C] cursor-not-allowed bg-transparent"
                                    : "border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white"
                            )}
                        >
                            {/* Glowing Border Effect */}
                            {isUpdating && (
                                <span className="absolute inset-0 rounded-lg p-[1.5px] overflow-hidden">
                                    <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E7E5E4_0%,#D06A4C_50%,#E7E5E4_100%)]" />
                                    <span className="absolute inset-[1.5px] rounded-md bg-white" />
                                </span>
                            )}

                            <span className="relative z-10 flex items-center gap-2">
                                {isUpdating ? "Updating..." : "Update Password"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Section B: Enhanced Protection */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 space-y-6">
                {/* 2FA Toggle */}
                <div className="flex items-center justify-between">
                    <div>
                        <h5 className="font-medium text-[#2C2C2C]">Two-Factor Authentication</h5>
                        <p className="text-sm text-stone-500 mt-1 max-w-sm">Secure your account with an extra layer of protection via SMS or Authenticator App.</p>
                    </div>
                    <CustomToggle checked={twoFactor} onChange={setTwoFactor} />
                </div>

                <div className="w-full h-px bg-stone-100" />

                {/* Login Notifications Toggle */}
                <div className="flex items-center justify-between">
                    <div>
                        <h5 className="font-medium text-[#2C2C2C]">Login Notifications</h5>
                        <p className="text-sm text-stone-500 mt-1 max-w-sm">Receive an email when a login is detected from a new device or location.</p>
                    </div>
                    <CustomToggle checked={loginNotifications} onChange={setLoginNotifications} />
                </div>
            </div>

            {/* Section C: Active Sessions */}
            <div className="space-y-4">
                <h4 className="font-serif text-lg font-medium text-[#2C2C2C]">Where you're logged in</h4>

                {/* Current Device */}
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-100">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                            <Laptop size={20} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-medium text-[#2C2C2C]">MacBook Pro</p>
                                <span className="w-2 h-2 rounded-full bg-[#D06A4C]" />
                                <span className="text-xs text-[#D06A4C] font-medium">Active now</span>
                            </div>
                            <p className="text-xs text-stone-500">Chrome • Bangalore, India</p>
                        </div>
                    </div>
                </div>

                {/* Other Device */}
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-stone-100">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                            <Smartphone size={20} />
                        </div>
                        <div>
                            <p className="font-medium text-[#2C2C2C]">iPhone 15</p>
                            <p className="text-xs text-stone-500">Safari • Mumbai, India</p>
                        </div>
                    </div>
                    <button className="text-sm text-stone-400 hover:text-red-500 transition-colors">
                        Revoke
                    </button>
                </div>
            </div>

            {/* Section D: Danger Zone */}
            <div className="rounded-xl border border-dashed border-[#9F4A4A]/30 p-6 bg-[#9F4A4A]/5 mt-4">
                <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#9F4A4A]">
                        <AlertTriangle size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-[#9F4A4A]">Delete Account</h4>
                        <p className="text-sm text-[#9F4A4A]/80 mt-1 mb-4">
                            Permanently remove your data and resume projects. This cannot be undone.
                        </p>
                        <button className="text-sm font-medium text-[#9F4A4A] border border-[#9F4A4A]/30 px-4 py-2 rounded-lg hover:bg-[#9F4A4A] hover:text-white transition-all bg-white">
                            Delete Personal Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;
