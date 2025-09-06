// src/lib/utils.ts
import { defaultLocale, locales } from './i18n/settings';

export async function getDictionary(locale: string) {
    // Validate locale
    if (!locales.includes(locale as never)) {
        locale = defaultLocale;
    }

    try {
        return await import(`@/lib/i18n/dictionaries/${locale}.json`)
            .then((module) => module.default);
    } catch (_e) {
        console.warn(`Missing dictionary for: ${locale}`);
        return {};
    }
}