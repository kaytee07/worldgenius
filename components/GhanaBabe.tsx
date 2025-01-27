"use client"
import { bestSelling, products } from '@/data'
import React, { useEffect } from 'react'
import { Staatliches } from 'next/font/google';
import { useSearchParams } from 'next/navigation'


const staatliches = Staatliches({
    subsets: ['latin'],
    weight: ['400'],
});

interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
    sizes: { name: string; quantity: number }[];
    colors: { name: string; code: string }[];
    quantity: number;
    otherImages: string[];
}

interface Products {
    [key: string]: Product;
}

const NewArrivals = () => {
    const searchParams = useSearchParams();

    function truncateString(str: string, maxLength: number) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + '...';
        }
        return str;
    }
    

    useEffect(() => {
        console.log(searchParams)
        if (searchParams.size) {

            localStorage.clear();
            console.log('localStorage cleared');

            window.location.href = "/";
        }
        
    }, [])


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
                                        <p className="text-black text-md font-semibold">
                                            ₵{products[item as keyof typeof products].price}
                                        </p>
                                    </div>
                                    <a href={`/shop/${products[item as keyof typeof products].name.replace(/\s+/g, '').toLowerCase()}`}>
                                        <button className="rounded-md w-full mt-6 bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                            View Product
                                        </button>
                                    </a>
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