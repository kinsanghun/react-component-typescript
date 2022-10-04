import React from "react"
import { useState } from "react";
import './basicTab.css';
function BasicTab() {
    const [active, setActive] = useState(1);
    const menuList = [
        {id:1, title:"MENU1"},
        {id:2, title:"MENU2"},
        {id:3, title:"MENU3"},
        {id:4, title:"MENU4"},
    ]
    const changeActive = (id:number) => {
        setActive(id);
    }
    let menuTabs:JSX.Element[] = [];
    menuList.map((d)=>{
        let tab = (
            <li 
                key={d.id} 
                className={active === d.id ? "b-li active" : "b-li"} 
                onClick={()=>{changeActive(d.id)}}>
                {d.title}
            </li>
            );
        menuTabs.push(tab);
    })

    return (
            <ul className="basic-tab">{menuTabs}</ul>
    )
}

export default BasicTab;