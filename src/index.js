import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import State from './State';
import Login from './Login';
import DollorToSum from './DollorToSum';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<DollorToSum />
	</React.StrictMode>
);
