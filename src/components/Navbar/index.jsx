import React from 'react';
import './style.css';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { paths } from '../../utilities/paths';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<>
			<header className='wrapper'>
				<div className='container'>
					<span className='logo' onClick={() => navigate('/')}>
						Logo
					</span>
					<nav>
						<ul>
							{paths?.map(value => {
								return (
									!value.hidden && (
										<li>
											<NavLink
												key={value._id}
												to={value.path}
												style={({ isActive }) => ({ color: isActive ? 'crimson' : 'white', fontWeight: isActive ? 700 : 300 })}>
												{value.title}
											</NavLink>
										</li>
									)
								);
							})}
						</ul>
					</nav>

					<button className='login-btn' onClick={() => navigate('/login')}>
						Login
					</button>
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Navbar;
