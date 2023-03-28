import React from "react";
import dipper from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/dipper-pines.png";
import bill from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/bill-cipher.png";
import candy from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/candy-chiu.png";
import gideon from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/gideon.png";
import gnome from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/gnome-rainbow.png";
import grunkle from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/grunkle-stan.png";
import mabel from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/mabel-pines.png";
import oldman from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/old-man.png";
import soos from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/soos.png";
import stanford from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/stanford.png";
import waddles from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/waddles.png";
import wendy from "/Users/danny/Desktop/the_odin_project/react-section/memory-card-react/memory-card/memory-card/src/character-pics/wendy.png";

export default function Card(props) {
	return (
		<div className="card-game">
			<div className="card-container" onClick={props.handleClick}>
				<img src={dipper} alt="dipper" />
				<h3>Dipper Pines</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={bill} alt="bill cipher" />
				<h3>Bill Cipher</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={candy} alt="candy" />
				<h3>Candy Chiu</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={gideon} alt="gideon" />
				<h3>Lil Gideon</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={gnome} alt="gnome" />
				<h3>Rainbow Gnome</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={grunkle} alt="grunkle" />
				<h3>Grunkle Stan</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={mabel} alt="mabel" />
				<h3>Mabel Pines</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={oldman} alt="oldman" />
				<h3>Old Man McGucket</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={soos} alt="soos" />
				<h3>Soos</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={stanford} alt="stanford" />
				<h3>Stanford Pines</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={waddles} alt="waddles" />
				<h3>Waddles</h3>
			</div>
			<div className="card-container" onClick={props.handleClick}>
				<img src={wendy} alt="wendy" />
				<h3>Wendy</h3>
			</div>
		</div>
	);
}
