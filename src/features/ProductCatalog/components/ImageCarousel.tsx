import { useState } from 'react';
import { useFetchProductDetail } from '../hooks/useFetchProductDetail';

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

    const prevImage = () => {
        if (product?.images) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;

    return (
        <div id={`carousel-${productId}`} className="relative w-full max-w-[480px] h-[480px] border border-[#E9E9E9] rounded-[8px] overflow-hidden flex items-center justify-center">
            <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2">
                Previous
            </button>
            {product?.images && (
                <img src={product.images[currentIndex]} alt={`Product image ${currentIndex + 1}`} className="w-full h-full object-cover" />
            )}
            <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2">
                Next
            </button>
        </div>
    );
};

export default ImageCarousel;
