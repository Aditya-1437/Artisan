import { create } from 'zustand';

export interface Experience {
    id: string;
    role: string;
    company: string;
    date: string;
    description: string;
}

export interface Education {
    id: string;
    degree: string;
    school: string;
    date: string;
    description: string;
}

export interface Achievement {
    id: string;
    title: string;
    issuer: string;
    date: string;
    link: string;
    description: string;
}

export interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
}

export interface ResumeData {
    personalInfo: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    achievements: Achievement[];
    skills: string;
}

interface BuilderState {
    resumeData: ResumeData;
    activePalette: string | null;
    isDownloadModalOpen: boolean;
    setActivePalette: (paletteId: string | null) => void;
    setDownloadModalOpen: (isOpen: boolean) => void;
    updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
    updateSummary: (summary: string) => void;
    addExperience: () => void;
    updateExperience: (id: string, exper: Partial<Experience>) => void;
    removeExperience: (id: string) => void;
    addEducation: () => void;
    updateEducation: (id: string, edu: Partial<Education>) => void;
    removeEducation: (id: string) => void;
    addAchievement: () => void;
    updateAchievement: (id: string, ach: Partial<Achievement>) => void;
    removeAchievement: (id: string) => void;
    updateSkills: (skills: string) => void;
}

const initialResumeData: ResumeData = {
    personalInfo: {
        fullName: "Aditya",
        email: "hello@artisan.co",
        phone: "+1 234 567 890",
        location: "San Francisco, CA",
        linkedin: "linkedin.com/in/aditya",
        website: "artisan.co",
    },
    summary: "Creative developer with a passion for building beautiful, high-performance web applications.",
    experience: [
        {
            id: "1",
            role: "Senior Frontend Engineer",
            company: "Artisan Studio",
            date: "2023 - Present",
            description: "Leading the development of next-generation web tools using React, Next.js, and Framer Motion."
        }
    ],
    education: [
        {
            id: "1",
            degree: "B.S. Computer Science",
            school: "Tech University",
            date: "2019 - 2023",
            description: "Specialized in Human-Computer Interaction and UI/UX Design."
        }
    ],
    achievements: [],
    skills: "React, Next.js, Framer Motion, TypeScript, Tailwind CSS, UI/UX Design",
};

export const useBuilderStore = create<BuilderState>((set) => ({
    resumeData: initialResumeData,
    activePalette: null, // 'profile', 'experience', 'education', 'skills', 'achievements', etc.
    isDownloadModalOpen: false,

    setActivePalette: (paletteId) => set({ activePalette: paletteId }),
    setDownloadModalOpen: (isOpen) => set({ isDownloadModalOpen: isOpen }),

    updatePersonalInfo: (info) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            personalInfo: { ...state.resumeData.personalInfo, ...info }
        }
    })),

    updateSummary: (summary) => set((state) => ({
        resumeData: { ...state.resumeData, summary }
    })),

    addExperience: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: [
                ...state.resumeData.experience,
                { id: crypto.randomUUID(), role: "", company: "", date: "", description: "" }
            ]
        }
    })),

    updateExperience: (id, exper) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.map(e => e.id === id ? { ...e, ...exper } : e)
        }
    })),

    removeExperience: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.filter(e => e.id !== id)
        }
    })),

    addEducation: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: [
                ...state.resumeData.education,
                { id: crypto.randomUUID(), degree: "", school: "", date: "", description: "" }
            ]
        }
    })),

    updateEducation: (id, edu) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.map(e => e.id === id ? { ...e, ...edu } : e)
        }
    })),

    removeEducation: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.filter(e => e.id !== id)
        }
    })),

    addAchievement: () => set((state) => ({
        resumeData: {
            ...state.resumeData,
            achievements: [
                ...state.resumeData.achievements,
                { id: crypto.randomUUID(), title: "", issuer: "", date: "", link: "", description: "" }
            ]
        }
    })),

    updateAchievement: (id, ach) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            achievements: state.resumeData.achievements.map(a => a.id === id ? { ...a, ...ach } : a)
        }
    })),

    removeAchievement: (id) => set((state) => ({
        resumeData: {
            ...state.resumeData,
            achievements: state.resumeData.achievements.filter(a => a.id !== id)
        }
    })),

    updateSkills: (skills) => set((state) => ({
        resumeData: { ...state.resumeData, skills }
    })),
}));
