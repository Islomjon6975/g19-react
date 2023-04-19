import React, { useState } from 'react';

function Hook() {
	const [state, setState] = useState({
		counter: 0,
		user: { name: 'Jack', age: 30 },
		fruits: [
			{ id: 1, name: 'olma', price: 2000 },
			{ id: 2, name: 'nok', price: 3000 },
			{ id: 3, name: 'banan', price: 4000 },
		],
	});

	const increment = () => {
		setState(prev => ({ ...prev, counter: prev.counter + 1 }));
	};

	const decrement = () => {
		setState(prev => ({ ...prev, counter: prev.counter - 1 }));
	};

	const onChange = e => {
		const { name, value } = e.target;
		setState(prev => ({ ...prev, user: { ...prev.user, [name]: value } }));
	};

	const deleteFruit = id => {
		const result = state.fruits.filter(fruit => fruit.id !== id);
		setState(prev => ({ ...prev, fruits: result }));
	};

	return (
		<div style={{ flex: 1 }}>
			<h3>Hook, {state.counter}</h3>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
			<hr />
			<h3>Name: {state.user.name}</h3>
			<h3>Age: {state.user.age}</h3>
			<input onChange={onChange} name='name' type='text' placeholder='Enter you name' />
			<input onChange={onChange} name='age' type='text' placeholder='Enter you age' />
			<hr />
			{state.fruits.map(fruit => (
				<div key={fruit.id}>
					{fruit.id}. {fruit.name} {fruit.price} <button onClick={() => deleteFruit(fruit.id)}>X</button>
				</div>
			))}
		</div>
	);
}

export default Hook;
