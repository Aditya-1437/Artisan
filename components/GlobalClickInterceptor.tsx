
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoading } from "@/lib/context/LoadingContext";

export default function GlobalClickInterceptor() {
    const router = useRouter();
    const { startLoading } = useLoading();

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (link) {
                const href = link.getAttribute('href');

                // Only intercept internal links that aren't anchors or new tabs
                if (href &&
                    !href.startsWith('#') &&
                    !href.startsWith('mailto:') &&
                    !href.startsWith('tel:') &&
                    target.getAttribute('target') !== '_blank') {

                    e.preventDefault();
                    startLoading(() => {
                        router.push(href);
                    });
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [router, startLoading]);

    return null; // Logic only component
}
