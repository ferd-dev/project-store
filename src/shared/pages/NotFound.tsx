import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="mt-4 text-gray-600 text-xl">Página no encontrada</p>
          <p className="mt-2 text-gray-500">
            Lo sentimos, la página que estás buscando no existe.
          </p>

          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
          >
            Volver a la página principal
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
