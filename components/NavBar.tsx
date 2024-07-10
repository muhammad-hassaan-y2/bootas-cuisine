import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-white px-4 md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <FlameIcon className="h-6 w-6 text-[#ff9f43]" />
        <span className="text-lg font-bold text-[#ff9f43]">Boota Cuisine</span>
      </Link>
      <nav className="hidden gap-4 md:flex">
        <Link
          href="#"
          className="text-sm font-medium text-black hover:underline hover:underline-offset-4"
          prefetch={false}
        >
          Menu
        </Link>
        <Link
          href="/best-selling"
          className="text-sm font-medium text-black hover:underline hover:underline-offset-4"
          prefetch={false}
        >
          Special Offers
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-black hover:underline hover:underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <Button variant="destructive" className="bg-[#ff9f43] text-white hover:bg-white hover:text-[#ff9f43]">
        Order Now
      </Button>
    </header>
  )
}

function FlameIcon(props:any) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}