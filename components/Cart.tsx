import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Trash } from "lucide-react";


import Link from "next/link"
import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";

interface ItemObject {
    key: string;
    img: string;
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    color: string;
    size: string;
    quantity: number;
}

// Define the prop type for SheetDemoCart
interface SheetDemoCartProps {
    data: { [key: string]: ItemObject };
}



interface OrderObject {
    email: string,
    address: string,
    number: string,
    total: number,
    products: ItemObject[]
}




export const SheetDemoCart: React.FC<SheetDemoCartProps> = ({ data }) => {
    const [ cartItems, setCartItems] = useState<ItemObject[]>([]) 
    const [cart, setCart] = useState<{[key: string]: ItemObject}>({})
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    // const { isSignedIn, user } = useUser();

    

    useEffect(() => {
        setCart(data)
       
       

    }, [data])

    useEffect(() => {
        const itemsArray =  Object.keys(cart).map((key) => cart[key]);
        setCartItems(itemsArray);
        
    }, [cart])

    const handleRemoveItem = (itemKey: string) => {
        // Make a shallow copy of the cart to avoid mutating state directly
        let updatedCart = {...cart};
    
        
        const itemIndex = cartItems.findIndex(item => 
            `${item.id}-${item.size}-${item.color}` === itemKey
        );
    
        if (itemIndex === -1) {
            console.log("Item not found in cart");
            return; 
        }
    
         cartItems.splice(itemIndex, 1);
    
        updatedCart = {};
        cartItems.map((item) => {
            updatedCart[item.key] = item;
        })
        setCart(updatedCart);
    
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    

    const handleIncreaseQuantity = (itemKey: string) => {
       const updatedCart = {...cart}
       console.log(itemKey)
    
        const itemIndex = cartItems.findIndex(item => 
            `${item.id}-${item.size}-${item.color}` === itemKey
        );
    
        if (itemIndex === -1) {
            console.log("Item not found in cart");
            return; 
        }
    
        const product = cartItems[itemIndex];
        product.quantity++;
        product.price = product.originalPrice * product.quantity;
    
        console.log(`Updated quantity: ${product.quantity}`);
    
        updatedCart[itemKey].quantity = product.quantity;
        setCart(updatedCart);
    
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    

    const handleDecreaseQuantity = (itemKey: string) => {
        const updatedCart = {...cart}
        console.log(itemKey)
     
         const itemIndex = cartItems.findIndex(item => 
             `${item.id}-${item.size}-${item.color}` === itemKey
         );
     
         if (itemIndex === -1) {
             console.log("Item not found in cart");
             return; 
         }
     
         const product = cartItems[itemIndex];
         product.quantity--;
         product.price = product.originalPrice * product.quantity;
     
         console.log(`Updated quantity: ${product.quantity}`);
     
         updatedCart[itemKey].quantity = product.quantity;
         setCart(updatedCart);
     
         
         localStorage.setItem('cart', JSON.stringify(updatedCart));
     };
    
    const handleCheckout = async () => {
       

        if (!email || !address || !number) {
            alert('Please fill out all required fields: email, address, and number.');
            return;
        }

        const total = Object.keys(cart).reduce((total, priceKey) => {
            return total + data[priceKey].price;
        }, 0);

    
        const order: OrderObject = {
            email,
            address,
            number,
            total,
            products: cartItems
        }

        try {
            const response = await fetch('/api/paystack/create-checkout-session', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(order)
            });

            const data = await response.json();
            if (data.authorizationUrl) {
                window.location.href = data.authorizationUrl;
            } else {
                console.error('Error: No authorization URL received');
                alert('An error occurred. Please try again.');
            }

            console.log(data)
        } catch (error){
            console.log(error)
        }

        


        alert(`Checkout successful! Total amount: $${total}`);
        // Here you can add your checkout logic (e.g., send data to a server)
    };
    return (
        <Sheet>
            <SheetTrigger asChild>
                <li className="relative">
                    <div className='h-[14px] w-[14px] left-[14px] bottom-[14px]  flex justify-center items-center rounded-md bg-black text-white absolute'>
                        {cartItems.length}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                </li>
                

            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Link href="/">
                            {/* <Image src="/logos/Logo.png" width={100} height={40} alt="logo"/> */}
                            Cart Items
                        </Link>
                    </SheetTitle>
                    <SheetDescription>
                        {/* Make changes to your profile here. Click save when you're done. */}
                    </SheetDescription>
                </SheetHeader>
                <div className="gap-4 py-4 flex flex-col">
                    <ul className="flex flex-col w-full gap-10 h-[400px] overflow-y-scroll justify-around">
                         {
                            cartItems.length && cartItems.map((items, index) => (
                                
                                    <li key={index} className="navitems text-[#317670] pb-5 w-full" >
                                        <div className="flex justify-evenly">
                                            <div className="img w-20">
                                                <img src={items.img} alt="img" />
                                            </div>
                                            <div className="info w-40 flex flex-col">
                                            <p>{items.name}</p>
                                            <p className="font-bold">{items.price.toFixed(2)}</p>
                                            <div className="flex gap-6">
                                                <p>
                                                    {items.color}
                                                </p>
                                                <p> {items.size}</p>
                                            </div>
                                            <div className="flex w-full gap-9">
                                                <p className="cursor" onClick={() => { handleIncreaseQuantity(items.key)}}>+</p>
                                                <p>{items.quantity}</p>
                                                <p className="cursor" onClick={() => { handleDecreaseQuantity(items.key) }}>-</p>
                                            </div>
                                            </div>
                                        <div onClick={() => { handleRemoveItem(items.key)}} className="remove">
                                            <Trash />
                                            </div>
                                        </div>
                                         
                                    </li>
                                
                           )
                            )
                         }

                    </ul>
                    
                </div>
                <div className="total">
                    <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input className="p-5 border-[1px] border-black h-10 rounded-lg" value={email} type="email" name="" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor="address">Address</label>
                    <input className="p-5 border-[1px] border-black h-10 rounded-lg" value={address} type="" name="" id="address" onChange={(e) => setAddress(e.target.value)} required/>
                    <label htmlFor="number">Phone Number</label>
                    <input className="p-5 border-[1px] border-black h-10 rounded-lg" value={number} type="" name="" id="number" onChange={(e) => setNumber(e.target.value)} required/>
                    
                    </div>
                    <div className="all flex gap-2 flex-col mt-5">
                        <div className="flex gap-6">
                            <h1 className="font-bold text-xl">total</h1>
                            <h3 className="font-bold text-xl">
                                {
                                    Object.keys(cart).reduce((total, priceKey) => {
                                        return total + data[priceKey].price; // Add the price of the current item to the total
                                    }, 0).toFixed(2) // 0 is the initial value for the total
                                }
                            </h3>
                        </div>
                        
                        <button className="bg-black text-white h-10 w-28 rounded-lg" onClick={handleCheckout}>
                            checkout
                        </button>
                    </div>
                    
                
                </div>
            </SheetContent>
        </Sheet>
    )
}