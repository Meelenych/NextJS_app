'use client';
import React from 'react';
import { useCart } from '../context/CartContext';
import { useProduct } from '../context/ProductContext';

interface CartItem {
	id: string;
	quantity: number | undefined;
}

const cartPage = () => {
	const { cartItems }: { cartItems: CartItem[] } = useCart();
	const { products } = useProduct();

	// Calculate total cost
	const totalCost = Object.entries(cartItems).reduce(
		(acc, [itemId, quantity]) => {
			const item = products.find(
				(product: { id: string }) => product.id === itemId,
			);
			if (item && quantity !== undefined) {
				return acc + item.price * quantity;
			}
			return acc;
		},
		0,
	);

	return (
		<div>
			<h3>CART</h3>
			<div>
				<h2>Cart Items:</h2>
				<ul>
					{Object.entries(cartItems).map(([itemId, quantity]) => {
						const item = products.find(
							(product: { id: string }) => product.id === itemId,
						);
						if (item) {
							return (
								<li key={itemId}>
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
	);
};

export default cartPage;
