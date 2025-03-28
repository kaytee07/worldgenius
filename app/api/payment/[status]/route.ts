
import { connectToDB } from '@/lib/db/database';
import { Order } from '@/models/order';


export  async function GET(req: Request) {
  const urlObj = new URL(req.url);
  const pathname = urlObj.pathname;
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];
  const status  = lastSegment

  try {
    await connectToDB()
    let orders;

    switch (status) {
      case 'pending':
        orders = await Order.find({ delivery_status: 'pending', payment_status: 'paid' });
        console.log(orders)
        break;
      case 'delivered':
        orders = await Order.find({ delivery_status: { $ne: 'pending' } });
        break;
      case 'all':
        orders = await Order.find({payment_status: 'paid'});
        break;
      default:
        return new Response(JSON.stringify({ message: 'Invalid status parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
        });
    }


    return new Response(JSON.stringify(orders), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }); 
  } catch (error: unknown) {
     return new Response(JSON.stringify({ message: error }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
        });
  }
   
}
