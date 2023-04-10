import styled from 'styled-components';

const getType = props => {
	switch (props.type) {
		case 'primary': {
			return {
				background: '#FA4776',
				padding: '15px 25px',
				'border-radius': '41px',
			};
		}

		case 'secondary': {
			return {
				border: '1px solid white',
				padding: '15px 25px',
				background: 'transparent',
				'border-radius': '41px',
			};
		}

		default: {
			return;
		}
	}
};

const Container = styled.button`
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 23px;
	letter-spacing: 0.04em;
	color: #ffffff;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 7px;

	background: none;
	border: none;

	margin-right: ${props => props.mr && props.mr};
	margin-top: ${props => props.mt && props.mt};

	${getType}
`;

export { Container };
