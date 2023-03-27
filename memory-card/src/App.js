import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Score from "./Components/Score";

function App() {
	return (
		<div>
			<div className="header-section">
				<Header />
				<Score />
			</div>
			<Card />
		</div>
	);
}

export default App;
