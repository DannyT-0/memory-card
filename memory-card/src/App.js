import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Score from "./Components/Score";
import characters from "./Components/characterData";

function App() {
	function handleClick() {
		console.log("iwork");
	}

	const gravityFallsChars = characters.map((chars) => {
		return (
			<Card
				src={chars.charImage}
				alt={chars.name}
				key={chars.id}
				name={chars.name}
			/>
		);
	});

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

	return (
		<div>
			<div className="header-section">
				<Header />
				<Score />
			</div>
			<div className="card-game" onClick={handleClick}>
				{gravityFallsChars}
			</div>
		</div>
	);
}

export default App;
