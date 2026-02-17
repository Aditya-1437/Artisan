
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { templates, PremiumBadge } from '@/components/templates/TemplateDefinitions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TemplatesPage() {
    const basicTemplates = templates.filter(t => t.type === 'basic');
    const premiumTemplates = templates.filter(t => t.type === 'premium');

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#B85C38] selection:text-white">
            <Navbar />

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-6 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6">
                        Craft Your <span className="text-[#B85C38]">Legacy</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Select a template that resonates with your professional journey.
                        Whether you prefer minimalist precision or bold statements, we have a canvas for you.
                    </p>
                </div>

                {/* Free Collection */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">Free Collection</h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                        {basicTemplates.map((template) => (
                            <div key={template.id} className="group flex flex-col">
                                <div className="relative aspect-[1/1.4] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-[#B85C38]/30 group-hover:-translate-y-1">
                                    <template.Component />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <button className="bg-white text-[#1A1A1A] px-6 py-3 rounded font-bold hover:bg-[#B85C38] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg">
                                            Use Template
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h3 className="font-bold text-lg text-[#1A1A1A]">{template.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{template.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Premium Collection */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] flex items-center gap-2">
                            Premium Collection
                            <span className="bg-[#1A1A1A] text-white text-[10px] px-2 py-0.5 rounded-full font-sans tracking-wider">PRO</span>
                        </h2>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <div className="bg-[#F5F2EA] rounded-3xl p-8 md:p-12 border border-[#E6E0D4] relative overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#B85C38]/5 rounded-full blur-3xl"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                            {premiumTemplates.map((template) => (
                                <div key={template.id} className="group flex flex-col">
                                    <div className="relative aspect-[1/1.4] bg-white rounded-lg shadow-md border border-[#E6E0D4] overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] ring-1 ring-black/5">
                                        <PremiumBadge />
                                        <template.Component />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-[#B85C38]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px] text-white p-6 text-center">
                                            <Star className="w-8 h-8 mb-3 text-yellow-300 fill-yellow-300" />
                                            <h3 className="font-serif text-xl font-bold mb-1">Unlock {template.name}</h3>
                                            <p className="text-sm opacity-90 mb-6">Get access to all premium templates for $19/mo</p>
                                            <Link href="/pricing" className="bg-white text-[#B85C38] px-6 py-3 rounded font-bold hover:bg-[#1A1A1A] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg inline-block">
                                                Upgrade to Pro
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="font-bold text-lg text-[#1A1A1A] flex items-center justify-between">
                                            {template.name}
                                            <span className="text-[#B85C38] text-xs uppercase tracking-widest border border-[#B85C38]/20 px-2 py-0.5 rounded">Premium</span>
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1">{template.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <div className="inline-flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border border-[#E6E0D4]">
                                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">Why Upgrade?</h3>
                                <div className="flex gap-8 mt-4 text-left">
                                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                                        <div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-700" /></div>
                                        <span>Unlimited Downloads</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                                        <div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-700" /></div>
                                        <span>ATS Optimization</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                                        <div className="bg-green-100 p-1 rounded-full"><Check size={14} className="text-green-700" /></div>
                                        <span>Priority Support</span>
                                    </div>
                                </div>
                                <Link href="/pricing" className="mt-6 w-full bg-[#1A1A1A] text-white py-3 rounded-lg font-bold hover:bg-[#B85C38] transition-colors shadow-lg block">
                                    Get Premium Access
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
