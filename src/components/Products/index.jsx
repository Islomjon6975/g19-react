import React, { useEffect, useState } from 'react';
import { Products } from './style';
import Card from '../Card';

const ProductsSection = () => {
	const [products, setProducts] = useState([]);
	const [selectNumberOfPorducts, setSelectNumberOfProducts] = useState('all');

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products${selectNumberOfPorducts === 'all' ? '' : `?limit=${selectNumberOfPorducts}`}`)
			.then(res => res.json())
			.then(json => setProducts(json));
	}, [selectNumberOfPorducts]);

	console.log(selectNumberOfPorducts, 'selectNumberOfPorducts');

	return (
		<Products>
			<Products.Wrapper>
				<Products.Wrapper.Title>Products</Products.Wrapper.Title>
				<select onChange={e => setSelectNumberOfProducts(e.target.value)}>
					<option value='5'>5</option>
					<option value='10'>10</option>
					<option value='15'>15</option>
					<option value='all' selected>
						All
					</option>
				</select>

				<select>
					<option>Asc</option>
					<option>Desc</option>
				</select>
				<Products.Wrapper.Container>
					{products.map(product => (
						<Card key={product.id} product={product} />
					))}
				</Products.Wrapper.Container>
			</Products.Wrapper>
		</Products>
	);
};

export default ProductsSection;
