"use client"

import React, { useState, useEffect } from 'react' 
import { SheetDemo } from './Sidebar'
import { SheetDemoCart } from './Cart'
import { navigation } from '@/data'

// import { ClerkLoaded, UserButton} from '@clerk/nextjs'
// import { useUser } from "@clerk/nextjs";
interface Product {
    key: string;
    img: string;
    originalPrice: number;
    id: number;
    name: string;
    price: number;
    color: string;
    size: string;
    quantity: number;
}

// Define the structure of the cart data (Products object)
interface CartItems {
    [key: string]: Product;
}



const Navbar = () => {
    const [cartItems, setCartItems] = useState<CartItems>({});
    // const { isSignedIn, user } = useUser();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '{}');
        setCartItems(storedCart);
    }, []);

  return (
    <header className='flex flex-row justify-between items-center py-3 px-9 text-white bg-black'>
        <div className='flex flex-row justify-between items-center w-full'>
        <div className="logo">
            <a href="/">
               {/* <img className="w-[10%]" src="/img/logo1.png" alt="" /> */}
               WORLDG3NIUS
            </a>
        </div>
        <nav 
        className="flex justify-between h-[1rem] text-sm font-md md:w-[14rem] max-md:gap-5">
            <ul 
            className='flex flex-row justify-between items-center max-md:hidden' 
            style={{"width": "40rem"}}>
                {navigation.map((data, i) => (
                    <a key={i} className="" href={data.url}>
                        <li className="navitems flex " >{data.name}</li>
                    </a>
                )
                )}
            
                      <SheetDemoCart data={cartItems} />
                  
            </ul>
            <div>

            </div>
                {/* <UserButton/> */}
            <div className="md:hidden flex items-center gap-[10px]">
               <SheetDemoCart data={cartItems} />
                <SheetDemo />
            </div>
            
        </nav>
      </div>
        
         
    </header>
    
  )
}

export default Navbar