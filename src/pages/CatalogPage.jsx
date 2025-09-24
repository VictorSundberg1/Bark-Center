import { useEffect, useState } from 'react';
import '../styles/RegisterList.css';
import RegistryCard from '../components/RegistryCard';

const BIN_ID = import.meta.env.VITE_JSONBIN_ID;

export default function CatalogPage() {
	const [dogs, setDogs] = useState([]);
	const [error, setError] = useState(null);
	const [showPresent, setShowPresent] = useState(false);

	useEffect(() => {
		fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`)
			.then((response) =>
				response.ok
					? response.json()
					: Promise.reject(`HTTP ${response.status}`)
			)
			.then((json) => setDogs(json.record || []))
			.catch(setError);
	}, []);

	if (error) return <p>Fel: {String(error.message ?? error)}</p>;

	const filteredPresentDogs = showPresent
		? dogs.filter((dog) => dog.present)
		: dogs;

	return (
		<section className="dogCards">
			<div className="registry_main_card scale-in-center">
				<h1>All Registered Dogs</h1>
				<p>Click on a card to see more information from a registered dog🐶</p>
				<div>
					<button
						onClick={() => setShowPresent((prev) => !prev)}
						className="show_present_dogs_btn"
					>
						{showPresent ? 'Show All Dogs' : 'Show Present Dogs'}
					</button>
				</div>
			</div>
			<ul>
				{filteredPresentDogs.map((dog, index) => (
					<RegistryCard key={dog.chipNumber ?? index} dog={dog} />
				))}
			</ul>
		</section>
	);
}
