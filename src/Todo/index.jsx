import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../app/todoSlice';

const Todo = () => {
	const todos = useSelector(state => state.todoReducer.todos);
	const dispatch = useDispatch();

	console.log(todos);

	return (
		<div>
			<h4>Todo</h4>
			<div>
				{todos?.map(todo => (
					<div key={todo._id}>
						{todo?._id} {todo?.title}{' '}
						<input type='checkbox' onChange={e => dispatch(completeTask({ task_id: todo?._id, complete: e.target.checked }))} />{' '}
						<button onClick={() => dispatch(deleteTask({ task_id: todo?._id }))}>Delete</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Todo;
