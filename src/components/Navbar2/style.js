import styled, { css } from 'styled-components';

const common = css`
	display: flex;
	align-items: center;
`;

const common2 = css`
	display: flex;
	align-items: center;
`;

const NavbarWrapper = styled.div`
	width: 100%;
	background-color: #333;
`;

const NavbarContainer = styled.div`
	max-width: 1440px;
	width: 100%;
	height: 80px;
	margin: auto;

	${common}
	justify-content: space-between;
	color: white;

	@media (max-width: 1000px) {
		height: 50px;
	}

	@media (max-width: 800px) {
		height: 30px;
	}
	@media (max-width: 428px) {
		background: yellow;
	}
`;

const Logo = styled.span`
	font-size: 24px;

	@media (max-width: 1000px) {
		font-size: 18px;
	}
`;

const Logo2 = styled(Logo)`
	color: blue;
`;

const Nav = styled.nav``;

const NavItems = styled.ul`
	${common}
	gap: 20px;
`;

const NavItem = styled.li`
	list-style-type: none;
	font-size: 18px;
`;

const NavRight = styled.div`
	${common}
	gap: 15px;
`;

function getType(props) {
	switch (props.type) {
		case 'primary':
			return {
				'background-color': 'blue',
			};

		case 'secondary':
			return {
				'background-color': 'gray',
			};

		case 'danger':
			return {
				'background-color': 'crimson',
			};

		case 'success':
			return {
				'background-color': 'green',
			};

		case 'warning':
			return {
				'background-color': '#FFC107',
			};

		case 'light':
			return {
				'background-color': 'white',
				color: 'black',
			};

		case 'dark':
			return {
				'background-color': 'black',
			};

		case 'link':
			return {
				'background-color': 'white',
				'text-decoration': 'underline',
				color: 'blue',
			};

		default:
			return {
				'background-color': 'black',
			};
	}
}

const Btn = styled.button`
	padding: 5px 10px;
	border: none;
	outline: none;
	color: white;

	margin-right: ${props => (props.mr ? props.mr : '0px')};
	margin-top: ${props => (props.mt ? props.mt : '0px')};
	margin-bottom: ${props => (props.mb ? props.mb : '0px')};
	margin-left: ${props => (props.ml ? props.ml : '0px')};

	background-color: ${props => (props.bg ? props.bg : 'black')};

	${getType}
`;

export { NavbarWrapper, Logo2, NavbarContainer, Logo, Nav, NavItems, NavItem, NavRight, Btn };
