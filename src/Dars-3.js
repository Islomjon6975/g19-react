import React, { Component } from 'react';

class Dars3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			name: '',
			email: '',
			password: '',
			completed: false,
			language: 'en',
		};
	}

	render() {
		const increment = () => {
			this.setState(previous => ({ ...previous, counter: this.state.counter + 1 }));
		};

		const decrement = () => {
			this.setState(previous => ({ ...previous, counter: this.state.counter - 1 }));
		};

		const onChange = e => {
			this.setState(previous => ({ ...previous, name: e.target.value }));
		};

		const onChangeEmail = e => {
			this.setState(previous => ({ ...previous, email: e.target.value }));
		};

		const onChangePassword = e => {
			this.setState(previous => ({ ...previous, password: e.target.value }));
		};

		const onCheckbox = e => {
			console.log(e.target.checked);
			this.setState(previous => ({ ...previous, completed: e.target.checked }));
		};

		const onLanguage = e => {
			console.log(e.target.value);
			this.setState(previous => ({ ...previous, language: e.target.value }));
		};

		console.log('render');
		// console.log(this.state);

		return (
			<div>
				<h4>Dars {this.state.counter}</h4>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<br />
				<input type='text' placeholder='Enter your name' onChange={onChange} />
				<input type='email' placeholder='Enter your email' onChange={onChangeEmail} />
				<input type='password' placeholder='Enter your password' onChange={onChangePassword} />
				<input type='checkbox' onChange={onCheckbox} />

				<select onChange={onLanguage}>
					<option value='en'>EN</option>
					<option value='ru'>RU</option>
					<option value='uz'>UZ</option>
				</select>
				<p>{this.state.name} </p>
				<p>{this.state.email} </p>
				<p>{this.state.password} </p>
				<p>{this.state.language} </p>

				<h1 style={{ textDecoration: this.state.completed ? 'line-through' : 'underline' }}>Hello world</h1>
			</div>
		);
	}
}

export default Dars3;
