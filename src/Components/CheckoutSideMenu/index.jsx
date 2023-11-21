import { useContext } from "react";
import { shoppingCartContext } from "../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu} = useContext(shoppingCartContext);

  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 border border-white rounded-e-lg bg-gray-300`}
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
    </aside>
  );
};

export { CheckoutSideMenu };