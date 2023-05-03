import React from 'react';
import ProductsContextProvider from './ProductsContext/ProductsContext';
import CartContextProvider from './CartContext';
import UserContextProvider from './UsersContext';

const Context = ({ children }) => {
	return (
		<ProductsContextProvider>
			<UserContextProvider>
				<CartContextProvider>{children}</CartContextProvider>
			</UserContextProvider>
		</ProductsContextProvider>
	);
};

export default Context;
