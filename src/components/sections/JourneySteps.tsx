// src/components/sections/JourneySteps.tsx
'use client';

import Image from 'next/image';

interface JourneyStep {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface JourneyStepsProps {
    dictionary: {
        title: string;
        subtitle: string;
        steps: JourneyStep[];
        cta: {
            text: string;
            link: string;
        };
    };
    currentLang: string;
}

export default function JourneySteps({ dictionary, currentLang }: JourneyStepsProps) {
    return (
        <section className="py-24 bg-white">
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

                {/* Image */}
                <div className="flex justify-center mb-16">
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/steps.svg"
                            alt="Man holding air ticket"
                            fill
                            className="object-cover"
                            priority={false}
                        />
                    </div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dictionary.steps.map((step) => (
                        <div
                            key={step.id}
                            className="text-center p-6 rounded-xl bg-neutral-50 hover:bg-white transition-all duration-300 border border-neutral-200"
                        >
                            <div className="mb-4 flex justify-center">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-neutral-700 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => {
                            window.location.href = `/${currentLang}${dictionary.cta.link}`;
                        }}
                        className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {dictionary.cta.text}
                    </button>
                </div>
            </div>
        </section>
    );
}