import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ProductCard = ({id, title, price, image }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
      <NavLink to={`details/${id}`} className="block flex-grow">
        <img
          src={image}
          alt="Nombre del producto"
          className="rounded-lg w-full h-auto object-cover"
        />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-lg font-bold text-black">$ {price}</p>
      </NavLink>
      <div className="flex flex-col items-center">
        <button className="box-border
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
         hover:text-white focus:outline-none text-sm">
          <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
