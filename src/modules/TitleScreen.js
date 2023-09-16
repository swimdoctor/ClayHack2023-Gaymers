import "../styles/TitleScreen.css";
import Level from "./Level";

function TitleScreen() {
    return (
        <div className="wrapper" id="titlescreen-wrapper">
            <div id="welcome_title">Title of Game</div>
            <div id="welcome_start">
                Start
            </div>
            <Level></Level>
        </div>
    )
}

export default TitleScreen;