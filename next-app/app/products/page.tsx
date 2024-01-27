'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import { Product } from '../interfaces/interfaces';

interface ProductsPageProps {
	products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({
	products: initialProducts,
}) => {
	const [products, setProducts] = useState<Product[]>(initialProducts);

	useEffect(() => {
		fetch('http://localhost:5000/api/e-store/products')
			.then(res => res.json())
			.then(data => setProducts(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<ul>
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
