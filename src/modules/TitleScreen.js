import "../styles/TitleScreen.css";
import Level from "./Level";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const start_button = {
	hover: {
		scale: 1.1,
	},
	tap: {
		scale: 0.9,
	},
};

function TitleScreen() {
	return (
        <div className="page" id="titlescreen">
            <div className="wrapper" id="titlescreen-wrapper">
                <div id="welcome_title">L A Z A L</div>
                <div className="gap" />
                <motion.div 
                    className="button" 
                    id="welcome_start" 
                    variants={start_button}
                    whileHover={"hover"} 
                    whileTap={"tap"}>
                    <Link to="/level_select"><p>Start</p></Link>
                </motion.div>
            </div>
            <Level></Level>
        </div>
	);
}

export default TitleScreen;
