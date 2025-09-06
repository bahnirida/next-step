// src/components/common/LanguageSwitcher.tsx
'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLang: string) => {
        // Preserve path: /about → /fr/about
        const newPath = pathname.replace(/^\/(ar|fr|en)/, `/${newLang}`);
        router.push(newPath);
    };

    return (
        <div className="relative">
            <label htmlFor="language-select" className="sr-only">
                Select Language
            </label>
            <select
                id="language-select"
                value={currentLang}
                onChange={(e) => switchLanguage(e.target.value)}
                className="bg-white border border-neutral-300 text-neutral-700 py-2 px-3 rounded-md text-sm font-medium hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                aria-label="Select Language"
            >
                <option value="en">En</option>
                <option value="fr">Fr</option>
                <option value="ar">Ar</option>
            </select>
        </div>
    );
}