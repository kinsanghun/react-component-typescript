import BasicButton from "components/buttons/basicButton/basicButton";
import React from "react";
import { useState } from "react";
import './basicToast.css';
function BasicToast() {
    const [view, setView] = useState(false);
    const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    const toast:JSX.Element = (
        <div className="basic-toast">
            <div className="close" onClick={()=>{setView(false)}}>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="content">{lorem}</div>
        </div>
    );
    return (
        
        <>
            <span onClick={()=>{setView(true)}}><BasicButton text={"Click me"}/></span>
            {view && toast}
        </>
    )
}

export default BasicToast;