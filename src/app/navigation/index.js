
import { HashLink as Link } from 'react-router-hash-link';
import "./index.css";
import logo from "../../assets/LogoHeader.svg"


const Navigation = () => (
    <header>
        <img src={logo}></img>
        <nav className='headerNav'>
            <li><Link to="home-page#home">Home</Link></li>
            <li><Link to="home-page#about">About Us</Link></li>
            <li><Link to="home-page#services">Services and Expertise</Link></li>
            <li><Link to="home-page#product">Product</Link></li>
            <li><Link to="home-page#value">Value Proposition</Link></li>
            <li><Link to="home-page#case">Case study</Link></li>
            <li><Link to="home-page#contact">Contact Us</Link></li>
        </nav>

    </header>

);

export default Navigation;