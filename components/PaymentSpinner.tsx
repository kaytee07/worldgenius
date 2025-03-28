// components/PaymentSpinner.tsx
'use client';



export default function PaymentSpinner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
            <div className="relative w-16 h-16">
               
                <div className="absolute inset-0 border-4 border-hubtel-primary border-t-black rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-4 border-hubtel-secondary border-b-transparent rounded-full animate-spin-reverse"></div>
            </div>
            <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-800">Processing Payment</h3>
                <p className="text-sm text-gray-500">
                    Please wait while we verify your transaction
                </p>
            </div>
        </div>
    );
}