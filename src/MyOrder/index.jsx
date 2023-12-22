import { Layout } from "../Components/Layout";
import { shoppingCartContext } from "../Context";
import { OrderCard } from "../Components/OrderCard";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const {order} = useContext(shoppingCartContext);
  return(
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to={`/my-orders`} className="absolute left-0">
          <ChevronLeftIcon
            className="h-6 w-6 text-white cursor-pointer"
          />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="px-6 flex-col w-80">
        {
          order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export { MyOrder };