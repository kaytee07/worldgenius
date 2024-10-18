"use client"

import React from 'react' 
import { SheetDemo } from './Sidebar'
import { navigation } from '@/data'

// import { ClerkLoaded, UserButton} from '@clerk/nextjs'
// import { useUser } from "@clerk/nextjs";

const Navbar = () => {
    // const { isSignedIn, user } = useUser();
  return (
    <header className='flex flex-row justify-between items-center py-3 px-9'>
        <div className='flex flex-row justify-between items-center w-full'>
        <div className="logo">
            <a href="/">
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
                <li className=" relative">
                    <div className='h-[14px] w-[14px] left-[14px] bottom-[14px] flex justify-center items-center rounded-md bg-black text-white absolute'>
                        0
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </li>      
            </ul>
                {/* <UserButton/> */}
             <li className="md:hidden flex items-center relative">
                <div className='h-[14px] w-[14px] left-[14px] bottom-[10px] flex justify-center items-center rounded-md bg-black text-white absolute'>
                        0
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
             </li>
            <div className="md:hidden flex items-center">
                <SheetDemo/>
            </div>
            
        </nav>
      </div>
        
         
    </header>
    
  )
}

export default Navbar