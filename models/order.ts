import { Schema, model, models} from "mongoose";


const orderSchema = new Schema({
    clientReference: {type: String},
    email: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    number: { type: String, required: true },
    total: { type: Number, required: true },
    delivery_status: {type: String, default: 'pending'},
    payment_status: { type: String, required: true, enum: ['pending', 'paid', 'failed'] },
    payment_method: {type: String, default: 'unknown'},
    payment_channel: {type: String, default: 'unknown'},
    checkoutId:  {type: String, default: null},
    salesInvoiceId:  {type: String, default: null},
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

export const Order = models.Orders || model('Orders', orderSchema);
