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

	return cartItemsArray.length ? (
		<div>
			<h3>CART</h3>

			<h2>Cart Items:</h2>

			<div className='overflow-x-auto'>
				<table className='table'>
					<thead>
						<tr className='font-semibold text-lg'>
							<th>
								<label>
									<input
										type='checkbox'
										className='checkbox'
									/>
								</label>
							</th>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Sum</th>
						</tr>
					</thead>
					<tbody>
						{cartItemsArray.map(({ id, quantity }) => {
							const item = products.find((product: ProductType) => product.id === id);
							if (item) {
								return (
									<tr key={id}>
										<th>
											<label>
												<input
													type='checkbox'
													className='checkbox'
												/>
											</label>
										</th>
										<td>
											<div className='flex items-center gap-3'>
												<div className='avatar'>
													<div className='mask mask-squircle w-12 h-12'>
														<img
															src={item.image}
															alt={item.name}
														/>
													</div>
												</div>
												<div>
													<div className='font-bold'>{item.name}</div>
												</div>
											</div>
										</td>
										<td>{quantity} pcs</td>
										<td>{item.price}</td>
										<th>{item.price * quantity}</th>
									</tr>
								);
							}
							return null;
						})}
					</tbody>
					<tfoot>
						<tr className='font-semibold text-lg'>
							<th></th>
							<th></th>
							<th></th>
							<th>Total:</th>
							<th>{totalCost}</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	) : (
		<div>
			<h2 className='text-center mt-6 font-semibold text-xl'>
				Your cart is empty...
			</h2>
		</div>
	);
};

export default cartPage;
