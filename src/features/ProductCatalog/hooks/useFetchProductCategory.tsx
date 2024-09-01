import { useEffect, useState } from 'react';
import { Product } from '../interfaces/Product';
import { debounce } from 'lodash';

export const useFetchProductCategory = (categoryId: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}`
      );
      const data = await response.json();
      setCategoryName(data.name);
    };

    fetchCategory();
  }, [categoryId]);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
    setSearchTerm('');

    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?limit=8&offset=0`
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);

      if (data.length === 0) {
        setHasMore(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  useEffect(() => {
    const fetchMoreProducts = async () => {
      if (!hasMore || page === 1) return;
      setLoading(true);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products?limit=8&offset=${(page - 1) * 8}`
      );
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data]);
      setLoading(false);

      if (data.length === 0) {
        setHasMore(false);
      }
    };

    fetchMoreProducts();
  }, [categoryId, page, hasMore]);

  const debouncedHandleSearch = debounce((term: string) => {
    setSearchTerm(term.toLowerCase());
  }, 300);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return {
    products: filteredProducts,
    categoryName,
    loading,
    hasMore,
    setPage,
    debouncedHandleSearch,
  };
};
