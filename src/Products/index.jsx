import React, { memo } from 'react';

const Products = ({ name }) => {
	console.log('Products');

	return <div>Products, Name: {name}</div>;
};

export default memo(Products);
