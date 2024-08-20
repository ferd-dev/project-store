import { useState, useEffect } from 'react';

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
}

interface UseFetchProductsReturn {
  products: Product[];
  loading: boolean;
  error: boolean;
}

export const useFetchProducts = (): UseFetchProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://api.escuelajs.co/api/v1/products?limit=10&offset=1'
        );
        if (!response.ok) throw new Error('Failed to fetch products');

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
