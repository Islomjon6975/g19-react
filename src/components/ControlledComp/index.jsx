import React from 'react';
import './style.css';
import { useState } from 'react';

const ControlledComp = () => {
	const [user, setUser] = useState({ phoneNumber: '', password: '' });

	const onChange = e => {
		const { name, value } = e.target;
		setUser(prev => ({ ...prev, [name]: value }));
	};

	console.log('Login');

	return (
		<div className='wrapper'>
			<h3>Yana bir bor salom!</h3>
			<p>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</p>
			<form>
				<input type='number' placeholder='Enter your phone number' onChange={onChange} name='phoneNumber' />
				<input type='password' placeholder='Enter your phone password' onChange={onChange} name='password' />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default ControlledComp;
