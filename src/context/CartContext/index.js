import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
	const [openCart, setCartOpen] = useState(false);

	return <CartContext.Provider value={{ openCart, setCartOpen }}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
