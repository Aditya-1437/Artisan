
import React from 'react';
import { Lock } from 'lucide-react';

export type TemplateType = 'basic' | 'premium';

export interface TemplateDefinition {
    id: string;
    name: string;
    type: TemplateType;
    description: string;
    Component: React.FC;
}

export const templates: TemplateDefinition[] = [
    // --- BASIC TEMPLATES ---
    {
        id: "basic-minimalist",
        name: "The Minimalist",
        type: "basic",
        description: "A clean, single-column layout that focuses purely on your content.",
        Component: () => (
            <div className="w-full h-full bg-white p-6 text-[8px] flex flex-col shadow-sm font-sans">
                <h1 className="text-xl font-bold text-gray-900 tracking-tight uppercase mb-1">Alex Carter</h1>
                <p className="text-gray-500 mb-4 border-b border-gray-200 pb-2">Software Engineer</p>

                <div className="mb-4">
                    <h2 className="font-bold text-gray-800 uppercase tracking-wider mb-2 text-[9px]">Experience</h2>
                    <div className="mb-2">
                        <div className="flex justify-between font-bold text-gray-700">
                            <span>Tech Solutions</span>
                            <span>2020 - Present</span>
                        </div>
                        <p className="text-gray-600">Senior Developer</p>
                        <ul className="list-disc list-inside text-gray-500 mt-1 ml-1 opacity-80">
                            <li>Optimized database queries</li>
                            <li>Led team of 5</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-gray-800 uppercase tracking-wider mb-2 text-[9px]">Education</h2>
                    <div className="flex justify-between text-gray-700">
                        <span>State University</span>
                        <span>2016 - 2020</span>
                    </div>
                    <p className="text-gray-500">BS Computer Science</p>
                </div>
            </div>
        )
    },
    {
        id: "basic-classic",
        name: "The Classic",
        type: "basic",
        description: "Timeless serif typography for a traditional and professional look.",
        Component: () => (
            <div className="w-full h-full bg-white p-6 text-[8px] flex flex-col shadow-sm font-serif">
                <div className="text-center mb-5">
                    <h1 className="text-xl font-bold text-gray-900 mb-1">Jordan Lee</h1>
                    <p className="text-gray-600 italic">Marketing Specialist | jordan@example.com</p>
                </div>

                <div className="mb-4">
                    <h2 className="font-bold text-gray-900 border-b-2 border-gray-800 mb-2">Professional Experience</h2>
                    <div className="mb-2">
                        <h3 className="font-bold text-gray-800">Global Corp</h3>
                        <p className="italic text-gray-600 mb-1">Marketing Manager, 2019-Present</p>
                        <p className="text-gray-700 text-justify">Managed global campaigns increasing brand awareness by 20%.</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-gray-900 border-b-2 border-gray-800 mb-2">Skills</h2>
                    <p className="text-gray-700">SEO, Content Marketing, Google Analytics, Copywriting</p>
                </div>
            </div>
        )
    },
    {
        id: "basic-clean",
        name: "Clean Slate",
        type: "basic",
        description: "Modern sans-serif with ample whitespace for readability.",
        Component: () => (
            <div className="w-full h-full bg-gray-50 p-6 text-[8px] flex flex-col shadow-sm font-sans">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h1 className="text-2xl font-light text-blue-600">Casey Smith</h1>
                        <p className="text-gray-500 font-medium">Product Manager</p>
                    </div>
                    <span className="text-gray-400">casey.s@email.com</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <h3 className="text-blue-600 font-bold mb-2">Contact</h3>
                        <p className="text-gray-500 mb-4">123 Street, City</p>
                        <h3 className="text-blue-600 font-bold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-1">
                            <span className="bg-white border border-gray-200 px-1 py-0.5 rounded text-gray-600">Agile</span>
                            <span className="bg-white border border-gray-200 px-1 py-0.5 rounded text-gray-600">Jira</span>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-blue-600 font-bold mb-2">Experience</h3>
                        <p className="text-gray-800 font-bold">StartUp Inc.</p>
                        <p className="text-gray-500 mb-2">Product Lead | 2021-Now</p>
                        <p className="text-gray-600 leading-tight">Launched 3 successful MVPs. Spearheaded user research initiatives.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "basic-functional",
        name: "Functional",
        type: "basic",
        description: "Structured layout emphasizing skills and competencies.",
        Component: () => (
            <div className="w-full h-full bg-white p-5 text-[8px] flex flex-col shadow-sm font-sans border-l-4 border-gray-300">
                <h1 className="text-lg font-bold text-gray-800 uppercase">Riley Davis</h1>
                <p className="text-gray-500 mb-4">riley@davis.com</p>

                <h2 className="bg-gray-100 p-1 font-bold text-gray-700 uppercase tracking-wider mb-2">Summary</h2>
                <p className="text-gray-600 mb-4">Dedicated professional with 5 years experience.</p>

                <h2 className="bg-gray-100 p-1 font-bold text-gray-700 uppercase tracking-wider mb-2">Experience</h2>
                <div className="mb-2">
                    <p className="font-bold text-gray-800">Sales Associate</p>
                    <p className="text-gray-500">Retail Co. | 2018-2022</p>
                </div>
            </div>
        )
    },
    {
        id: "basic-typewriter",
        name: "The Script",
        type: "basic",
        description: "Monospaced typography for a coding or technical vibe.",
        Component: () => (
            <div className="w-full h-full bg-[#fdfbf7] p-6 text-[8px] flex flex-col shadow-sm font-mono text-gray-800">
                <div className="border border-gray-400 p-4 h-full">
                    <h1 className="text-lg font-bold border-b border-gray-400 pb-2 mb-4">SAMUEL_GREEN</h1>
                    <p className="mb-4">&gt; Full Stack Developer</p>

                    <p className="mb-2 font-bold">[SKILLS]</p>
                    <p className="mb-4">JavaScript, Python, React, Node.js</p>

                    <p className="mb-2 font-bold">[HISTORY]</p>
                    <p><span className="font-bold">DevHouse</span> | 2022_PRESENT</p>
                    <p className="opacity-70 text-[7px] mt-1">// Built scalable APIs</p>
                </div>
            </div>
        )
    },

    // --- PREMIUM TEMPLATES ---
    {
        id: "premium-nexus",
        name: "Nexus",
        type: "premium",
        description: "Sophisticated dark-mode sidebar with gold accents.",
        Component: () => (
            <div className="w-full h-full bg-white flex text-[8px] shadow-sm font-serif">
                <div className="w-1/3 bg-[#1a1a1a] text-gray-300 p-4 flex flex-col">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full mb-4 self-center border-2 border-[#1a1a1a] ring-2 ring-yellow-700/50"></div>
                    <h2 className="text-yellow-600 font-bold uppercase tracking-widest mb-3 mt-4 text-center text-[7px]">Contact</h2>
                    <div className="space-y-2 text-center opacity-80 mb-6">
                        <div className="h-0.5 bg-gray-700 w-full mb-1"></div>
                        <p>email@me.com</p>
                    </div>
                </div>
                <div className="w-2/3 p-6">
                    <h1 className="text-2xl font-bold text-[#1a1a1a] uppercase tracking-tighter">Morgan <span className="text-yellow-700">James</span></h1>
                    <p className="text-gray-500 uppercase tracking-widest text-[7px] mb-6">Financial Analyst</p>

                    <h3 className="text-[#1a1a1a] font-bold uppercase border-b-2 border-yellow-600/30 pb-1 mb-2">Profile</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">Expert financial analyst with a proven track record.</p>

                    <h3 className="text-[#1a1a1a] font-bold uppercase border-b-2 border-yellow-600/30 pb-1 mb-2">Experience</h3>
                    <div>
                        <div className="flex justify-between font-bold text-gray-800">
                            <span>Wall Street Firm</span>
                            <span className="text-yellow-700">2019-Present</span>
                        </div>
                        <p className="text-gray-500">Senior Analyst</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "premium-pinnacle",
        name: "Pinnacle",
        type: "premium",
        description: "Bold header with a professional split layout.",
        Component: () => (
            <div className="w-full h-full bg-white flex flex-col text-[8px] shadow-sm font-sans">
                <div className="bg-slate-800 text-white p-6 pb-8 clip-path-slant">
                    <h1 className="text-2xl font-bold tracking-tight">ELIZABETH <span className="font-light text-slate-300">WONG</span></h1>
                    <p className="text-slate-400 uppercase tracking-wider text-[7px] mt-1">Creative Director</p>
                </div>
                <div className="flex-1 flex p-5 -mt-4 z-10">
                    <div className="w-2/3 pr-4">
                        <div className="bg-white p-3 shadow-md rounded-sm mb-4">
                            <h3 className="text-slate-800 font-bold uppercase mb-1">About</h3>
                            <p className="text-gray-500 leading-tight">Visionary director transforming brands.</p>
                        </div>
                        <h3 className="text-slate-800 font-bold uppercase mb-2 pl-2 border-l-2 border-slate-300">Experience</h3>
                        <div className="pl-2">
                            <p className="font-bold text-slate-700">Agency One</p>
                            <p className="text-gray-500">2018 - Present</p>
                        </div>
                    </div>
                    <div className="w-1/3 bg-slate-50 p-3 rounded-sm">
                        <h3 className="text-slate-800 font-bold uppercase mb-2">Skills</h3>
                        <div className="flex flex-col gap-1">
                            <span className="bg-white px-2 py-1 shadow-sm rounded text-slate-600">Leadership</span>
                            <span className="bg-white px-2 py-1 shadow-sm rounded text-slate-600">Strategy</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "premium-earthy",
        name: "The Artisan",
        type: "premium",
        description: "Textured, warm aesthetic matching the Pinnacle Resume brand.",
        Component: () => (
            <div className="w-full h-full bg-[#f4f1ea] p-6 text-[8px] flex flex-col shadow-sm font-serif">
                <div className="border-[0.5px] border-[#8b5e34] h-full p-4 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f4f1ea] px-3">
                        <div className="w-8 h-8 bg-[#8b5e34] rounded-full flex items-center justify-center text-[#f4f1ea] font-bold text-xs">OL</div>
                    </div>
                    <div className="mt-4 text-center mb-6">
                        <h1 className="text-xl font-bold text-[#3e2723]">OLIVER LAWRENCE</h1>
                        <p className="text-[#8b5e34] italic font-medium">Architect</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-[#3e2723] font-bold border-b border-[#8b5e34]/30 pb-1 mb-2">Projects</h3>
                            <p className="text-[#5d4037]">City Library Revamp</p>
                            <p className="text-[#5d4037] opacity-70">Lead Architect</p>
                        </div>
                        <div>
                            <h3 className="text-[#3e2723] font-bold border-b border-[#8b5e34]/30 pb-1 mb-2">Expertise</h3>
                            <p className="text-[#5d4037]">Sustainable Design</p>
                            <p className="text-[#5d4037]">Urban Planning</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "premium-modernist",
        name: "Modernist Grid",
        type: "premium",
        description: "Strict grid layout with bold typography for maximum impact.",
        Component: () => (
            <div className="w-full h-full bg-white p-5 text-[8px] flex flex-col shadow-sm font-sans">
                <h1 className="text-3xl font-black text-black leading-none mb-1">DATA</h1>
                <h1 className="text-3xl font-black text-gray-300 leading-none mb-6">SCIENTIST</h1>

                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <div className="border-t-2 border-black pt-1">
                        <h3 className="font-bold text-black mb-1">01. CONTACT</h3>
                        <p className="text-gray-500">user@domain.com</p>
                    </div>
                    <div className="border-t-2 border-gray-200 pt-1">
                        <h3 className="font-bold text-gray-400 mb-1">02. EDUCATION</h3>
                        <p className="text-gray-500">PhD Statistics</p>
                    </div>
                    <div className="col-span-2 border-t-2 border-black pt-1">
                        <h3 className="font-bold text-black mb-2">03. EXPERIENCE</h3>
                        <div className="flex justify-between">
                            <span className="font-bold">Tech Giant</span>
                            <span className="text-gray-400">2021-2023</span>
                        </div>
                        <p className="text-gray-600 mt-1">Developed ML models.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "premium-executive",
        name: "The Executive",
        type: "premium",
        description: "High-end, elegant design for C-suite professionals.",
        Component: () => (
            <div className="w-full h-full bg-slate-50 p-6 text-[8px] flex flex-col shadow-sm font-serif">
                <div className="flex justify-between items-center border-b-[0.5px] border-slate-300 pb-4 mb-5">
                    <h1 className="text-lg text-slate-800 tracking-widest uppercase">Jonathan <br /><span className="font-bold text-xl">Pierce</span></h1>
                    <div className="text-right text-slate-500">
                        <p>CEO / FOUNDER</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-1/3">
                        <h3 className="text-slate-800 font-bold uppercase tracking-wider mb-2 text-[7px]">Expertise</h3>
                        <ul className="text-slate-600 space-y-1">
                            <li>Strategic Planning</li>
                            <li>Global Operations</li>
                            <li>M&A</li>
                        </ul>
                    </div>
                    <div className="w-2/3 border-l-[0.5px] border-slate-200 pl-4">
                        <h3 className="text-slate-800 font-bold uppercase tracking-wider mb-3 text-[7px]">Career History</h3>
                        <div className="mb-3">
                            <p className="font-bold text-slate-800">Pierce Holdings</p>
                            <p className="text-slate-500 italic mb-1">Chief Executive Officer</p>
                            <p className="text-slate-600 leading-relaxed">Expanded market share by 200% over 5 years.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

// Helper component for the Badge
export const PremiumBadge = () => (
    <div className="absolute top-2 right-2 z-10 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
        <Lock size={10} />
        PREMIUM
    </div>
);
