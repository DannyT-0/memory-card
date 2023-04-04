import React from "react";

export default function Mapcard(props) {
	return (
		<div>
			<div className="card-container">
				<img src={props.src} alt={props.alt} />
				<h3>{props.name}</h3>
			</div>
		</div>
	);
}
