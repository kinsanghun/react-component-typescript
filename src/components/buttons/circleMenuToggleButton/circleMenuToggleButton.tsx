import { useState } from 'react';
import './circleMenuToggleButton.css';

function CircleMenuToggleButton() {
    const [toggle, setToggle] = useState(false);
    const toggleFunc = () => setToggle(!toggle)

    return (
        <div className={toggle ? 'circle-menu-toggle-btn active' : 'circle-menu-toggle-btn'} onClick={()=>{toggleFunc()}}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>
    )
}

export default CircleMenuToggleButton;