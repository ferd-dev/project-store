import { useEffect, useState } from 'react';
import Layout from '../../../shared/components/Layout';
import ButtonSeeMore from '../components/ButtonSeeMore';
import CardNameCategory from '../components/CardNameCategory';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import { Product } from '../types/Product';
import Loading from '../../../shared/pages/Loading';

const ProductList = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch(
				'https://api.escuelajs.co/api/v1/products?limit=10&offset=1'
			);
			const data = await response.json();

			const mappedProducts: Product[] = data.map((item: any) => ({
				id: item.id,
				title: item.title,
				price: item.price,
				image: item.images[0]
			}));

			setProducts(mappedProducts);
		};

		fetchProducts();
	}, []);

	if (!products.length) {
		return (
			<Layout>
				<Loading />
			</Layout>
		);
	}

	return (
		<Layout>
			<section>
				{!products.length ? (
					<Loading />
				) : (
					<div className='max-w-screen-xl px-4 2xl:px-0 mx-auto'>
						<Search />
						<div>
							<CardNameCategory />
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>
								{products.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
							<ButtonSeeMore />
						</div>
					</div>
				)}
			</section>
		</Layout>
	);
};

export default ProductList;
