import { useFetchProductDetail } from '../hooks/useFetchProductDetail';
import ListSize from './ListSize';

type Props = {
    productId: number;
};
const DetailsProduct = ({ productId }: Props) => {
    const { product, loading, error } = useFetchProductDetail(productId);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;
    return (
        <>
        <div className="p-4 sm:p-6">
        <h1 className="font-inter font-semibold text-2xl sm:text-4xl leading-8 sm:leading-12 text-black p-1" >
            {product?.title}
        </h1>
        <p className="font-inter font-light text-lg sm:text-xl leading-5 sm:leading-6 line-through text-[#858585] p-2"> Price: $ 19 </p>
        <p className="font-inter font-medium text-2xl sm:text-4xl leading-8 sm:leading-12 text-[#1F3E97] p-2">
            Price: ${product?.price}
        </p>
        <p className="font-inter font-normal text-sm sm:text-base leading-4 sm:leading-5 text-[#1E1E1E] p-2">
            select size
        </p>
        <ListSize />
        <div className='flex flex-col sm:flex-row mt-4 justify-between'>
        <button className="
                    box-border
                    flex
                    flex-row
                    justify-center
                    items-center
                    p-4
                    gap-2
                    w-full
                    sm:w-[221px]
                    h-[56px]
                    border-2
                    border-[#1F3E97]
                    rounded-[32px]
                    mb-2
                    sm:mb-0
                ">
            + Add to card
        </button>
        <button
        className="
        box-border
        flex
        flex-row
        justify-center
        items-center
        p-4
        gap-2
        w-full
        sm:w-[221px]
        h-[56px]
        border-2
        border-[#1F3E97]
        rounded-[32px]
        ">
            Buy now
        </button>
        </div>
        </div>
    </>
    );
};
export default DetailsProduct;
















