import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductsContextProvider from './context/ProductsContext/ProductsContext';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ProductsContextProvider>
			<CartContextProvider>
				<Navbar />
				<Products />
				<Footer />
				<Cart />
			</CartContextProvider>
		</ProductsContextProvider>
	</React.StrictMode>
);
