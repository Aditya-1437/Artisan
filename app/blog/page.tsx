"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

// Mock Data for the Blog
const heroArticle = {
    title: "The Artisan's Approach to Crafting a Narrative",
    category: "Featured",
    excerpt: "Resume building isn't just about listing past experiences. It's about meticulously curating your professional history to tell a compelling story of growth, impact, and intent. Discover the secrets to writing a narrative that captivates recruiters.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2000&auto=format&fit=crop", // Workspace aesthetic
    date: "Feb 23",
    readTime: "7 min read",
    link: "#"
};

const articles = [
    {
        id: "1",
        title: "Stand Out: A Recruiter's Guide to B.Tech 3rd-Year Interviews.",
        category: "Interviewing",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop", // Discussion/Meeting aesthetic
        date: "Feb 21",
        readTime: "5 min read",
        link: "#"
    },
    {
        id: "2",
        title: "Decoding the Feedback: What We Learn from Analyzing Interview Transcripts.",
        category: "Career Strategy",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop", // Co-working/Focus aesthetic
        date: "Feb 18",
        readTime: "8 min read",
        link: "#"
    },
    {
        id: "3",
        title: "The Minimalist Resume: Why Less is More in 2026.",
        category: "Design",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop", // Notebook/Design aesthetic
        date: "Feb 14",
        readTime: "4 min read",
        link: "#"
    },
    {
        id: "4",
        title: "Crafting the Perfect Cover Letter for Remote Roles.",
        category: "Writing",
        image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1200&auto=format&fit=crop", // Coffee/Desk aesthetic
        date: "Feb 10",
        readTime: "6 min read",
        link: "#"
    },
    {
        id: "5",
        title: "Navigating the First 90 Days as a Senior Developer.",
        category: "Career Growth",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", // Tech workspace aesthetic
        date: "Feb 05",
        readTime: "10 min read",
        link: "#"
    }
];

export default function CareerBlogPage() {
    return (
        <div className="min-h-screen bg-[#F7F5F0] font-sans text-[#2C2C2C] selection:bg-[#D06A4C]/20 relative">

            {/* Back Button */}
            <div className="absolute top-8 left-6 md:left-12 z-50">
                <Link href="/" className="flex items-center gap-2 text-white hover:text-stone-200 transition-colors font-medium bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
            </div>

            {/* 1. The Editorial Hero */}
            <section className="relative px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto pt-4 md:pt-8 w-full">
                <div className="relative w-full h-[60vh] min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src={heroArticle.image}
                        alt="Hero Featured Article"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                    {/* Hero Content Overlap */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16 flex justify-end flex-col">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-1.5 bg-[#D06A4C]/90 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6"
                            >
                                {heroArticle.category}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                            >
                                {heroArticle.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-stone-200 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-2xl hidden sm:block"
                            >
                                {heroArticle.excerpt}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-6"
                            >
                                <Link
                                    href={heroArticle.link}
                                    className="group inline-flex items-center gap-2 bg-white text-[#2C2C2C] px-6 py-3 rounded-full font-bold hover:bg-[#F7F5F0] transition-colors"
                                >
                                    Read the Chronicle <ArrowRight size={18} className="group-hover:text-[#D06A4C] transition-colors text-stone-500" />
                                </Link>
                                <span className="text-stone-300 text-sm font-medium hidden md:inline-block">
                                    {heroArticle.date} • {heroArticle.readTime}
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Article Grid */}
            <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="font-serif text-4xl font-bold text-[#2C2C2C]">Latest Dispatches</h2>
                    <Link href="#" className="hidden sm:inline-flex items-center gap-2 text-stone-500 hover:text-[#D06A4C] font-semibold transition-colors">
                        View All Articles <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col h-full overflow-hidden"
                        >
                            <Link href={article.link} className="block relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#D06A4C] shadow-sm uppercase tracking-wider">
                                    {article.category}
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-sm font-medium text-[#8B9D83] mb-4">
                                    <span>{article.date}</span>
                                    <span>•</span>
                                    <span>{article.readTime}</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-[#2C2C2C] leading-tight mb-4 group-hover:text-[#D06A4C] transition-colors">
                                    <Link href={article.link}>{article.title}</Link>
                                </h3>

                                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center text-stone-500 group-hover:text-[#D06A4C] transition-colors text-sm font-bold">
                                    <Link href={article.link} className="flex items-center gap-2">
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* 4. The Newsletter Call-out */}
            <section className="bg-[#2C2C2C] py-24 px-6 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D06A4C]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B9D83]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 border border-stone-600 rounded-full text-stone-300 text-sm font-semibold uppercase tracking-widest mb-6"
                    >
                        Join the Atelier
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F5F0] mb-6"
                    >
                        Master Your Craft.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-400 text-lg md:text-xl mb-12 max-w-xl mx-auto"
                    >
                        Get weekly insights on career strategy, interview mechanics, and the art of professional storytelling delivered straight to your inbox.
                    </motion.p>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="flex-1 bg-stone-800/50 border border-stone-600 rounded-full px-6 py-4 text-[#F7F5F0] placeholder:text-stone-500 focus:outline-none focus:border-[#D06A4C] focus:bg-stone-800 transition-colors"
                        />
                        <button
                            type="submit"
                            className="bg-[#D06A4C] text-white font-bold px-8 py-4 rounded-full hover:bg-[#b5583b] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </motion.form>
                </div>
            </section>
        </div>
    );
}
