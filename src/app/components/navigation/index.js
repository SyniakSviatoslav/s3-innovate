
import { HashLink as Link } from 'react-router-hash-link';
import "./index.css";
import logo from "../../../assets/LogoHeader.svg"
import { useState } from 'react';


const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);


  return (
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
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          {` ${!isActive ? '☰' : 'X'}`}
        </button>
        <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li><Link to="home-page#home">Home</Link></li>
            <li><Link to="home-page#about">About Us</Link></li>
            <li><Link to="home-page#services">Services and Expertise</Link></li>
            <li><Link to="home-page#product">Product</Link></li>
            <li><Link to="home-page#value">Value Proposition</Link></li>
            <li><Link to="home-page#case">Case study</Link></li>
            <li><Link to="home-page#contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

    </header>
  )

};

export default Navigation;