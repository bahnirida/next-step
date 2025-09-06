// src/app/[lang]/layout.tsx
import { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import { getDictionary } from '@/lib/utils';
import { locales } from '@/lib/i18n/settings';

interface LocaleLayoutProps {
    children: ReactNode;
    params: Promise<{ lang: string }>; // 👈 params is now a Promise!
}

export default async function LocaleLayout({
                                               children,
                                               params, // ← Don't destructure yet!
                                           }: LocaleLayoutProps) {
    // ✅ AWAIT params FIRST
    const { lang } = await params;

    // Validate lang
    if (!locales.includes(lang as (typeof locales)[number])) {
        return <div>Language not supported</div>;
    }

    // Load dictionary
    const dictionary = await getDictionary(lang);
    const isRTL = lang === 'ar' || lang === 'he';

    return (
        <div dir={isRTL ? 'rtl' : 'ltr'} lang={lang}>
            <Navbar
                dictionary={dictionary.nav}
                currentLang={lang}
            />
            <main className="min-h-screen">{children}</main>

        </div>
    );
}