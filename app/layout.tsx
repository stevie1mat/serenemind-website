import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SereneMind CBT | #1 Anime-Inspired Anxiety Relief & CBT Tools",
  description: "Find your calm with SereneMind CBT. Master anxiety with CBT-based tools, mood tracking, and a supportive community. Your daily companion for mental wellness.",
  keywords: ["Anxiety Relief", "CBT App", "SereneMind", "Mental Health", "Mood Tracker", "CBT Tools", "Panic Attack Help"],
  openGraph: {
    title: "SereneMind CBT",
    description: "The holistic CBT app for anxiety relief. Track moods, challenge thoughts, and find calm with evidence-based tools.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
