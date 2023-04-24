import React from 'react';
import { Wrapper } from './style';
import { Rate } from 'antd';

const Card = ({ product: { title, price, image, description, category, rating } }) => {
	return (
		<Wrapper>
			<Wrapper.Category>{category}</Wrapper.Category>
			<Wrapper.ImageWrapper>
				<Wrapper.Image src={image} alt={title} loading='lazy' />
			</Wrapper.ImageWrapper>
			<Wrapper.Content>
				<Rate allowHalf defaultValue={rating.rate} />
				<Wrapper.Title>{title}</Wrapper.Title>
				<Wrapper.Price>${price}</Wrapper.Price>
			</Wrapper.Content>
		</Wrapper>
	);
};

export default Card;
