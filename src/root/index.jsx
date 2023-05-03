import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Users from '../components/Users';

const Root = () => {
	return (
		<>
			<Navbar />
			<Users />
			<Products />
			<Cart />
		</>
	);
};

export default Root;
