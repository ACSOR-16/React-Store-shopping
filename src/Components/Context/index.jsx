import { createContext, useState } from "react";

const shoppingCartContext = createContext();

function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  function openProductDetail() {
    return setIsProductDetailOpen(true);
  }
  function closeProductDetail() {
    return setIsProductDetailOpen(false);
  }

  const [showProduct, setShowProduct] = useState({});

  return (
    <shoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      showProduct,
      setShowProduct,
    }}>
      {children}
    </shoppingCartContext.Provider>
  );
}

export { shoppingCartContext, ShoppingCartProvider };