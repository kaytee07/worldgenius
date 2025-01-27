import { press } from '@/data'
import React from 'react'

const Press = () => {
  return (
    <div className='mb-36'>
        <h1 className="text-center pt-7 font-bold text-lg">PRESS</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-4">
        {press.map((Item, index) => (
            <div key={index} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src={Item.img} alt="card-image" />
                </div>
                <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    </h6>
                    <a href={Item.link} className="text-slate-600 leading-normal font-light underline">
                        {Item.link}
                    </a>
                </div>
            </div> 
        ))}
          
      </div>
      </div>
  )
}

export default Press