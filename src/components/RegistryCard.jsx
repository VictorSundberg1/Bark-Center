import { Link } from 'react-router';
import { Venus, Mars } from 'lucide-react';
import defaultDogImage from '/default-dog.svg';

function RegistryCard({ dog }) {
	const { name, chipNumber, sex, img, present } = dog;

	return (
		<Link to={`/info/${chipNumber}`}>
			<li key={dog.chipNumber}>
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
				<span className="isPresent">{present ? 'Active' : 'Not Active'}</span>
			</li>
		</Link>
	);
}
export default RegistryCard;
