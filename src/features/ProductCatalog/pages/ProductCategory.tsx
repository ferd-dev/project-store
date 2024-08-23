import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../shared/components/Layout';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../interfaces/Product';
import CardNameCategory from '../components/CardNameCategory';

const ProductCategory = () => {
  const { id } = useParams<{ id: string }>();
  const navigate=useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');
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
    const fetchCategories = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}/products?limit=5&offset=1`
      );
      const data = await response.json();
      setProducts(data);
    };

    fetchCategories();
  }, [id]);
const handleNavigate=(productId: number)=>{
  navigate(`/details/${productId}`);
}
  return (
    <Layout>
      <section>
        <div className="max-w-screen-xl px-4 2xl:px-0 mx-auto">
          <Search />

          <CardNameCategory nameCategory={categoryName} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-5">
            {products.map((product) => (
              <div key={product.id} onClick={() => handleNavigate(product.id)}>
              {<ProductCard
                key={product.id}
                title={product.title}
                image={product.images[0]}
                price={product.price}
                id={product.id}
              />}
            </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
