
import { NextResponse } from 'next/server';
import { connectToDB } from "@/lib/db/database";
import { Order } from '@/models/order';

export async function POST(req: Request) {
  await connectToDB();
  try {
  
    const callbackData = await req.json();

    console.log(callbackData.Data)

    if (!callbackData?.Data?.CheckoutId) {
      console.error('Invalid Hubtel callback structure:', callbackData);
      return NextResponse.json(
        { error: 'Invalid callback data' },
        { status: 400 }
      );
    }


  
    if (callbackData.Data.Status === 'Success') {
      console.log('Processing successful Hubtel payment:', callbackData.Data);

        const update = {
          payment_status: callbackData.Data.Status === 'Success' ? 'paid' : 'failed',
          payment_method: callbackData.Data.PaymentDetails.PaymentType || 'unknown',
          payment_channel: callbackData.Data.PaymentDetails.Channel || 'unknown',
          checkoutId: callbackData.Data.checkoutId,
          salesInvoiceId: callbackData.Data.salesInvoiceId,
          updatedAt: new Date()
        };

        const updatedOrder = await Order.findOneAndUpdate(
          { clientReference: callbackData.Data.ClientReference },
          { $set: update },
          { new: true } // Return the updated document
        );  


        if (!updatedOrder) {
          console.log(updatedOrder)
          throw new Error(`Order with reference ${callbackData.Data.ClientReference} not found`);
        }

      console.log('Order created successfully:', updatedOrder);
      
      return NextResponse.json(
        { success: true, orderId: updatedOrder._id },
        { status: 200 }
      );

    } else {
      console.log('Received non-successful Hubtel status:', callbackData.Data.Status);
      return NextResponse.json(
        { received: true, processed: false },
        { status: 200 }
      );
    }

  } catch (error: unknown) {
    console.error('Error processing Hubtel callback:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error },
      { status: 500 }
    );
  }
}




