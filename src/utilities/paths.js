import About from '../components/About';
import Home from '../components/Home';
import Login from '../components/Login';
import Product from '../components/Product';
import Products from '../components/Products';
import Users from '../components/EmptyPlaces';
import EmptyPlaces from '../components/EmptyPlaces';

export const paths = [
	{
		_id: '1',
		path: '/',
		title: 'Home',
		element: <Home />,
	},
	{
		_id: '2',
		path: '/products',
		title: 'Products',
		element: <Products />,
	},
	{
		_id: '5',
		path: '/products/:id',
		title: 'Product',
		element: <Product />,
		hidden: true,
	},
	{
		_id: '3',
		path: '/about',
		title: 'About',
		element: <About />,
	},
	{
		_id: '4',
		path: '/login',
		title: 'Login',
		element: <Login />,
		hidden: true,
	},
	{
		_id: '6',
		path: '/building-control',
		title: 'Empty Places',
		element: <EmptyPlaces />,
		hasChild: true,
		children: [
			{
				_id: '6-1',
				path: '/building-control/ordinary-rooms',
				title: 'Ordinary Rooms',
				element: <h1>Ordinary Rooms</h1>,
				hasChild: true,
				children: [
					{
						_id: '6-1-1',
						path: '/building-control/ordinary-rooms/2',
						title: '2 Building',
						element: <h1>2 Building</h1>,
					},
					{
						_id: '6-1-1',
						path: '/building-control/ordinary-rooms/4',
						title: '4 Building',
						element: <h1>4 Building</h1>,
					},
					{
						_id: '6-1-1',
						path: '/building-control/ordinary-rooms/6',
						title: '6 Building',
						element: <h1>6 Building</h1>,
					},
				],
			},
			{
				_id: '6-2',
				path: '/building-control/luxury-rooms',
				title: 'Luxury Rooms',
				element: <h1>Luxury Rooms</h1>,
				hasChild: true,
				children: [
					{
						_id: '6-1-1',
						path: '/building-control/ordinary-rooms/2',
						title: '3 Building',
						element: <h1>3 Building</h1>,
					},
					{
						_id: '6-1-1',
						path: '/building-control/ordinary-rooms/4',
						title: '5 Building',
						element: <h1>5 Building</h1>,
					},
				],
			},
			{
				_id: '6-1',
				path: '/building-control/map/cottage',
				title: 'Cottage',
				element: <h1>Cottage</h1>,
			},
		],
	},
];
