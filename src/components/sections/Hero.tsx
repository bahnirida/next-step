// src/components/sections/Hero.tsx
'use client';

import Link from 'next/link';
import { Earth } from 'lucide-react';
import Image from 'next/image'; // For optimized images

interface HeroProps {
    dictionary?: {
        title: string;
        subtitle: string;
        cta: string;
        rating: string;
        trust: string;
        watchHowItWorks: string;
    };
    currentLang?: string;
}

export default function Hero({ dictionary, currentLang = 'en' }: HeroProps) {
    const t = dictionary || {
        title: "MAKE YOUR NEXT STEP",
        subtitle: "Your Global Education Journey Starts Here\nWe guide students to top universities abroad — from applications to visas, scholarships to settling in.",
        cta: "Book Free Consultation",
        rating: "★★★★★ 4.9/5 from 2,300+ students & parents",
        trust: "Trusted by Students in 50+ Countries",
        watchHowItWorks: "Watch How It Works →",
    };

    const isRTL = currentLang === 'ar';
    const textAlignClass = isRTL ? 'text-right' : 'text-left';

    const subtitleLines = t.subtitle.split('\n');

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-screen md:h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/bgHero.jpg"
                    alt="Student studying abroad"
                    fill
                    className="object-center opacity-70"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            {/* Flight Path — Top-Left, Vertical */}
            <div className="absolute top-3 hidden md:block left-0">
                <Image
                    src="/illustrations/flightLignes-5.svg"
                    alt="Flight path from home to destination"
                    width={300}
                    height={150}
                    className="w-72 h-auto opacity-90 transform"
                />
            </div>
            <div className="absolute bottom-3 hidden md:block right-0">
                <Image
                    src="/illustrations/flightLignes-6.svg"
                    alt="Flight path from home to destination"
                    width={500}
                    height={250}
                    className="w-72 h-auto opacity-90 transform"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
                <div className={`${textAlignClass} max-w-4xl mx-auto md:mx-0 px-4 md:px-0`}>

                    {/* Trust Badge - Top Left */}
                    <div
                        className="inline-block bg-white border border-neutral-200 rounded-full px-4 py-1.5 text-sm font-medium text-neutral-700 mb-6 shadow-sm">
                        <Earth className="text-blue-600 w-4 h-4 mr-2 inline"/>
                        {t.trust}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                        {t.title}
                    </h1>

                    {/* Subtitle */}
                    <div className="text-xl md:text-2xl text-white mb-10 leading-relaxed">
                        {subtitleLines.map((line, i) => (
                            <span key={i}>
                {line}
                                {i < subtitleLines.length - 1 && <br/>}
              </span>
                        ))}
                    </div>

                    {/* CTA Buttons — LEFT ALIGNED */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Link
                            href={`/${currentLang}/contact`}
                            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            {t.cta}
                        </Link>

                        <button
                            onClick={() => document.getElementById('video')?.scrollIntoView({behavior: 'smooth'})}
                            className="hidden sm:flex items-center text-white hover:text-primary-200 font-medium"
                        >
                            {isRTL ? '← شاهد كيف يعمل' : t.watchHowItWorks}
                        </button>
                    </div>

                    {/* Rating */}
                    <div className="text-sm text-white">
                        {t.rating}
                    </div>


                </div>
            </div>
        </section>
    );
}