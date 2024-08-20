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
  //   products: Product[];
  products: GroupedProducts;
  loading: boolean;
  error: boolean;
}

interface GroupedProducts {
  [key: string]: Product[];
}

export const useFetchProducts = (): UseFetchProductsReturn => {
  const [products, setProducts] = useState<GroupedProducts>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://api.escuelajs.co/api/v1/products?limit=30&offset=1'
        );
        if (!response.ok) throw new Error('Failed to fetch products');

        const data: Product[] = await response.json();
        const grouped = data.reduce((acc: GroupedProducts, product) => {
          const categoryName = product.category.name; // Utiliza el nombre de la categoría como clave
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          if (acc[categoryName].length < 4) {
            acc[categoryName].push(product);
          }
          return acc;
        }, {});
        setProducts(grouped);
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
