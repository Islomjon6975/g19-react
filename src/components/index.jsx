import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container } from './style';
import Hero from './Hero';
import PopularMovies from './PopularMovies';
import Login from './Login';

class Home extends Component {
	render() {
		return (
			<>
				{!localStorage.getItem('user_info') ? (
					<Login />
				) : (
					<Container>
						<Navbar />
						<Hero />
						<PopularMovies />
					</Container>
				)}
			</>
		);
	}
}

export default Home;
