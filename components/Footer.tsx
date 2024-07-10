import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-6 w-full">
      <div className="w-full flex items-center justify-between px-4 md:px-6">
        <p className="text-xs text-muted-foreground">&copy; 2024 Boota Cusine Inc. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Menu
          </Link>
          <Link href="/cart" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            My Cart
          </Link>
          <Link href="/contact" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}