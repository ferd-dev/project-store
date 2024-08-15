import Layout from "../../../shared/components/Layout";
import List from "../components/ListProducts";

const ProductList = () => {
    return (
        <Layout>
            <div className="m-0  sm:m-40">
    <List />
    <List />
</div>
        </Layout>
    );
};

export default ProductList;