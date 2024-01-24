import React from 'react';
import productCard from './productCard/productCard';

interface productCard {
	name: string;
	price: number;
	description: string;
	img: string;
}

const productsPage = () => {
	return (
		<ul>
			{'products.map(...product}) '}
			{/* <productCard /> */}
		</ul>
	);
};

export default productsPage;
