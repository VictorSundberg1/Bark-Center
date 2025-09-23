function InfoCard({ title, value, icon }) {
	return (
		<div className="dog_info_card">
			<div className="dog_info_card_header">
				{icon && <span className="dog_info_card_icon">{icon}</span>}
				<h3 className="dog_info_card_title">{title}</h3>
			</div>
			<p className="dog_info_card_value">{value}</p>
		</div>
	);
}
export default InfoCard;
