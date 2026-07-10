import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/hunger.png";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-neutral-50 text-neutral-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                {/* Main grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <Image
                                src={Logo}
                                alt="Hunger Logo"
                                width={130}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                        <p className="mt-5 text-sm leading-relaxed text-neutral-500 max-w-xs">
                            Bringing fresh and quality food to your table with affordable prices, trusted sellers, and a seamless shopping experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About", href: "/about" },
                                { label: "All Foods", href: "/TODO" },
                                { label: "Add Food", href: "/TODO" },
                                { label: "Manage Foods", href: "/TODO" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-5">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: "FAQ", href: "/#FAQ" },
                                { label: "Contact", href: "/#Contact" },
                                { label: "Our Outlets", href: "/TODO" },
                                { label: "Privacy Policy", href: "/#PrivacyPolicy" },
                                { label: "Trending Meals", href: "/TODO" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-5">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:hello@hunger.example.com"
                                    className="inline-flex items-center gap-3 text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200 group"
                                >
                                    <FaEnvelope className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors duration-200 shrink-0" />
                                    <span>hello@hunger.example.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+15551234567"
                                    className="inline-flex items-center gap-3 text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200 group"
                                >
                                    <FaPhoneAlt className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors duration-200 shrink-0" />
                                    <span>+1 (555) 123-4567</span>
                                </a>
                            </li>
                            <li>
                                <span className="inline-flex items-start gap-3 text-sm text-neutral-500">
                                    <FaMapMarkerAlt className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                                    <span>
                                        123 Food Street
                                        <br />
                                        San Francisco, CA 94102
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 mb-5">
                            Follow Us
                        </h3>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
                                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-100 transition-colors duration-200"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-neutral-400 text-center sm:text-left">
                        &copy; 2026 Hunger. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;