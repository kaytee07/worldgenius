import { products } from '@/data'
import Image from 'next/image'
import React from 'react'
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  weight: ['400', '700'], // Specify the weights you want
  subsets: ['latin'], // You can specify other subsets if needed
});

const Products = ({params}:{params: string}) => {
    const Products = products[params.products as keyof typeof products]
    
  return (
    <div className='py-11'>
      <div className="w-[90%] flex justify-center gap-16">
        <div>
            <Image
            src={Products.img}
            alt="product"
            width={400}
            height={400}
            />
        
            
        </div>
        <div>
            <div className="name-price">
                <h3 className={`${oswald.className} text-md font-bold`}>{Products.name}</h3>
                <h2 className='py-3 text-red-500 font-bold text-lg'>Ghc {Products.price}.00</h2>
            </div>
            <div className="size-checkout">
                <h1 className={`font-bold ${oswald.className}`}>size</h1>
                <div className="allSizes flex gap-5">
                    {
                        Products.sizes.map((item, index) => (
                            <button className={`${oswald.className} w-20 h-10 rounded-sm border-[1px] border-[#e6e6e6]`} key={index}>
                                {item.name}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="size-checkout">
                <h1 className={`font-bold ${oswald.className}`}>colors</h1>
                <div className="allSizes flex gap-5">
                    {
                        Products.colors.map((item, index) => (
                            <button className={`${oswald.className} w-10 h-5 rounded-lg border-[1px] bg-[${item.code}] border-[#e6e6e6]`} key={index}>
                            
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className="pay">
                <button className={`w-36 my-7 text-lg bg-black text-white h-10 rounded-sm ${oswald.className}`}>add to bag</button>
            </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Products
