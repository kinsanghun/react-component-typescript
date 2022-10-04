import BasicToast from "components/toasts/basicToast/basicToast";
import React, { useState } from "react";
import 'static/main.css';

function Top() {
    const [popup, setPopup] = useState(true);

    return(
        <div className="top">
            <div className={popup ? "popup active" : "popup"}>
                <div className="close" onClick={()=>{setPopup(false)}}>x</div>
                <h3>Message</h3>
            Mobile doesn't support many features!<br/>
            Please use the desktop as much as possible.
            </div>
            <div className="title">
                <h2>react component Typescript</h2>
                <h3><span>Create all the components</span><span>that can be implemented with react.</span></h3>
            </div>
        </div>
    )
}
function Middle() {
    const content = (
        <div className="content">
            I like design and development.<br/>
            I made this page to provide components that many people can conveniently bring and use.
            
        </div>
    )
    return(
        <div className="middle">
            <h2>About Me</h2>
            {content}
        </div>
    )
}
function Main() {
    return (
    <div className="main">
        <Top />
        <Middle/>
    </div>)
}

export default Main;