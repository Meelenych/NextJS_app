import React from 'react';
import { Product as ProductType } from '../../interfaces/interfaces';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatter } from '../../assets/helpers/formatter';
import { capitalize } from '@/app/assets/helpers/capitalize';

const ProductCard = ({
	product,
	addToCart,
}: {
	product: ProductType;
	addToCart: (item: ProductType) => void;
}) => {
	return (
		<li>
			{/* <ToastContainer /> */}
			<div className='card card-compact bg-base-100 shadow-xl'>
				<figure>
					<img
						src={product.image}
						alt={product.name}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{capitalize(product.name)}</h2>
					<p>{product.description}</p>
					<p>Price: {formatter(product.price)}</p>
					<div className='card-actions justify-end'>
						<button
							className='btn btn-primary'
							onClick={() => {
								addToCart(product);
								toast.success(`${capitalize(product.name)} added to cart!`);
							}}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default ProductCard;
