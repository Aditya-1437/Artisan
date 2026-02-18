"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Info, Lock, Eye, FileText, Users, Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
type SectionData = {
    id: string;
    title: string;
    icon: React.ReactNode;
    tldr: string;
    content: React.ReactNode;
};

// --- Components ---

const TLDRCard = ({ icon, summary }: { icon: React.ReactNode; summary: string }) => (
    <div className="bg-[#EDF1EE] rounded-2xl p-6 mb-8 border-l-4 border-[#D06A4C] flex items-start gap-4">
        <div className="text-[#D06A4C] mt-1 shrink-0">{icon}</div>
        <p className="text-[#2C2C2C] font-bold text-lg leading-relaxed">{summary}</p>
    </div>
);

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
            >
                <span className="font-semibold text-[#2C2C2C]">{title}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>
            <div
                className={cn(
                    "bg-gray-50 transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="p-6 text-gray-600 text-sm border-t border-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
};

const StickyNavigator = ({ sections, activeSection }: { sections: SectionData[], activeSection: string }) => {
    return (
        <nav className="hidden lg:block sticky top-32 space-y-1">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                        "block px-4 py-3 text-sm transition-all duration-300 border-l-2",
                        activeSection === section.id
                            ? "border-[#D06A4C] text-[#2C2C2C] font-bold bg-[#F7F5F0]/50"
                            : "border-transparent text-gray-500 hover:text-[#2C2C2C] hover:border-gray-300"
                    )}
                >
                    {section.title}
                </a>
            ))}
        </nav>
    );
};

const MobileNavigator = ({ sections, activeSection }: { sections: SectionData[], activeSection: string }) => {
    return (
        <nav className="lg:hidden sticky top-16 z-30 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-gray-200 py-3 overflow-x-auto no-scrollbar">
            <div className="flex px-6 gap-3 min-w-max">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                            activeSection === section.id
                                ? "bg-[#D06A4C] text-white shadow-md"
                                : "bg-white text-gray-600 border border-gray-200"
                        )}
                    >
                        {section.title}
                    </a>
                ))}
            </div>
        </nav>
    )
}


export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState<string>("info-collect");

    const sections: SectionData[] = [
        {
            id: "info-collect",
            title: "Information We Collect",
            icon: <FileText className="w-6 h-6" />,
            tldr: "We only collect what we need to build your resume. If you don't type it, we don't know it.",
            content: (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        When you use our services, we collect information that you voluntarily provide to us, such as your name, email address, phone number, and professional history (experience, education, skills, etc.) that you input into our resume builder.
                    </p>
                    <p>
                        We also automatically collect certain technical data when you visit our website, such as your IP address, browser type, and operating system, to ensure our platform works correctly and securely.
                    </p>
                </div>
            ),
        },
        {
            id: "how-use",
            title: "How We Use It",
            icon: <Users className="w-6 h-6" />,
            tldr: "To build your resume, improve the app, and secure your account. We don't sell your career history to recruiters.",
            content: (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        Your data is primarily used to generate the resume documents you request. We process your information to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide, operate, and maintain our services.</li>
                        <li>Improve, personalize, and expand our services.</li>
                        <li>Understand and analyze how you use our services.</li>
                        <li>Develop new products, services, features, and functionality.</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                        <li>Send you emails.</li>
                        <li>Find and prevent fraud.</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "third-party",
            title: "Third-Party Services",
            icon: <Shield className="w-6 h-6" />,
            tldr: "We use trusted tools to keep the lights on (like payment processing and hosting). They only see what they absolutely have to.",
            content: (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
                    </p>
                    <Accordion title="View Our Sub-Processors">
                        <ul className="space-y-3">
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-800">Vercel</span>
                                <span className="text-gray-500">Hosting & Deployment</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-800">Supabase / PostgreSQL</span>
                                <span className="text-gray-500">Database Storage</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-800">Stripe</span>
                                <span className="text-gray-500">Payment Processing</span>
                            </li>
                            <li className="flex justify-between pb-2">
                                <span className="font-semibold text-gray-800">Google Analytics</span>
                                <span className="text-gray-500">Usage Data (Anonymized)</span>
                            </li>
                        </ul>
                    </Accordion>
                </div>
            ),
        },
        {
            id: "cookies",
            title: "Cookies & Tracking",
            icon: <Cookie className="w-6 h-6" />,
            tldr: "We use cookies to remember you're logged in. We don't use them to follow you around the internet.",
            content: (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        Like any other website, Artisan uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                    </p>
                    <Accordion title="Detailed Cookie List">
                        <p className="mb-4">We categorize cookies as follows:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., login sessions).</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site.</li>
                            <li><strong>Functionality Cookies:</strong> Remember your preferences (e.g., language).</li>
                        </ul>
                    </Accordion>
                </div>
            )
        },
        {
            id: "your-rights",
            title: "Your Rights",
            icon: <Lock className="w-6 h-6" />,
            tldr: "It's your data. You can export it, delete it, or correct it whenever you want.",
            content: (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        You have the right to request copies of your personal data. You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                    </p>
                    <p>
                        To exercise any of these rights, please contact us at our privacy email provided below. We will respond to your request within a reasonable timeframe.
                    </p>
                </div>
            ),
        },
    ];

    // Intersection Observer for Active State
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -50% 0px" } // Trigger when section is in the middle-ish
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div className="min-h-screen bg-[#F7F5F0] text-[#2C2C2C] font-sans selection:bg-[#D06A4C]/20">
            <Navbar />

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
                <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#2C2C2C]">
                    The Artisan Promise: Your Privacy.
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                    We believe your career data belongs to you. Here is exactly how we protect it, written in plain English.
                </p>
            </header>

            {/* Mobile Menu */}
            <MobileNavigator sections={sections} activeSection={activeSection} />

            {/* Main Content Split View */}
            <main className="max-w-6xl mx-auto px-6 pb-32 flex flex-col lg:flex-row gap-16 relative">

                {/* Left Column: Sticky Navigator */}
                <aside className="hidden lg:block w-1/4 h-full">
                    <StickyNavigator sections={sections} activeSection={activeSection} />
                </aside>

                {/* Right Column: Legal Document */}
                <div className="lg:w-3/4">
                    <div className="max-w-3xl">
                        {sections.map((section) => (
                            <section key={section.id} id={section.id} className="mb-24 scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-[#D06A4C]">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-[#2C2C2C]">
                                        {section.title}
                                    </h2>
                                </div>

                                <TLDRCard icon={<Info className="w-5 h-5" />} summary={section.tldr} />

                                {section.content}
                            </section>
                        ))}

                        {/* Contact Section */}
                        <section className="mb-12 pt-8 border-t border-gray-300">
                            <h2 className="text-2xl font-serif font-bold mb-4">Still have questions?</h2>
                            <p className="text-gray-700 mb-4">
                                Our privacy team is actual humans who care about this stuff. Reach out to us directly.
                            </p>
                            <a href="mailto:privacy@artisan.co" className="text-[#D06A4C] font-bold hover:underline text-lg">
                                privacy@artisan.co
                            </a>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
