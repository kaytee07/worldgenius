import axios from 'axios';



interface ItemObject  {
    key: string;
    img: string;
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    color: string;
    size: string;
    quantity: number;
    country: CountryOption | null;
}

type CountryOption = {
    value: string;
    label: string;
};


export async function POST(req: Request) {
    const secret = process.env.PAYSTACK_SECRET_KEY
    try {
        const { 
            email, 
            number, 
            products,
            total,
            address, 
            country,
            city} = await req.json();

            const formattedProducts = products.map((product: ItemObject) => ({
                name: product.name,
                quantity: product.quantity,
                color: product.color,
                price: product.originalPrice,
                image: product.img,
                size: product.size,
            }))

            const response = await axios.post(
                'https://api.paystack.co/transaction/initialize',
                {
                     email: email,
                     callback_url: "https://www.worldg3nius.com/",
                     amount: total * 100,
                     metadata: {
                        products: formattedProducts,
                        email: email,
                        number: number,
                        address: address,
                        country: country.label || 'Ghana',
                        city: city
                     }
                }, 
                {
                    headers: {
                        Authorization: `Bearer ${secret}`
                    }
                }
               
            )
        
       
            
            const authorizationUrl = response.data.data.authorization_url;
            

            return new Response(JSON.stringify({ authorizationUrl }), { status: 200 });
            
    } catch (error){
      console.error('Error creating Paystack checkout session:', error);
        return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
    }
} 