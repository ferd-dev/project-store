import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../../../shared/context/CardContext';

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const imagenDefaiult = 'https://via.placeholder.com/150';

const ProductCard = ({ id, title, price, image }: Props) => {
  const [filledStars, setFilledStars] = useState(0);
  const navigate = useNavigate();
  const context = useContext(CardContext);

  const handleNavigate = (productId: number) => {
    navigate(`/details/${productId}`);
  };

  useEffect(() => {
    setFilledStars(Math.floor(Math.random() * 6));
  }, []);

  const handleAddProduct = () => {
    context?.addProduct(id);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <a
        className="block flex-grow hover:cursor-pointer"
        onClick={() => handleNavigate(id)}
      >
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-auto object-cover"
          onError={(e) => {
            e.currentTarget.src = imagenDefaiult;
          }}
        />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-lg font-bold text-black">$ {price}</p>
      </a>

      <div className="flex items-center mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < filledStars ? 'text-yellow-500' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927a1 1 0 011.902 0l1.286 4.064a1 1 0 00.95.69h4.287a1 1 0 01.592 1.81l-3.48 2.536a1 1 0 00-.364 1.118l1.287 4.064a1 1 0 01-1.54 1.118l-3.48-2.536a1 1 0 00-1.175 0l-3.48 2.536a1 1 0 01-1.54-1.118l1.287-4.064a1 1 0 00-.364-1.118L2.136 9.49a1 1 0 01.592-1.81h4.287a1 1 0 00.95-.69l1.286-4.064z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-500">{filledStars}/5</span>
      </div>

      <div className="flex flex-col items-center">
        <button
          className="box-border
            flex
            flex-row
            justify-center
            items-center
            p-4
            gap-2
            m-1
            w-full
            sm:w-[221px]
            h-[56px]
            border-2
            border-[#1F3E97]
            rounded-[32px]
            mb-2
            sm:mb-0
            hover:bg-blue-700
           hover:text-white focus:outline-none text-sm
            mt-5"
          onClick={() => handleAddProduct()}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
