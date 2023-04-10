import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const Wrapper = styled.header`
	width: 100%;
`;

const Container = styled.div`
	max-width: 1440px;
	width: 100%;
	padding: 50px 80px;
	margin: auto;

	display: flex;
	flex-direction: column;
	gap: 20px;
`;

Container.Title = styled.h1`
	font-family: 'Oswald';
	font-style: normal;
	font-weight: 700;
	font-size: 90px;
	line-height: 133px;

	color: #ffffff;
`;

Container.Subtitle = styled.h3`
	font-family: 'Oswald';
	font-style: normal;
	font-weight: 700;
	font-size: 50px;
	line-height: 74px;
	/* identical to box height */

	color: #ffffff;
`;

Container.Description = styled.p`
	max-width: 514px;

	font-family: 'Outfit';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	/* or 27px */

	color: #ffffff;

	opacity: 0.9;
`;

Container.Btns = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

Container.PlayIcon = styled(FaPlay)`
	width: 15px;
	height: 15px;
`;

export { Wrapper, Container };
