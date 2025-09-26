import { useEffect, useState } from 'react';
import '../styles/RegisterList.css';
import RegistryCard from '../components/RegistryCard';

const BIN_ID = import.meta.env.VITE_JSONBIN_ID;

export default function CatalogPage() {
	const [dogs, setDogs] = useState([]);
	const [error, setError] = useState(null);
	const [showPresent, setShowPresent] = useState(false);
	const [search, setSearch] = useState('');

	//Get all dogs from JsonBin and add to Array of dogs if successfull else set error and return error.message
	useEffect(() => {
		fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`)
			.then(async (response) => {
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const json = await response.json();

				setDogs(json.record || []);
			})
			.catch((err) => {
				setError(err);
			});
	}, []);

	if (error) return <p>Fel: {String(error.message ?? error)}</p>;

	// Filter dogs array to either show all or only dogs.present = true
	const filteredPresentDogs = showPresent
		? dogs.filter((dog) => dog.present)
		: dogs;

	// Filter dogs array to show dogs.name that contains string in searchbar
	const filteredDogs = filteredPresentDogs.filter((dog) =>
		dog.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<section className="dogCards">
			<div className="registry_main_card scale-in-center">
				<h1>All Registered Dogs</h1>
				<p>Click on a card to see more information from a registered dog🐶</p>
				<div className="filter_functions">
					<button
						onClick={() => setShowPresent((prev) => !prev)}
						className="show_present_dogs_btn"
					>
						{showPresent ? 'Show All Dogs' : 'Show Present Dogs'}
					</button>
					<div className="search">
						<input
							type="text"
							placeholder="Search name"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<ul>
				{filteredDogs.map((dog, index) => (
					<RegistryCard key={dog.chipNumber ?? index} dog={dog} />
				))}
			</ul>
		</section>
	);
}
