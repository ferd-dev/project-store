import { useContext } from 'react';
import Layout from '../../../shared/components/Layout';
import { CardContext } from '../../../shared/context/CardContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
  const context = useContext(CardContext);

  const handlePayment = () => {
    // Lógica para manejar el pago simulado
    alert('Pago realizado con éxito');
    // Redirigir a una página de confirmación de pago
  };
  const totalAmount = context?.products?.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

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
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-gray-500">$ {product.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => context?.removeProduct(product.id)}
                    className="px-3 py-1 text-gray-700 hover:bg-gray-200"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p className="px-3 py-1 text-gray-900">{product.amount}</p>
                  <button
                    onClick={() => context?.addProduct(product.id)}
                    className="px-3 py-1 text-gray-700 hover:bg-gray-200"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <div className="text-lg font-semibold text-gray-900">
              Total a pagar: $ {totalAmount?.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handlePayment}
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Realizar Pago
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShoppingCart;
