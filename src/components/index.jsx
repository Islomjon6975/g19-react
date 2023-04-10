import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container } from './style';
import Hero from './Hero';
import PopularMovies from './PopularMovies';

class Home extends Component {
	render() {
		return (
			<Container>
				<Navbar />
				<Hero />
				<PopularMovies />
			</Container>
		);
	}
}

export default Home;
