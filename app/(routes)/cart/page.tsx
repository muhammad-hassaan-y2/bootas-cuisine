"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import Checkout from "@/components/Checkout";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4">
              <Image
                src={item.product.image}
                alt={item.product.name}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">{item.product.name}</h3>
                <p className="text-sm">{item.product.description}</p>
                <p className="font-semibold">
                  Rs. {item.product.price} x {item.quantity}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => removeFromCart(item.product.id)}
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button>Checkout</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <Checkout />
                <DialogFooter className="mt-6 flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button form="checkout-form" type="submit">Place Order</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-8">
        <Button variant="outline" onClick={() => router.push("/home")}>
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
