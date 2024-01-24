import React from 'react';

const productCard = () => {
	return (
		<li>
			<p>Name: {'name'}</p>
			<p>Price: {'price'}</p>
			<p>Description: {'description'}</p>
			<img
				src='{./img/bg.jpg}'
				alt=''
			/>
		</li>
	);
};

export default productCard;
