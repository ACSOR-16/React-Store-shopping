import { createContext, useState } from "react";

const shoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
  // shopping cart - show product
  const [showProduct, setShowProduct] = useState({});
  
  // shopping cart - add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // shopping cart - Order
  const [order, setOrder] = useState([]);

  return (
    <shoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      showProduct,
      setShowProduct,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder
    }}>
      {children}
    </shoppingCartContext.Provider>
  );
}

export { shoppingCartContext, ShoppingCartProvider };