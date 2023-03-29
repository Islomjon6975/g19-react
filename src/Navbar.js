import React, { Component } from 'react';
import './Navbar.css';
import Button from './Button';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this);
		return (
			<header className='header'>
				Navbar, {this.props.title} {this.props.count}
				<Button>Login</Button>
			</header>
		);
	}
}

export default Navbar;
