import { useRoutes } from 'react-router-dom';
import ProductList from './features/ProductCatalog/pages/ProductList';
import ProductDetail from './features/ProductCatalog/pages/ProductDetail';
import NotFound from './shared/pages/NotFound';

const Routes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <ProductList />
		},
		{
			path: '/details',
			element: <ProductDetail />
		},
		{
			path: '/*',
			element: <NotFound />
		}
	]);
	return routes;
};

export default Routes;
