// components/SuccessScreen.tsx
'use client';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function SuccessScreen({ reference }: { reference?: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-6 p-6 text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                <CheckCircleIcon className="w-12 h-12 text-green-600" />
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">Payment Successful!</h2>
                <p className="text-gray-600">
                    Thank you for your purchase. Your order is being processed.
                </p>
                {reference && (
                    <p className="text-sm text-gray-500 mt-2">
                        Reference: <span className="font-mono">{reference}</span>
                    </p>
                )}
            </div>

            <div className="flex gap-4 mt-4">
                <Link
                    href="/"
                    className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}