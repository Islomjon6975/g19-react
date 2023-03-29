import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Navbar />
		<Button bg='blue' color='white'>
			CHILDREN
		</Button>
		<Button bg='black' color='white'>
			Register
		</Button>
		<Button bg='crimson' color='white'>
			Buy
		</Button>
	</React.StrictMode>
);
