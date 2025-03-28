// components/FailScreen.tsx
'use client';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

export default function FailScreen() {
    const currentUrl = window.location.href;

    function tryAgain () {
        window.location.href = currentUrl
    }

    useEffect(() => {
        console.log(currentUrl)
    }, [])
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-6 p-6 text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-full">
                <ExclamationTriangleIcon className="w-12 h-12 text-red-600" />
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">Payment Failed</h2>
                <p className="text-gray-600">
                    We couldn&apos;t process your payment. Please try again.
                </p>
               
            </div>

            <div className="flex gap-4 mt-4">
              
                <button
                    onClick={tryAgain}
                    className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}