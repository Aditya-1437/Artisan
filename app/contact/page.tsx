"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, Send } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success";
type Category = "Technical Issue" | "Billing" | "Resume Advice" | "Other";

const categories: Category[] = ["Technical Issue", "Billing", "Resume Advice", "Other"];

export default function ContactSupportPage() {
    const router = useRouter();
    const [status, setStatus] = useState<FormStatus>("idle");
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prevent multiple submissions
        if (status !== "idle") return;

        setStatus("submitting");

        // Simulate network request (1.5s)
        setTimeout(() => {
            setStatus("success");

            // Wait 3 seconds to show success animation, then redirect gracefully
            setTimeout(() => {
                router.push("/help");
            }, 3000);

        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F7F5F0] font-sans text-[#2C2C2C] selection:bg-[#D06A4C]/20 relative flex items-center justify-center p-6 md:p-12">

            {/* Back to Help Center Button */}
            <div className="absolute top-8 left-6 md:left-12 z-10">
                <Link href="/help" className="flex items-center gap-2 text-stone-500 hover:text-[#D06A4C] transition-colors font-medium">
                    <ArrowLeft size={20} /> Back to Help Center
                </Link>
            </div>

            {/* The Dispatch Desk (Split Layout) */}
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16">

                {/* Left Column (The Reassurance) */}
                <div className="lg:col-span-5 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-[#2C2C2C]"
                    >
                        Send a message <br />to the <span className="text-[#D06A4C] italic">Atelier.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-stone-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                    >
                        Whether you have a question about formatting, billing, or just want to say hello, our artisans are here to help you craft your story.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-stone-200 shadow-sm"
                    >
                        <Clock className="text-[#8B9D83]" size={20} />
                        <span className="text-stone-700 font-medium text-sm">Typical reply time: <strong className="text-[#8B9D83]">Under 2 hours.</strong></span>
                    </motion.div>
                </div>

                {/* Right Column (The Form Card) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-stone-200/50 border border-stone-100 relative min-h-[550px] flex flex-col justify-center"
                >
                    <AnimatePresence mode="wait">

                        {/* IDLE / SUBMITTING STATE */}
                        {status !== "success" && (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleSubmit}
                                className="space-y-8"
                            >
                                {/* Category Selectors */}
                                <div>
                                    <label className="block text-sm font-bold text-stone-500 uppercase tracking-wider mb-3">
                                        What can we help you with?
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                type="button"
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                                                        ? "bg-[#D06A4C]/10 border-[#D06A4C] text-[#D06A4C]"
                                                        : "bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-100"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Inputs Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            required
                                            disabled={status === "submitting"}
                                            placeholder="Your Name"
                                            className="w-full bg-transparent border-0 border-b-2 border-stone-200 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#D06A4C] transition-colors disabled:opacity-50"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            required
                                            disabled={status === "submitting"}
                                            placeholder="Email Address"
                                            className="w-full bg-transparent border-0 border-b-2 border-stone-200 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#D06A4C] transition-colors disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                {/* Textarea */}
                                <div>
                                    <textarea
                                        required
                                        disabled={status === "submitting"}
                                        placeholder="How can we help?"
                                        className="w-full min-h-[150px] bg-stone-50 border border-stone-200 rounded-xl p-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#D06A4C] focus:bg-white focus:ring-4 focus:ring-[#D06A4C]/10 transition-all resize-y disabled:opacity-50 custom-scrollbar"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === "submitting" || !selectedCategory}
                                    className="w-full flex items-center justify-center gap-3 bg-[#D06A4C] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#b5583b] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#D06A4C]/20 active:scale-[0.98]"
                                >
                                    {status === "submitting" ? (
                                        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                            Sending Dispatch...
                                        </motion.div>
                                    ) : (
                                        <>
                                            Send Dispatch <Send size={20} className="ml-1" />
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        )}

                        {/* SUCCESS STATE */}
                        {status === "success" && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10 bg-white rounded-[2rem]"
                            >
                                <svg className="w-32 h-32 mb-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Circle background */}
                                    <circle cx="50" cy="50" r="45" fill="#8B9D83" fillOpacity="0.1" />
                                    {/* Animated Checkmark Path */}
                                    <motion.path
                                        d="M30 50 L45 65 L70 35"
                                        stroke="#8B9D83"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                    />
                                </svg>

                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="font-serif text-3xl font-bold text-[#2C2C2C] mb-3"
                                >
                                    Message received.
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="text-stone-500 text-lg"
                                >
                                    We'll be in touch shortly. Redirecting you...
                                </motion.p>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    );
}
