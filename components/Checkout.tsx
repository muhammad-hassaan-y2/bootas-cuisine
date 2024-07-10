import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { XIcon } from "lucide-react"
import { Input } from "./ui/input"

export default function Component() {
  return (
    <section>

<div className="flex items-center justify-between border-b pb-4">
          <p className="text-2xl font-bold">Checkout</p>
          <div>
          
          </div>
        </div>
        <div className="py-6">
          <div className="grid gap-4">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
              <img src="/placeholder.svg" alt="Product Image" width={80} height={80} className="rounded-md" />
              <div className="grid gap-1">
                <p className="font-medium">Acme Circles T-Shirt</p>
                <p className="text-sm text-muted-foreground">60% combed ringspun cotton/40% polyester jersey tee.</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-medium">2</p>
                <p className="text-muted-foreground">x</p>
                <p className="font-medium">$49.99</p>
              </div>
            </div>
           
          </div>
        </div>

        <Separator className="my-6" />

<div className="space-y-4">
<div className="space-y-4">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>


              <div className="space-y-4">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input id="phone-number" placeholder="Enter your phone number" />
              </div>

        
      <div className="space-y-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>


        <div className="space-y-4">
          
            <Label htmlFor="shipping-address">Shipping Address</Label>
            <Textarea id="shipping-address" placeholder="Enter your shipping address" className="min-h-[100px]" />
          
        </div>
</div>

    
        <Separator className="my-6" />
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Subtotal</p>
            <p className="font-medium">$179.97</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Shipping</p>
            <p className="font-medium">$5.00</p>
          </div>
          <Separator className="my-2" />
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">$199.37</p>
          </div>
        </div>

    </section>
 
  )
}
