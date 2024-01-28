import React, { useEffect } from 'react';
import { Product as ProductType } from '../../interfaces/interfaces';

const ProductCard = ({ product }: { product: ProductType }) => {
	return (
		<li>
			<div className='card card-compact bg-base-100 shadow-xl'>
				<figure>
					<img
						src={product.image}
						alt={product.name}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>
						{product.name.charAt(0).toUpperCase() + product.name.slice(1)}
					</h2>
					<p>{product.description}</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default ProductCard;
