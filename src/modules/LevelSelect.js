import { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import "../styles/LevelSelect.css";

// import Calendar from 'react-calendar';

const level_element = {
	hover: {
		scale: 1.1,
	},
	tap: {
		scale: 0.9,
	},
};

function LevelSelect() {
	// const [value, setValue] = useState(new Date())
	// function onChange(nextValue) {
	//     console.log(nextValue);
	// }

	const games = [1, 2, 3, 4, 5, 6];
	var gamesList = [];

	games.forEach((level_number, index) => {
		gamesList.push(
            <Link to="/gameplay">
                <motion.div
				className="level button"
				key={index}
				variants={level_element}
				whileHover={"hover"}
				whileTap={"tap"}
			    >
                    <p>{level_number}</p>
                </motion.div>
            </Link>
		);
	});

	return (
		<div className="page" id="levelselect-page">
			<div className="wrapper" id="levelselect-wrapper">
				<div id="levelselect-title">Select a Level...</div>
				<div id="level-grid">{gamesList}</div>
				{/* <Calendar onChange={onChange} value={value}/>
                <div id='preview-element'>
                    <div id='preview-title'>No level selected...</div>
                    <div id='preview-time'>Pick one by selected a day.</div>
                </div> */}
			</div>
		</div>
	);
}

export default LevelSelect;
