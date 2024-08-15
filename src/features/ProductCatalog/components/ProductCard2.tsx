const ProductCard2 = () => {
    return (
        <div className="flex flex-col sm:flex-row items-start p-0 gap-1.5 isolate w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto bg-white">
            <div className="flex-none order-1 flex-grow-0 w-full h-auto bg-[#F4F4F4] rounded-[6.33423px] z-0 relative">
                <img src="src\asets\clothe.png" alt="clothe.png" className="absolute w-[254.47px] h-[254.47px] left-[12.12px] top-[11.36px] rounded-[6.2066px] transform " />
                <div className="absolute flex flex-row justify-center items-center p-[6.05882px] [12.1176px] gap-[6.06px] w-[76.24px] h-[25.12px] left-[184.04px] top-[374.13px] bg-[#1F3E97] rounded-[30.2941px] z-2">
                    <button className="flex-none order-0 flex-grow-0 w-[52px] h-[13px] font-inter font-medium text-[10.6029px] leading-[13px] text-white">Shop Now</button>
                </div>
                <div className="absolute flex flex-col items-start p-0 gap-[12.12px] w-[174px] h-[71.12px] left-[18.18px] top-[284.01px] z-3">
                    <p className="flex-none order-0 flex-grow-0 w-[174px] h-[44px] font-inter font-semibold text-[18.1765px] leading-[22px] text-black">Vantela New Public White low</p>
                    <p className="flex-none order-1 flex-grow-0 w-[67px] h-[15px] font-inter font-normal text-[12.1176px] leading-[15px] text-black">Rp 299.990</p>
                </div>
                <div className="absolute flex flex-row items-center p-0 gap-[6.06px] w-[55.24px] h-[18.18px] left-[18.18px] top-[380.95px] z-4">
                    <img src="src\asets\star.png" alt="star" className="flex-none order-0 flex-grow-0 w-[18.18px] h-[18.18px]" />
                    <div className="absolute left-[50.23%] right-[6.21%] top-[6.25%] bottom-[9.38%] bg-[#FFB800] flex-none order-1 flex-grow-0 w-[31px] h-[15px] font-inter font-medium text-[12.1176px] leading-[15px] text-black">4.5/5</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard2;

