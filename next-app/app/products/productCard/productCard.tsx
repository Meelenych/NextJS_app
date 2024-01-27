import React, { useEffect } from 'react';
import { Product as ProductType } from '../../interfaces/interfaces';

const ProductCard = ({ product }: { product: ProductType }) => {
	return (
		<li>
			<p>Name: {product.name}</p>
			<p>Price: {product.price}</p>
			<p>Description: {product.description}</p>
			<img
				src={product.image}
				alt=''
			/>
		</li>
	);
};

export default ProductCard;
