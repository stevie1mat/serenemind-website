import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | SereneMind CBT',
    description: 'Our commitment to your privacy. Learn how SereneMind CBT protects your personal data.',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
            <p className="text-secondary-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-serif font-semibold mb-4">1. Introduction</h2>
                    <p>
                        At SereneMind CBT ("we," "us," or "our"), we believe that privacy is a fundamental human right.
                        This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website
                        and use our mobile application (the "Service").
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif font-semibold mb-4">2. Data Collection & Use</h2>
                    <p className="mb-4">
                        We prioritize local-first storage. Most of your personal data, including mood logs and journal entries, is stored locally on your device.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personal Data:</strong> We may collect generic demographic data if you choose to sync your account, but this is optional.</li>
                        <li><strong>Usage Data:</strong> We collect anonymous usage statistics to improve app performance and user experience.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-serif font-semibold mb-4">3. Data Security</h2>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information.
                        While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts,
                        no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif font-semibold mb-4">4. No Selling of Data</h2>
                    <p>
                        We certainly do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.
                        This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you,
                        so long as those parties agree to keep this information confidential.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif font-semibold mb-4">5. Contact Us</h2>
                    <p>
                        If there are any questions regarding this privacy policy, you may contact us using the information below:
                        <br /><br />
                        <strong>SereneMind Support</strong><br />
                        support@serenemindcbt.com
                    </p>
                </section>
            </div>
        </div>
    );
}
