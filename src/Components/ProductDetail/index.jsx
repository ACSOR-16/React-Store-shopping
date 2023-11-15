import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { shoppingCartContext } from "../Context";
import "./styles.css";

function ProductDetail() {
  const context = useContext(shoppingCartContext);

  return(
    <aside 
      className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg bg-gray-800`}
      >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div 
          className="cursor-pointer"
          onClick={ () => context.closeProductDetail()}
        >
          <XMarkIcon className="h-6 w-6 text-white-950"/>
        </div>
      </div>
    </aside>
  );
}

export { ProductDetail };