import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import Products from '../components/Products';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<Products />
		</>
	);
};

export default HomePage;
