import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
    title: "Delete Account",
    description: "Instructions for deleting your SereneMind CBT account and associated data.",
};

export default function DeleteAccountPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-3xl">
            <h1 className="text-3xl font-serif font-bold mb-6 text-foreground">Delete Your Account</h1>

            <div className="prose prose-pink max-w-none text-foreground/80 leading-relaxed space-y-6">
                <p>
                    We respect your right to control your data. If you wish to delete your {siteConfig.name} account and all associated data, you can do so through the mobile application or by contacting our support team.
                </p>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">Option 1: Delete via App (Recommended)</h2>
                    <p>
                        The quickest way to delete your account is directly within the {siteConfig.shortName} app:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mt-2">
                        <li>Open the <strong>{siteConfig.shortName}</strong> app on your device.</li>
                        <li>Go to <strong>Settings</strong> (gear icon usually in the profile tab).</li>
                        <li>Select <strong>Account</strong> or <strong>Profile</strong>.</li>
                        <li>Scroll down and tap on <strong>Delete Account</strong>.</li>
                        <li>Confirm your choice. This action is irreversible.</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">Option 2: Request via Email</h2>
                    <p>
                        If you cannot access the app, you may request account deletion by emailing our support team. Please use the email address associated with your account so we can verify your identity.
                    </p>
                    <p className="mt-4">
                        <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
                        <br />
                        <strong>Subject:</strong> Account Deletion Request
                    </p>
                    <p className="text-sm text-secondary-foreground mt-2">
                        <em>Please allow up to 30 days for us to process email requests.</em>
                    </p>
                </section>

                <section className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mt-8">
                    <h3 className="text-lg font-semibold text-destructive mb-2">Important Note</h3>
                    <p className="text-sm text-secondary-foreground">
                        Deleting your account will permanently remove all your data, including mood logs, journal entries, and saved preferences.
                        This action cannot be undone. If you have an active subscription managed through Apple App Store or Google Play Store,
                        please ensure you cancel it separately in your device settings to prevent future billing.
                    </p>
                </section>
            </div>
        </div>
    );
}
