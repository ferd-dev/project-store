import { useState } from 'react';

const sizes = ["38", "39", "40", "41", "42", "43"];

const ListSize = () => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    };

    return (
        <div className="flex flex-wrap">
            {sizes.map((size) => (
                <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`w-10 h-10 border rounded-full flex items-center justify-center mr-2 mb-2 ${
                        selectedSize === size ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                    }`}
                >
                    {size}
                </button>
            ))}
        </div>
    );
};

export default ListSize;

