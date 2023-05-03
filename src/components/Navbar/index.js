import './style.css';
import { useProductsContext } from '../../context/ProductsContext/ProductsContext';
import { useCartContext } from '../../context/CartContext';
import { useUsersContext } from '../../context/UsersContext';

const Navbar = () => {
	const { computers } = useProductsContext();
	const { setCartOpen } = useCartContext();
	const { state } = useUsersContext();

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
						<span>Users({state.users.length})</span>
						<span>Products({computers.products.length})</span>
						<div onClick={() => setCartOpen(true)}>Cart({computers.cart.length})</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
