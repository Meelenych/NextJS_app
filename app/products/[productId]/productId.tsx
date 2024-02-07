import React from 'react';

const productId = ({ params }: { params: { slug: string } }) => {
	return <div>[productId] {params.slug}</div>;
};

export default productId;
