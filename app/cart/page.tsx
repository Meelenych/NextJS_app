'use client';
import React from 'react';
import { useCart } from '../context/CartContext';
import { useProduct } from '../context/ProductContext';
import { Product as ProductType } from '../interfaces/interfaces';

const cartPage = () => {
	const { cartItems }: { cartItems: { [key: string]: number } } = useCart();
	const { products } = useProduct();

	const cartItemsArray = Object.entries(cartItems).map(([id, quantity]) => ({
		id,
		quantity,
	}));

	const totalCost = cartItemsArray.reduce((acc, { id, quantity }) => {
		const item = products.find((product: { id: string }) => product.id === id);
		if (item && quantity !== undefined) {
			return acc + item.price * quantity;
		}
		return acc;
	}, 0);

	console.log(cartItemsArray);

	return cartItemsArray.length ? (
		<div>
			<h3>CART</h3>
			<div>
				<h2>Cart Items:</h2>
				<ul>
					{cartItemsArray.map(({ id, quantity }) => {
						const item = products.find((product: ProductType) => product.id === id);
						console.log(item);
						if (item) {
							return (
								<li key={id}>
									<div>
										<img
											width={'55rem'}
											src={item.image}
											alt={item.name}
										/>
									</div>
									{item.name}: {quantity} pcs | Price: {item.price} | Sum:{' '}
									{item.price * quantity}
								</li>
							);
						}

						return null;
					})}
				</ul>
				<p>Total: {totalCost}</p>
			</div>
		</div>
	) : (
		<div>
			<h2>Your cart is empty...</h2>
		</div>
	);
};

export default cartPage;
