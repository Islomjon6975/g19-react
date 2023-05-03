import './style.css';
import { useProductsContext } from '../../context/ProductsContext/ProductsContext';

const Products = () => {
	const { computers, setComputers } = useProductsContext();

	const addToCart = product => {
		setComputers(prev => ({ ...prev, cart: [...prev.cart, product] }));
	};

	return (
		<div className='products_wrapper'>
			<div className='products_container'>
				<h2 className='products_title'>Products</h2>
				<div className='products'>
					{computers.products.map(c => (
						<div className='card' key={c.id}>
							<h4>{c.title}</h4>
							<p>$ {c.price}</p>
							<button onClick={() => addToCart(c)}>Add to cart</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
