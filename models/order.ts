import { Schema, model} from "mongoose";

const itemSchema = new Schema({
    key: { type: String, required: true },
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
});

export const Item = model('Item', itemSchema);

const orderSchema = new Schema({
    email: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: String, required: true },
    total: { type: Number, required: true },
    cartItem: { 
        type: Map,
        of: itemSchema,
        required: true
    },
});

export const Order = model('Order', orderSchema);
