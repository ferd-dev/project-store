import { useRoutes } from 'react-router-dom';
import ProductList from './features/ProductCatalog/pages/ProductList';
import ProductDetail from './features/ProductCatalog/pages/ProductDetail';
import NotFound from './shared/pages/NotFound';
import ProductCategory from './features/ProductCatalog/pages/ProductCategory';
import ShoppingCart from './features/ShoppingCart/pages/ShoppingCart';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <ProductList />,
    },
    {
      path: '/details/:id',
      element: <ProductDetail />,
    },
    {
      path: '/category/:id',
      element: <ProductCategory />,
    },
    {
      path: '/shopping-cart',
      element: <ShoppingCart />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);
  return routes;
};

export default Routes;
