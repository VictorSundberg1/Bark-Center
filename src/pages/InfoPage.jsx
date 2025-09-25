import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import InfoCard from '../components/InfoCard';
import { Activity, ArrowBigLeft, Hash, Info, Mars, Venus } from 'lucide-react';
import '../styles/InfoPage.css';
import defaultDogImage from '/default-dog.svg';

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
		<div className="dog_info_page">
			<div className="dog_main_card scale-in-center">
				<Link to="/registry">
					<ArrowBigLeft size={30} className="back_arrow" />
				</Link>
				<img
					src={dog.img || defaultDogImage}
					alt={dog.name}
					onError={(e) => (e.target.src = defaultDogImage)}
					className="dog_main_image"
				/>
				<h1>{dog.name}</h1>
			</div>

			<div className="dog_info_grid scale-in-center3">
				<InfoCard
					title="Sex"
					value={dog.sex === 'female' ? 'Female' : 'Male'}
					icon={dog.sex === 'female' ? <Venus size={20} /> : <Mars size={20} />}
				/>
				<InfoCard
					title="Chip Number"
					value={dog.chipNumber}
					icon={<Hash size={20} />}
				/>
				<InfoCard
					title="Status"
					value={dog.present ? 'Present' : 'Not Present'}
					icon={<Activity size={20} />}
				/>
				<InfoCard title="Breed" value={dog.breed} icon={<Info />} />
				<InfoCard title="Age" value={`${dog.age} Years Old`} icon={<Info />} />
				<InfoCard
					title="Owner"
					value={`${dog.owner.name} ${dog.owner.lastName} ${dog.owner.phoneNumber}`}
					icon={<Info />}
				/>
			</div>
		</div>
	);
}
