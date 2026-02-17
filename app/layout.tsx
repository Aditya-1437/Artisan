import type { Metadata } from "next";
import { Inter, Playfair_Display, Courier_Prime, Shadows_Into_Light } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const courier = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-courier",
  display: "swap",
});

const shadows = Shadows_Into_Light({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shadows",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resume Artisan - Build Your Professional Story",
  description: "Create ATS-friendly, beautifully designed resumes in minutes.",
};

import { LoadingProvider } from "@/lib/context/LoadingContext";
import GlobalLoader from "@/components/GlobalLoader";
import GlobalClickInterceptor from "@/components/GlobalClickInterceptor";

// ... imports remain the same

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${courier.variable} ${shadows.variable} antialiased bg-background text-foreground`}
      >
        <LoadingProvider>
          <GlobalLoader />
          <GlobalClickInterceptor />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
