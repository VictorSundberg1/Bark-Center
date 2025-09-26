import { NavLink, Outlet } from 'react-router';
import '../styles/Nav.css';
import '../styles/Animations.css';
import { PawPrint } from 'lucide-react';

export default function Layout() {
	return (
		<main>
			<nav className="nav">
				<NavLink to="/">
					<span className="title">
						Bark{' '}
						<span className="center">
							Center <PawPrint />
						</span>
					</span>
				</NavLink>
				<NavLink to="/" end>
					Home
				</NavLink>
				<NavLink to="/registry">Registry</NavLink>
			</nav>
			<div className="container">
				<Outlet />
			</div>
		</main>
	);
}
