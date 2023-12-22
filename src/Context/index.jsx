import { createContext, useEffect, useState } from "react";

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

  //  get Products
  const [items, setItems] = useState(null);

  // Get products - by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log(searchByTitle);
  useEffect( () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(dataFetch => setItems(dataFetch))
  }, []);

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
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle
    }}>
      {children}
    </shoppingCartContext.Provider>
  );
}

export { shoppingCartContext, ShoppingCartProvider };