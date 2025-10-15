// src/components/common/LanguageSwitcher.tsx
'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react'; // ✅ Added useState, useEffect, useRef

interface LanguageOption {
    value: string;
    label: string;
    flag: string; // path to SVG
}

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // ✅ State for dropdown
    const dropdownRef = useRef<HTMLDivElement>(null); // ✅ Ref for click outside detection

    const languages: LanguageOption[] = [
        { value: 'en', label: 'English', flag: '/flags/en.svg' },
        { value: 'fr', label: 'Français', flag: '/flags/fr.svg' },
        { value: 'ar', label: 'العربية', flag: '/flags/ar.svg' },
        { value: 'ru', label: 'Русский', flag: '/flags/ru.svg' },
        { value: 'hi', label: 'हिन्दी', flag: '/flags/in.svg' },
    ];

    const currentLangObj = languages.find(lang => lang.value === currentLang) || languages[0];

    const switchLanguage = (newLang: string) => {
        const knownLocales = languages.map((lang) => lang.value).join('|');
        const localePattern = new RegExp(`^/(${knownLocales})(?=/|$)`);
        const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
        const newPath = normalizedPath.match(localePattern)
            ? normalizedPath.replace(localePattern, `/${newLang}`)
            : `/${newLang}${normalizedPath === '/' ? '' : normalizedPath}`;
        router.push(newPath);
        setIsOpen(false); // ✅ Close dropdown after selection
    };

    // ✅ Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}> {/* ✅ Added ref */}
            {/* Current Language Button */}
            <button
                id="language-button"
                aria-label={`Current language: ${currentLangObj.label}. Click to change.`}
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)} // ✅ Toggle on click
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
            {/* ✅ Changed from group-hover to conditional rendering */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
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
            )}
        </div>
    );
}
