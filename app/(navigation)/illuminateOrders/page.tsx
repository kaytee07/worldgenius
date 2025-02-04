"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';


interface Product {
    name: string;
    price: string;
    quantity: string;
    image: string;
    _id: string;
    color?: string;
    size?: string;
}

interface OrderItem {
    email: string;
    number: number;
    country: string;
    city: string;
    _id: string;
    reference: string;
    total: number;
    payment_status: string;
    delivery_status: string;
    cartItems: Product[];
    createdAt: string;
}

const Order = () => {
    const [pendingOrders, setPendingOrders] = useState<OrderItem[]>([]);
    const [deliveredOrders, setDeliveredOrders] = useState<OrderItem[]>([]);
    const [orders, setOrders] = useState<OrderItem[]>([]);
    const [activeTab, setActiveTab] = useState<'pending' | 'delivered' | 'all'>('pending');
    

    const markAsDelivered = async (orderId: string) => {
        try {
            const response = await axios.put(`/api/orders/${orderId}`, null, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status !== 200) throw new Error('Update failed');
            const updatedOrder = response.data;
            setPendingOrders(prev => prev.map(order =>
                order._id === updatedOrder._id ? updatedOrder : order
            ));
        } catch (error) {
            console.error('Error marking as delivered:', error);
        }
    };

    useEffect(() => {
        axios.get('/api/paystack/pending').then(({ data }) => setPendingOrders(data)).catch(console.error);
        axios.get('/api/paystack/delivered').then(({ data }) => setDeliveredOrders(data)).catch(console.error);
        axios.get('/api/paystack/all').then(({ data }) => setOrders(data)).catch(console.error);
    }, []);

    const currentOrders = {
        pending: pendingOrders,
        delivered: deliveredOrders,
        all: orders
    }[activeTab];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile Menu Button */}
 

           

            {/* Main Content */}
            <main className="md:ml-64 p-4">
                <div className="max-w-6xl mx-auto">
                    {/* Tabs */}
                    <div className="mb-6 border-b border-gray-200">
                        <nav className="flex space-x-4">
                            {(['pending', 'delivered', 'all'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === tab
                                            ? 'text-blue-600 bg-white border border-b-0 border-gray-200'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Orders List */}
                    <div className="grid gap-6">
                        {currentOrders.map((order) => (
                            <div key={order._id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                                {/* Order Header */}
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4 pb-4 border-b border-gray-100">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">{order.email}</h3>
                                        <p className="text-sm text-gray-500 mt-1">number: {order.number}</p>
                                        <p className="text-sm text-gray-500 mt-1">country: {order.country}</p>
                                        <p className="text-sm text-gray-500 mt-1">city: {order.city}</p>
                                        <p className="text-sm text-gray-500 mt-1">Ref: {order.reference}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className={`px-3 py-1 rounded-full text-sm ${order.payment_status === 'paid'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                            }`}>
                                            Payment: {order.payment_status}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm ${order.delivery_status === 'pending'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-blue-100 text-blue-800'
                                            }`}>
                                            Delivery: {order.delivery_status}
                                        </span>
                                    </div>
                                </div>

                                {/* Order Details */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                        <span>🕒</span>
                                        {new Date(order.createdAt).toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                        , {new Date(order.createdAt).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {order.cartItems.map((item) => (
                                            <div key={item._id} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                                                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                                                        <span className="text-gray-600">GH₵{item.price}</span>
                                                        <span className="text-gray-500">Qty: {item.quantity}</span>
                                                        {item.color && (
                                                            <span
                                                                className="w-4 h-4 rounded-full border border-gray-200"
                                                                style={{ backgroundColor: item.color }}
                                                            />
                                                        )}
                                                        {item.size && (
                                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                                                {item.size}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Order Footer */}
                                <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <p className="text-lg font-semibold text-gray-900">
                                        Total: GH₵{(order.total / 100).toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => markAsDelivered(order._id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${order.delivery_status === 'delivered'
                                                ? 'bg-green-100 text-green-700 cursor-default'
                                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                            }`}
                                        disabled={order.delivery_status === 'delivered'}
                                    >
                                        {order.delivery_status === 'delivered' ? 'Delivered ✔️' : 'Mark as Delivered'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Order;
