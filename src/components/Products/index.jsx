import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Products = () => {
	const navigate = useNavigate();
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/albums')
			.then(response => response.json())
			.then(json => setPhotos(json));
	}, []);

	return (
		<div className='photos'>
			<h2>All Photos</h2>
			<div className='photos__wrapper'>
				{photos.map(({ id, title }) => (
					<div key={id} className='card' onClick={() => navigate(`/products/${id}`)}>
						<h4>{title}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
