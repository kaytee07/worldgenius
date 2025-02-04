import { Schema, model, models} from "mongoose";


const orderSchema = new Schema({
    reference: {type: String},
    email: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    number: { type: String, required: true },
    total: { type: Number, required: true },
    delivery_status: {type: String, default: 'pending'},
    payment_status: { type: String, required: true},
    cartItems: [
        {
        name: { type: String },
        price: { type: String },
        quantity: { type: String },
        image: { type: String },
        color: {type: String},
        size: {type: String}
      }
    ],
}, {timestamps: true});

export const Order = models.allOrders || model('allOrders', orderSchema);
