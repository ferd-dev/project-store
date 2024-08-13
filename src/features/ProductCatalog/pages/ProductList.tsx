import Layout from "../../../shared/components/Layout";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";

const ProductList = () => {
    return (
        <Layout>
            <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 ">
                <div className="max-w-screen-xl px-4 2xl:px-0 mx-auto">
                    <div className="mb-4 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:mb-8">
                        <Search />
                        <Filter />
                    </div>
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="w-full text-center">
                        <Pagination />
                    </div>
                </div>
            </section>
        </Layout >
    );
};

export default ProductList;