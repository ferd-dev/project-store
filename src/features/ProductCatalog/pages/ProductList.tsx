import Layout from '../../../shared/components/Layout';
import ButtonSeeMore from '../components/ButtonSeeMore';
import CardNameCategory from '../components/CardNameCategory';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import Loading from '../../../shared/pages/Loading';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ServerError from '../../../shared/pages/ServerError';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <Loading />;
  if (error) return <ServerError />;

  return (
    <Layout>
      <section>
        <div className="max-w-screen-xl px-4 2xl:px-0 mx-auto">
          <Search />
          <div>
            <CardNameCategory />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
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
        </div>
      </section>
    </Layout>
  );
};

export default ProductList;
