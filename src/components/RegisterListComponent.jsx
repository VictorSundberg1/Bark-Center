import { useEffect, useState } from 'react';
import '../styles/RegisterList.css';
import { Link } from 'react-router';
import { Venus, Mars } from 'lucide-react';

const BIN_ID = import.meta.env.VITE_JSONBIN_ID;

export default function RegisterListComponent() {
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
		<section className="dogCards">
			<h3>Registered dogs</h3>
			<ul>
				{dogs.map((dog, index) => {
					const name = dog.name;
					const chipNumber = dog.chipNumber;
					const sex = dog.sex;
					const img = dog.img;
					return (
						<Link to={`/info/${chipNumber}`}>
							<li key={dog.chipNumber ?? index}>
								<span className="name">{name}</span>
								<span className="sex-icon">
									{sex === 'female' && <Venus size={20} />}
									{sex === 'male' && <Mars size={20} />}
								</span>
								<span>{img && <img src={img} alt={name} />}</span>
								<span className="chipNumber">Chip: {chipNumber}</span>
							</li>
						</Link>
					);
				})}
			</ul>
		</section>
	);
}
