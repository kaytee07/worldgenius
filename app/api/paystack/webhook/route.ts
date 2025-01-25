import crypto from 'crypto';
import { connectToDB } from "@/lib/db/database";
import { Order } from '@/models/order';

// export const config = {
//     api: {
//         bodyParser: false
//     },
// };


export async function POST(req: Request) {
    const body = await req.text();
    const secret: string | undefined = process.env.PAYSTACK_SECRET_KEY;

    try{
        await connectToDB()
        let hash;
        if (secret){
            hash = crypto
            .createHmac('sha512', secret)
            .update(body, 'utf-8')
            .digest('hex');
        }
        

        if (hash === req.headers.get('x-paystack-signature')){
            const jsonData = JSON.parse(body);
            const event = jsonData.event;
            if (event === 'charge.success'){
                console.log(jsonData.data.metadata.products)
                const newOrder = new Order({
                    email: jsonData.data.metadata.email,
                    address:jsonData.data.metadata.address,
                    number: jsonData.data.metadata.number,
                    country: jsonData.data.metadata.country,
                    reference: jsonData.data.reference,
                    cartItems: jsonData.data.metadata.products,
                    total: jsonData.data.requested_amount,
                    payment_status: jsonData.data.gateway_response,
                });

                await newOrder.save();

                return new Response('Success', { status: 200 });
            } else {
                console.log('Received Paystack event:', event);
                return new Response('Event not handled', { status: 200 });
            }
        } else {
                console.log('Invalid Paystack signature');
                return new Response('Invalid signature', { status: 400 });
    }
    } catch (error){
        console.error('Error processing Paystack webhook:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}


