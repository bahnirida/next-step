// src/components/sections/TeamShowcase.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TeamShowcaseProps {
    dictionary: {
        title: string;
        subtitle: string;
        team: unknown[];
        stats: {
            students: string;
            successRate: string;
            countries: string;
        };
        cta: {
            text: string;
            link: string;
        };
    };
    currentLang: string;
}

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    { name: 'Khilola Alimjanova', role: 'Founder & Operations Lead (Latvia)', image: '/members/khilola.png' },
    { name: 'Mouhssine Jaouhari Tissafi', role: 'Co-founder & Head of product', image: '/members/mouhssine.png' },
    { name: 'Shehan Senarathne', role: 'Business developer', image: '/members/shehan.png' },
    { name: 'Spiridonova Tuiara', role: 'Marketing & Social Media Lead', image: '/members/spiridonova.png' },
    { name: 'Chamara Kelum', role: 'Partnerships & Student Success Lead', image: '/members/chamara.png' },
    { name: 'Sanil Basrani', role: 'Regional Coordinator (South Asia)', image: '/members/sanil.png' },
];

export default function TeamShowcase({ dictionary, currentLang }: TeamShowcaseProps) {
    const [visibleCards, setVisibleCards] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(visibleCards);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            const nextVisibleCards = width < 640 ? 1 : width < 1024 ? 2 : 3;
            setVisibleCards((prev) => (prev === nextVisibleCards ? prev : nextVisibleCards));
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    useEffect(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleCards);
    }, [visibleCards]);

    const extendedMembers = useMemo(() => {
        if (teamMembers.length === 0) {
            return [];
        }

        const prefix = teamMembers.slice(-visibleCards);
        const suffix = teamMembers.slice(0, visibleCards);
        return [...prefix, ...teamMembers, ...suffix];
    }, [visibleCards]);

    const totalMembers = teamMembers.length;
    const maxIndex = visibleCards + totalMembers - 1;
    const slideWidth = 100 / visibleCards;

    const nextSlide = () => {
        if (!totalMembers) {
            return;
        }
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (!totalMembers) {
            return;
        }
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (!totalMembers) {
            return;
        }

        if (currentIndex > maxIndex) {
            setIsTransitioning(false);
            setCurrentIndex(visibleCards);
        } else if (currentIndex < visibleCards) {
            setIsTransitioning(false);
            setCurrentIndex(maxIndex);
        }
    };

    return (
        <section id="about" className="relative pt-24 bg-white">
            <div className="absolute top-3 left-3 hidden md:block">
                <Image
                    src="/illustrations/flightLignes-10.svg"
                    alt="Flight path from home to destination"
                    width={300}
                    height={150}
                    className="w-96 h-auto opacity-30 transform"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                        {dictionary.title}
                    </h2>
                    <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                        {dictionary.subtitle}
                    </p>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={prevSlide}
                        aria-label="Previous team members"
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-2xl text-neutral-700 shadow-lg transition hover:bg-white"
                    >
                        ‹
                    </button>
                    <div className="overflow-hidden p-10 sm:p-12">
                        <div
                            className="flex items-stretch"
                            style={{
                                transform: `translateX(-${currentIndex * slideWidth}%)`,
                                transition: isTransitioning ? 'transform 500ms ease' : 'none',
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {extendedMembers.map((member, index) => (
                                <div
                                    key={`${member.name}-${index}`}
                                    className="px-4 shrink-0"
                                    style={{ width: `${slideWidth}%` }}
                                >
                                    <article className="h-full rounded-3xl bg-white/60 p-8 text-center shadow-md ring-1 ring-black/5 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                                        <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={128}
                                                height={128}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-neutral-900">
                                            {member.name}
                                        </h3>
                                        <p className="mt-2 text-sm text-neutral-600">
                                            {member.role}
                                        </p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Next team members"
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-2xl text-neutral-700 shadow-lg transition hover:bg-white"
                    >
                        ›
                    </button>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href={`/${currentLang}${dictionary.cta.link}`}
                        className="inline-block rounded-xl bg-accent-500 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-accent-600"
                    >
                        {dictionary.cta.text}
                    </Link>
                </div>
            </div>
        </section>
    );
}
