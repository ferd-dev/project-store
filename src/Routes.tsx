import { useRoutes } from "react-router-dom";
import ProductList from "./features/ProductCatalog/pages/ProductList";
import ProductDetail from "./features/ProductCatalog/pages/ProductDetail";
import NotFound from "./shared/pages/NotFound";
import ProductList2 from "./features/ProductCatalog/pages/ProductList2";

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
            element: <NotFound />
        },
        {
            path: "/list",
            element: <ProductList2 />
        }
    ]);
    return routes;
}

export default Routes;