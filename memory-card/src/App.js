import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Score from "./Components/Score";

function App() {
	function handleClick() {
		console.log("iwork");
	}

	return (
		<div>
			<div className="header-section">
				<Header />
				<Score />
			</div>
			<Card handleClick={handleClick} />
		</div>
	);
}

export default App;
