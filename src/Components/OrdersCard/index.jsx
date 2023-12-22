import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrderCards = (props) => {
  const { totalPrice, totalProducts } = props;
  
  return(
    <div 
      className="flex justify-between items-center mb-3 border border-white rounded-lg p-6 w-80"
    >
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01/02/2023</span>
          <span className="font-light">{totalProducts} article</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">{totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-white cursor-pointer"/>
        </p>
      </div>
    </div>
  );
};

export {OrderCards};