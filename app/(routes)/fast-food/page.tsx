'use client'
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const products = [
  { name: "Tortilla Wrap", description: "Home baked bread is used", price: 350, image: "/tortilla-wrap.jpg" },
  { name: "Chicken Bun", description: "Classic chicken bun, quick tasty meal", price: 160, image: "/chicken-bun.jpg" },
  { name: "Zinger burger", description: "Crispy chicken, fresh lettuce, zingy sauce", price: 250, image: "/zinger-burger.jpg" },
  { name: "Shami Burger", description: "Minced meat, lentils, served soft bun", price: 140, image: "/shami-burger.jpg" },
  { name: "Chicken Shawarma", description: "Marinated grilled chicken, wrapped soft bread", price: 190, image: "/chicken-shawarma.jpg" },
  { name: "Chicken Sandwich", description: "Juicy chicken, lettuce, tomato, toasted bun", price: 450, image: "/chicken-sandwich.jpg" },
];

export default function Component() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const router = useRouter(); // Initialize the useRouter hook

  const handleGoBack = () => {
    router.push("/home"); // Navigate to the home page
  };

  return (



  <>
    <section className="bg-muted/40 py-12">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-3xl font-bold tracking-tight">Delicious Delights</h1>
              <p className="text-muted-foreground">Explore our mouthwatering selection of food items.</p>
            </div>
           

            <div className="relative flex-1">
              
              <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-lg bg-background pl-8"
              />
            </div>

          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {products.map((item) => (
              <div key={item.name} className="relative group">
               <div onClick={() => setSelectedProduct(item)} className="absolute inset-0 z-10 cursor-pointer">
                    <span className="sr-only">View</span>
                  </div>
                <Card className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="aspect-[3/2] object-cover w-full group-hover:opacity-50 transition-opacity"
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Button size="icon" variant="ghost" className="ml-auto">
                        <HeartIcon className="w-5 h-5 fill-muted stroke-muted-foreground group-hover:fill-primary group-hover:stroke-primary" />
                        <span className="sr-only">Favorite</span>
                      </Button>
                    </div>
                    <div className="mt-4 font-semibold">Rs. {item.price}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
          <Button
              variant="outline"
              className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
              onClick={handleGoBack} // Add onClick handler to navigate back
            >
              Go Back
            </Button>
            
          </div>
        </div>
      </div>
    </section>
    {selectedProduct && (
        <Dialog defaultOpen>
          <DialogTrigger asChild>
            <Button variant="outline" className="hidden">Add to Cart</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[325px] md:max-w-[425px] mx-4 p-4">
            <div className="grid gap-6 p-6">
              <div className="grid gap-4">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-square"
                />
                <div className="grid gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold">{selectedProduct.name}</h3>
                  <div className="flex items-center gap-4">
                    <div className="md:text-2xl font-bold">Rs. {selectedProduct.price}</div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-primary" />
                      <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <Label htmlFor="quantity" className="text-base">
                  Quantity
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter className="flex flex-col space-y-2 md:items-center">
              <Button>Add to Cart</Button>
              <DialogClose asChild>
                <Button variant="outline" onClick={() => setSelectedProduct(null)}>Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
  </>
  
  );
}

function HeartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function StarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}