// src/components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Image from 'next/image';

interface FooterProps {
    dictionary: {
        logo: string;
        quickLinks: {
            title: string;
            home: string;
            about: string;
            services: string;
            blog: string;
            contact: string;
        };
        services: {
            title: string;
            universityApplications: string;
            visaGuidance: string;
            scholarshipAssistance: string;
            testPrep: string;
            preDeparture: string;
        };
        contact: {
            title: string;
            address: string;
            phone: string;
            email: string;
        };
        newsletter: {
            title: string;
            placeholder: string;
            button: string;
        };
        copyright: string;
    };
    currentLang: string;
}

export default function Footer({ dictionary, currentLang }: FooterProps) {
    const isRTL = currentLang === 'ar';

    return (
        <footer className="relative bg-neutral-900 text-white pt-16 pb-8">
            {/* Background Image — Behind everything */}
            <div className=" inset-0 -z-10">
                <Image
                    src="/footer/world.svg" // ← Make sure this path is correct
                    alt="World map background"
                    fill
                    className="object-cover opacity-5" // ← Increased from 20% to 40%
                    priority={false}
                    sizes="100vw"
                    onError={(e) => {
                        console.warn("Failed to load footer background");
                        e.currentTarget.style.display = "none";
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <Link href={`/${currentLang}`} className="flex items-center mb-4">
                            <Image
                                src={`/${dictionary.logo}`}
                                alt="Make Your Next Step Logo"
                                height={100}
                                width={140}
                                className="h-16 w-auto object-contain"
                                priority={false}
                            />
                        </Link>
                        <p className="text-neutral-400 mb-6 max-w-xs">
                            Guiding students to global education success since 2020.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-400 hover:text-white transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-white transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-white transition">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-white transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{dictionary.quickLinks.title}</h3>
                        <ul className="space-y-3">
                            <li><Link href={`/${currentLang}`} className="text-neutral-400 hover:text-white transition">• {dictionary.quickLinks.home}</Link></li>
                            <li><Link href={`/${currentLang}/about`} className="text-neutral-400 hover:text-white transition">• {dictionary.quickLinks.about}</Link></li>
                            <li><Link href={`/${currentLang}/services`} className="text-neutral-400 hover:text-white transition">• {dictionary.quickLinks.services}</Link></li>
                            <li><Link href={`/${currentLang}/blog`} className="text-neutral-400 hover:text-white transition">• {dictionary.quickLinks.blog}</Link></li>
                            <li><Link href={`/${currentLang}/contact`} className="text-neutral-400 hover:text-white transition">• {dictionary.quickLinks.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{dictionary.services.title}</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-neutral-400 hover:text-white transition">• {dictionary.services.universityApplications}</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white transition">• {dictionary.services.visaGuidance}</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white transition">• {dictionary.services.scholarshipAssistance}</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white transition">• {dictionary.services.testPrep}</a></li>
                            <li><a href="#" className="text-neutral-400 hover:text-white transition">• {dictionary.services.preDeparture}</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{dictionary.contact.title}</h3>
                        <div className="space-y-4 text-neutral-400">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                                <span>{dictionary.contact.address}</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3" />
                                <span>+1 (800) STUDY-NOW</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3" />
                                <span>info@makeyournextstep.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{dictionary.newsletter.title}</h3>
                        <p className="text-neutral-400 mb-4 text-sm">
                            Get study abroad tips, scholarship alerts, and more.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder={dictionary.newsletter.placeholder}
                                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition"
                            >
                                {dictionary.newsletter.button}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-neutral-500 mb-4 md:mb-0">
                        {dictionary.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}