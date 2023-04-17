import React, { Component } from 'react';
import { Container, Wrapper } from './style';
import Button from '../Generic/Button/index.jsx';
import { Spin } from 'antd';

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}

	render() {
		const logout = () => {
			this.setState(prev => ({ ...prev, isLoading: true }));
			setTimeout(() => {
				localStorage.removeItem('user_info');
				this.setState(prev => ({ ...prev, isLoading: false }));
				window.location.reload();
			}, 2000);
		};

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
						{!localStorage.getItem('user_info') ? (
							<Button>Sign In</Button>
						) : (
							<Button type='primary' onClick={logout}>
								{this.state.isLoading ? (
									<>
										<Spin /> Loading...
									</>
								) : (
									'Log out'
								)}
							</Button>
						)}
					</Container.Column>
				</Container>
			</Wrapper>
		);
	}
}
