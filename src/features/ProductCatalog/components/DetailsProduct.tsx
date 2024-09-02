import { useFetchProductDetail } from '../hooks/useFetchProductDetail';
import ListSize from './ListSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CardContext } from '../../../shared/context/CardContext';

type Props = {
  productId: number;
};
const DetailsProduct = ({ productId }: Props) => {
  const context = useContext(CardContext);
  const { product, loading, error } = useFetchProductDetail(productId);
  const categorySizes: { [key: string]: string[] } = {
    Shoes: ['36', '37', '38', '39', '40', '41', '42', '43'],
    Clothes: ['XS', 'S', 'M', 'L', 'XL'],
  };
  const sizes = product?.category?.name
    ? categorySizes[product.category.name]
    : [];
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  return (
    <>
      <div className="p-4 sm:p-6">
        <h1 className="font-inter font-semibold text-2xl sm:text-4xl leading-8 sm:leading-12 text-black p-1">
          {product?.title}
        </h1>
        <p className="font-inter font-light text-lg sm:text-xl leading-5 sm:leading-6 line-through text-[#858585] p-2">
          Price: $ {product?.price}
        </p>
        <p className="font-inter font-medium text-2xl sm:text-4xl leading-8 sm:leading-12 text-[#1F3E97] p-2">
          Price: ${product ? (product.price * 0.9).toFixed(2) : ''}
        </p>
        <p className="font-inter font-normal text-sm sm:text-base leading-4 sm:leading-5 text-[#1E1E1E] p-2">
          select size
        </p>
        <ListSize sizes={sizes} />
        <div className="flex flex-col sm:flex-row mt-4 ">
          <button
            onClick={() => context?.addProduct(productId)}
            className="
              box-border
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
              hover:text-white focus:outline-none text-sm"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 mr-2" />
            Add to card
          </button>
          <button
            className="
              box-border
              flex
              flex-row
              justify-center
              items-center
              m-1
              p-4
              gap-2
              w-full
              sm:w-[221px]
              h-[56px]
              border-2
              border-[#1F3E97]
              rounded-[32px]
              hover:bg-blue-700
              hover:text-white focus:outline-none text-sm"
          >
            Buy now
          </button>
        </div>
      </div>
    </>
  );
};
export default DetailsProduct;
