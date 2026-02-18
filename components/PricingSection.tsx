
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "BASIC",
        description: "The Starter",
        price: { monthly: 0, yearly: 0 },
        features: ["1 Resume Template", "Basic Formatting", "PDF Download", "7-Day History"],
        notIncluded: ["AI Writing Assistant", "Cover Letter Builder", "LinkedIn Optimization"],
        highlight: false,
        buttonVariant: "outline",
        borderColor: "border-gray-200"
    },
    {
        name: "PRO",
        description: "The Job Seeker",
        price: { monthly: 15, yearly: 12 },
        features: ["All Premium Templates", "AI Writing Assistant", "Unlimited PDF Downloads", "Smart Spell Check", "Email Support"],
        notIncluded: ["LinkedIn Optimization"],
        highlight: true,
        buttonVariant: "solid",
        borderColor: "border-[#D06A4C]",
        badge: "Most Popular"
    },
    {
        name: "POWER",
        description: "The Professional",
        price: { monthly: 29, yearly: 24 },
        features: ["Everything in Pro", "Cover Letter Builder", "LinkedIn Optimization", "Priority Support", "Personal Website"],
        notIncluded: [],
        highlight: false,
        buttonVariant: "outline",
        borderColor: "border-[#8B9D83]"
    }
];

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    return (
        <section id="pricing" className="py-24 bg-[#F7F5F0] text-[#2C2C2C]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl font-bold mb-4"
                    >
                        Invest in Your Career
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 font-sans"
                    >
                        Transparent pricing. No hidden fees. Cancel anytime.
                    </motion.p>

                    {/* Toggle */}
                    <div className="mt-8 flex justify-center items-center gap-4">
                        <span className={cn("text-sm font-bold tracking-wide transition-colors", billingCycle === "monthly" ? "text-[#2C2C2C]" : "text-gray-400")}>Monthly</span>

                        <button
                            onClick={() => setBillingCycle(prev => prev === "monthly" ? "yearly" : "monthly")}
                            className="relative w-16 h-8 bg-[#E5E5E5] rounded-full p-1 transition-colors hover:bg-[#d4d4d4] focus:outline-none"
                        >
                            <motion.div
                                className="w-6 h-6 bg-[#2C2C2C] rounded-full shadow-md"
                                animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>

                        <span className={cn("text-sm font-bold tracking-wide transition-colors flex items-center gap-2", billingCycle === "yearly" ? "text-[#2C2C2C]" : "text-gray-400")}>
                            Yearly <span className="text-[#D06A4C] text-xs">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative rounded-2xl p-8 transition-all duration-300 bg-white shadow-sm flex flex-col h-full",
                                plan.highlight ? "shadow-xl border-2 border-[#D06A4C] transform md:-translate-y-4 md:scale-105 z-10" : `border border-gray-200 hover:shadow-md ${plan.borderColor}`
                            )}
                        >
                            {plan.badge && (
                                <div className="absolute top-0 right-0 bg-[#2C2C2C] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg tracking-wider uppercase">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="font-serif text-2xl font-bold text-[#2C2C2C]">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline">
                                <span className="text-4xl font-bold text-[#2C2C2C]">$</span>
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={billingCycle}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="text-5xl font-bold text-[#2C2C2C]"
                                    >
                                        {billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="text-gray-500 ml-2">/mo</span>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <div className={cn("mt-0.5 p-0.5 rounded-full", plan.highlight ? "text-[#D06A4C]" : "text-[#8B9D83]")}>
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 opacity-50">
                                        <div className="mt-0.5 p-0.5 text-gray-300">
                                            <X size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-400 text-sm decoration-slate-400">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-3 rounded-lg font-bold transition-all duration-300",
                                plan.buttonVariant === "solid"
                                    ? "bg-[#D06A4C] text-white hover:bg-[#b55a3f] shadow-lg shadow-[#D06A4C]/20"
                                    : "bg-transparent border-2 border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white"
                            )}>
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
