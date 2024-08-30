import { useState, useEffect } from 'react';
import { Product } from '../interfaces/Product';

interface UseFetchSimilarProductsReturn {
  products: Product[];
  loading: boolean;
  error: boolean;
}

export const useFetchSimilarProducts = (
  categoryId: number
): UseFetchSimilarProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
        );
        if (!response.ok) throw new Error('Failed to fetch similar products');

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [categoryId]);

  return { products, loading, error };
};
