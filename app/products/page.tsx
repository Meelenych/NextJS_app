'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard/ProductCard';
import { Product as ProductType } from '../interfaces/interfaces';
import { useProduct } from '../context/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsPage: React.FC = () => {
	const { addToCart } = useCart();
	const { products } = useProduct();

	const [searchValue, setSearchValue] = useState('');
	const [filterValue, setFilterValue] = useState('');
	const [searchResult, setSearchResult] = useState<ProductType[]>(products);

	const searchProducts = () => {
		const filteredProducts = products.filter((product: ProductType) =>
			product.name.toLowerCase().includes(searchValue.toLowerCase().trim()),
		);
		setSearchResult(filteredProducts);
	};

	const filterProducts = () => {
		const filteredProducts = products.filter(
			(product: ProductType) =>
				product.name.toLowerCase().includes(searchValue.toLowerCase().trim()) &&
				(filterValue === '' ||
					product.type.toLowerCase() === filterValue.toLowerCase()),
		);
		setSearchResult(filteredProducts);
	};

	const handleSearchAndFilter = () => {
		if (filterValue !== '') {
			filterProducts();
			toast.success(`Showing ${filterValue.toLowerCase()} products`);
		} else {
			searchProducts();
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearchAndFilter();
		}
	};

	const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		console.log('Selected filter value:', selectedValue);
		setFilterValue(selectedValue);
	};

	useEffect(() => {
		handleSearchAndFilter();
	}, [searchValue, filterValue]);

	// useEffect(() => {
	// 	fetch('http://localhost:5000/api/e-store/products')
	// 		.then(res => res.json())
	// 		.then(data => setProducts(data))
	// 		.catch(error => console.error(error));
	// }, []);

	return (
		<>
			<ToastContainer position='top-left' />
			<div className='join flex justify-center mt-3 sm:nmt-6'>
				<div>
					<div>
						<input
							type='text'
							value={searchValue}
							className='input input-bordered join-item w-52'
							placeholder='Search'
							onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
								setSearchValue(e.target.value)
							}
							onKeyDown={handleKeyDown}
						/>
					</div>
				</div>
				<select
					className='select select-bordered join-item'
					value={filterValue}
					onChange={handleFilterChange}>
					<option value=''>All</option>
					<option>Vegetable</option>
					<option>Fruit</option>
					<option>Dairy</option>
				</select>
			</div>
			<ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3 sm:p-6 lg:p-10'>
				{searchResult.length > 0
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
