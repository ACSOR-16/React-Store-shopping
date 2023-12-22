import { Layout } from "../Components/Layout";
import { shoppingCartContext } from "../Components/Context";
import { OrderCard } from "../Components/OrderCard";
import { useContext } from "react";

function MyOrder() {
  const {order} = useContext(shoppingCartContext);
  return(
    <Layout>
      MyOrder
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