import Card from "./Card";

const products = [
  {
    name: "Katori Chat",
    description: "Crispy chicken, fresh lettuce, zingy sauce",
    price: "190",
    image: "/katori-chat.jpg",
  },
  {
    name: "Biryani",
    description: "Classic chicken biryani, quick tasty meal",
    price: "330",
    image: "/biryani.jpg",
  },
  {
    name: "BBQ Leg Piece",
    description: "Marinated grilled chicken, wrapped soft bread",
    price: "365",
    image: "/bbq-leg.jpg",
  },
  {
    name: "Mint Margarita",
    description: "Refreshing mint drink, perfect for summer",
    price: "100",
    image: "/mint-margaritta.jpg",
  },
  {
    name: "Tortilla Wrap",
    description: "Home baked bread is used, fresh veggies and bbq chicken",
    price: "350",
    image: "/tortilla-wrap.jpg",
  },
  {
    name: "Diet Salad",
    description: "Fresh veggies with light dressing",
    price: "390",
    image: "/diet-salad.jpg",
  },
  {
    name: "Chicken Shawarma",
    description: "Marinated grilled chicken, wrapped soft bread",
    price: "190",
    image: "/chicken-shawarma.jpg",
  },
  {
    name: "Chicken Sandwich",
    description: "Juicy chicken, lettuce, tomato, toasted bun",
    price: "450",
    image: "/chicken-sandwich.jpg",
  },
];

const BestSelling = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-extrabold mb-6">Best Selling</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((pizza) => (
          <Card
            key={pizza.name}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            image={pizza.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
