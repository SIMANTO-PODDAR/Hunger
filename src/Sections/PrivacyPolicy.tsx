import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface PrivacyPoint {
    id: number;
    text: string;
}

const PrivacyPolicy: React.FC = () => {
    const privacyPoints: PrivacyPoint[] = [
        {
            id: 1,
            text: 'Your personal information is encrypted and stored securely with industry-standard protection measures.',
        },
        {
            id: 2,
            text: 'All payments are processed through trusted PCI-compliant providers. We never store your full card details.',
        },
        {
            id: 3,
            text: 'We never sell, rent, or share your personal data with third parties for marketing purposes.',
        },
        {
            id: 4,
            text: 'Your information is used solely to process orders, improve your experience, and provide customer support.',
        },
    ];

    return (
        <section id='PrivacyPolicy' className="w-full bg-white py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 md:mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#22C55E]">
                        Privacy
                    </span>
                    <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Your Privacy Matters
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
                        We take your trust seriously. Here is how we protect your data and respect your privacy
                        every time you order from our marketplace.
                    </p>
                </div>

                {/* Privacy Card */}
                <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-10">
                    <ul className="space-y-6">
                        {privacyPoints.map(point => (
                            <li key={point.id} className="flex items-start gap-4">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dcfce7]">
                                    <ShieldCheck className="h-4 w-4 text-[#22C55E]" strokeWidth={2.5} />
                                </div>
                                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                                    {point.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;