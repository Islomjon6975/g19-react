import React from 'react';
import { Header } from './style';

const Navbar = () => {
	return (
		<Header>
			<Header.Wrapper>
				<Header.Logo />
				<Header.Nav>
					<Header.Nav.NavItems>
						<Header.Nav.NavItems.NavItem>Home</Header.Nav.NavItems.NavItem>
						<Header.Nav.NavItems.NavItem>Products</Header.Nav.NavItems.NavItem>
						<Header.Nav.NavItems.NavItem>About</Header.Nav.NavItems.NavItem>
					</Header.Nav.NavItems>
				</Header.Nav>
			</Header.Wrapper>
		</Header>
	);
};

export default Navbar;
