
import Navigation from "../navigation"
import Logo from "../../../assets/LogoHome.svg";
import Text from "../../../assets/S3Innovate.svg";
import "./index.css";

const Home = () => {
    let open = false;
    return (
        <div id="home">
            <Navigation />
            <div className="home-container">
                <img src={Logo}></img>
                <img src={Text} id="homeText"></img>
            </div>

        </div>
    );
}

export default Home;