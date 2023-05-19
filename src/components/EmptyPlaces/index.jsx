import React from 'react';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';

const EmptyPlaces = () => {
	const hasOutlet = useOutlet();
	const navigate = useNavigate();

	return (
		<div>
			<h3 onClick={() => navigate(-1)}>EmptyPlaces</h3>
			{hasOutlet ? <Outlet /> : ''}
		</div>
	);
};

export default EmptyPlaces;
