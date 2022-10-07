import React, { useEffect } from "react";
import './fullScreen.scss';

function ScrollToView() {
  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);

  return null;
}
function FullScreen() {
    const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    return (
        <>
        <ScrollToView/>
        <div className="full-screen">
            <video muted autoPlay loop>
                <source src="bg.mp4" type="video/mp4"/>
                <strong>Your browser does not support the video tag.</strong>
            </video>
            <div className="header">
                <h1>Hallucination</h1>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>What's New</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="content">
                <h2>Lorem Ipsum</h2>
                <div className="text">{lorem}</div>
                <button>Learn More</button>
            </div>
        </div>
        </>
    )
}

export default FullScreen;