import { useState } from 'react';

interface ListSizeProps {
  sizes: string[];
}

const ListSize = ({ sizes }: ListSizeProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };
  if (!Array.isArray(sizes) || sizes.length === 0) {
    return <div>Unique sizes available</div>;
  }

  return (
    <div className="flex flex-wrap">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeClick(size)}
          className={`w-10 h-10 border rounded-full flex items-center justify-center mr-2 mb-2 ${
            selectedSize === size
              ? 'border-blue-500 bg-blue-100'
              : 'border-gray-300'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default ListSize;
