import React, { useState } from "react";
import 'static/website.scss';
import Ocean from "template/ocean/ocean";
import FullScreen from "template/fullScreenSite/fullScreen";
import Shopping from "template/shopping/shopping";
import View3d from "template/view3d/view3d";
function WebSite() {
    const [view, setView] = useState<JSX.Element>(<View3d/>);
    const menuList = [
        {
            title : "Shopping",
            jsx : <Shopping/>
        },
        {
            title : "Full Screen",
            jsx : <FullScreen/>
        },
        {
            title : "Ocean",
            jsx : <Ocean/>
        },
        {
            title : "View 3D",
            jsx : <View3d/>
        },
    ]
    const menus:JSX.Element[] = [];
    menuList.map((menu, index)=>{
        menus.push(<li key={index} onClick={()=>{setView(menu.jsx)}}>{menu.title}</li>);
    })
    return (
        <div className="container">
            <nav>
                <h2>NAVIGATION</h2>
                <ul>
                    {menus}
                </ul>
            </nav>
            <div className="content">
                {view}
            </div>
        </div>
    )
}

export default WebSite;