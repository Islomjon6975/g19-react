import React, { useState } from 'react';

const State = () => {
	const [state, setState] = useState({ counter: 0 });
	console.log(state);

	return <div>State</div>;
};

export default State;
