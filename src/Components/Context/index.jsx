import { createContext } from "react";

const shoppingCartContext = createContext();

function ShoppingCartProvider({children}) {

  return (
    <shoppingCartContext.Provider>
      {children}
    </shoppingCartContext.Provider>
  );
}

export { shoppingCartContext, ShoppingCartProvider };