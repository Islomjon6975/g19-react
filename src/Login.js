import React, { Component } from 'react';
import './login.css';
import Home from './Home';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			password: '',
			user: {
				firstName: '',
				password: '',
			},
		};
	}

	render() {
		const onMultiStateChange = e => {
			console.log(e.target.id);
			this.setState(prev => ({ ...prev, [e.target.value]: e.target.value }));
		};

		// const onChange = e => {
		// 	this.setState(prev => ({ ...prev, firstName: e.target.value }));
		// };

		// const onChange2 = e => {
		// 	this.setState(prev => ({ ...prev, password: e.target.value }));
		// };

		const login = e => {
			e.preventDefault();
			this.setState(prev => ({ ...prev, user: { firstName: this.state.firstName, password: this.state.password } }));
		};

		console.log(this.state);

		return (
			<div className='wrapper'>
				{this.state.user.firstName === 'jack001' && this.state.user.password === '1234' ? (
					<Home />
				) : (
					<form onSubmit={login}>
						<h3>Login</h3>
						<input type='text' placeholder='Username' onChange={onMultiStateChange} id='firstName' />
						<input type='text' placeholder='Password' onChange={onMultiStateChange} id='password' />
						<button type='submit'>Login</button>
					</form>
				)}
			</div>
		);
	}
}

export default Login;
