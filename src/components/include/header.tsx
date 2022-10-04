import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'static/root.css';
import './includes.css';

function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    
    return (
        <header>
            <h1><img src="logo.png"/>React-Component-Typescript</h1>

            <div className={mobileMenu ? "mobile-menu active" : "mobile-menu"} onClick={()=>{setMobileMenu(!mobileMenu)}}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>  
            <ul>
                <Link to="/" onClick={()=>{setMobileMenu(!mobileMenu)}}><li>Home</li></Link>
                <Link to="/components" onClick={()=>{setMobileMenu(!mobileMenu)}}><li>Components</li></Link>
                <Link to="/interactive" onClick={()=>{setMobileMenu(!mobileMenu)}}><li>Interactive</li></Link>
                <Link to="/contact" onClick={()=>{setMobileMenu(!mobileMenu)}}><li>Contact</li></Link>
            </ul>
        </header>
    )
}

export default Header;