
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
    isLoading: boolean;
    startLoading: (callback: () => void) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = (callback: () => void) => {
        setIsLoading(true);
        setTimeout(() => {
            callback();
            setIsLoading(false);
        }, 3000); // 3 Seconds Duration
    };

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};
