"use client"
import { products } from '@/data'
import React, { useEffect } from 'react'
import { Lexend_Giga } from '@next/font/google';


const lexendGiga = Lexend_Giga({
    subsets: ['latin'],  // You can add more subsets if needed
    weight: ['400', '500', '600'],  // You can add or remove weights you need
});

interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
    sizes: { name: string; quantity: number }[];
    colors: { name: string; code: string }[];
    quantity: number;
    otherImages: never[];
}

interface Products {
    [key: string]: Product;
}

const Allitems = () => {
    
 const allproducts: Products = products

    function truncateString(str: string, maxLength: number) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + '...';
        }
        return str;
    }
      useEffect(() => {
        
      }, [])
  return (
      <ul className={`grid grid-cols-2 gap-4 max-sm:gap-[5px] sm:grid-cols-3 lg:grid-cols-4 place-items-center w-[93vw] font-bold ${lexendGiga.className}`}>
    {
            Object.keys(allproducts).map((item: string,index)=> (
                <div key={index} className="relative max-sm:grid flex flex-col bg-white shadow-sm border border-slate-200">
                <div className="relative overflow-hidden bg-clip-border">
                    <img
                            src={`${products[item as keyof typeof products].img}`}
                    alt="card-image"
                    className="h-full w-full "
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
  )
}

export default Allitems
