import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

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
				path: 'catalog',
				element: <CatalogPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />;
	</StrictMode>
);
