import React, { Component } from 'react';
import { Container, Wrapper } from './style';
import Button from '../Generic/Button/index.jsx';

export default class Navbar extends Component {
	render() {
		return (
			<Wrapper>
				<Container>
					<Container.Column>
						<nav>
							<Container.Column.Ul>
								<Container.Column.Li>Movies</Container.Column.Li>
								<Container.Column.Li>TV Shows</Container.Column.Li>
								<Container.Column.Li>Documentaries</Container.Column.Li>
							</Container.Column.Ul>
						</nav>
					</Container.Column>
					<Container.Column>
						<Container.Column.Logo />
					</Container.Column>
					<Container.Column>
						<Container.Column.Search />
						<Container.Column.Notification />
						<Button>Sign In</Button>
					</Container.Column>
				</Container>
			</Wrapper>
		);
	}
}
