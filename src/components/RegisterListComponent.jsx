import { useEffect, useState } from 'react';
import '../styles/RegisterList.css';
import { Link } from 'react-router';
import { Venus, Mars } from 'lucide-react';
import defaultDogImage from '/default-dog.svg';

const BIN_ID = import.meta.env.VITE_JSONBIN_ID;

export default function RegisterListComponent() {
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
				{dogs.map((dog, index) => {
					const name = dog.name;
					const chipNumber = dog.chipNumber;
					const sex = dog.sex;
					const img = dog.img;
					const present = dog.present;
					return (
						<Link to={`/info/${chipNumber}`}>
							<li key={dog.chipNumber ?? index}>
								<span className="name">{name}</span>
								<span className="sex-icon">
									{sex === 'female' && <Venus size={20} />}
									{sex === 'male' && <Mars size={20} />}
								</span>
								<span>
									{img && (
										<img
											src={img || defaultDogImage}
											alt={name}
											onError={(e) => {
												e.target.src = defaultDogImage;
											}}
										/>
									)}
								</span>
								<span className="chipNumber">Chip: {chipNumber}</span>
								<span className="isPresent">
									{present ? 'Active' : 'Not Active'}
								</span>
							</li>
						</Link>
					);
				})}
			</ul>
		</section>
	);
}
