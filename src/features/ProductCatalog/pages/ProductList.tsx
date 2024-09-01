import Layout from '../../../shared/components/Layout';
import ButtonSeeMore from '../components/ButtonSeeMore';
import CardNameCategory from '../components/CardNameCategory';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import Loading from '../../../shared/pages/Loading';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ServerError from '../../../shared/pages/ServerError';
import { useState } from 'react';
import { debounce } from 'lodash';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <Loading />;
  if (error) return <ServerError />;

  const debouncedHandleSearch = debounce((term: string) => {
    setSearchTerm(term.toLowerCase());
  }, 300);

  const filteredProducts = Object.entries(products).reduce(
    (acc, [categoryName, products]) => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
      if (filtered.length > 0) {
        acc[categoryName] = filtered;
      }
      return acc;
    },
    {} as typeof products
  );

  return (
    <Layout>
      <section>
        <div className="max-w-screen-xl px-4 2xl:px-0 mx-auto">
          <Search onSearch={debouncedHandleSearch} />

          {Object.entries(filteredProducts).map(([categoryName, products]) => (
            <div key={categoryName}>
              <CardNameCategory nameCategory={categoryName} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-5">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    image={product.images[0]}
                    price={product.price}
                    id={product.id}
                  />
                ))}
              </div>

              <ButtonSeeMore />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProductList;
