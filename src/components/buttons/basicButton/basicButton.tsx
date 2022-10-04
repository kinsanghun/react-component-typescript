import React from "react";
import "./basicButton.css";
function BasicButton(props:{text:string}) {
    return (
        <div className="basic-button">{props.text}</div>
    )
}

export default BasicButton;