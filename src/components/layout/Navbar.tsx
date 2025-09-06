// src/components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Search, Menu, X } from 'lucide-react';
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

interface NavbarProps {
    dictionary: {
        logo: string;
        home: string;
        about: string;
        services: string;
        blog: string;
        contact: string;
    };
    currentLang: string;
}

export default function Navbar({ dictionary, currentLang }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: `/${currentLang}`, label: dictionary.home },
        { href: `/${currentLang}/about`, label: dictionary.about },
        { href: `/${currentLang}/services`, label: dictionary.services },
        { href: `/${currentLang}/blog`, label: dictionary.blog },
        { href: `/${currentLang}/contact`, label: dictionary.contact },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-neutral-200 w-full">
            {/* FULL-WIDTH BACKGROUND — content inside container */}
            <div className="w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href={`/${currentLang}`} className="flex items-center">
                                <img
                                    src={`/${dictionary.logo}`}
                                    alt="Make Your Next Step Logo"
                                    height="100"
                                    className="h-16 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Desktop Nav + Actions */}
                        <div className="hidden md:flex items-center space-x-8">

                            {/* Nav Links */}
                            <div className="flex space-x-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`text-sm lg:text-base font-medium transition-colors ${
                                            pathname === item.href
                                                ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                                                : 'text-neutral-700 hover:text-primary-600'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="h-6 w-px bg-neutral-300"></div>

                            {/* Phone */}
                            <a
                                href="tel:+18007883966"
                                className="hidden lg:flex items-center text-sm text-neutral-600 hover:text-primary-600 font-medium"
                            >
                                <Phone className="w-7 h-7 mr-2" />
                                +1 (800) STUDY-NOW
                            </a>

                            {/* Search */}
                            <button
                                onClick={() => alert('Search feature coming soon!')}
                                className="p-2 text-neutral-500 hover:text-primary-600 transition rounded-md hover:bg-neutral-100"
                                aria-label="Search"
                            >
                                <Search className="w-7 h-7" />
                            </button>
                            {/* Language Switcher */}
                            <LanguageSwitcher currentLang={currentLang} />
                            {/* Primary CTA Button */}
                            <Link
                                href={`/${currentLang}/contact`}
                                className="bg-accent-500 hover:bg-accent-600 px-5 py-2 text-white rounded-lg font-medium text-sm lg:text-base transition transform hover:scale-105 shadow-sm whitespace-nowrap"
                            >
                                Book Free Consultation
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-neutral-700 hover:text-primary-600 focus:outline-none rounded-md hover:bg-neutral-100"
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-neutral-200 w-full">
                    <div className="max-w-7xl mx-auto px-4 pt-4 pb-6 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-3 py-2 text-base font-medium rounded-md ${
                                    pathname === item.href
                                        ? 'bg-primary-50 text-primary-700'
                                        : 'text-neutral-700 hover:bg-neutral-50'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="pt-4 border-t border-neutral-200 space-y-3">
                            <a
                                href="tel:+18007883966"
                                className="flex items-center px-3 py-2 text-primary-600 font-medium rounded-md hover:bg-neutral-50"
                            >
                                <Phone className="w-4 h-4 mr-2"/>
                                +1 (800) STUDY-NOW
                            </a>

                            <button
                                onClick={() => {
                                    alert('Search feature coming soon!');
                                    setIsOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 text-neutral-600 font-medium rounded-md hover:bg-neutral-50 flex items-center"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5 mr-2"/>
                                Search
                            </button>
                            <div className="pt-2">
                                <LanguageSwitcher currentLang={currentLang}/>
                            </div>
                            <Link
                                href={`/${currentLang}/contact`}
                                className="w-full block bg-accent-500 hover:bg-accent-600 text-white text-center py-3 rounded-md font-medium transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}