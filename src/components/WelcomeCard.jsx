import { ArrowUpRight } from 'lucide-react';
import '../styles/HomePage.css';
import { Link } from 'react-router';

function WelcomeCard() {
	return (
		<section className="card">
			<header className="cardHeader slide-in-right">
				<h2>Welcome to Bark Center🐶</h2>
			</header>
			<div className="cardBody">
				<section className="info_cards">
					<div className="info_card scale-in-center2">
						<header>Who are we?</header>
						<p>
							We are a daycare center for dogs! We take care and keep track of
							your dog!
						</p>
					</div>
					<div className="info_card scale-in-center">
						<header>Registry</header>
						<p>Here we have a registry of all dogs that have visited us. </p>
						<Link to={'/registry'}>
							<button className="card_navigate_button">
								Click here to see registry <ArrowUpRight size={10} />
							</button>
						</Link>
					</div>
				</section>
				<section className="info_cards">
					<div className="info_card scale-in-center3">
						<header>Info box 3</header>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
							facilis omnis qui quia doloribus illum perspiciatis laborum
							repellendus iure eaque quaerat ipsa earum laboriosam vero, impedit
							velit unde nobis quos voluptatem voluptate enim ex. Ipsum
							accusamus illo laborum, quo ipsa rem, cupiditate ipsam odit,
							placeat obcaecati maxime reiciendis porro adipisci?
						</p>
					</div>
				</section>
			</div>
		</section>
	);
}
export default WelcomeCard;
