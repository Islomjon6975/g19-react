import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../app/counterSlice';

const Counter = () => {
	const data = useSelector(state => state.counterReducer);
	const dispatch = useDispatch();

	console.log(data);

	return (
		<div>
			<h4>Counter, {data.counter}</h4>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(incrementByAmount({ value: 5 }))}>increase by 5</button>
		</div>
	);
};

export default Counter;
