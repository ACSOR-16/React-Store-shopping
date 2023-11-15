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

  return (
    <shoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen
    }}>
      {children}
    </shoppingCartContext.Provider>
  );
}

export { shoppingCartContext, ShoppingCartProvider };