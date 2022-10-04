import React, { useState } from "react";
import './basicCarousel.css';

function BasicCarousel() {
    const [page, setPage] = useState(0);
    const pageLength = 4;

    const goLeft = () => {if(page > 0) setPage(page-1); }
    const goRight = () => {if(page < pageLength-1) setPage(page+1); }

    let style = {transform : `translateX(${-100 * page}%)`}
    return (
        <div className="basic-carousel">
            <span className="arrow" onClick={()=>{goLeft()}}></span>
            <div className="item-group" style={style}>
                <span className="item red">Slide 1</span>
                <span className="item orange">Slide 2</span>
                <span className="item blue">Slide 3</span>
                <span className="item green">Slide 4</span>
            </div>
            <span className="arrow" onClick={()=>{goRight()}}></span>
        </div>
    )
}

export default BasicCarousel;