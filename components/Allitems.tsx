import { collection } from '@/data'
import React from 'react'

const Allitems = () => {
  return (
      <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 place-items-center w-[93vw]'>
    {
        collection.map((item,index)=> (
        <div key={index} className="relative max-sm:grid flex flex-col bg-white shadow-sm border border-slate-200 md:w-72">
            <div className="relative h-96 overflow-hidden bg-clip-border">
                <img
                src={`${item.img}`}
                alt="card-image"
                className="h-full w-full object-cover "
                />
            </div>
            <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                <p className="text-slate-800 text-md">
                    {item.name}
                </p>
                <p className="text-black text-md font-semibold">
                    ₵{item.price}
                </p>
                </div>
                <a href={`/shop/${item.name.replace(/\s+/g, '').toLowerCase()}`}>
                <button className="rounded-md w-full mt-6 bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Add to Cart
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
