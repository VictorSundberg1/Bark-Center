import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RegistryPage from './pages/RegistryPage';
import InfoPage from './pages/InfoPage';
import './styles/App.css';

const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'registry',
				element: <RegistryPage />,
			},
			{
				path: 'info/:chipNumber',
				element: <InfoPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />;
	</StrictMode>
);
