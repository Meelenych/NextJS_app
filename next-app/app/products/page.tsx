'use client';
import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard/ProductCard';
import { Product as ProductType } from '../interfaces/interfaces';
import { useProduct } from '../context/ProductContext';

const ProductsPage: React.FC = () => {
	const { addToCart } = useCart();
	const { products } = useProduct();

	// useEffect(() => {
	// 	fetch('http://localhost:5000/api/e-store/products')
	// 		.then(res => res.json())
	// 		.then(data => setProducts(data))
	// 		.catch(error => console.error(error));
	// }, []);

	return (
		<div>
			<ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3 sm:p-6 lg:p-10'>
				{products?.map((product: ProductType) => (
					<ProductCard
						key={product.id}
						product={product}
						addToCart={addToCart}
					/>
				))}
			</ul>
		</div>
	);
};

export default ProductsPage;
