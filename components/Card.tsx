import { FC } from 'react';
import { Separator } from './ui/separator';

type CardProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const Card: FC<CardProps> = ({ name, description, price, image }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white text-center border hover:border-[#ff9f43] transition duration-300">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md " />
      <h2 className="mt-4 text-lg font-bold">{name}</h2>
      <p className="mt-0.5 text-gray-600">{description}</p>
      <Separator className="my-4" />

      <p className="mt-2 text-[#ff9f43] font-bold">from Rs.{price}</p>
      <button className="mt-2 px-4 py-2 bg-[#ff9f43] text-white rounded-full font-bold ">Add To Cart</button>
    </div>
  );
};

export default Card;
