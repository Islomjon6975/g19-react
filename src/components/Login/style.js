import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

Wrapper.Form = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 300px;
`;

Wrapper.Form.Title = styled.div`
	font-size: 24px;
`;

Wrapper.Form.Input = styled.input`
	width: 100%;
	height: 35px;
	padding-left: 10px;
`;
