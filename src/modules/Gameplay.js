import "../styles/Gameplay.css";
import Level from "./Level";

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

function Gameplay() {
	return (
		<motion.div
			variants={page}
			className="wrapper"
			id="gameplay-wrapper"
			initial={"from"}
			animate={"to"}
			exit={"exit"}
		>
			<Level></Level>
		</motion.div>
	);
}

export default Gameplay;
