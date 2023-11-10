import { useContext } from "react";
import { shoppingCartContext } from "../Context";

function Card({data}) {
  const context = useContext(shoppingCartContext)
  return(
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-5 w-full h-4/5">
        <span 
          className="absolute text-black text-sm bottom-0 left-0 bg-black/20 rounded-lg m-2 px-3 py-0.5"
        >
          {data.category.name}
        </span>
        <img 
          className="w-full h-full object-cover rounded-lg" 
          src={data.images[0]} 
          alt={data.title} />
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-black/10 w-6 h-6 rounded-full text-black m-2 p-1"
          onClick={() => context.setCount(context.count + 1)}
        >
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-black text-sm font-light">{data.title}</span>
        <span className="text-black text-lg font-medium">${data.price}.00</span>
      </p>

    </div>   
  );
}

export {Card};