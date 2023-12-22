import { useContext } from "react";
import { Layout } from "../Components/Layout";
import { shoppingCartContext } from "../Context";
import { OrderCards } from "../Components/OrdersCard";
import { Link } from "react-router-dom";

function MyOrders() {
  const {order} = useContext(shoppingCartContext);
  return(
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-5">
        <h1 className="font-medium text-xl">My Order</h1>
      </div>
      {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrderCards 
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  );
}

export { MyOrders };