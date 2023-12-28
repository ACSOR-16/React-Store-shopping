import { NavLink } from "react-router-dom";
import { shoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

function Navbar() {
  const {cartProducts, setSearchedItem} = useContext(shoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink 
            to="/"
          >Shop</NavLink>
        </li>
        <li>
          <NavLink 
            to="/"
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >All</NavLink>
        </li>
        <li>
          <NavLink 
            to="/clothes"
            onClick={() => setSearchedItem("clothes")}
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >Clothes</NavLink>
        </li>
        <li>
          <NavLink 
            to="/electronics"
            onClick={() => setSearchedItem("electronics")}
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >Electronics</NavLink>
        </li>
        <li>
          <NavLink 
            to="/furniture"
            onClick={() => setSearchedItem("furniture")}
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >Furniture</NavLink>
        </li>
        <li>
          <NavLink 
            to="/toys"
            onClick={() => setSearchedItem("toys")}
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >Toys</NavLink>
        </li>
        <li>
          <NavLink 
            to="/others"
            onClick={() => setSearchedItem("others")}
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >Others</NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-white/60">
          userExample@mail.com
        </li>
        <li>
          <NavLink 
            to="/my-orders"
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >My Orders</NavLink>
        </li>
        <li>
          <NavLink 
            to="/my-account"
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >My Account</NavLink>
        </li>
        <li>
          <NavLink 
            to="/Sign-in"
            className={({isActive}) => 
              isActive ? activeStyle : undefined}
          >Sing In</NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="text-white h-7 w-7"/> 
          <div>
            {cartProducts.length}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };