// src/components/sections/ServicesShowcase.tsx
'use client';

import Link from 'next/link';
import { BookOpen, Medal, GraduationCap, Globe, Briefcase } from 'lucide-react';
import Image from "next/image";

interface ServicesShowcaseProps {
    dictionary: {
        title: string;
        subtitle: string;
        services: Array<{
            title: string;
            description: string;
            icon: 'book' | 'passport' | 'medal' | 'graduation' | 'globe' | 'briefcase';
        }>;
        cta: {
            title: string;
            subtitle: string;
            button: string;
        };
    };
    currentLang: string;
}

export default function ServicesShowcase({ dictionary, currentLang }: ServicesShowcaseProps) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'book':
                return <BookOpen className="w-8 h-8 text-primary-600" />;
            case 'medal':
                return <Medal className="w-8 h-8 text-primary-600" />;
            case 'graduation':
                return <GraduationCap className="w-8 h-8 text-primary-600" />;
            case 'globe':
                return <Globe className="w-8 h-8 text-primary-600" />;
            case 'briefcase':
                return <Briefcase className="w-8 h-8 text-primary-600" />;
            default:
                return <BookOpen className="w-8 h-8 text-primary-600" />;
        }
    };

    return (
        <section className="relative py-24 bg-white">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="absolute top-3 left-3 hidden md:block ">
                    <Image
                        src="/illustrations/flightLignes-8.svg"
                        alt="Flight path from home to destination"
                        width={300}
                        height={150}
                        className="w-72 h-auto opacity-30 transform"
                    />
                </div>
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                        {dictionary.title}
                    </h2>
                    <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                        {dictionary.subtitle}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {dictionary.services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-neutral-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                {getIcon(service.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link
                                href={`/${currentLang}/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-primary-600 hover:text-primary-700 font-medium flex items-center group"
                            >
                                Learn More
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div
                    className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {dictionary.cta.title}
                    </h3>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        {dictionary.cta.subtitle}
                    </p>
                    <Link
                        href={`/${currentLang}/contact`}
                        className="bg-white text-primary-600 hover:bg-neutral-100 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {dictionary.cta.button}
                    </Link>
                </div>
            </div>
        </section>
    );
}