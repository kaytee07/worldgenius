import { NextResponse } from 'next/server';
import { Buffer } from 'buffer';
import { Order } from '@/models/order';



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
  try {
    const { 
      email, 
      number, 
      products,
      total,
      address, 
      country,
      city
    } = await req.json();

    // 1. Generate Basic Auth Header
    const authString = `${process.env.HUBTEL_CLIENT_ID}:${process.env.HUBTEL_API_KEY}`;
    const authHeader = `Basic ${Buffer.from(authString).toString('base64')}`;

    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    const clientreference = `ORDER-${timestamp}-${randomString}`;

    const formattedProducts = products.map((product: ItemObject) => ({
      name: product.name,
      quantity: product.quantity,
      color: product.color,
      price: product.originalPrice,
      image: product.img,
      size: product.size,
    }));

    const payload = {
      totalAmount: parseFloat(total).toFixed(2),
      description: 'Online purchase',
      callbackUrl: `${process.env.NEXTAUTH_URL}/api/payment/webhook`,
      returnUrl: `${process.env.NEXTAUTH_URL}/payment/verify`,
      merchantAccountNumber: process.env.HUBTEL_MERCHANT_ACCOUNT,
      cancellationUrl: `${process.env.NEXTAUTH_URL}/payment/verify?canceled=true`,
      clientReference: clientreference,
      payeeEmail: email,
      payeeMobileNumber: number,
      metadata: {
        products: formattedProducts,
        email: email,
        number: number,
        address: address,
        country: country?.label || 'Ghana',
        city: city
      }
    };

    // Send Request to Hubtel
    const response = await fetch('https://payproxyapi.hubtel.com/items/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to initiate payment');
    }

    const newOrder = new Order({
      email: email,
      address: address,
      number: number,
      country: country?.label,
      city: city,
      clientReference: clientreference,
      cartItems: formattedProducts,
      total: parseFloat(total).toFixed(2),
      payment_status: "pending",
    });

    await newOrder.save();

    return NextResponse.json({
      checkoutUrl: data.data.checkoutUrl,
      checkoutDirectUrl: data.data.checkoutDirectUrl,
      clientReference: payload.clientReference
    });

  } catch (error: any) {
    console.error('Error in POST:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}


