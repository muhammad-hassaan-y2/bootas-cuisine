import Card from './Card';



const products = [
    {  name: "Diet Salad", description: "Fresh veggies with light delight dressing", price: "390", image: "/diet-salad.jpg" },
    { name: "Sada Roti/1", description: "Plain flatbread, perfect meal accompaniment", price: "20", image: "/sada-roti.jpg" },
    {  name: "Mint Margarita", description: "Refreshing mint drink, perfect for summer", price: "100", image: "/mint-margaritta.jpg" },
    {  name: "Tea", description: "Warm, comforting, classic brewed tea", price: "80", image: "/tea.jpg" },
  ];

const Sides = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl  font-extrabold mb-6">Sides</h1>
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

export default Sides;
