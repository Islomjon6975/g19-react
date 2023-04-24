import styled from 'styled-components';
import hero from '../../assest/images/hero-img.png';

export const Hero = styled.section`
	width: 100%;
	height: 600px;

	background-image: url(${hero});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	align-items: flex-end;
	justify-content: center;
	padding-bottom: 30px;
`;

Hero.Wrapper = styled.div`
	max-width: 1440px;
	width: 100%;
	padding: 0px 140px;
`;

Hero.Wrapper.Title = styled.div`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 28px;
	/* identical to box height, or 158% */

	color: #ffffff;
`;

Hero.Wrapper.Button = styled.div`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 22px;
	/* identical to box height, or 150% */

	color: #ffffff;
	border-bottom: 1px solid white;
	width: fit-content;
	margin-top: 1px;
`;
