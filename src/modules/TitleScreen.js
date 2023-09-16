import "../styles/TitleScreen.css";
import Level from "./Level";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const page = {
	from: {
		scale: 0.3,
		opacity: 0
	},
	to: {
		scale: 1,
		opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut"
        }
	},
	exit: {
		scale: 0.3,
		opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
	},
};

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
		<motion.div
			variants={page}
			className="page"
			id="titlescreen"
			initial={"from"}
			animate={"to"}
			exit={"exit"}
		>
			<div className="wrapper" id="titlescreen-wrapper">
				<div id="welcome_title">L A Z A L</div>
				<div className="gap" />
                <Link to={"/level_select"} id="title_link">
                    <motion.div
                        className="button"
                        id="welcome_start"
                        variants={start_button}
                        whileHover={"hover"}
                        whileTap={"tap"}
                    >
						<p>Start</p>
                    </motion.div>
                </Link>
			</div>
		</motion.div>
	);
}

export default TitleScreen;
