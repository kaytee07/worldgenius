import { connectToDB } from "@/lib/db/database";
import { Order } from "@/models/order";


export async function PUT(req: Request) {
const urlObj = new URL(req.url);
  const pathname = urlObj.pathname;
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];
  const id  = lastSegment


  try {
    await connectToDB();
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { delivery_status: 'delivered' },
      { new: true } // Return the updated document
    );

    if (!updatedOrder) {
    return new Response(JSON.stringify({ message: 'Order not found' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
            });
    }

     return new Response(JSON.stringify(updatedOrder), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        });
    
  } catch (error) {
     return new Response(JSON.stringify({ message: error }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
    });
  }
}