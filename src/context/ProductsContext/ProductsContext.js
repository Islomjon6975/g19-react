import { createContext, useContext, useState } from 'react';
import { products } from '../../utils/products';

const ProductsContext = createContext();
export const useProductsContext = () => useContext(ProductsContext);

function ProductsContextProvider({ children }) {
	const [computers, setComputers] = useState({ products: products || [], cart: [] });

	return <ProductsContext.Provider value={{ computers, setComputers }}>{children}</ProductsContext.Provider>;
}

export default ProductsContextProvider;
