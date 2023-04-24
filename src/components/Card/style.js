import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #ffffff;
	width: 275px;
	/* height: 420px; */
	border: 1px solid black;
	position: relative;
`;

Wrapper.ImageWrapper = styled.div`
	width: 100%;
	height: 341px;
	overflow: hidden;
	padding: 40px;
`;

Wrapper.Image = styled.img`
	width: 100%;
	height: 100%;
`;

Wrapper.Category = styled.div`
	padding: 5px;
	background: blue;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	position: absolute;
	top: 5px;
	left: 5px;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;

	color: white;
`;

Wrapper.Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	padding-top: 11px;
`;

Wrapper.Title = styled.div`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	/* identical to box height, or 120% */

	color: #1a1a1a;
`;

Wrapper.Price = styled.div`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	/* identical to box height, or 120% */

	color: #1a1a1a;
`;
