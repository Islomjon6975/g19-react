import React, { Component } from 'react';
// import './style.css';

class Navbar extends Component {
	render() {
		return (
			<div className='navbar__wrapper'>
				<div className='navbar__container'>
					<span className='logo'>Logo</span>

					<nav>
						<ul className='nav-items'>
							<li className='nav-item'>Home</li>
							<li className='nav-item'>Products</li>
							<li className='nav-item'>About</li>
							<li className='nav-item'>Contact</li>
						</ul>
					</nav>

					<div className='nav-right'>
						<button className='btn basket'>Basket</button>
						<button className='btn login'>Login</button>
						<button className='btn register'>Login</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
