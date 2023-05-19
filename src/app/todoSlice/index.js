import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		{ _id: 1, title: 'React JS', complete: false },
		{ _id: 2, title: 'JS', complete: false },
		{ _id: 3, title: 'Node JS', complete: false },
		{ _id: 4, title: 'Vue JS', complete: false },
	],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		completeTask: (state, action) => {
			console.log(action.payload);
			let result = state.todos.map(todo =>
				todo._id === action.payload.task_id ? { ...todo, complete: action.payload.complete } : todo
			);
			state.todos = result;
		},
		deleteTask: (state, action) => {
			let result = state.todos.filter(todo => todo._id !== action.payload.task_id);
			state.todos = result;
		},
	},
});

export const { completeTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
