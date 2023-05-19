import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
	const [photo, setPhoto] = useState([]);
	const param = useParams();

	const productId = param.id;

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums/${productId}`)
			.then(response => response.json())
			.then(json => setPhoto(json));
	}, [productId]);

	console.log(photo, 'photo');

	return (
		<div>
			<h4>Product Component</h4>
			<h5>{photo.title}</h5>
		</div>
	);
};

export default Product;
