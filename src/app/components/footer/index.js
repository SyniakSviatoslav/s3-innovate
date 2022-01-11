
import "./index.css";
import logo from "../../../assets/LogoFooter.svg";
import social from "../../../assets/socialMedia.svg";

const Footer = () => {
    return (
        <div id="footer">
            <footer>
                <img src={logo}></img>
                <div className="contacts">
                    <p>18 Sin Ming Lane, #08-37, Midview City, Singapore 573960</p>

                    <p>contact@s3innovate.com</p>

                </div>
                <img src={social} id="social"></img>
                <p className="rights">© All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Footer;