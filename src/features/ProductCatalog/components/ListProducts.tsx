import { useState, useEffect } from "react";
import ProductCard2 from "./ProductCard2";

const ListProducts = () => {
    const [visibleCards, setVisibleCards] = useState(4);

    const updateVisibleCards = () => {
        const width = window.innerWidth;
        if (width >= 1280) {
            setVisibleCards(4);
        } else if (width >= 1024) {
            setVisibleCards(3);
        } else if (width >= 640) {
            setVisibleCards(2);
        } else {
            setVisibleCards(1);
        }
    };

    useEffect(() => {
        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    return (
        <div className="h-[555px]">
    <div className="flex flex-col items-center p-0 gap-2 isolate w-full max-w-[1132px] h-[104px] flex-none order-0 flex-grow-0 bg-[#F4F4F4] rounded-[184px] relative">
    <div className="absolute h-[38px] left-[23px] sm:left-[90px] top-[42px] sm:top-[37px] font-neco italic font-bold text-[20px] sm:text-[26px] leading-[28px] sm:leading-[38px] text-[#1F3E97]">
        Most popular
    </div>
    <div className="absolute w-[80px] sm:w-[120px] h-[30px] sm:h-[40px] left-[calc(100%-85px)] sm:left-[calc(100%-144px)] top-[40px] sm:top-[32px] flex justify-between">
    <div className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full transform -scale-x-100">
        <img src="src/asets/VectorI.png" alt="left arrow" className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] transform -scale-x-100" />
    </div>
    <div className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full">
        <img src="src/asets/VectorD.png" alt="right arrow" className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]" />
    </div>
</div>
</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[1132px] h-auto flex-none order-1 flex-grow-0">
                {Array.from({ length: visibleCards }).map((_, index) => (
                    <ProductCard2 key={index} />
                ))}
            </div>
        </div>
    );
}

export default ListProducts;