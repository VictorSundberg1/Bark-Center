import { NavLink, Outlet } from 'react-router';

export default function Layout() {
	return (
		<main>
			<nav>
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/catalog">Catalog</NavLink>
			</nav>
			<Outlet />
		</main>
	);
}
