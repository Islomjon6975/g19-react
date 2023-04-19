import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassComponent from './components/ClassComponent';
import Hook from './components/Hook';
import Calculator from './components/Calculator';
import State from './components/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* <div style={{ display: 'flex' }}>
			<ClassComponent />
			<Hook />
		</div> */}
		{/* <Calculator /> */}
		<State />
	</React.StrictMode>
);
