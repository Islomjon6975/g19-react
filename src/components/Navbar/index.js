import React, { useContext } from 'react';
import './style.css';
import { ProductsContext } from '../../context/ProductsContext/ProductsContext';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
	const { computers } = useContext(ProductsContext);
	const { setOpenCart } = useContext(CartContext);

	return (
		<>
			<header className='navbar'>
				<div className='navbar__wrapper'>
					<span>Online Shop</span>

					<nav>
						<ul>
							<li>Home</li>
							<li>Product</li>
							<li>Contact</li>
						</ul>
					</nav>

					<div style={{ display: 'flex', gap: 20 }}>
						<span>Products({computers.products.length})</span>
						<div onClick={() => setOpenCart(true)}>Cart({computers.cart.length})</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
