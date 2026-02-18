"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Printer, ArrowRight, ShieldCheck, AlertCircle, Scale, FileText } from "lucide-react";

// --- Components ---

const ClauseCard = ({
    number,
    title,
    icon,
    children,
}: {
    number: string;
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) => (
    <article className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8 border border-[#E7E5E4] max-w-3xl mx-auto relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
        {/* Decorative Number */}
        <div className="absolute top-4 right-6 text-9xl font-serif text-[#F7F5F0] -z-0 select-none group-hover:text-[#F0EFEB] transition-colors">
            {number}
        </div>

        {/* Header */}
        <div className="relative z-10 mb-8 flex items-center gap-4">
            <div className="p-3 bg-[#F7F5F0] rounded-xl text-[#D06A4C]">
                {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2C2C2C]">
                {title}
            </h2>
        </div>

        {/* Content */}
        <div className="relative z-10 text-gray-700 leading-relaxed font-sans text-lg space-y-6">
            <div className="first-letter:text-4xl first-letter:font-serif first-letter:text-[#D06A4C] first-letter:mr-2 first-letter:float-left first-letter:font-bold">
                {children}
            </div>
        </div>
    </article>
);

const SectionList = ({ items }: { items: string[] }) => (
    <ul className="space-y-3 my-6 pl-2">
        {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
                <span className="shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#8B9D83]" />
                <span className="text-gray-700">{item}</span>
            </li>
        ))}
    </ul>
);

export default function TermsOfServicePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#F7F5F0] text-[#2C2C2C] font-sans selection:bg-[#D06A4C]/20">
            <div className="print:hidden">
                <Navbar />
            </div>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto relative print:pt-10 print:pb-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#EDF1EE] text-[#8B9D83] font-medium text-sm mb-6 border border-[#E3E8E5]">
                    Last Updated: February 2026
                </div>

                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#2C2C2C]">
                    The Artisan's Agreement.
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                    Welcome to the studio. By using our tools to craft your professional story, you agree to these terms. We've kept them as clear and fair as possible.
                </p>

                {/* Print Button (Desktop Only) */}
                <button
                    onClick={handlePrint}
                    className="absolute top-32 right-0 hidden lg:flex items-center gap-2 text-gray-500 hover:text-[#2C2C2C] transition-colors border border-gray-300 rounded-full px-4 py-2 text-sm print:hidden"
                    aria-label="Print Agreement"
                >
                    <Printer size={16} />
                    <span>Print Agreement</span>
                </button>
            </header>

            {/* Main Content: Stacked Cards */}
            <main className="px-4 pb-32 print:pb-0">

                <ClauseCard number="01" title="Account Responsibilities" icon={<ShieldCheck className="w-6 h-6" />}>
                    <p>
                        When you create an account with Artisan, you are entering a partnership of trust. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                    <p className="mt-4">
                        You agree to provide true, accurate, current, and complete information about yourself as prompted by our registration form. We reserve the right to suspend or terminate accounts that provide false or misleading information.
                    </p>
                </ClauseCard>

                <ClauseCard number="02" title="Intellectual Property" icon={<FileText className="w-6 h-6" />}>
                    <p>
                        The Resume Artisan platform, including its interfaces, graphics, design scripts, and code, is the proprietary property of Artisan and is protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <p className="mt-4">
                        However, the <strong>content you create</strong>—your actual resume data, career history, and personal bio—belongs 100% to you. We claim no ownership over your professional story. You grant us only the limited license necessary to display and format your content within our templates.
                    </p>
                </ClauseCard>

                <ClauseCard number="03" title="Acceptable Use" icon={<Scale className="w-6 h-6" />}>
                    <p>
                        We built this studio for professionals to advance their careers. We expect you to use it with integrity. You agree not to misuse our services.
                    </p>
                    <div className="mt-4">
                        <strong>Specifically, you agree NOT to:</strong>
                        <SectionList items={[
                            "Use the service for any illegal or unauthorized purpose.",
                            "Attempt to hack, reverse engineer, or compromise the integrity of our platform.",
                            "Upload any content that is offensive, defamatory, or infringes on the rights of others.",
                            "Use automated scripts or bots to access our services without permission."
                        ]} />
                    </div>
                </ClauseCard>

                <ClauseCard number="04" title="Termination" icon={<AlertCircle className="w-6 h-6" />}>
                    <p>
                        We hope you stay with us for your entire career journey, but sometimes paths diverge. You may terminate your account at any time by visiting your account settings.
                    </p>
                    <p className="mt-4">
                        We also reserve the right to suspend or terminate your access to our services if you violate these Terms of Service. In most cases, we will try to provide you with notice and an opportunity to fix the issue, but for serious violations, we may act immediately to protect our community.
                    </p>
                </ClauseCard>

                {/* Contact Section */}
                <div className="max-w-3xl mx-auto text-center mt-16 mb-24 print:hidden">
                    <h3 className="font-serif text-2xl font-bold mb-4">Questions about the agreement?</h3>
                    <p className="text-gray-600 mb-6">
                        Our legal team speaks human. Raise a ticket if you need clarification.
                    </p>
                    <a href="mailto:legal@artisan.co" className="text-[#D06A4C] font-bold hover:underline text-lg">
                        legal@artisan.co
                    </a>
                </div>

            </main>

            {/* Sticky "Back to Studio" Button */}
            <Link
                href="/dashboard"
                className="fixed bottom-8 right-8 z-50 bg-[#D06A4C] text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-[#D06A4C]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 print:hidden"
            >
                <span>Back to Studio</span>
                <ArrowRight size={18} />
            </Link>

            <div className="print:hidden">
                <Footer />
            </div>
        </div>
    );
}
