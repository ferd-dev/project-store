import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../shared/components/Layout';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../interfaces/Product';
import CardNameCategory from '../components/CardNameCategory';

const ProductCategory = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}`
      );
      const data = await response.json();
      setCategoryName(data.name);
    };

    fetchCategory();
  }, [id]);

  useEffect(() => {
    // Restablecer el estado cuando la categoría cambie
    setProducts([]);
    setPage(1);
    setHasMore(true);
    setSearchTerm('');

    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}/products?limit=8&offset=0`
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);

      if (data.length === 0) {
        setHasMore(false);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    const fetchMoreProducts = async () => {
      if (!hasMore || page === 1) return; // Evita hacer fetch en la primera página
      setLoading(true);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}/products?limit=8&offset=${(page - 1) * 8}`
      );
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data]);
      setLoading(false);

      if (data.length === 0) {
        setHasMore(false);
      }
    };

    fetchMoreProducts();
  }, [id, page, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading ||
        !hasMore
      ) {
        return;
      }
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  const handleNavigate = (productId: number) => {
    navigate(`/details/${productId}`);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <Layout>
      <section>
        <div className="max-w-screen-xl px-4 2xl:px-0 mx-auto">
          <Search onSearch={handleSearch} />
          <CardNameCategory nameCategory={categoryName} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-5">
            {filteredProducts.map((product) => (
              <div key={product.id} onClick={() => handleNavigate(product.id)}>
                <ProductCard
                  title={product.title}
                  image={product.images[0]}
                  price={product.price}
                  id={product.id}
                />
              </div>
            ))}
          </div>
          {loading && <p>Loading more products...</p>}
          {!hasMore && <p>No more products available.</p>}
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
