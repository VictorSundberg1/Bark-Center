import '../styles/HomePage.css';

function WelcomeCard() {
	return (
		<section className="card">
			<header className="cardHeader slide-in-right">
				<h2>Welcome to Bark Center🐶</h2>
			</header>
			<div className="cardBody">
				<section className="info_cards">
					<div className="info_card scale-in-center">
						<header>Info 1</header>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
							iure neque illo asperiores soluta minima qui, assumenda eveniet
							beatae voluptatibus, ullam rerum tempora voluptates et.
						</p>
					</div>
					<div className="info_card scale-in-center2">
						<header>Info 2</header>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
							iure neque illo asperiores soluta minima qui, assumenda eveniet
							beatae voluptatibus, ullam rerum tempora voluptates et.
						</p>
					</div>
					<div className="info_card scale-in-center3">
						<header>Info 3</header>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
							iure neque illo asperiores soluta minima qui, assumenda eveniet
							beatae voluptatibus, ullam rerum tempora voluptates et.
						</p>
					</div>
				</section>
			</div>
		</section>
	);
}
export default WelcomeCard;
