import styled from 'styled-components';

export const Products = styled.section`
	width: 100%;
`;

Products.Wrapper = styled.div`
	max-width: 1440px;
	width: 100%;
	padding: 40px 140px;
	margin: auto;
`;

Products.Wrapper.Title = styled.div`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 27px;
	/* identical to box height, or 159% */
	text-align: center;

	color: #1a1a1a;
`;

Products.Wrapper.Container = styled.div`
	margin-top: 55px;

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 31px;
`;
