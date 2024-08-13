import { useRoutes } from "react-router-dom";
import ProductList from "./features/ProductCatalog/pages/ProductList";
import ProductDetail from "./features/ProductCatalog/pages/ProductDetail";
import NotFoundPage from "./shared/pages/NotFoundPage";

const Routes = () => {
    let routes = useRoutes([
        {
            path: "/",
            element: <ProductList />
        },
        {
            path: "/details",
            element: <ProductDetail />
        },
        {
            path: "/*",
            element: <NotFoundPage />
        }
    ]);
    return routes;
}

export default Routes;