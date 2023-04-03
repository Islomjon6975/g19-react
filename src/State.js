import React, { Component } from 'react';
import '';

class State extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			text: '',
		};
	}

	render() {
		console.log('render');

		const increment = () => {
			console.log('increment');
			this.setState(previous => ({ ...previous, counter: this.state.counter + 1 }));
		};

		const decrement = () => {
			console.log('decrement');
			this.setState(previous => ({ ...previous, counter: this.state.counter - 1 }));
		};

		const onChange = e => {
			this.setState(previous => ({ ...previous, text: e.target.value }));
		};

		return (
			<div>
				<h4>
					State, {this.state.counter} - {this.state.text}
				</h4>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
				<input type='text' placeholder='Enter some text' onChange={onChange} />
			</div>
		);
	}
}

export default State;
