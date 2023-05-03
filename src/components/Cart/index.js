import { Drawer } from 'antd';
import { useCartContext } from '../../context/CartContext';
import { useProductsContext } from '../../context/ProductsContext/ProductsContext';

const Cart = () => {
	const { openCart, setCartOpen } = useCartContext();
	const { computers } = useProductsContext();

	console.log(computers);

	const onClose = () => {
		setCartOpen(false);
	};

	return (
		<Drawer title='Basic Drawer' placement='right' onClose={onClose} open={openCart}>
			{computers.cart.map(computer => (
				<p key={computer.id}>
					{computer.id}. {computer.title} - ${computer.price} (x{computer.quantity})
				</p>
			))}
		</Drawer>
	);
};

export default Cart;
