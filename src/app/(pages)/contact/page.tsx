import BrowseFoodsBtn from '@/Components/BrowseFoodsBtn';
import { Mail, Phone, MapPin, Clock, Send, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact | Hunger",
};

const ContactPage: React.FC = () => {

    const contactCards = [
        {
            icon: Mail,
            title: 'Email Us',
            description: 'Our team typically responds within 2 hours during business hours.',
            detail: 'hello@hunger.example.com',
        },
        {
            icon: Phone,
            title: 'Call Us',
            description: 'We are available Monday to Friday from 8 AM to 6 PM.',
            detail: '+1 (555) 123-4567',
        },
        {
            icon: MapPin,
            title: 'Visit Our Office',
            description: 'Come say hello at our headquarters in the Bay Area.',
            detail: '123 Food Street, San Francisco, CA 94102',
        },
        {
            icon: Clock,
            title: 'Business Hours',
            description: 'Weekend inquiries will be addressed first thing Monday.',
            detail: 'Mon-Fri: 8:00 AM - 6:00 PM PST',
        },
    ];

    return (
        <section id='Contact' className="w-full bg-white py-5 md:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl">
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lightGreen border border-green-100 mb-8">
                        <Users className="w-4 h-4 text-[#22C55E] fill-[#22C55E]" />

                        <span className="text-sm font-medium text-[#22C55E]">
                            Contact
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading tracking-tight leading-tight mb-6">
                        Let&apos;s Talk
                    </h1>

                    <p className="text-lg sm:text-xl text-body leading-relaxed mb-10 max-w-2xl">
                        Whether you&apos;re a restaurant partner, a delivery driver, or a hungry customer, we&apos;re here to help.
                        Reach out and let&apos;s build a better food experience together.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Side - Contact Information */}
                    <div className="flex flex-col space-y-6">
                        {contactCards.map((card, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dcfce7]">
                                    <card.icon className="h-6 w-6 text-[#22C55E]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {card.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                                        {card.description}
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-gray-700">
                                        {card.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                        <form className="space-y-5" noValidate>
                            <div>
                                <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="John Carter"
                                    required
                                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    required
                                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Partnership Inquiry"
                                    required
                                    className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your restaurant or how we can help..."
                                    required
                                    className="block w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2 sm:w-auto w-full"
                                >
                                    <Send className="h-4 w-4" strokeWidth={2} />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <section className="py-10 lg:py-25 bg-alternate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl border border-border shadow-sm p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl font-bold text-heading mb-6">
                                Ready to discover your next favorite meal?
                            </h2>
                            <p className="text-lg text-body mb-10 leading-relaxed">
                                Browse hundreds of fresh, quality meals from trusted local sellers.
                                Your perfect dish is just a few clicks away.
                            </p>
                            <BrowseFoodsBtn />
                        </div>
                        {/* Decorative background shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lightGreen rounded-full opacity-50 blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lightGreen rounded-full opacity-50 blur-3xl -z-10" />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ContactPage;