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
  
  //searched products array
  const [searchedItem, setSearchedItem] = useState(null);
  //filtered products array
  const [filteredItems, setFilteredItems] = useState(null);
  // Get products - by title
  // const [searchByTitle, setSearchByTitle] = useState(null);
  // Get products - by category
  // const [searchByCategory, setSearchByCategory] = useState(null);
  
  useEffect( () => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(dataFetch => setItems(dataFetch))
  }, []);
  
  // filter products by name, description or category
  useEffect(() => {
    if (searchedItem) {
      setFilteredItems(filtered(items, searchedItem));
    } else {
      setFilteredItems(items);
    }
  }, [searchedItem, items]);

  // filter products by name, description or category
  const filtered = (items, searchedItem) => {
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchedItem.toLowerCase()) ||
        item.description.toLowerCase().includes(searchedItem.toLowerCase()) ||
        item.category.name.toLowerCase().includes(searchedItem.toLowerCase())
    );
  };
  
  // const filteredItemsByTitle = (items, searchByTitle) => {
  //   return items?.filter((item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())))
  // };
  // const filteredItemsByCategory = (items, searchByCategory) => {
  //     return items?.filter((item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())))
  // };

  // useEffect(() => {
  //   if (searchByTitle) {
  //     setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  //   }
  //   if (searchByCategory) {
  //     setFilteredItems(filteredItemsByCategory(items, searchByCategory))
  //   }
  // }, [items, searchByTitle, searchByCategory]);

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
      searchedItem,
      setSearchedItem,
      filteredItems,
      setFilteredItems
    }}>
      {children}
    </shoppingCartContext.Provider>
  );
}

export { shoppingCartContext, ShoppingCartProvider };