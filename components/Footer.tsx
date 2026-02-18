import { Heart } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
    return (
        <footer className="border-t bg-background py-12 md:py-16">
            <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row">

                <div className="flex flex-col items-center gap-2 md:items-start">
                    <span className="text-xl font-serif font-bold text-foreground">SereneMind</span>
                    <p className="text-sm text-secondary-foreground">
                        © {new Date().getFullYear()} SereneMind. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-muted-foreground">
                    <Link href="/app" className="hover:text-foreground">Download App</Link>
                    <Link href="/tools" className="hover:text-foreground">Tools</Link>
                    <Link href="/articles" className="hover:text-foreground">Articles</Link>
                    <Link href="/terms" className="hover:text-foreground">Terms</Link>
                    <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
                    <Link href="/delete-account" className="hover:text-foreground">Delete Account</Link>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">Contact</a>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    Made with <Heart className="h-4 w-4 text-accent fill-current" /> for you.
                </div>
            </div>
        </footer>
    );
}
