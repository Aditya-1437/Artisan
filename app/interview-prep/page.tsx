"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, RefreshCw, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// --- Mock Data ---

const guides = [
    {
        title: "A Recruiter's Guide to B.Tech 3rd-Year Interviews",
        category: "Campus Placements",
        readTime: "5 min read",
    },
    {
        title: "Mastering the STAR Method for Behavioral Questions",
        category: "Communication",
        readTime: "7 min read",
    },
    {
        title: "Whiteboard Etiquette: Thinking Out Loud",
        category: "Technical",
        readTime: "4 min read",
    },
];

const flashcards = [
    {
        id: 1,
        type: "Behavioral",
        q: "Tell me about a time you had to learn a new technology quickly.",
        a: "Focus on your learning framework. Mention reading official docs, building small prototypes, and how you applied it to the final project.",
    },
    {
        id: 2,
        type: "Technical",
        q: "Explain the phases of a compiler in Compiler Design.",
        a: "Break it down logically: Lexical analysis (scanning), Syntax analysis (parsing), Semantic analysis, Intermediate code generation, Optimization, and final Code generation.",
    },
    {
        id: 3,
        type: "Behavioral",
        q: "Describe a challenge you faced while collaborating on GitHub.",
        a: "Discuss resolving merge conflicts, enforcing branch protections, or communicating through pull request reviews.",
    },
    {
        id: 4,
        type: "Technical",
        q: "What is the difference between client-side rendering (CSR) and server-side rendering (SSR)?",
        a: "CSR ships empty HTML and relies on JS to build the UI in the browser. SSR pre-generates HTML on the server on each request, offering better SEO and initial load times.",
    }
];

const preFlightData = {
    virtual: [
        { id: "v1", text: "Test microphone and camera" },
        { id: "v2", text: "Review the company's recent news" },
        { id: "v3", text: "Prepare 3 questions to ask the interviewer" },
        { id: "v4", text: "Ensure a clean, well-lit background" },
    ],
    inPerson: [
        { id: "p1", text: "Print 3 copies of your Artisan resume" },
        { id: "p2", text: "Plan your commute to arrive 15 minutes early" },
        { id: "p3", text: "Prepare your portfolio or any physical work samples" },
        { id: "p4", text: "Dress appropriately for the company culture" },
    ]
};

// --- Main Component ---

