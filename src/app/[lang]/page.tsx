// src/app/[lang]/page.tsx
import { getDictionary } from '@/lib/utils';
import Hero from '@/components/sections/Hero';
import Footer from "@/components/layout/Footer";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import CountriesShowcase from "@/components/sections/CountriesShowcase";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Hero
                dictionary={{
                    title: dictionary.hero.title,
                    subtitle: dictionary.hero.subtitle,
                    cta: dictionary.hero.cta,
                    rating: dictionary.hero.rating,
                    trust: dictionary.hero.trust,
                    watchHowItWorks: dictionary.hero.watchHowItWorks,
                }}
                currentLang={lang}
            />
            <ServicesShowcase dictionary={dictionary.services} currentLang={lang}/>
            <CountriesShowcase dictionary={dictionary.countries} currentLang={lang}/>
            {/* Add other sections here */}
            <Footer
                dictionary={dictionary.footer}
                currentLang={lang}
            />
        </>
    );
}