import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const templates = [
    {
        id: "minimalist",
        name: "The Minimalist",
        description: "Clean, clutter-free design that highlights your experience without distraction.",
        Component: () => (
            <div className="w-full h-full bg-white p-6 md:p-8 text-[8px] md:text-[10px] leading-tight flex flex-col shadow-sm">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-gray-900 tracking-tight mb-1">ALEX TAYLOR</h1>
                    <p className="text-gray-500 uppercase tracking-widest text-[8px]">Product Designer</p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Experience */}
                    <div>
                        <h2 className="text-gray-900 font-bold uppercase tracking-wider mb-3 border-b border-gray-100 pb-1">Experience</h2>
                        <div className="mb-3">
                            <div className="flex justify-between mb-1">
                                <span className="font-bold text-gray-800">Senior Designer</span>
                                <span className="text-gray-500">2021 - Present</span>
                            </div>
                            <p className="text-gray-600 mb-1">TechFlow Inc.</p>
                            <ul className="list-disc list-inside text-gray-500 space-y-1 ml-1 opacity-80">
                                <li>Led design system overhaul increasing efficiency</li>
                                <li>Mentored junior designers</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-bold text-gray-800">UX Designer</span>
                                <span className="text-gray-500">2019 - 2021</span>
                            </div>
                            <p className="text-gray-600">Creative Studio</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-gray-900 font-bold uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">Figma</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">React</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">Prototyping</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "creative",
        name: "The Creative",
        description: "Bold headers and unique layout for designers and artists.",
        Component: () => (
            <div className="w-full h-full bg-white flex text-[8px] md:text-[10px] items-stretch shadow-sm">
                {/* Sidebar */}
                <div className="w-1/3 bg-[#FAF9F6] p-4 flex flex-col border-r border-[#E5E5E5]">
                    <div className="w-16 h-16 bg-[#B85B3F] rounded-full mb-4 self-center"></div>
                    <h2 className="font-serif font-bold text-[#B85B3F] mb-4 text-sm text-center">Contact</h2>
                    <div className="space-y-2 text-center text-gray-600 mb-6">
                        <div className="h-1 bg-gray-200 w-full mb-1"></div>
                        <div className="h-1 bg-gray-200 w-full"></div>
                    </div>

                    <h2 className="font-serif font-bold text-[#B85B3F] mb-4 text-sm text-center mt-auto">Skills</h2>
                    <div className="space-y-2 text-right">
                        <div className="flex items-center justify-end gap-2">
                            <span>Ps</span>
                            <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden"><div className="w-10 h-full bg-[#B85B3F]"></div></div>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <span>Ai</span>
                            <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden"><div className="w-8 h-full bg-[#B85B3F]"></div></div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-2/3 p-5 flex flex-col">
                    <div className="mb-6 border-b-2 border-[#B85B3F] pb-4">
                        <h1 className="text-2xl font-serif font-bold text-[#1A1A1A]">JORDAN <br /> LEE</h1>
                        <p className="text-[#B85B3F] font-bold mt-1 tracking-widest">ART DIRECTOR</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-[#1A1A1A] font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#B85B3F] rotate-45"></span>
                                PROFILE
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                Innovative Art Director with 7+ years of experience leading creative teams.
                            </p>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[#1A1A1A] font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#B85B3F] rotate-45"></span>
                                EXPERIENCE
                            </h3>
                            <div className="mb-2">
                                <div className="flex justify-between font-bold text-gray-800">
                                    <span>Studio Red</span>
                                    <span className="text-[#B85B3F]">2020-Present</span>
                                </div>
                                <p className="text-gray-500 mt-1">Leading brand redesigns for Fortune 500 clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "executive",
        name: "The Executive",
        description: "Professional and authoritative, perfect for senior roles.",
        Component: () => (
            <div className="w-full h-full bg-white p-6 md:p-8 text-[8px] md:text-[10px] flex flex-col shadow-sm">
                {/* Header */}
                <div className="border-b-2 border-[#1A1A1A] pb-4 mb-6 flex justify-between items-end">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-[#1A1A1A] uppercase">Sarah <span className="font-light">Jenkins</span></h1>
                        <p className="text-gray-600 mt-1">Senior Operations Manager</p>
                    </div>
                    <div className="text-right text-gray-500 text-[9px]">
                        <p>newyork, NY</p>
                        <p>sarah@example.com</p>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-2">
                    <div className="mb-4">
                        <h3 className="text-[#1A1A1A] font-bold uppercase border-b border-gray-300 pb-1 mb-2">Professional Summary</h3>
                        <p className="text-gray-600 leading-normal">
                            Results-oriented Operations Manager with a track record of improving efficiency.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[#1A1A1A] font-bold uppercase border-b border-gray-300 pb-1 mb-3">Work History</h3>

                        <div className="mb-3">
                            <div className="flex justify-between font-bold text-gray-900">
                                <span>Global Corp</span>
                                <span>2018 - Present</span>
                            </div>
                            <p className="italic text-gray-700 mb-1">Director of Operations</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-1">
                                <li>Oversaw $5M budget reduction</li>
                                <li>Implemented Lean Six Sigma</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex justify-between font-bold text-gray-900">
                                <span>Tech Solutions</span>
                                <span>2015 - 2018</span>
                            </div>
                            <p className="italic text-gray-700">Operations Lead</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

export default function TemplateShowcase() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Designed for Every Career Path
                    </h2>
                    <p className="text-foreground/70 text-lg">
                        Choose from our curated collection of ATS-friendly templates, each crafted to help you tell your story effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            className="group relative flex flex-col h-full"
                        >
                            {/* Template Preview Mockup */}
                            <div className="relative aspect-[1/1.4] overflow-hidden rounded-xl shadow-lg border border-secondary/20 bg-gray-50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">

                                {/* Render the realistic template component */}
                                <div className="w-full h-full transform scale-100 origin-top-left">
                                    <template.Component />
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-serif text-2xl font-bold mb-2">{template.name}</h3>
                                        <p className="text-white/90 text-sm mb-6">{template.description}</p>
                                        <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold shadow hover:bg-secondary/20 transition-colors">
                                            Use This Template
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{template.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors">
                        View All Templates <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
