import { NavLink, Outlet } from 'react-router';
import '../styles/Nav.css';
import { PawPrint } from 'lucide-react';

export default function Layout() {
	return (
		<main className="conatiner">
			<nav className="nav">
				<span className="title">
					Bark{' '}
					<span className="center">
						Center <PawPrint />
					</span>
				</span>
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/catalog">Catalog</NavLink>
			</nav>
			<Outlet />
		</main>
	);
}
