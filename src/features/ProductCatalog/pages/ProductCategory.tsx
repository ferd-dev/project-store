import { useParams } from 'react-router-dom';
import Layout from '../../../shared/components/Layout';
import Search from '../components/Search';
import ProductCard from '../components/ProductCard';
import CardNameCategory from '../components/CardNameCategory';
import Loading from '../../../shared/pages/Loading';
import { useFetchProductCategory } from '../hooks/useFetchProductCategory';
import { useEffect } from 'react';

const ProductCategory = () => {
  const { id } = useParams<{ id: string }>();

  const {
    products,
    categoryName,
    loading,
    hasMore,
    setPage,
    debouncedHandleSearch,
  } = useFetchProductCategory(id!);

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
  }, [loading, hasMore, setPage]);

  return (
    <Layout>
      <section>
        <div className="max-w-screen-xl px-4 2xl:px-0 mx-auto">
          <Search onSearch={debouncedHandleSearch} />
          <CardNameCategory nameCategory={categoryName} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-5">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  title={product.title}
                  image={product.images[0]}
                  price={product.price}
                  id={product.id}
                />
              </div>
            ))}
          </div>
          {loading && <Loading />}
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
