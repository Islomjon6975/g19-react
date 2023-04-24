import React from 'react';
import { Hero } from './style';

const HeroSection = () => {
	return (
		<Hero>
			<Hero.Wrapper>
				<Hero.Wrapper.Title>Analog: The Simplest Productivity System</Hero.Wrapper.Title>
				<Hero.Wrapper.Button>Shop now →</Hero.Wrapper.Button>
			</Hero.Wrapper>
		</Hero>
	);
};

export default HeroSection;
