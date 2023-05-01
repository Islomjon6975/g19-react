import { createContext, useState } from 'react';

export const CartContext = createContext();

function CartContextProvider({ children }) {
	const [openCart, setCartOpen] = useState(false);

	return <CartContext.Provider value={{ openCart, setCartOpen }}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
