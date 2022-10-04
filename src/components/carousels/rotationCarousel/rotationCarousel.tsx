import { useState } from 'react';
import './rotationCarousel.css';

type viewType = {id:number, title:string, color:string}

function RotationCarousel(){
    const [view, setView] = useState<viewType[]>(
        [
            {id: 0, title:"Slide 1", color:"red"},
            {id: 1, title:"Slide 2", color:"orange"},
            {id: 2, title:"Slide 3", color:"blue"},
            {id: 3, title:"Slide 4", color:"purple"},
        ]
    );
    const swapLeft = () => {

        let newView = [...view];
        newView.unshift(newView.pop()!);
        setView(newView);
    }
    const swapRight = () => {
        let newView = [...view];
        newView.push(newView.shift()!);
        setView(newView);
    }
    let slideList:JSX.Element[] = [];
    view.map((d)=>{
        let li = (<li key={d.id} style={{background:d.color}}>{d.title}</li>);
        slideList.push(li);
    })
    let styles = {transform : `translateX(${0}%)`};

    return (
        <div className='rotation-carousel'>
            <span className='arrow' onClick={()=>{swapLeft()}}></span>
            <ul className='slide-group' style={styles}>
                {slideList}
            </ul>
            <span className='arrow' onClick={()=>{swapRight()}}></span>
        </div>
    )
}

export default RotationCarousel;