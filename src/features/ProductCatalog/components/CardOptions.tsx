import { useState, useEffect } from "react";
import { useFetchProductDetail } from "../hooks/useFetchProductDetail";
import { useFetchSimilarProducts } from "../hooks/useFetchSimilarProducts";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

type Props = {
  productId: number;
};

const CardOptions = ({productId}:Props) => {
  const DEFAULT_IMAGE_URL = 'https://via.placeholder.com/150'; // URL de la imagen predeterminada
  const [displayText , setDisplayText]= useState('');
  const [selectedButton, setSelectedButton] = useState('');
  const { product, loading, error } = useFetchProductDetail(productId);
  const { products: similarProducts, loading: similarLoading, error: similarError } = useFetchSimilarProducts(product?.category.id || 0);
  const navigate = useNavigate();

  useEffect(() => {
    if (product && product.description) {
      setDisplayText(product.description);
      setSelectedButton('description');
    }
  }, [product]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredSimilarProducts = similarProducts.filter(similarProduct => similarProduct.id !== productId);
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledSimilarProducts = shuffleArray(filteredSimilarProducts);
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
            onClick={()=>{ 
              setDisplayText('similar');
            setSelectedButton('similar');
            }}
            >
                Similar products
            </button>
        </div>
        <div className=" w-full max-w-5xl mt-4 text-xl p-4   flex items-center ">
        {displayText === 'similar' ? (
          similarLoading ? (
            <div>Loading similar products...</div>
          ) : similarError ? (
            <div>Error loading similar products</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shuffledSimilarProducts.slice(0, 3).map((similarProduct) => (
                <div key={similarProduct.id} onClick={() => {
                  navigate(`/details/${similarProduct.id}`, { replace: true });
                  window.location.reload();
                }}>
                <ProductCard
                  key={similarProduct.id}
                  id={similarProduct.id}
                  title={similarProduct.title}
                  price={similarProduct.price}
                  image={similarProduct.images[0] || DEFAULT_IMAGE_URL}
                />
                </div>
              ))}
            </div>
          )
        ) : (
          displayText
        )}
        </div>
      </div>
    );
  };
  
  export default CardOptions;
