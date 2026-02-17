"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Send, Twitter, Linkedin, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [step, setStep] = useState<"rating" | "details" | "success">("rating");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleRatingSelect = (selectedRating: number) => {
        setRating(selectedRating);
        setTimeout(() => setStep("details"), 300);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setStep("success");
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText("ARTISAN20");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Reset state on close
    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setRating(0);
            setFeedback("");
            setStep("rating");
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#F7F5F0] rounded-2xl shadow-2xl z-[101] overflow-hidden border border-white/50"
                    >
                        {/* Header */}
                        <div className="relative px-6 py-4 border-b border-[#2C2C2C]/10 flex justify-between items-center bg-white/50">
                            <h3 className="font-serif text-xl text-[#2C2C2C]">
                                {step === "success" ? "Thank you!" : "We value your craft."}
                            </h3>
                            <button
                                onClick={handleClose}
                                className="text-stone-400 hover:text-[#2C2C2C] transition-colors p-1 rounded-full hover:bg-stone-100"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {step === "rating" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="text-center"
                                >
                                    <p className="text-stone-600 mb-8 text-lg">
                                        How has your experience been with Resume Artisan?
                                    </p>
                                    <div className="flex justify-center gap-2 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                onMouseEnter={() => setHoverRating(star)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                onClick={() => handleRatingSelect(star)}
                                                className="transition-transform hover:scale-110 active:scale-95 focus:outline-none"
                                            >
                                                <Star
                                                    size={32}
                                                    className={cn(
                                                        "transition-colors duration-200",
                                                        (hoverRating || rating) >= star
                                                            ? "fill-[#D06A4C] text-[#D06A4C]"
                                                            : "fill-transparent text-stone-300"
                                                    )}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-sm text-stone-400 font-medium">
                                        {(hoverRating || rating) === 5 ? "Excellent!" :
                                            (hoverRating || rating) === 4 ? "Good" :
                                                (hoverRating || rating) === 3 ? "Okay" :
                                                    (hoverRating || rating) === 2 ? "Needs Work" :
                                                        (hoverRating || rating) === 1 ? "Poor" : "Select a rating"}
                                    </p>
                                </motion.div>
                            )}

                            {step === "details" && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <p className="text-stone-600 mb-4 text-sm font-medium">
                                        What can we do better? (Optional)
                                    </p>
                                    <textarea
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        placeholder="Tell us about your experience..."
                                        className="w-full h-32 p-4 rounded-xl bg-white border border-stone-200 focus:border-[#D06A4C] focus:ring-1 focus:ring-[#D06A4C] outline-none resize-none text-[#2C2C2C] text-sm text-stone-500 mb-6 transition-all"
                                    />
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-[#2C2C2C] text-white rounded-xl font-medium hover:bg-[#D06A4C] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Send Feedback <Send size={16} />
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            )}

                            {step === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                        <Check size={32} />
                                    </div>
                                    <h4 className="font-serif text-2xl text-[#2C2C2C] mb-2">You're awesome!</h4>
                                    <p className="text-stone-500 mb-8 max-w-xs mx-auto">
                                        Thanks for helping us build a better tool. Here's a little gift for you.
                                    </p>

                                    <div className="bg-white p-4 rounded-xl border border-dashed border-[#D06A4C]/30 mb-8 relative group">
                                        <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">20% Off Premium</p>
                                        <p className="font-mono text-xl font-bold text-[#D06A4C]">ARTISAN20</p>
                                        <button
                                            onClick={handleCopyCode}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-[#D06A4C] transition-colors"
                                        >
                                            {copied ? <Check size={18} /> : <Copy size={18} />}
                                        </button>
                                    </div>

                                    <div className="flex gap-4 justify-center">
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all text-sm font-medium">
                                            <Twitter size={16} /> Tweet
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all text-sm font-medium">
                                            <Linkedin size={16} /> Share
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
