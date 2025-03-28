'use client';

import FailScreen from '@/components/FailScreen';
import PaymentSpinner from '@/components/PaymentSpinner';
import SuccessScreen from '@/components/SuccessScreen';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PaymentVerify() {
    const [status, setStatus] = useState<'pending' | 'verified' | 'failed'>('pending');
    const params = useSearchParams();

    useEffect(() => {
        const verify = async () => {
            const ref = params.get('reference') || localStorage.getItem('paymentRef');

            try {
                const res = await fetch(`/api/payment/verify?reference=${ref}`);
                const data = await res.json();
                console.log(data)
                if (data.status === 'Success') {
                    setStatus('verified');
                    localStorage.removeItem('paymentRef');
                } else {
                    setStatus('failed');
                    
                }

                
            } catch (error) {
                setStatus('failed');
                console.log(error);
            } finally {
                console.log(status)
            }
        };

        verify();
    }, []);

    return (
        <div className="verify-container max-md:h-[70vh] h-[54vh]">
            {status === 'pending' && <PaymentSpinner />}
            {status === 'verified' && <SuccessScreen />}
            {status === 'failed' && <FailScreen />}
        </div>
    );
}