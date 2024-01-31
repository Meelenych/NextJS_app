'use client';
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard/ProductCard';
import { Product as ProductType } from '../interfaces/interfaces';
import { useProduct } from '../context/ProductContext';

const ProductsPage: React.FC = () => {
	const { addToCart } = useCart();
	const { products } = useProduct();

	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const search = () => {
		setSearchValue(searchValue);
		setSearchResult(
			products.filter((product: ProductType) =>
				product.name.includes(searchValue.toLowerCase().trim()),
			),
		);
	};

	// useEffect(() => {
	// 	fetch('http://localhost:5000/api/e-store/products')
	// 		.then(res => res.json())
	// 		.then(data => setProducts(data))
	// 		.catch(error => console.error(error));
	// }, []);

	return (
		<>
			<div className='join flex justify-center mt-6'>
				<div>
					<div>
						<input
							type='text'
							value={searchValue}
							className='input input-bordered join-item'
							placeholder='Search'
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								setSearchValue(e.target.value)
							}
						/>
					</div>
				</div>
				<select className='select select-bordered join-item'>
					<option
						disabled
						defaultValue={'Filter'}>
						Filter
					</option>
					<option>Vegetables</option>
					<option>Fruits</option>
					<option>Dairy</option>
				</select>
				<div className='indicator'>
					<button
						className='btn join-item'
						onClick={() => search()}>
						Search
					</button>
				</div>
			</div>

			<ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3 sm:p-6 lg:p-10'>
				{searchResult.length
					? searchResult?.map((product: ProductType) => (
							<ProductCard
								key={product.id}
								product={product}
								addToCart={addToCart}
							/>
					  ))
					: products?.map((product: ProductType) => (
							<ProductCard
								key={product.id}
								product={product}
								addToCart={addToCart}
							/>
					  ))}
			</ul>
		</>
	);
};

export default ProductsPage;
