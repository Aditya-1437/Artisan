"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, PenTool, FileText, UserCog, MessageSquare, Plus, X, ArrowRight, ArrowLeft } from "lucide-react";

// Mock Data for Categories
const categories = [
    {
        icon: PenTool,
        title: "The Canvas (Editor)",
        description: "Adding sections, formatting text, handling rich data, and using the Artisan builder.",
    },
    {
        icon: FileText,
        title: "Exporting & ATS",
        description: "Downloading pixel-perfect PDFs, margin issues, and guaranteeing ATS readability.",
    },
    {
        icon: UserCog,
        title: "Account & Billing",
        description: "Passwords, changing subscription plans, invoice history, and data deletion.",
    },
    {
        icon: MessageSquare,
        title: "Interview Preparation",
        description: "Utilizing the resume for transcripts, evaluation criteria, and candidate presentation.",
    },
];

// Mock Data for FAQs
const faqs = [
    {
        id: "q1",
        question: "How do I change my template?",
        answer: "Currently, Artisan Studio uses a single, highly-optimized master template designed specifically to beat ATS parsers while looking beautiful to human recruiters. We are introducing modular design variations in the next major update.",
    },
    {
        id: "q2",
        question: "Is my data secure?",
        answer: "Absolutely. We encrypt your personal data at rest and in transit. We do not sell your data to third parties, and you can permanently delete your account and all associated resumes at any time from your settings.",
    },
    {
        id: "q3",
        question: "Can I create multiple versions of my resume?",
        answer: "Yes! From your dashboard, you can duplicate an existing resume. This allows you to easily tailor different versions of your resume for specific job applications without losing your master copy.",
    },
    {
        id: "q4",
        question: "The PDF export looks weird. How do I fix it?",
        answer: "When you click 'Export PDF', your browser's print dialog will open. Ensure you have 'Headers and footers' turned OFF, 'Background graphics' turned OFF, and 'Margins' set to 'None'. This guarantees the perfect layout.",
    },
];

export default function HelpCenterPage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleFaq = (id: string) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-[#F7F5F0] font-sans text-[#2C2C2C] selection:bg-[#D06A4C]/20 relative">

            {/* Back Button */}
            <div className="absolute top-8 left-6 md:left-12 z-10">
                <Link href="/" className="flex items-center gap-2 text-stone-500 hover:text-[#D06A4C] transition-colors font-medium">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>

            {/* 1. The Hero Search (The Concierge) */}
            <section className="pt-32 pb-24 px-6 text-center max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#2C2C2C]"
                >
                    How can we assist your craft?
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-stone-600 text-lg mb-12"
                >
                    Search our library of guides, or browse the categories below.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative max-w-2xl mx-auto group"
                >
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                        <Search className="text-[#8B9D83] group-focus-within:text-[#D06A4C] transition-colors" size={24} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-16 pl-16 pr-6 bg-white rounded-full shadow-sm text-lg text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D06A4C] border border-stone-200 transition-all focus:shadow-md"
                    />
                </motion.div>
            </section>

            {/* 2. The Category "Binders" (Grid Layout) */}
            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="group relative bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                            >
                                {/* Bottom hover border accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D06A4C] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                                <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center mb-6 border border-stone-100 group-hover:bg-[#8B9D83]/10 transition-colors">
                                    <Icon className="text-[#8B9D83]" size={24} />
                                </div>
                                <h3 className="font-serif font-bold text-xl mb-3 text-[#2C2C2C]">{cat.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    {cat.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* 3. Popular Questions (The Accordion) */}
            <section className="px-6 md:px-12 pb-32 max-w-3xl mx-auto">
                <div className="mb-12">
                    <h2 className="font-serif text-3xl font-bold text-[#2C2C2C]">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq) => {
                        const isOpen = openFaq === faq.id;

                        return (
                            <div key={faq.id} className="border-b border-stone-200 last:border-0">
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                                >
                                    <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-[#D06A4C]" : "text-[#2C2C2C] group-hover:text-[#D06A4C]"}`}>
                                        {faq.question}
                                    </span>
                                    <div className="ml-4 shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-stone-200 bg-white shadow-sm overflow-hidden text-[#8B9D83]">
                                        {isOpen ? (
                                            <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
                                                <X size={16} className="text-[#D06A4C]" />
                                            </motion.div>
                                        ) : (
                                            <motion.div initial={{ rotate: 90 }} animate={{ rotate: 0 }}>
                                                <Plus size={16} />
                                            </motion.div>
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-stone-600 leading-relaxed max-w-2xl">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. The "Still Need Help?" Block */}
            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <div className="bg-[#EDF1EE] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-200/60 shadow-inner">
                    <div className="text-center md:text-left">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-3">
                            Can't find what you're looking for?
                        </h2>
                        <p className="text-stone-600 text-lg">
                            Our artisans are here to help. Reach out directly.
                        </p>
                    </div>
                    <Link
                        href="/contact" // Assuming a contact page exists or could exist
                        className="shrink-0 inline-flex items-center gap-2 bg-[#D06A4C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b5583b] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#D06A4C]/30 active:scale-95 whitespace-nowrap"
                    >
                        Contact Support <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}
