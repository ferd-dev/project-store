import { useContext } from 'react';
import Layout from '../../../shared/components/Layout';
import { CardContext } from '../../../shared/context/CardContext';

const ShoppingCart = () => {
  const context = useContext(CardContext);
  return (
    <Layout>
      <section>
        <div className="max-w-screen-xl px-4 2xl:px-0 mx-auto">
          {context?.products?.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-500">$ {product.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => context?.removeProduct(product.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
                <p>{product.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ShoppingCart;
