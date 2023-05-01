import React from 'react';
import { useReducer } from 'react';
import { INITIAL_STATE, reducer } from './reducer';


const Task = () => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	return (
		<div>
			<h2>Task, {state.users.length}</h2>

			<input
				type='text'
				placeholder='Search...'
				onChange={e => dispatch({ type: 'SEARCH', payload: { value: e.target.value } })}
			/>
			{state.users.map(user => (
				<div key={user.id}>
					{user.id}. {user.firstName} {user.lastname} {user.age}{' '}
					<button onClick={() => dispatch({ type: 'DELETE_USER', payload: { userId: user.id } })}>X</button>
				</div>
			))}
		</div>
	);
};

export default Task;
