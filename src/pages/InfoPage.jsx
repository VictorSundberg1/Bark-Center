import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BIN_ID = import.meta.env.VITE_JSONBIN_ID;

export default function InfoPage() {
	const { chipNumber } = useParams();
	const [dog, setDog] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`)
			.then(async (res) => {
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				const json = await res.json();

				const choosenDog = json.record?.find(
					(dog) => dog.chipNumber === chipNumber
				);

				setDog(choosenDog);
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, [chipNumber]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {String(error.message ?? error)}</p>;
	if (!dog) return <p>No dog with {chipNumber} chipnumber found</p>;

	return (
		<div>
			<h1>{dog.name}</h1>
			<h2>{dog.sex}</h2>
		</div>
	);
}
