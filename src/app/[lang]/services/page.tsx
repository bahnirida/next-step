// src/app/[lang]/about/page.tsx
import { getDictionary } from '@/lib/utils';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{dictionary.about.title}</h1>
            <p className="mt-4">{dictionary.about.description}</p>
        </div>
    );
}