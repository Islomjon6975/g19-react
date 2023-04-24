import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IsLoading from './components/IsLoading';
const HomePage = lazy(() => import('./pages/HomePage.jsx'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Suspense fallback={<IsLoading />}>
			<HomePage />
		</Suspense>
	</React.StrictMode>
);
