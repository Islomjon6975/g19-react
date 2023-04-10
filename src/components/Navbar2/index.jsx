import React, { Component } from 'react';
import { NavbarWrapper, NavbarContainer, Logo, Nav, NavItems, NavItem, NavRight, Btn, Logo2 } from './style.js';

class Navbar2 extends Component {
	render() {
		return (
			<NavbarWrapper>
				<NavbarContainer>
					<Logo>Logo 1</Logo>
					<Logo2>Logo 2</Logo2>

					<Nav>
						<NavItems>
							<NavItem>Home</NavItem>
							<NavItem>Products</NavItem>
							<NavItem>About</NavItem>
							<NavItem>Contact</NavItem>
						</NavItems>
					</Nav>

					<NavRight>
						<Btn type='primary'>primary</Btn>
						<Btn type='secondary'>secondary</Btn>
						<Btn type='success'>success</Btn>
						<Btn type='danger'>danger</Btn>
						<Btn type='warning'>warning</Btn>
						<Btn type='info'>light</Btn>
						<Btn type='light'>light</Btn>
						<Btn type='dark'>dark</Btn>
						<Btn type='link'>link</Btn>
					</NavRight>
				</NavbarContainer>
			</NavbarWrapper>
		);
	}
}

export default Navbar2;
