import React from 'react';
import { Spin } from 'antd';
import { Wrapper } from './style';

const IsLoading = () => {
	return (
		<Wrapper>
			<Spin size='large' />
		</Wrapper>
	);
};

export default IsLoading;
