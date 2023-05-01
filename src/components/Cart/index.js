import { Drawer } from 'antd';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
	const { openCart, setOpenCart } = useContext(CartContext);

	const onClose = () => {
		setOpenCart(false);
	};

	return (
		<Drawer title='Basic Drawer' placement='right' onClose={onClose} open={openCart}>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
	);
};

export default Cart;
