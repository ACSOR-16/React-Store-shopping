import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { shoppingCartContext } from "../Context";
import "./styles.css";

function ProductDetail() {
  const {isProductDetailOpen, closeProductDetail, showProduct} = useContext(shoppingCartContext);

  return(
    <aside 
      className={`${isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg bg-gray-800`}
      >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div 
          className="cursor-pointer"
          onClick={ () => closeProductDetail()}
        >
          <XMarkIcon className="h-6 w-6 text-white-950"/>
        </div>
      </div>
      <figure className="px-6">
        <img 
          className="w-full h-full rounded-lg" 
          src={showProduct.images?.[0]}
          alt={showProduct.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${showProduct.price}</span>
        <span className="font-medium text-md">${showProduct.title}</span>
        <span className="font-light text-ms">${showProduct.description}</span>
      </p>
    </aside>
  );
}

export { ProductDetail };