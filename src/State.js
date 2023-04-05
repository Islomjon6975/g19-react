import React, { Component } from 'react';

class State extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			number: null,
			number2: null,
		};
	}

	render() {
		const increment = value => {
			this.setState(previous => ({ ...previous, counter: this.state.counter + value }));
		};

		const decrement = value => {
			this.setState(previous => ({ ...previous, counter: this.state.counter - value }));
		};

		const onChange = e => {
			this.setState(previous => ({ ...previous, number: +e.target.value }));
		};

		const onChange2 = e => {
			this.setState(previous => ({ ...previous, number2: +e.target.value }));
		};
		console.log(this.state);

		return (
			<div>
				<h1>State Component, {this.state.counter}</h1>
				<input type='text' placeholder='Enter your number' onChange={onChange} />
				<br />
				<span style={{ color: 'red' }}>{!this.state.number && 'Required'}</span>
				<br />
				<input type='number' placeholder='Enter your second number' onChange={onChange2} />
				<br />
				<span style={{ color: 'red' }}>{!this.state.number2 && 'Required'}</span>
				<br />
				<button onClick={() => increment(this.state.number)}>increment</button>
				<button onClick={() => decrement(this.state.number2)}>decrement</button>
			</div>
		);
	}
}

export default State;
