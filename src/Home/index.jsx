import { Layout } from "../Components/Layout";
import { Card } from "../Components/Card";
import { useContext } from "react";
import { shoppingCartContext } from "../Context";

function Home() {
  const {items, searchedItem, setSearchedItem, filteredItems} = useContext(shoppingCartContext);  

  const renderView = () => {
    if (searchedItem?.length > 0) {
      if(filteredItems?.length > 0) {
        return(
          filteredItems?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        );
      } else {
        return(
          <div>We don't have anything</div>
        );
      }
    } else {
      return (
        items?.map(item => (
          <Card key={item.id} data={item}/>
        ))
      )
    }
  };
  return(
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>  
      <input 
        type="text" 
        placeholder="Search a Product"
        className="rounded-lg border border-gray-100 w-80 mb-6 p-3 focus:outline-none"  
        onChange={(event) => setSearchedItem(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          renderView()
        }
      </div>
    </Layout>
  );
}

export { Home };