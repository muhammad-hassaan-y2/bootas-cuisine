'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setSubtotal(subtotal);
  }, [cart]);

  const shippingFee = 200;
  const total = subtotal + shippingFee;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phoneNumber = (document.getElementById('phone-number') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const shippingAddress = (document.getElementById('shipping-address') as HTMLTextAreaElement).value;

    if (!name || !phoneNumber || !email || !shippingAddress) {
      toast.error('Please fill in all the fields.');
      setIsSubmitting(false);
      return;
    }

    const orderData = {
      name,
      phoneNumber,
      email,
      shippingAddress,
      cart,
      subtotal,
      total,
    };

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        clearCart();
        toast.success('Your order has been placed successfully!');
        setTimeout(() => {
          router.push('/order-success');
        }, 2000);
      } else {
        throw new Error('Failed to submit order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('An error occurred while placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold">Checkout</p>
      </div>

      <Separator className="my-4" />

      <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" className="w-full" required />
        </div>

        <div className="space-y-4">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input id="phone-number" placeholder="Enter your phone number" className="w-full" required />
        </div>

        <div className="space-y-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" className="w-full" required />
        </div>

        <div className="space-y-4">
          <Label htmlFor="shipping-address">Shipping Address</Label>
          <Textarea id="shipping-address" placeholder="Enter your shipping address" className="min-h-[100px] w-full" required />
        </div>

        <Separator className="my-4" />

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Subtotal</p>
            <p className="font-medium">Rs. {subtotal.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Shipping</p>
            <p className="font-medium">Rs. {shippingFee.toFixed(2)}</p>
          </div>
          <Separator className="my-2" />
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">Rs. {total.toFixed(2)}</p>
          </div>
        </div>

        <Button type="submit" variant="outline" disabled={isSubmitting}>
          {isSubmitting ? 'Placing Order...' : 'Place Order'}
        </Button>
      </form>

      <ToastContainer />
    </section>
  );
}