import { useState, useEffect } from 'react';
import { Product } from '../interfaces/Product';

interface UseFetchProductDetailReturn {
  product: Product | null;
  loading: boolean;
  error: boolean;
}

export const useFetchProductDetail = (
  productId: number
): UseFetchProductDetailReturn => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${productId}`
        );
        if (!response.ok) throw new Error('Failed to fetch product details');

        const data: Product = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  return { product, loading, error };
};
