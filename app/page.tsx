

import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Categories from "@/components/Categories"
import { Separator } from "@/components/ui/separator"
import Sides from "@/components/Sides"

export default function Component() {
  return (
    <div className="bg-muted/40 w-full min-h-screen py-12">
   
      <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Categories</h2>
          <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-lg">
            Explore our diverse range of culinary offerings, each with its own unique flavors and traditions.
          </p>
        </div>
      <Categories/>
      <Separator className="my-4" />
<Sides/>
    </div>
  )
}

function ArrowRightIcon(props:any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}