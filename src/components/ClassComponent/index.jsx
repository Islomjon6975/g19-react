import React, { Component } from 'react';

class ClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0, user: { name: 'Jack', age: 30 } };
	}

	render() {
		const increment = () => {
			this.setState(prev => ({ ...prev, counter: prev.counter + 1 }));
		};

		const decrement = () => {
			this.setState(prev => ({ ...prev, counter: prev.counter - 1 }));
		};

		const onChange = e => {
			const { name, value } = e.target;
			this.setState(prev => ({ ...prev, user: { ...prev.user, [name]: value } }));
		};

		return (
			<div style={{ flex: 1 }}>
				<h3>ClassComponent, {this.state.counter}</h3>
				<button onClick={increment}>increment</button>
				<button onClick={decrement}>decrement</button>
				<hr />
				<h3>Name: {this.state.user.name}</h3>
				<h3>Name: {this.state.user.age}</h3>
				<input onChange={onChange} name='name' type='text' placeholder='Enter you name' />
				<input onChange={onChange} name='age' type='text' placeholder='Enter you age' />
			</div>
		);
	}
}

export default ClassComponent;
