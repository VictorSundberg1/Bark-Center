import { useEffect, useState } from 'react';
import '../styles/RegisterList.css';
import RegistryCard from '../components/RegistryCard';

const BIN_ID = import.meta.env.VITE_JSONBIN_ID;

export default function CatalogPage() {
	const [dogs, setDogs] = useState([]);
	const [error, setError] = useState(null);

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

	return (
		<section className="dogCards">
			<h2>Registered dogs</h2>
			<ul>
				{dogs.map((dog, index) => (
					<RegistryCard key={dog.chipNumber ?? index} dog={dog} />
				))}
			</ul>
		</section>
	);
}
