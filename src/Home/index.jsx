import { Layout } from "../Components/Layout";
import { Card } from "../Components/Card";
import { useContext } from "react";
import { shoppingCartContext } from "../Context";

function Home() {
  const {items, setSearchByTitle} = useContext(shoppingCartContext);  
  return(
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>  
      <input 
        type="text" 
        placeholder="Search a Product"
        className="rounded-lg border border-gray-100 w-80 mb-6 p-3 focus:outline-none"  
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
    </Layout>
  );
}

export { Home };