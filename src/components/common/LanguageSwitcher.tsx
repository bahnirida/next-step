// src/components/common/LanguageSwitcher.tsx
'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface LanguageOption {
    value: string;
    label: string;
    flag: string; // path to SVG
}

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const languages: LanguageOption[] = [
        { value: 'en', label: 'English', flag: '/flags/en.svg' },
        { value: 'fr', label: 'Français', flag: '/flags/fr.svg' },
        { value: 'ar', label: 'العربية', flag: '/flags/ar.svg' },
    ];

    const currentLangObj = languages.find(lang => lang.value === currentLang) || languages[0];

    const switchLanguage = (newLang: string) => {
        const newPath = pathname.replace(/^\/(ar|fr|en)/, `/${newLang}`);
        router.push(newPath);
    };

    return (
        <div className="relative group">
            {/* Current Language Button */}
            <button
                id="language-button"
                aria-label={`Current language: ${currentLangObj.label}. Click to change.`}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-neutral-300 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition shadow-sm"
            >
                <img
                    src={currentLangObj.flag}
                    alt={currentLangObj.label}
                    width={20}
                    height={16}
                    className="w-5 h-4 object-contain"
                    loading="lazy"
                />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.value}
                            onClick={() => switchLanguage(lang.value)}
                            className={`w-full flex items-center px-4 py-3 text-sm text-left hover:bg-neutral-50 transition-colors ${
                                currentLang === lang.value ? 'bg-primary-50 text-primary-700' : 'text-neutral-700'
                            }`}
                            aria-pressed={currentLang === lang.value}
                        >
                            <img
                                src={lang.flag}
                                alt={lang.label}
                                width={20}
                                height={16}
                                className="w-5 h-4 object-contain mr-3 flex-shrink-0"
                                loading="lazy"
                            />
                            <span className="font-medium">{lang.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}