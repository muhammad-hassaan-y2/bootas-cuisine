import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/database';
import { orders } from '@/database/schema';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const { name, phoneNumber, email, shippingAddress, cart, subtotal, total } = await req.json();

    // Insert the order into the database
    await db.insert(orders).values({
      id: uuidv4(),
      name,
      phoneNumber,
      email,
      shippingAddress,
      cart: JSON.stringify(cart), // Assuming cart is an array of objects
      subtotal,
      total,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Order submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting order:', error);
    return NextResponse.json({ error: 'Error submitting order' }, { status: 500 });
  }
}
