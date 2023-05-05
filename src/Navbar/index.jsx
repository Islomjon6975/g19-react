import React, { memo } from 'react';

const Navbar = ({ state }) => {
	console.log('Navbar');

	return <div>Navbar {state('jack', 'smith', 30).n1}</div>;
};

export default memo(Navbar);
