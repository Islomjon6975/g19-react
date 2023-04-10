import styled from 'styled-components';

const Wrapper = styled.header`
	width: 100%;

	.slick-slider {
		background: grey !important;
		padding: 20px !important;
	}
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

Container.Card = styled.div`
	width: 182px;
	height: 256px;
	border-radius: 16px;
`;

Container.Card.Image = styled.img`
	width: 100%;
	height: 100%;
`;

export { Wrapper, Container };
