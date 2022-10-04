import { useState } from 'react';
import './horizontalNavigation.css';

function HorizontalNavigation() {
    const [toggle, setToggle] = useState(false);
    const navigationList = [
        {id:1, title:"Home"},
        {id:2, title:"Menu"},
        {id:3, title:"What's New"},
        {id:4, title:"Contact"},
    ]
    const toggleFunc = () =>{
        setToggle(!toggle)
    }
    let list:JSX.Element[] = []
    navigationList.map((d)=>{
        let li = (<li key={d.id}>{d.title}</li>);
        list.push(li);
    })
    return (
        <ul className='horizontal-navigation'>
            <div className={toggle ? "btn active":"btn"} onClick={()=>{toggleFunc()}}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            {list}
        </ul>
    )
}

export default HorizontalNavigation;