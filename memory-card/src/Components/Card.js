import React from "react";
import Mapcard from "./Mapcard";
import characters from "./characterData";

export default function Card(props) {
	const gravityFallsChars = characters.map((chars) => {
		return (
			<Mapcard
				src={chars.charImage}
				alt={chars.name}
				key={chars.id}
				name={chars.name}
			/>
		);
	});

	const [testNum, setTestNum] = React.useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
	]);

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	console.log(testNum, "before");
	console.log(shuffle(testNum), "during");
	console.log(testNum, "after");

	return (
		<div className="card-game" onClick={props.onClick}>
			{gravityFallsChars}
		</div>
	);
}
