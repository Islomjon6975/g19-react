import React, { Component } from 'react';
import { Wrapper } from './style';
import Button from '../Generic/Button/index';
import { Spin } from 'antd';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			isLoading: false,
			fillAllFields: true,
		};
	}

	render() {
		const onChange = e => {
			const { name, value } = e.target;
			this.setState(prev => ({ ...prev, [name]: value }));
		};

		const login = () => {
			if (this.state.username.length > 0 && this.state.password.length > 0) {
				this.setState(prev => ({ ...prev, isLoading: true, fillAllFields: true }));

				setTimeout(() => {
					const user = { id: 1, username: this.state.username, password: this.state.password };
					localStorage.setItem('user_info', JSON.stringify(user));
					this.setState(prev => ({ ...prev, isLoading: false, username: '', password: '' }));
					window.location.reload();
				}, 2000);
			} else {
				this.setState(prev => ({ ...prev, fillAllFields: false }));
			}
		};

		const onKeyDown = e => {
			if (e.type === 'keydown' && e.key === 'Enter') {
				login();
			}
		};

		return (
			<Wrapper>
				<Wrapper.Form>
					<Wrapper.Form.Title>Login</Wrapper.Form.Title>
					<Wrapper.Form.Input
						onChange={onChange}
						value={this.state.username}
						name='username'
						type='text'
						placeholder='username'
					/>
					<span style={{ color: 'crimson' }}>{!this.state.fillAllFields && 'Fill Input field'}</span>
					<Wrapper.Form.Input
						onChange={onChange}
						value={this.state.password}
						name='password'
						type='password'
						placeholder='password'
						onKeyDown={onKeyDown}
					/>
					<span style={{ color: 'crimson' }}>{!this.state.fillAllFields && 'Fill Input field'}</span>

					<Button
						style={{ opacity: this.state.isLoading && '0.7' }}
						type='primary'
						onClick={login}
						disabled={this.state.isLoading}>
						{this.state.isLoading ? (
							<>
								<Spin /> Loading...
							</>
						) : (
							'Login'
						)}
					</Button>
				</Wrapper.Form>
			</Wrapper>
		);
	}
}
