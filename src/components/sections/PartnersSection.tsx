// src/components/sections/PartnersSection.tsx
"use client";

import Image from "next/image";

const partners = [
    "/trusted-partners/Eka.jpg",
    "/trusted-partners/KTU.png",
    "/trusted-partners/lt.png",
    "/trusted-partners/lu.png",
    "/trusted-partners/Reseba.png",
    "/trusted-partners/TB.png",
    "/trusted-partners/vt.png"
];

function DuplicateSlider() {
    return (
        <div className="flex gap-8 sm:gap-10 select-none">
            {partners.map((src, index) => (
                <div
                    key={`${src}-${index}`}
                    className="flex items-center justify-center h-16 sm:h-20 w-36 sm:w-44 md:w-48 lg:w-56 rounded-xl bg-neutral-100/60 transition-transform duration-300 ease-out hover:scale-105"
                >
                    <Image
                        src={src}
                        alt={`Partner ${index + 1}`}
                        width={180}
                        height={80}
                        className="h-10 sm:h-12 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                    />
                </div>
            ))}
        </div>
    );
}

export default function PartnersSection() {
    return (
        <section id="partners" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-neutral-900 mb-10">
                    Our Trusted Partners
                </h2>
                <div className="overflow-hidden relative">
                    <div className="flex gap-10 animate-marquee-partners">
                        <DuplicateSlider />
                        <DuplicateSlider />
                    </div>
                </div>
            </div>
        </section>
    );
}
