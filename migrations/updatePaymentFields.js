import mongoose from "mongoose";
import { Order } from "@/models/order";
async function migrate() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  // Add new fields to all existing orders
  await Order.updateMany(
    {
      $or: [
        { payment_method: { $exists: false } },
        { payment_channel: { $exists: false } },
        { checkoutId: { $exists: false } },
        { salesInvoiceId: { $exists: false } }
      ]
    },
    {
      $set: {
        payment_method: 'unknown',
        payment_channel: 'unknown',
        checkoutId: null,
        salesInvoiceId: null
      }
    }
  );

  console.log('Migration completed successfully');
  process.exit(0);
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});