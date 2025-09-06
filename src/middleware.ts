// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './lib/i18n/settings';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Skip if path is for static files, API, etc.
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/favicon.ico') ||
        pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js)$/i)
    ) {
        return NextResponse.next();
    }

    // Check if pathname already has a valid locale
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if no locale found
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    }

    return NextResponse.next();
}

function getLocale(request: NextRequest): string {
    // Get preferred locale from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
        const languages = acceptLanguage.split(',').map((lang) => lang.split(';')[0]);
        for (const lang of languages) {
            const code = lang.split('-')[0]; // 'en-US' → 'en'
            if (locales.includes(code as (typeof locales)[number])) {
                return code;
            }
        }
    }
    return defaultLocale;
}

// 👇 MUST EXPORT CONFIG — tells Next.js which paths to run middleware on
export const config = {
    matcher: [
        // Run middleware on all routes EXCEPT:
        '/((?!api|_next|.*\\..*).*)',
    ],
};