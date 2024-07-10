import Link from "next/link";

export default function Categories() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">

          <div className="relative group rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
            <Link href="/fast-food" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Fast Food</span>
            </Link>
            <img
              src="/fast-food.avif"
              alt="Fast Food"
              width={400}
              height={300}
              className="object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Fast Food</h3>
              <p className="text-sm">Discover the authentic flavors of Fast Food.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="relative group rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
            <Link href="/sides" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Sides</span>
            </Link>
            <img
              src="/side.avif"
              alt="Sides"
              width={400}
              height={300}
              className="object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Sides</h3>
              <p className="text-sm">Spice up your life with authentic Sides cuisine.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="relative group rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
            <Link href="/desi-taste" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Desi Taste</span>
            </Link>
            <img
              src="/desi-food.jpeg"
              alt="Desi Taste"
              width={400}
              height={300}
              className="object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Desi Taste</h3>
              <p className="text-sm">Explore the delicate flavors of JapDesi Taste.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="relative group rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
            <Link href="/best-selling" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Best Selling</span>
            </Link>
            <img
              src="/best-selling.jpg"
              alt="best selling"
              width={400}
              height={300}
              className="object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Best Selling</h3>
              <p className="text-sm">Embark on a flavorful journey through Best.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

        </div>
      </div>
    </section>
  );
}
