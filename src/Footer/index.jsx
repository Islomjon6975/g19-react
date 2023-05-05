import React, { memo } from 'react';

const Footer = ({ surname }) => {
	console.log('Footer');

	return <div>Footer, Surname {surname}</div>;
};

export default memo(Footer);
