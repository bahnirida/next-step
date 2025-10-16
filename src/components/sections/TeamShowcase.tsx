// src/components/sections/TeamShowcase.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    photo: string; // path to photo
    social?: {
        linkedin?: string;
        twitter?: string;
    };
}

interface TeamShowcaseProps {
    dictionary: {
        title: string;
        subtitle: string;
        team: TeamMember[];
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

export default function TeamShowcase({ dictionary, currentLang }: TeamShowcaseProps) {
    return (
        <section id="about" className="relative pt-24 bg-white">
            <div className="absolute top-3 left-3 hidden md:block ">
                <Image
                    src="/illustrations/flightLignes-10.svg"
                    alt="Flight path from home to destination"
                    width={300}
                    height={150}
                    className="w-96 h-auto opacity-30 transform"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                        {dictionary.title}
                    </h2>
                    <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                        {dictionary.subtitle}
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-5">
                    {dictionary.team.map((member) => (
                        <div
                            key={member.id}
                            className="bg-neutral-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <div
                                    className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <Image
                                        src={`/team/${member.photo}`}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        priority={false}
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                                {member.name}
                            </h3>
                            <p className="text-primary-600 font-medium mb-4">
                                {member.role}
                            </p>
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                {member.bio}
                            </p>
                            <Link
                                href={`/${currentLang}${dictionary.cta.link}`}
                                className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
                            >
                                {dictionary.cta.text}
                            </Link>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
