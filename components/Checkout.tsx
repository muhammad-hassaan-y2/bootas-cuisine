'use client'
import { useState, useContext, useEffect, FormEvent } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCart } from '@/app/context/CartContext';

export default function Component() {
  const { cart } = useCart();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setSubtotal(subtotal);
  }, [cart]);

  const shippingFee = 5;
  const total = subtotal + shippingFee;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phoneNumber = (document.getElementById('phone-number') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const shippingAddress = (document.getElementById('shipping-address') as HTMLTextAreaElement).value;

    const orderData = {
      name,
      phoneNumber,
      email,
      shippingAddress,
      cart,
      subtotal,
      total,
    };

    // Send orderData to your backend API or email service
    console.log(orderData);
  };

  return (
    <section className="p-4 md:p-8">
      <div className="flex items-center justify-between border-b pb-4">
        <p className="text-2xl font-bold">Checkout</p>
      </div>
      
      <div className="py-6">
        <div className="grid gap-4">
          {cart.map((item) => (
            <div key={item.product.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <img src={item.product.image} alt={item.product.name} width={80} height={80} className="rounded-md" />
              <div className="grid gap-1">
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-muted-foreground">{item.product.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{item.quantity}</p>
                <p className="text-muted-foreground">x</p>
                <p className="font-medium">Rs. {item.product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" className="w-full" />
        </div>

        <div className="space-y-4">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input id="phone-number" placeholder="Enter your phone number" className="w-full" />
        </div>

        <div className="space-y-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" className="w-full" />
        </div>

        <div className="space-y-4">
          <Label htmlFor="shipping-address">Shipping Address</Label>
          <Textarea id="shipping-address" placeholder="Enter your shipping address" className="min-h-[100px] w-full" />
        </div>

        <Separator className="my-6" />

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

        <div className="flex justify-end">
          <Button type="submit">Checkout</Button>
        </div>
      </form>
    </section>
  );
}
