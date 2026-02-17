
"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { templates, PremiumBadge } from '@/components/templates/TemplateDefinitions';
import StudioNavbar from '@/components/dashboard/StudioNavbar';
import PricingSection from '@/components/PricingSection';

export default function DashboardTemplatesPage() {
    const basicTemplates = templates.filter(t => t.type === 'basic');
    const premiumTemplates = templates.filter(t => t.type === 'premium');

    return (
        <div className="min-h-screen bg-[#F7F5F0] font-sans selection:bg-[#B85C38] selection:text-white">
            <StudioNavbar />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <Link href="/dashboard" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-6 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Studio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2C2C2C] mb-6">
                        Find your next <span className="text-[#B85C38]">Inspiration</span>.
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Select a template to start a new project.
                        As a member, you have full access to our comprehensive suite of tools.
                    </p>
                </div>

                {/* Free Collection */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl font-serif font-bold text-[#2C2C2C]">Basic Templates</h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                        {basicTemplates.map((template) => (
                            <div key={template.id} className="group flex flex-col">
                                <div className="relative aspect-[1/1.4] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-[#B85C38]/30 group-hover:-translate-y-1">
                                    <template.Component />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[#2C2C2C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <button className="bg-white text-[#2C2C2C] px-6 py-3 rounded font-bold hover:bg-[#B85C38] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg">
                                            Start Editing
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="font-bold text-lg text-[#2C2C2C]">{template.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{template.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Premium Collection */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl font-serif font-bold text-[#2C2C2C] flex items-center gap-2">
                            Premium Collection
                            <span className="bg-[#2C2C2C] text-white text-[10px] px-2 py-0.5 rounded-full font-sans tracking-wider">PRO</span>
                        </h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <div className="bg-[#E5E5E5]/30 rounded-3xl p-8 md:p-12 border border-[#E5E5E5] relative overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#B85C38]/5 rounded-full blur-3xl"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                            {premiumTemplates.map((template) => (
                                <div key={template.id} className="group flex flex-col">
                                    <div className="relative aspect-[1/1.4] bg-white rounded-lg shadow-md border border-[#E5E5E5] overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] ring-1 ring-black/5">
                                        <PremiumBadge />
                                        <template.Component />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-[#B85C38]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px] text-white p-6 text-center">
                                            <Star className="w-8 h-8 mb-3 text-yellow-300 fill-yellow-300" />
                                            <h3 className="font-serif text-xl font-bold mb-1">Premium Template</h3>
                                            <p className="text-sm opacity-90 mb-6">Unlock full access to this design.</p>
                                            <Link href="/pricing" className="bg-white text-[#B85C38] px-6 py-3 rounded font-bold hover:bg-[#2C2C2C] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg inline-block">
                                                Upgrade Plan
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="font-bold text-lg text-[#2C2C2C] flex items-center justify-between">
                                            {template.name}
                                            <span className="text-[#B85C38] text-xs uppercase tracking-widest border border-[#B85C38]/20 px-2 py-0.5 rounded">Premium</span>
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1">{template.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section Integration */}
                <PricingSection />

            </main>
        </div>
    );
}
