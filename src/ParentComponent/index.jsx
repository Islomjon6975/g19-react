import React, { useState, useMemo, useCallback } from 'react';
import Navbar from '../Navbar';

const ParentComponent = () => {
	const [state, setState] = useState(0);

	const prop = useMemo(() => {
		return { n1: 1 };
	}, []);

	const prop2 = useCallback((name, surname, age, getInfo) => {
		return { n1: 1 + age };
	}, []);

	console.log('ParentComponent');
	return (
		<div>
			<h2>ParentComponent, {state} - Name:</h2>
			<button onClick={() => setState(prev => prev + 1)}>increment</button>
			<Navbar state={prop2} />
		</div>
	);
};

export default ParentComponent;
