'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaqItem } from '@/types/modules';

const FAQ: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    const faqs: FaqItem[] = [
        {
            id: 1,
            question: 'How do I place an order on the platform?',
            answer:
                'Simply browse restaurants in your area, add your favorite dishes to the cart, and proceed to checkout. You can customize items, add special instructions, and choose between delivery or pickup before confirming your order.',
        },
        {
            id: 2,
            question: 'Are all restaurant partners verified?',
            answer:
                'Absolutely. Every restaurant on our platform goes through a thorough verification process, including food safety compliance checks and quality assessments. We only partner with kitchens that meet our strict standards for hygiene and consistency.',
        },
        {
            id: 3,
            question: 'Can I modify or cancel my order after placing it?',
            answer:
                'You can modify or cancel your order within 60 seconds of confirmation. After that window, the kitchen begins preparing your meal. If you need urgent assistance, our support team is available to help resolve any issues.',
        },
        {
            id: 4,
            question: 'What payment methods do you accept?',
            answer:
                'We accept all major credit and debit cards, Apple Pay, Google Pay, and PayPal. For corporate accounts, we also support invoicing and monthly billing options. All transactions are encrypted and PCI-compliant for your security.',
        },
        {
            id: 5,
            question: 'How do you ensure food quality during delivery?',
            answer:
                'We use insulated thermal bags and real-time GPS tracking to ensure your food arrives hot and fresh. Our delivery partners follow strict handling protocols, and we offer a freshness guarantee—if something is not right, we will make it right.',
        },
    ];

    return (
        <section id='FAQ' className="w-full bg-white py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 md:mb-16 text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-[#22C55E]">
                        FAQ
                    </span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
                        Everything you need to know about ordering from your favorite local restaurants.
                        If you don&apos;t find your answer here, our team is just a message away.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map(faq => {
                        const isOpen = openId === faq.id;
                        const contentId = `faq-content-${faq.id}`;
                        const headerId = `faq-header-${faq.id}`;

                        return (
                            <div
                                key={faq.id}
                                className="rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                            >
                                <h3>
                                    <button
                                        type="button"
                                        id={headerId}
                                        aria-expanded={isOpen}
                                        aria-controls={contentId}
                                        onClick={() => toggleFaq(faq.id)}
                                        className="flex hover:cursor-pointer w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 rounded-2xl"
                                    >
                                        <span className="text-base font-semibold text-gray-900 pr-4">
                                            {faq.question}
                                        </span>
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dcfce7] transition-colors duration-200">
                                            {isOpen ? (
                                                <FaChevronDown className="h-4 w-4 text-[#22C55E]" strokeWidth={2.5} />
                                            ) : (
                                                <FaChevronUp className="h-4 w-4 text-[#22C55E]" strokeWidth={2.5} />
                                            )}
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    id={contentId}
                                    role="region"
                                    aria-labelledby={headerId}
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-5 pt-1 text-sm leading-relaxed text-gray-500">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;