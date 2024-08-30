import { useState } from 'react';
import { useFetchProductDetail } from '../hooks/useFetchProductDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  productId: number;
};

const ImageCarousel = ({ productId }: Props) => {
  const { product, loading, error } = useFetchProductDetail(productId);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (product?.images) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }
  };
  const DEFAULT_IMAGE_URL = 'https://via.placeholder.com/480';
  const prevImage = () => {
    if (product?.images) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + product.images.length) % product.images.length
      );
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;
  const images =
    product?.images && product.images.length > 0
      ? product.images
      : [DEFAULT_IMAGE_URL];
  return (
    <div
      id={`carousel-${productId}`}
      className="relative w-full max-w-[480px] h-[480px] border border-[#E9E9E9] rounded-[8px] overflow-hidden flex items-center justify-center"
    >
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors"
        aria-label="Previous image"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {product?.images && (
        <img
          src={images[currentIndex]}
          alt={`Product image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = DEFAULT_IMAGE_URL;
          }}
        />
      )}
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors"
        aria-label="Next image"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ImageCarousel;
