import React from 'react';
import './style.css';
import { useUsersContext } from '../../context/UsersContext';

const Users = () => {
	const { state, dispatch } = useUsersContext();

	return (
		<div className='products_wrapper'>
			<div className='products_container'>
				<input
					type='text'
					placeholder='Search...'
					onChange={e => dispatch({ type: 'SEARCH_USER', payload: { value: e.target.value } })}
				/>
				{state.users.map(user => (
					<div key={user._id}>
						{user._id}. {user.name}
						<button onClick={() => dispatch({ type: 'DELETE_USER', payload: { _id: user._id } })}>X</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Users;
