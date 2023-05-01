import React, { useReducer } from 'react';
import { INTIAL_STATE, reducer } from './reducer';

const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, INTIAL_STATE);

	return (
		<div>
			UseReducer , {state.counter} {state.name}
			<div>
				<button onClick={() => dispatch({ type: 'INCREMENT_QUANTITY' })}>Increment</button>
				<button onClick={() => dispatch({ type: 'DECREMENT_QUANTITY' })}>Decrement</button>
				<button onClick={() => dispatch({ type: 'INCREMENT_BY_VALUE', payload: { value: 5, id: '123213123', password: '123' } })}>
					IncrementByFive
				</button>
				<input
					type='text'
					placeholder='Enter your name...'
					onChange={e => dispatch({ type: 'ONCHAGE', payload: { value: e.target.value } })}
				/>
			</div>
		</div>
	);
};

export default UseReducer;
