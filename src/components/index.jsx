import { useEffect, useState } from 'react';

function Effect() {
	const [counter, setCounter] = useState(1);
	const [counter2, setCounter2] = useState(1);

	// // 1 - case
	// useEffect(() => {
	// 	console.log('1-case');
	// });

	// // 2 - case
	// useEffect(() => {
	// 	console.log('2-case');
	// 	fetch('https://jsonplaceholder.typicode.com/todos/1')
	// 		.then(response => response.json())
	// 		.then(json => console.log(json));
	// }, []);

	// 3 - case
	useEffect(() => {
		console.log('3-case');
		fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
			.then(response => response.json())
			.then(json => console.log(json));
	}, [counter, counter2]);

	// console.log('Effect Component');
	return (
		<div>
			<h4>
				useEffect, counter1: {counter} counter2: {counter2}
			</h4>
			<button onClick={() => setCounter(prev => prev + 1)}>increment</button>
			<button onClick={() => setCounter2(prev => prev + 1)}>increment2</button>
		</div>
	);
}

export default Effect;
