import { createContext, useState } from 'react';
import { products } from '../../utils/products';

export const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
	const [computers, setComputers] = useState({ products: products || [], cart: [] });

	return <ProductsContext.Provider value={{ computers, setComputers }}>{children}</ProductsContext.Provider>;
}

export default ProductsContextProvider;
