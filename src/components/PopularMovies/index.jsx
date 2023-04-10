import React, { Component } from 'react';
import { Container, Wrapper } from './style';
import Slider from 'react-slick';
import img1 from '../../assets/images/movie-1.png';
import img2 from '../../assets/images/movie-2.png';
import img3 from '../../assets/images/movie-3.png';
import img4 from '../../assets/images/movie-4.png';
import img5 from '../../assets/images/movie-5.png';
import img6 from '../../assets/images/movie-6.png';

export default class PopularMovies extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 3,
		};
		return (
			<Wrapper>
				<Container>
					<Slider {...settings}>
						<Container.Card>
							<Container.Card.Image src={img1} />
						</Container.Card>
						<Container.Card>
							<Container.Card.Image src={img4} />
						</Container.Card>
						<Container.Card>
							<Container.Card.Image src={img3} />
						</Container.Card>
						<Container.Card>
							<Container.Card.Image src={img1} />
						</Container.Card>
						<Container.Card>
							<Container.Card.Image src={img2} />
						</Container.Card>
						<Container.Card>
							<Container.Card.Image src={img3} />
						</Container.Card>
						<Container.Card>
							<Container.Card.Image src={img4} />
						</Container.Card>
						<Container.Card>
							<Container.Card.Image src={img5} />
						</Container.Card>
						<Container.Card>
							<Container.Card.Image src={img6} />
						</Container.Card>
					</Slider>
				</Container>
			</Wrapper>
		);
	}
}
