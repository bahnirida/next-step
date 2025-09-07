// src/components/sections/CountriesShowcase.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface CountryItem {
    code: string;
    name: string;
    flag: string;
}

interface CountriesShowcaseProps {
    dictionary: {
        title: string;
        subtitle: string;
        countries: CountryItem[];
        cta: {
            text: string;
            link: string;
        };
    };
    currentLang: string;
}

export default function CountriesShowcase({ dictionary, currentLang }: CountriesShowcaseProps) {
    const evenCountries = dictionary.countries.filter((_, i) => i % 2 === 0);
    const oddCountries = dictionary.countries.filter((_, i) => i % 2 === 1);

    // Detect RTL language
    const isRTL = currentLang?.startsWith("ar");

    // Choose animation class based on direction and language
    const tickerClass = (base: "left" | "right") => {
        if (isRTL) {
            // swap directions for RTL so visual flow stays consistent
            return base === "left" ? "animate-marquee-right" : "animate-marquee-left";
        }
        return base === "left" ? "animate-marquee-left" : "animate-marquee-right";
    };

    const renderTickerLine = (countries: CountryItem[], baseDirection: "left" | "right") => (
        <div className="relative w-full overflow-hidden" dir="ltr">
            <div className={`flex gap-4 whitespace-nowrap will-change-transform ${tickerClass(baseDirection)}`}>
                {[...countries, ...countries].map((country, index) => (
                    <div
                        key={`${country.code}-${index}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-lg font-medium text-primary-600 w-auto flex-shrink-0"
                    >
                        <Image
                            src={`/flags/${country.flag}`}
                            alt={country.name ? `Flag of ${country.name}` : "Country flag"}
                            width={28}
                            height={28}
                            className="rounded-full"
                        />
                        <span dir="auto" className="whitespace-nowrap">
              {country.name}
            </span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
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

                {/* Dual Tickers */}
                <div className="space-y-8">
                    {renderTickerLine(evenCountries, "right")}
                    {renderTickerLine(oddCountries, "left")}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href={`/${currentLang}${dictionary.cta.link}`}
                        className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {dictionary.cta.text}
                    </Link>
                </div>
            </div>
        </section>
    );
}
