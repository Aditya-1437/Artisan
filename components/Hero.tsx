import Link from "next/link";
import { ArrowRight, FileText, CheckCircle2, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6 text-sm font-medium">
                            <Star className="w-4 h-4 fill-secondary" />
                            <span>Rated #1 Resume Builder</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                            Craft a Career Story That <span className="text-primary relative inline-block">
                                Stands Out
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Create ATS-friendly, artistically designed resumes in minutes. Stand out from the stack with templates that balance professionalism with modern aesthetics.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="#"
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:bg-primary-hover hover:scale-105 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Build Your Resume Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-foreground/10 text-foreground rounded-xl font-semibold hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-300 flex items-center justify-center"
                            >
                                View Examples
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-foreground/60">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary" />
                                <span>ATS-Friendly</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary" />
                                <span>PDF Download</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-secondary" />
                                <span>Expert Templates</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Content - Layered Mockups */}
                    <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center lg:justify-end animate-fade-in delay-200">
                        <div className="relative w-full max-w-md perspective-1000">
                            {/* Back card */}
                            <div className="absolute top-0 right-0 w-[85%] h-[400px] bg-white rounded-2xl shadow-xl border border-secondary/20 transform translate-x-8 -translate-y-8 rotate-3 opacity-60 scale-95 z-0 transition-transform duration-700 hover:rotate-6 hover:translate-x-12">
                                <div className="h-4 w-1/3 bg-secondary/20 rounded-full m-6"></div>
                                <div className="space-y-3 px-6">
                                    <div className="h-2 w-full bg-secondary/10 rounded-full"></div>
                                    <div className="h-2 w-5/6 bg-secondary/10 rounded-full"></div>
                                    <div className="h-2 w-4/6 bg-secondary/10 rounded-full"></div>
                                </div>
                            </div>

                            {/* Middle card */}
                            <div className="absolute top-4 right-4 w-[85%] h-[400px] bg-white rounded-2xl shadow-2xl border border-secondary/20 transform translate-x-4 -translate-y-4 -rotate-2 opacity-80 scale-98 z-10 transition-transform duration-700 hover:-rotate-4 hover:translate-x-6">
                                <div className="h-20 bg-secondary/5 rounded-t-2xl flex items-center px-6 gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/20"></div>
                                    <div className="space-y-2">
                                        <div className="h-3 w-24 bg-secondary/20 rounded-full"></div>
                                        <div className="h-2 w-32 bg-secondary/10 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="h-2 w-full bg-secondary/10 rounded-full"></div>
                                    <div className="h-2 w-full bg-secondary/10 rounded-full"></div>
                                    <div className="h-2 w-3/4 bg-secondary/10 rounded-full"></div>
                                </div>
                            </div>

                            {/* Front Main Card */}
                            <div className="relative w-[85%] h-[400px] bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-primary/10 transform rotate-1 z-20 transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <div className="h-6 w-32 bg-primary/10 rounded-md mb-2"></div>
                                            <div className="h-3 w-48 bg-foreground/5 rounded-md"></div>
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                            <FileText size={24} />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                <div className="h-3 w-20 bg-foreground/10 rounded-full"></div>
                                            </div>
                                            <div className="h-2 w-full bg-foreground/5 rounded-full"></div>
                                            <div className="h-2 w-11/12 bg-foreground/5 rounded-full"></div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                <div className="h-3 w-24 bg-foreground/10 rounded-full"></div>
                                            </div>
                                            <div className="h-2 w-full bg-foreground/5 rounded-full"></div>
                                            <div className="h-2 w-10/12 bg-foreground/5 rounded-full"></div>
                                            <div className="h-2 w-full bg-foreground/5 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Glowing effect */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-colors duration-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
