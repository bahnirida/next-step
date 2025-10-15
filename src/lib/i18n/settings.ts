// src/lib/i18n/settings.ts
export const defaultLocale = 'ar';
export const locales = ['en', 'ar', 'fr', 'ru', 'hi'] as const;
export const localeNames: Record<(typeof locales)[number], string> = {
    en: 'English',
    ar: 'العربية',
    fr: 'Français',
    ru: 'Русский',
    hi: 'हिन्दी',
};
