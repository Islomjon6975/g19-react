import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { paths } from '../utilities/paths';
import Navbar from '../components/Navbar';

const Root = () => {
	return (
		<Routes>
			<Route path='/' element={<Navbar />}>
				{paths?.map(({ _id, path, element, hasChild, children }) => {
					return hasChild ? (
						<Route key={_id} path={path} element={element}>
							{children.map(({ _id, path, element, hasChild, children }) => {
								return hasChild ? (
									<Route key={_id} path={path} element={element}>
										{children.map(({ _id, path, element, hasChild, children }) => {
											return <Route key={_id} path={path} element={element} />;
										})}
									</Route>
								) : (
									<Route key={_id} path={path} element={element} />
								);
							})}
						</Route>
					) : (
						<Route key={_id} path={path} element={element} />
					);
				})}
			</Route>

			{/* Not Found Page */}
			<Route path='*' element={<h1>Not Found</h1>} />
		</Routes>
	);
};

export default Root;
