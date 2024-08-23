import { useState } from "react";
import { useFetchProductDetail } from "../hooks/useFetchProductDetail";
type Props = {
  productId: number;
};
const CardOptions = ({productId}:Props) => {
  const [displayText , setDisplayText]= useState('');
  const [selectedButton, setSelectedButton] = useState('');
  const { product, loading, error } = useFetchProductDetail(productId);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    return (
      <div className="flex flex-col items-center ">
        <div className="w-full max-w-[60.5rem] bg-gray-200 rounded-full py-2 flex justify-start p-6 ">
            <button className={`text-center text-xl font-semibold italic m-1 py-2 px-6 rounded-full  flex items-center ${
            selectedButton === 'description' ? 'bg-blue-900 text-white' :  'bg-gray-200 text-gray-500'
          }`}
            onClick={()=>{ setDisplayText(product?.description || 'Descripción no disponible')
              setSelectedButton('description')
            }}
            >
                Description
            </button>
            <button className={`text-center text-xl font-semibold italic m-1 py-2 px-6 rounded-full  flex items-center ${
            selectedButton === 'similar' ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'
          }`}
            onClick={()=>{ setDisplayText(product?.description ||'Product Similar')
              setSelectedButton('similar')
            }}
            >
                Similar products
            </button>
        </div>
        <div className=" w-full max-w-5xl mt-4 text-xl p-4   flex items-center ">
          {displayText}
        </div>
      </div>
    );
  };
  
  export default CardOptions;
