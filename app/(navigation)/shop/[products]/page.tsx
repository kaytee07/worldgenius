"use client"
import { products } from '@/data'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { Oswald } from 'next/font/google';


const oswald = Oswald({
  weight: ['400', '700'], // Specify the weights you want
  subsets: ['latin'], // You can specify other subsets if needed
});

// interface CartItem {
//       id: string;
//       name: string;
//       size: string;
//       color: string;
//       price: number;
//       quantity: number;
// }

type Item = {
    key: string,
    id: number,
    name: string,
    originalPrice: number,
    price: number,
    color: string,
    size: string,
    quantity?: number
}

const Products = ({params}:{params: string}) => {
    const Products = products[params.products as keyof typeof products]; 
    const [tempItem, setTempItem] = useState<Item>({id: 0, name: '', originalPrice: 0, price: 0,  color: '', size: '', quantity: 1, key: ''});

    function handleAttributeChange(key:string, value:string | number ){
        setTempItem((prevItem) => ({...prevItem, [key]: value}));
        console.log(tempItem)
    }



 

    function addToCart() {
        console.log("dog")
        const item = tempItem;
        const itemKey = `${item.id}-${item.size}-${item.color}`; 
        
        const cart: Record<string, Item> = JSON.parse(localStorage.getItem('cart') || '{}');
        console.log(cart)

        // Find the existing item index in the cart
        const existingItemIndex: boolean = cart[item.name] && cart[item.name].id === item.id && cart[item.name].size === item.size && cart[item.name].color === item.color

        // If item exists in the cart, update its quantity, else add it
     
        if (existingItemIndex) {
            cart[item.name].quantity!++
        } else {
            console.log(existingItemIndex);
            console.log(item)
            item['key'] = itemKey;
            cart[`${item.name}`] = item;
            // cart.push(item);
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log('Updated Cart:', cart);
    }

  
    useEffect(() => {
        setTempItem((prevItem) => ({ ...prevItem, 'id': Products.id, 'name': Products.name, 'price': Products.price, 'originalPrice': Products.price }))
    }, [])
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
                                      <button onClick={() => handleAttributeChange('size', item.name) } className={`${oswald.className} w-20 h-10 rounded-sm border-[1px] border-[#e6e6e6]`} key={index}>
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
                                      <button onClick={() => handleAttributeChange('color', item.name)} className={`${oswald.className} w-10 h-5 rounded-lg border-[1px] bg-[${item.code}] border-[#e6e6e6]`} key={index}>
                                        {item.name}
                                      </button>
                                  ))
                              }
                          </div>
                      </div>
            
            {/* <div className="quantity flex flex-col">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" id="quantity" />
            </div> */}
            <div className="pay">
                <button onClick={addToCart} className={`w-36 my-7 text-lg bg-black text-white h-10 rounded-sm ${oswald.className}`}>add to bag</button>
            </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Products
