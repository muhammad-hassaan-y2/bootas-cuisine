import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="bg-muted/40 w-full min-h-screen py-12">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="grid gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-3xl font-bold tracking-tight">Explore Our Food Categories</h1>
              <p className="text-muted-foreground">Find the perfect meal for any craving.</p>
            </div>
            <div className="relative flex-1">
              <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search categories..."
                className="w-full rounded-lg bg-background pl-8"
              />
            </div>



            
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Card className="bg-background shadow-lg">
              <Image
                src="/fast-food.avif"
                alt="Fast Food"
                width={450}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-[3/2]"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Fast Food</h3>
                <Link
                  href="fast-food"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:text-[#f39c12] hover:underline"
                  prefetch={false}
                >
                  Explore
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-lg">
              <Image
                src="/side.avif"
                alt="Sides"
                width={450}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-[3/2]"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Sides</h3>
                <Link
                  href="sides"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:text-[#f39c12] hover:underline"
                  prefetch={false}
                >
                  Explore
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-lg">
              <Image
                src="/desi-food.jpeg"
                alt="Desi Taste"
                width={450}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-[3/2]"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Desi Taste</h3>
                <Link
                  href="/desi-taste"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:text-[#f39c12] hover:underline"
                  prefetch={false}
                >
                  Explore
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-lg">
              <Image
                src="/best-selling.jpg"
                alt="Best Selling"
                width={450}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-[3/2]"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">Best Selling</h3>
                <Link
                  href="best-selling"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:text-[#f39c12] hover:underline"
                  prefetch={false}
                >
                  Explore
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
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