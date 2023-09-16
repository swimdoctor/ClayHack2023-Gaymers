import { HashRouter as Router, useLocation } from "react-router-dom";
import "../styles/App.css";

import AnimatedRoutes from "./AnimatedRoutes";
import Background from "./Background";

function App() {
	return (
        <Router>
            <AnimatedRoutes />
            <Background />
        </Router>
    )
}

export default App;