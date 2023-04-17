import React, { Component } from 'react';
import { Container, Wrapper } from './style';
import { Rate } from 'antd';
import Button from '../Generic/Button';
import ReactPlayer from 'react-player/youtube';

export default class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
		};
	}

	render() {
		const watchNow = () => {
			this.setState(prev => ({ ...prev, isPlaying: true }));
		};

		return (
			<>
				<Wrapper>
					<Container>
						<Container.Title>STAR WARS</Container.Title>
						<Container.Subtitle>THE RISE OF SKYWALKER</Container.Subtitle>
						<Container.Description>
							The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi
							and the Sith reaches its peak bringing the Skywalker saga to its end.{' '}
						</Container.Description>
						<Rate allowHalf defaultValue={4.5} />
						<Container.Btns>
							<Button onClick={watchNow} type='primary' icon={<Container.PlayIcon />}>
								Watch Now
							</Button>
							<Button type='secondary'>Trailer</Button>
						</Container.Btns>
					</Container>
				</Wrapper>
				<ReactPlayer controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
			</>
		);
	}
}
