import { useContext } from "react";
import { shoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen, 
    closeCheckoutSideMenu, 
    cartProducts, 
    setCartProducts,
    setOrder,
    order
  } = useContext(shoppingCartContext);
  
  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01/02/2023",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    };
    
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
  };

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
      <div className="px-6 scrollable-cards flex-1">
        {
          cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total: </span>
          <span className="font-medium text-1xl">${totalPrice(cartProducts)}.00</span>
        </p>
      </div>
      
      <Link to={`/my-orders/last`}>
        <button
          className="w-ful p-3 m-5 rounded-lg text-black bg-white"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
};

export { CheckoutSideMenu };