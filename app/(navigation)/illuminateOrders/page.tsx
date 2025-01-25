"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    name: string;
   
    price: string;
    quantity: string;
    image: string;
    _id: string;
}

interface OrderItem {
    email: string;
    _id: string;
    reference: string;
    total: number;
    payment_status: string;
    delivery_status: string;
    cartItems: Product[];
    createdAt: string;
}

const Order = () => {
    const [orders, setOrders] = useState<OrderItem[]>([]);

    useEffect(() => {
        axios
            .get('/api/paystack/orders/')
            .then((response) => {
                console.log(response.data)
                setOrders(response.data);
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });

    }, []);

    return (
        <div className="orders">
            <h2>Orders</h2>
            <ul>
                {orders.map((order) => (
                    <div className="order" key={order._id}>
                        <p className="id">Email: {order.email}</p>
                        <p className="id">Order reference: {order.reference}</p>
                        <p className="payment-status">
                            Status: <span className="status">{order.payment_status}</span>
                        </p>
                        <p className="delivery-status">
                            Delivery: <span className="status">{order.delivery_status}</span>
                        </p>
                        <p className="createdAt">
                            Date:{' '}
                            {new Date(order.createdAt).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'long',
                                day: 'numeric',
                            })}{' '}
                            {new Date(order.createdAt).toLocaleTimeString('en-US', {
                                timeStyle: 'short',
                            })}
                        </p>

                        <div className="order-flex">
                            {order.cartItems.map((item) => (
                                <div key={item._id} className="item">
                                    <img src={item.image} alt="" />
                                    <div className="items-details">
                                        <h4 className="name">{item.name}</h4>
                                        <h4 className="price">GH₵{item.price}</h4>
                                        <span className="quantity">Quantity: {item.quantity} </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="total">Total: GH₵{order.total / 100}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Order;
