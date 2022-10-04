import React from "react";
import { useState } from "react";
import './basicNavigation.css';
function BasicNavigation() {
    const [toggle, setToggle] = useState(false);
    const toggleFunc = () => setToggle(!toggle)
    return (
        <ul className={toggle ? "basic-navigation active": "basic-navigation"}>
            <li onClick={()=>{toggleFunc()}}>Navigation <span></span></li>
            <li>Home</li>
            <li>Menu</li>
            <li>What's New</li>
            <li>Contact</li>
        </ul>
    )
}

export default BasicNavigation;