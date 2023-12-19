import { useContext } from "react";
import { shoppingCartContext } from "../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { OrderCard } from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts} = useContext(shoppingCartContext);

  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 border border-white rounded-e-lg bg-black-300`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-white cursor-pointer"
            onClick={() => closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="px-6">
        {
          cartProducts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };