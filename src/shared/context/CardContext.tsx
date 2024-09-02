import { createContext, ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

interface CardContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  products: Product[] | undefined;
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  amount: number;
}

export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

export const CardProvider: React.FC<LayoutProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = async (id: number) => {
    id = Number(id);
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const newProduct = { ...data, amount: 1 };

      setProducts((prev) => {
        if (!prev) {
          setCount(count + 1);
          return [newProduct];
        }
        const existingProductIndex = prev.findIndex((p) => p.id === id);

        if (existingProductIndex !== -1) {
          const updatedProducts = [...prev];
          updatedProducts[existingProductIndex].amount += 1;
          return updatedProducts;
        }
        setCount(count + 1);
        return [...prev, newProduct];
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        const updatedProducts = [...prevProducts];
        if (updatedProducts[productIndex].amount > 1) {
          updatedProducts[productIndex].amount -= 1;
        } else {
          updatedProducts.splice(productIndex, 1);
          setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
        }
        return updatedProducts;
      }
      return prevProducts;
    });
    
  };

  return (
    <CardContext.Provider
      value={{
        count,
        setCount,
        products,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