export default function InterviewPrepPage() {
    // Practice Deck State
    const [filterCategory, setFilterCategory] = useState<"All" | "Behavioral" | "Technical">("All");
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    // Pre-flight Checklist State
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    // Filtered Cards
    const filteredCards = flashcards.filter((card) =>
        filterCategory === "All" ? true : card.type === filterCategory
    );

    // If filter changes, reset the card index and unflip card
    useEffect(() => {
        setCurrentCardIndex(0);
        setIsFlipped(false);
    }, [filterCategory]);

    const handleNextCard = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentCardIndex((prev) => (prev + 1) % filteredCards.length);
        }, 150);
    };

    const handlePrevCard = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentCardIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
        }, 150);
    };

    const toggleCheck = (id: string) => {
        setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const currentCard = filteredCards[currentCardIndex];

    return (
        <div className="min-h-screen bg-[#F7F5F0] text-[#2C2C2C] selection:bg-[#8B9D83] selection:text-white pb-24">
            {/* Navigation Layer */}
            <nav className="fixed top-0 w-full z-50 bg-[#F7F5F0]/80 backdrop-blur-md border-b border-[#2C2C2C]/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm font-medium tracking-wide hover:text-[#8B9D83] transition-colors"
                    >
                        <div className="h-8 w-8 rounded-full border border-[#2C2C2C]/10 flex items-center justify-center group-hover:border-[#8B9D83] transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        Back to Home
                    </Link>
                    <div className="text-sm tracking-widest uppercase font-medium text-[#2C2C2C]/60" style={{ fontFamily: "var(--font-courier), monospace" }}>
                        Interview Toolkit
                    </div>
                </div>
            </nav>

            <main className="pt-32 max-w-7xl mx-auto px-6 space-y-32">
                {/* 1. Hero Section: The Mindset */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <h1
                            className="text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-[#2C2C2C]"
                            style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                            The<br />
                            <span className="italic relative">
                                Strategy Room.
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="absolute bottom-2 left-0 w-full h-1 bg-[#8B9D83] origin-left -z-10"
                                />
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-[#2C2C2C]/80 max-w-xl leading-relaxed">
                            Your Artisan resume opened the door. Now, let's craft your delivery and close the deal.
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    document.getElementById("practice-deck")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#D06A4C] text-white rounded-full font-medium tracking-wide hover:bg-[#b0573e] hover:shadow-lg hover:shadow-[#D06A4C]/20 transition-all active:scale-95"
                            >
                                Enter the Practice Deck
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-[#2C2C2C]/5"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                            alt="Two people having a calm, professional discussion"
                            fill
                            className="object-cover object-center grayscale-[20%] sepia-[10%]"
                            priority
                        />
                        {/* Soft overlay to match theme */}
                        <div className="absolute inset-0 bg-[#D06A4C]/5 mix-blend-multiply" />
                    </motion.div>
                </section>

                {/* 2. The Playbook: Curated Guides */}
                <section className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                            The Playbook
                        </h2>
                        <p className="text-[#2C2C2C]/60 text-lg">Curated strategies for every scenario.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {guides.map((guide, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[#8B9D83] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-full min-h-[280px]"
                            >
                                <div className="space-y-6">
                                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EDF1EE] text-[#8B9D83]">
                                        {guide.category}
                                    </span>
                                    <h3 className="text-2xl leading-snug font-medium text-[#2C2C2C] group-hover:text-[#D06A4C] transition-colors" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                        {guide.title}
                                    </h3>
                                </div>
                                <div className="mt-8 flex items-center justify-between text-sm text-[#2C2C2C]/50">
                                    <span>{guide.readTime}</span>
                                    <span className="w-8 h-8 rounded-full bg-[#F7F5F0] flex items-center justify-center group-hover:bg-[#8B9D83] group-hover:text-white transition-colors">
                                        <ArrowLeft className="w-4 h-4 rotate-135 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all rotate-[135deg]" />
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* 3. The Interactive Practice Deck */}
                <section id="practice-deck" className="space-y-12 pt-12 scroll-mt-24">
                    <div className="text-center space-y-6 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                            Practice Deck
                        </h2>
                        <p className="text-[#2C2C2C]/60 text-lg">
                            Test your foundational knowledge. Click to flip and reveal the Artisan Approach.
                        </p>

                        {/* Category Toggles */}
                        <div className="flex flex-wrap justify-center gap-3 pt-4">
                            {(["All", "Behavioral", "Technical"] as const).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilterCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filterCategory === cat
                                        ? "bg-[#2C2C2C] text-white shadow-md"
                                        : "bg-white text-[#2C2C2C]/70 hover:bg-[#EDF1EE] border border-[#2C2C2C]/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-8">
                        {/* 3D Card Container */}
                        {filteredCards.length > 0 ? (
                            <div
                                className="relative w-full max-w-3xl h-[450px] md:h-[400px] cursor-pointer"
                                style={{ perspective: "1500px" }}
                                onClick={() => setIsFlipped(!isFlipped)}
                            >
                                <motion.div
                                    className="w-full h-full relative"
                                    style={{ transformStyle: "preserve-3d" }}
                                    initial={false}
                                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                                    transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                                >
                                    {/* Front of Card (Question) */}
                                    <div
                                        className="absolute inset-0 bg-white rounded-3xl shadow-xl flex flex-col justify-between p-10 md:p-14 border border-[#2C2C2C]/5"
                                        style={{ backfaceVisibility: "hidden" }}
                                    >
                                        <div className="flex justify-between items-center text-sm font-medium uppercase tracking-widest text-[#2C2C2C]/40">
                                            <span>Card {currentCardIndex + 1} of {filteredCards.length}</span>
                                            <span className="text-[#D06A4C]">{currentCard?.type}</span>
                                        </div>

                                        <h3
                                            className="text-3xl md:text-4xl leading-tight text-center text-[#2C2C2C]"
                                            style={{ fontFamily: 'var(--font-playfair), serif' }}
                                        >
                                            {currentCard?.q}
                                        </h3>

                                        <div className="flex justify-center items-center gap-2 text-[#8B9D83] font-medium text-sm">
                                            <RefreshCw className="w-4 h-4" />
                                            Click to flip
                                        </div>
                                    </div>

                                    {/* Back of Card (Answer) */}
                                    <div
                                        className="absolute inset-0 bg-[#EDF1EE] rounded-3xl shadow-xl flex flex-col p-10 md:p-14 border border-[#8B9D83]/20"
                                        style={{
                                            backfaceVisibility: "hidden",
                                            transform: "rotateY(180deg)"
                                        }}
                                    >
                                        <div className="text-sm font-medium uppercase tracking-widest text-[#8B9D83] mb-8">
                                            The Artisan Approach
                                        </div>

                                        <div className="flex-grow flex items-center justify-center">
                                            <p className="text-xl md:text-2xl leading-relaxed font-light text-[#2C2C2C]">
                                                {currentCard?.a}
                                            </p>
                                        </div>

                                        <div className="flex justify-center items-center gap-2 text-[#2C2C2C]/40 font-medium text-sm">
                                            <RefreshCw className="w-4 h-4" />
                                            Click to flip back
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : (
                            <div className="w-full max-w-3xl h-[400px] bg-white rounded-3xl flex items-center justify-center text-[#2C2C2C]/50">
                                No cards found for this category.
                            </div>
                        )}

                        {/* Navigation Controls */}
                        {filteredCards.length > 0 && (
                            <div className="flex items-center gap-6 mt-4">
                                <button
                                    onClick={handlePrevCard}
                                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#2C2C2C] shadow-sm hover:shadow-md hover:bg-[#F7F5F0] transition-all border border-[#2C2C2C]/5 focus:outline-none focus:ring-2 focus:ring-[#8B9D83]/50"
                                    aria-label="Previous card"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <div className="text-sm font-medium tracking-wide text-[#2C2C2C]/60 w-24 text-center">
                                    {currentCardIndex + 1} / {filteredCards.length}
                                </div>
                                <button
                                    onClick={handleNextCard}
                                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#2C2C2C] shadow-sm hover:shadow-md hover:bg-[#F7F5F0] transition-all border border-[#2C2C2C]/5 focus:outline-none focus:ring-2 focus:ring-[#8B9D83]/50"
                                    aria-label="Next card"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* 4. The Pre-Flight Checklist */}
                <section className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-lg shadow-[#2C2C2C]/5 border border-[#2C2C2C]/5 mt-24">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                            The Pre-Flight Checklist
                        </h2>
                        <p className="text-[#2C2C2C]/60 text-lg">Leave nothing to chance before you enter the room.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Virtual Setup */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-medium flex items-center gap-3 border-b border-[#2C2C2C]/10 pb-4">
                                <span className="w-8 h-8 rounded-lg bg-[#EDF1EE] flex items-center justify-center text-[#8B9D83]">
                                    01
                                </span>
                                Virtual Setup
                            </h3>
                            <div className="space-y-4">
                                {preFlightData.virtual.map((item) => (
                                    <label
                                        key={item.id}
                                        className="flex items-start gap-4 cursor-pointer group"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCheck(item.id);
                                        }}
                                    >
                                        <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-colors ${checkedItems[item.id]
                                            ? 'bg-[#8B9D83] border-[#8B9D83] text-white'
                                            : 'border-[#2C2C2C]/20 text-transparent group-hover:border-[#8B9D83]/50'
                                            }`}>
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className={`text-lg transition-all ${checkedItems[item.id]
                                            ? 'text-[#8B9D83] line-through decoration-[#8B9D83]/50'
                                            : 'text-[#2C2C2C] group-hover:text-[#2C2C2C]/80'
                                            }`}>
                                            {item.text}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* In-Person Essentials */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-medium flex items-center gap-3 border-b border-[#2C2C2C]/10 pb-4">
                                <span className="w-8 h-8 rounded-lg bg-[#D06A4C]/10 flex items-center justify-center text-[#D06A4C]">
                                    02
                                </span>
                                In-Person Essentials
                            </h3>
                            <div className="space-y-4">
                                {preFlightData.inPerson.map((item) => (
                                    <label
                                        key={item.id}
                                        className="flex items-start gap-4 cursor-pointer group"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCheck(item.id);
                                        }}
                                    >
                                        <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-colors ${checkedItems[item.id]
                                            ? 'bg-[#8B9D83] border-[#8B9D83] text-white'
                                            : 'border-[#2C2C2C]/20 text-transparent group-hover:border-[#8B9D83]/50'
                                            }`}>
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className={`text-lg transition-all ${checkedItems[item.id]
                                            ? 'text-[#8B9D83] line-through decoration-[#8B9D83]/50'
                                            : 'text-[#2C2C2C] group-hover:text-[#2C2C2C]/80'
                                            }`}>
                                            {item.text}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
