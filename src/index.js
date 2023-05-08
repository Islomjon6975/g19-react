import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ControlledComp from './components/ControlledComp';
import UnControlledComp from './components/UnControlledComp';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Login />
	</React.StrictMode>
);
