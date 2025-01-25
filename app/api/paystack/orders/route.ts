
import { Order } from '@/models/order';

export  async function GET(req: Request) {
  if (req.method === 'GET') {
    try {
      // Fetch orders from your database, sorted by creation date (descending)
      const orders = await Order.find().sort({ createdAt: -1 });

      // Create a new Response object and return it
      return new Response(JSON.stringify(orders), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      // Return an error response using the Response constructor
      return new Response(
        JSON.stringify({ message: 'Error fetching orders', error: error }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } else {
    // Return 405 Method Not Allowed
    return new Response(
      JSON.stringify({ message: 'Method Not Allowed' }),
      {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
