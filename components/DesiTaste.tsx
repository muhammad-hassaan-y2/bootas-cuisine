import Card from "./Card";

const products = [
  {
    name: "Qeema Karhi (Beef)",
    description: "Home baked bread is used",
    price: '390',
    image: "/qeema-karley.jpg",
  },
  {
    name: "Biryani",
    description: "Classic chicken biryani, quick tasty meal",
    price: '330',
    image: "/biryani.jpg",
  },
  {
    name: "Katori Chat",
    description: "Crispy chicken, fresh lettuce, zingy sauce",
    price: '190',
    image: "/katori-chat.jpg",
  },
  {
    name: "Pulao",
    description: "Minced meat, lentils, served soft bun",
    price: '330',
    image: "/pulao.jpg",
  },
  {
    name: "White Chicken Karahi",
    description: "Marinated grilled chicken, wrapped soft bread",
    price: '1600',
    unit: "kg",
    image: "/white-karahi.jpg",
  },
  {
    name: "Vegetable Mix",
    description: "Juicy chicken, lettuce, tomato, toasted bun",
    price: '180',
    image: "/vegetable-mix.jpg",
  },
  {
    name: "Daal Mash/ Chana",
    description: "Crispy chicken, fresh lettuce, zingy sauce",
    price: '180',
    image: "/daal.jpg",
  },
  {
    name: "Chicken Haleem",
    description: "Minced meat, lentils, served soft bun",
    price: '270',
    image: "/haleem.jpg",
  },
  {
    name: "BBQ Leg Piece",
    description: "Marinated grilled chicken, wrapped soft bread",
    price: '365',
    image: "/bbq-leg.jpg",
  },
  {
    name: "BBQ Chest Piece",
    description: "Juicy chicken, lettuce, tomato, toasted bun",
    price: '320',
    image: "/bbq-chest.jpg",
  },
];

const DesiTaste = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-extrabold mb-6">Desi Taste</h1>
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

export default DesiTaste;
