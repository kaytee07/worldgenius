import { connectToDB } from "@/lib/db/database";
import { fetchHubtelStatus } from "@/lib/hubtel";
// import { Order } from "@/models/order";
import { NextResponse } from "next/server";


// app/api/payments/verify/route.ts
export async function GET(req: Request) {
  connectToDB()
  try {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');
    console.log(reference)

    // const order = await Order.findOne({ clientReference: reference });
    // console.log(order)
    // if (order?.payment_status === 'paid') {
    //   return NextResponse.json({ status: 'Success' });
    // }

    const hubtelStatus = await fetchHubtelStatus(reference);
    console.log(hubtelStatus)
    return NextResponse.json({ status: hubtelStatus });
    } catch (error: unknown) {
      console.log(error)
    }
  
}