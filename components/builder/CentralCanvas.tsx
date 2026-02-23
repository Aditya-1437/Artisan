"use client";

import { useBuilderStore } from "@/lib/store/useBuilderStore";
import { motion } from "framer-motion";

export default function CentralCanvas() {
    const resumeData = useBuilderStore(state => state.resumeData);

    return (
        <div id="artisan-resume-document" className="w-full h-full p-12 sm:p-16 bg-white flex flex-col font-serif text-black origin-top">

            {/* Context/Layout Animation Wrapper */}
            <motion.div layout className="flex flex-col h-full w-full">

                {/* 1. Header (ATS Friendly, Centered, Clean) */}
                <motion.header layout className="text-center mb-6">
                    <motion.h1 layout="position" className="text-3xl font-bold uppercase tracking-wider mb-2">
                        {resumeData.personalInfo.fullName || "Your Full Name"}
                    </motion.h1>

                    <motion.div layout className="flex flex-wrap justify-center items-center gap-x-2 text-[11px] font-sans">
                        {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                        {resumeData.personalInfo.email && resumeData.personalInfo.phone && <span>|</span>}
                        {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                        {(resumeData.personalInfo.email || resumeData.personalInfo.phone) && resumeData.personalInfo.location && <span>|</span>}
                        {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
                    </motion.div>

                    <motion.div layout className="flex flex-wrap justify-center items-center gap-x-2 text-[11px] font-sans mt-0.5">
                        {resumeData.personalInfo.linkedin && <span>{resumeData.personalInfo.linkedin}</span>}
                        {resumeData.personalInfo.linkedin && resumeData.personalInfo.website && <span>|</span>}
                        {resumeData.personalInfo.website && <span>{resumeData.personalInfo.website}</span>}
                    </motion.div>
                </motion.header>

                {/* 2. Professional Summary */}
                {resumeData.summary && (
                    <motion.section layout className="mb-5">
                        <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-2">
                            Professional Summary
                        </h2>
                        <p className="text-[11px] leading-relaxed font-sans text-gray-800">
                            {resumeData.summary}
                        </p>
                    </motion.section>
                )}

                {/* 3. Experience */}
                {resumeData.experience && resumeData.experience.length > 0 && (
                    <motion.section layout className="mb-5">
                        <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-2">
                            Experience
                        </h2>
                        <div className="flex flex-col gap-4">
                            {resumeData.experience.map(exp => (
                                <motion.div layout key={exp.id}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[12px] font-bold">{exp.role || "Job Title"}</h3>
                                        <span className="text-[11px] font-sans">{exp.date || "Date Range"}</span>
                                    </div>
                                    <div className="text-[11px] font-bold italic mb-1 font-sans">{exp.company || "Company Name"}</div>
                                    {exp.description && (
                                        <ul className="list-disc list-inside text-[11px] leading-relaxed font-sans text-gray-800 pl-2">
                                            {/* Simple logic to split by newlines into bullets just in case they typed a paragraph, but typically ATS resumes are bullets */}
                                            {exp.description.split('\n').map((line, i) => (
                                                <li key={i}>{line}</li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* 4. Education */}
                {resumeData.education && resumeData.education.length > 0 && (
                    <motion.section layout className="mb-5">
                        <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-2">
                            Education
                        </h2>
                        <div className="flex flex-col gap-3">
                            {resumeData.education.map(edu => (
                                <motion.div layout key={edu.id}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-[12px] font-bold">{edu.school || "Institution Name"}</h3>
                                        <span className="text-[11px] font-sans">{edu.date || "Graduation Year"}</span>
                                    </div>
                                    <div className="text-[11px] font-sans">{edu.degree || "Degree Earned"}</div>
                                    {edu.description && (
                                        <div className="text-[11px] font-sans italic text-gray-700 mt-0.5">{edu.description}</div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* 5. Achievements & Certifications */}
                {resumeData.achievements && resumeData.achievements.length > 0 && (
                    <motion.section layout className="mb-5">
                        <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-2">
                            Achievements & Certifications
                        </h2>
                        <div className="flex flex-col gap-3">
                            {resumeData.achievements.map(ach => (
                                <motion.div layout key={ach.id}>
                                    <div className="flex justify-between items-baseline">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-[12px] font-bold">{ach.title || "Achievement Title"}</h3>
                                            {ach.link && (
                                                <a href={ach.link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-600 hover:text-blue-800 underline font-sans">
                                                    [Link]
                                                </a>
                                            )}
                                        </div>
                                        <span className="text-[11px] font-sans">{ach.date || "Year"}</span>
                                    </div>
                                    <div className="text-[11px] font-sans italic">{ach.issuer || "Issuer / Organization"}</div>
                                    {ach.description && (
                                        <div className="text-[11px] font-sans text-gray-800 mt-0.5">{ach.description}</div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* 5. Skills */}
                {resumeData.skills && (
                    <motion.section layout className="mb-5">
                        <h2 className="text-[13px] font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-2">
                            Skills
                        </h2>
                        <p className="text-[11px] leading-relaxed font-sans text-gray-800">
                            {resumeData.skills}
                        </p>
                    </motion.section>
                )}

            </motion.div>
        </div>
    );
}
