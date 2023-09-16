import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import TitleScreen from './TitleScreen';
import LevelSelect from './LevelSelect';
import Gameplay from './Gameplay';

function AnimatedRoutes() {
    var location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* <Route exact path="/portfolio/" element={<Home1 />}/>
                <Route exact path="/portfolio/_" element={<Home2 />}/> */}
                <Route exact path={"/gametitle/"} element={<TitleScreen />}/>
                <Route path={"/gametitle/level_select/"} element={<LevelSelect />}/>
                <Route path={"/gametitle/gameplay"} element={<Gameplay />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;