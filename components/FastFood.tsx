import Card from "./Card";

const products = [
  {
    name: "Tortilla Wrap",
    description: "Home baked bread is used",
    price: "350",
    image: "/tortilla-wrap.jpg",
  },
  {
    name: "Chicken Bun",
    description: "Classic chicken bun, quick tasty meal",
    price: "160",
    image: "/chicken-bun.jpg",
  },
  {
    name: "Zinger burger",
    description: "Crispy chicken, fresh lettuce, zingy sauce",
    price: "250",
    image: "/zinger-burger.jpg",
  },
  {
    name: "Shami Burger",
    description: "Minced meat, lentils, served soft bun",
    price: "140",
    image: "/shami-burger.jpg",
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

const FastFood = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-extrabold mb-6">Fast Food</h1>
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

export default FastFood;
