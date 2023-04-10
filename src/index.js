import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* <Navbar /> */}
		<Navbar2 title='Hi jack' />
	</React.StrictMode>
);
