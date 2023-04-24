import styled from 'styled-components';
import { ReactComponent as logo } from '../../assest/icons/ugmonk.svg';

export const Header = styled.header`
	width: 100%;
`;

Header.Wrapper = styled.div`
	max-width: 1440px;
	width: 100%;
	margin: auto;
	padding: 46px;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

Header.Nav = styled.nav``;

Header.Nav.NavItems = styled.ul`
	display: flex;
	align-items: center;
	gap: 30px;
`;

Header.Nav.NavItems.NavItem = styled.li`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 20px;
	/* identical to box height, or 120% */

	color: #2a2a2a;
`;

Header.Logo = styled(logo)``;
