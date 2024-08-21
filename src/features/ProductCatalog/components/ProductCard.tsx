import { NavLink } from "react-router-dom";

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
        <button className="mt-4 border text-black py-1 px-1 rounded-full flex items-center justify-center w-2/4 hover:bg-blue-700 hover:text-white focus:outline-none text-sm">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.401 1.607A1 1 0 006.382 6h13.236a1 1 0 00.981-.783L21 4H5.401m-2.372 1h18.342a1 1 0 01.98 1.217l-1.5 6A1 1 0 0117.763 13H7.237a1 1 0 01-.981-.783L4.256 6.926M3 3v2m-1 1h4m-4 8h18v2H2v-2z"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
