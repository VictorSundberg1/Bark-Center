import { useEffect, useState } from 'react';

const BIN_ID = import.meta.env.VITE_JSONBIN_ID;

export default function CatalogPage() {
	const [dogs, setDogs] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`)
			.then(async (res) => {
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				const json = await res.json();

				let list = [];
				if (json && Array.isArray(json.record)) {
					list = json.record;
				} else {
					list = [];
				}

				setDogs(list);
			})
			.catch(setError);
	}, []);

	if (error) return <p>Fel: {String(error.message ?? error)}</p>;

	return (
		<ul>
			{dogs.map((d, i) => (
				<li key={d.chipNumber ?? i}>{d.name}</li>
			))}
		</ul>
	);
}
