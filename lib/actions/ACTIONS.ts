"use server"

interface ItemObject {
    key: string;
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    color: string;
    size: string;
    quantity: number;
}

interface OrderObject {
    email: string,
    address: string,
    number: string,
    total: number,
    cartItem: { [key: string]:ItemObject}
}

export async function Orders(data:OrderObject) {
    console.log(data);
    
}