// src/components/common/LoadingSpinner.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingSpinner() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="text-center">
                <div className="mb-6">
                    <Image
                        src="/logo.jpg" // ← Your logo
                        alt="Make Your Next Step"
                        width={120}
                        height={40}
                        className="mx-auto"
                        priority
                    />
                </div>
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-accent-500"></div>
                <p className="mt-4 text-lg font-medium text-neutral-700">
                    Preparing your journey...
                </p>
            </div>
        </div>
    );
}