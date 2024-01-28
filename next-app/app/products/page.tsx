'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { Product } from '../interfaces/interfaces';

interface ProductsPageProps {
	products: Product[];
}

const dummyProducts: Product[] = [
	{
		id: '1',
		name: 'cabbage',
		price: 20,
		description: 'Fresh cabbage every day.',
		image:
			'https://cdn.pixabay.com/photo/2018/10/03/22/08/kohl-3722517_960_720.jpg',
	},
	{
		id: '2',
		name: 'parsley',
		price: 30,
		description: 'Green parsley, fresh and crispy.',
		image:
			'https://cdn.pixabay.com/photo/2016/03/29/01/06/cilantro-1287301_960_720.jpg',
	},
	{
		id: '3',
		name: 'cucumber',
		price: 14,
		description: 'Nice, refreshing and crunchy.',
		image:
			'https://cdn.pixabay.com/photo/2015/07/17/13/44/cucumbers-849269_1280.jpg',
	},
	{
		id: '4',
		name: 'garlic',
		price: 50,
		description: 'Add picancy to your dish.',
		image:
			'https://cdn.pixabay.com/photo/2018/05/21/21/23/garlic-3419544_960_720.jpg',
	},
	{
		id: '5',
		name: 'corn',
		price: 20,
		description: 'Sweet and juicy.',
		image:
			'https://cdn.pixabay.com/photo/2015/05/26/17/42/pop-corn-785074_1280.jpg',
	},
];

const ProductsPage: React.FC<ProductsPageProps> = ({
	products: initialProducts,
}) => {
	const [products, setProducts] = useState<Product[]>(
		(initialProducts = dummyProducts),
	);

	useEffect(() => {
		fetch('http://localhost:5000/api/e-store/products')
			.then(res => res.json())
			.then(data => setProducts(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3 sm:p-6 lg:p-10'>
			{products?.map(product => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</ul>
	);
};

export default ProductsPage;
