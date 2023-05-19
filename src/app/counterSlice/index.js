import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.counter += 1;
		},
		decrement: (state, action) => {
			state.counter -= 1;
		},
		incrementByAmount: (state, action) => {
			state.counter += action.payload.value;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
