
"use client";

import React, { useEffect, useState } from "react";
import { useLoading } from "@/lib/context/LoadingContext";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
    const { isLoading } = useLoading();
    const [text, setText] = useState("");

    // Typewriter Effect
    useEffect(() => {
        if (!isLoading) {
            setText("");
            return;
        }

        const phrase = "With Jet Speed";
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex <= phrase.length) {
                setText(phrase.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Typing speed

        return () => clearInterval(interval);
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-[#FDFBF7]/90 backdrop-blur-md flex items-center justify-center"
                >
                    <div className="flex flex-col items-center">
                        {/* Plane Animation */}
                        <div className="relative w-24 h-24 mb-6">
                            <motion.svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-full h-full text-[#B85C38]"
                                initial={{ x: -100, y: 50, scale: 0.5, opacity: 0 }}
                                animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <path d="M2 12L22 2L15 22L11 13L2 12Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </motion.svg>

                            {/* Wind/Speed Lines */}
                            <motion.div
                                className="absolute top-1/2 right-full w-20 h-0.5 bg-[#B85C38]/30 rounded-full"
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            />
                        </div>

                        {/* Text Container */}
                        <div className="flex items-center space-x-1">
                            <span className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-bold tracking-tight">
                                {text}
                            </span>

                            {/* Blinking Cursor */}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-1 h-8 bg-[#B85C38] rounded-full"
                            />
                        </div>

                        {/* Animated Dots */}
                        <div className="flex space-x-2 mt-4">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-[#B85C38] rounded-full"
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
