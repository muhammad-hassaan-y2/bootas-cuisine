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
import Image from 'next/image';

export default function Component() {
  const { cart } = useCart();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setSubtotal(subtotal);
  }, [cart]);

  const shippingFee = 200;
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

    console.log(orderData);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold">Checkout</p>
      </div>

      <Separator className="my-4" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" 
          className="w-full" />
        </div>

        <div className="space-y-4">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input id="phone-number" placeholder="Enter your phone number" 
          className="w-full" />
        </div>

        
        <div className="space-y-4">
          <Label htmlFor="shipping-address">Shipping Address</Label>
          <Textarea id="shipping-address" placeholder="Enter your shipping address" 
          className="min-h-[100px] w-full" />
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

        <div className="flex justify-end">
          <Button type="submit" className="w-full md:w-auto">Checkout</Button>
        </div>
      </form>
    </section>
  );
}
