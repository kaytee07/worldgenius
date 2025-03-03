"use client"
import { bestSelling, products } from '@/data'
import React, { useEffect } from 'react'
import { Staatliches } from 'next/font/google';
import { useSearchParams } from 'next/navigation'


const staatliches = Staatliches({
    subsets: ['latin'],
    weight: ['400'],
});





const NewArrivals = () => {
    const searchParams = useSearchParams();

    function truncateString(str: string, maxLength: number) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + '...';
        }
        return str;
    }
    

    useEffect(() => {
        // Check for specific Paystack parameters
        const reference = searchParams.get('reference');
        const status = searchParams.get('trxref');
        console.log(reference, status)
        if (reference || status) {
            // Clear only cart data (not entire localStorage)
            localStorage.removeItem('cart');
            const cleanUrl = window.location.pathname;
            window.history.replaceState(null, '', cleanUrl);

            // Redirect to success page with client-side navigation
            alert('success');

           
        } else if (status === 'failed') {
        
            alert('failed');
        }
    }, [searchParams]);

   


    // useEffect(() => {

    // }, [searchParams]);
    return (
        <div className="flex justify-center items-center flex-col mb-6">
            <div>
                <div className={`flex  py-6 ${staatliches.className}`}>
                    <h1 className='text-black text-4xl font-semibold tracking-wide'>BEST SELLING</h1>
                </div>
                <ul className={`grid grid-cols-2 gap-4 max-sm:gap-[5px] sm:grid-cols-3 lg:grid-cols-4 w-[93vw] font-bold`}>
                    {
                        Object.keys(bestSelling).slice(0, 4).map((item: string, index) => (
                            <div key={index} className="relative max-sm:grid flex flex-col bg-white shadow-sm border border-slate-200">
                               
                                <div className="relative overflow-hidden bg-clip-border">
                                    {index === 2 ? <div className="relative">
                                        <img className="absolute max-sm:left-20 max-sm:h-32 max-sm:w-32 left-28 h-44 w-44" src="/img/25tag.png" alt="tag" />
                                    </div> : ""}
                                    
                                    <img
                                        src={`${products[item as keyof typeof products].img}`}
                                        alt="card-image"
                                        className="h-full w-full"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="mb-2 flex items-center justify-between">
                                        <p className="text-slate-800 text-md">
                                            {truncateString(products[item as keyof typeof products].name, 10)}
                                        </p>
                                        <p className={`text-black text-md font-semibold`}>
                                            {
                                                                        index === 2 ? <span className="line-through mr-2 text-red-600">Sold Out</span> : <span>₵{products[item as keyof typeof products].price}</span>
                                                                    }           
                                        </p>
                                    </div>
                                    {index === 2 ? (
                                        <button
                                            className="rounded-md w-full mt-6 bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                            disabled
                                        >
                                            View Product
                                        </button>
                                    ) : (
                                        <a href={`/shop/${products[item as keyof typeof products].name.replace(/\s+/g, '').toLowerCase()}`}>
                                            <button
                                                className="rounded-md w-full mt-6 bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none"
                                                type="button"
                                            >
                                                View Product
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NewArrivals