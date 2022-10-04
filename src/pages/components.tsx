import { useState } from "react";
import 'static/root.css';
import 'static/components.css';
import BasicTab from "components/tabs/basicTab/basicTab";
import BasicLoading from "components/loadings/basicLoading/basicLoading";
import BasicNavigation from "components/navigations/basicNavigation/basicNavigation";
import BasicButton from "components/buttons/basicButton/basicButton";
import BasicToast from "components/toasts/basicToast/basicToast";
import BasicCard from "components/cards/basicCard/basicCard";
import BasicCarousel from "components/carousels/basicCarousel/basicCarousel";
import GrayLoading from "components/loadings/grayLoading/grayLoading";
import LineButton from "components/buttons/lineButton/lineButton";
import CircleMenuToggleButton from "components/buttons/circleMenuToggleButton/circleMenuToggleButton";
import BasicBarLoading from "components/loadings/basicBarLoading/basicBarLoading";
import HorizontalNavigation from "components/navigations/horizontalNavigation/horizontalNavigation";
import RotationCarousel from "components/carousels/rotationCarousel/rotationCarousel";
import FlexImgText50per from "components/layouts/flexImgText50per/flexImgText50per";

function Components() {
    const [buttonToggle, setButtonToggle] = useState(false);
    const toggleFunc = () => setButtonToggle(!buttonToggle)
    const [menuState, setMenuState] = useState(0);
    const defaultURL:string = "https://github.com/kinsanghun/react-component-typescript/tree/master/src/components/";
    const mainMenu = [
        {id:0, title:"Tab"},
        {id:1, title:"Navigation"},
        {id:2, title:"Loading"},
        {id:3, title:"Buttons"},
        {id:4, title:"Toasts"},
        {id:5, title:"Cards"},
        {id:6, title:"Carousel"},
        {id:7, title:"Layout"},
    ]
    const subMenu = [
        [
            {id:1, title:"Basic Tab", content:<BasicTab/>, url:defaultURL + "tabs/basicTab"}
        ],
        [
            {id:1, title:"Basic Navigation", content:<BasicNavigation/>, url:defaultURL + "navigations/basicNavigation"},
            {id:2, title:"Horizontal Navigation", content:<HorizontalNavigation/>, url:defaultURL + "navigations/horizontalNavigation"}
        ],
        [
            {id:1, title:"Basic Loading(Spinner)", content:<BasicLoading/>, url:defaultURL + "loadings/basicLoading"},
            {id:2, title:"Gray Loading(Spinner)", content:<GrayLoading/>, url:defaultURL + "loadings/grayLoading"},
            {id:3, title:"Basic Loading(Bar)", content:<BasicBarLoading/>, url:defaultURL + "loadings/basicBarLoading"}
        ],
        [
            {id:1, title:"Basic Buttons", content:<BasicButton text="Button"/>, url:defaultURL + "buttons/basicButton"},
            {id:2, title:"Line Buttons", content:<LineButton text="Button"/>, url:defaultURL + "buttons/lineButton"},
            {id:3, title:"Circle Menu Toggle Buttons", content:<CircleMenuToggleButton/>, url:defaultURL + "buttons/circleMenuToggleButton"}
        ],
        [
            {id:1, title:"Basic Toasts", content:<BasicToast/>, url:defaultURL + "toasts/basicToast"}
        ],
        [
            {id:1, title:"Basic Cards", content:<BasicCard/>, url:defaultURL + "cards/basicCards"}
        ],
        [
            {id:1, title:"Basic Carousel", content:<BasicCarousel/>, url:defaultURL + "carousels/basicCarousel"},
            {id:2, title:"Rotation Carousel", content:<RotationCarousel/>, url:defaultURL + "carousels/rotationCarousel"}
        ],
        [
            {id:1, title:"Image Text 50 per", content:<FlexImgText50per/>, url:defaultURL + "layouts/flexImgText50per"},
        ]
    ]
    const [viewState, setViewState] = useState([subMenu[0][0].title, subMenu[0][0].content, subMenu[0][0].url]);

    const viewSetFunc = (title:string, content:JSX.Element, url:string) => {
        let newView = [...viewState];
        newView[0] = title;
        newView[1] = content;
        newView[2] = url;
        setViewState(newView);
    }

    let subMenuList:JSX.Element[] = [];
    subMenu[menuState].map((data)=>{
        let li = <li key={data.id} onClick={()=>{viewSetFunc(data.title, data.content, data.url); setButtonToggle(!buttonToggle);}}>{data.title}</li>
        subMenuList.push(li);
    })

    let mainMenuList:JSX.Element[] = [];
    mainMenu.map((data)=>{
        let li = <li key={data.id} onClick={()=>{console.log(data.id); setMenuState(data.id)}}>{data.title}</li>
        mainMenuList.push(li);
    })

    return (
    <div className="components">
        <div className={buttonToggle ? "menu-button active" : "menu-button"} onClick={()=>{toggleFunc()}}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
        <div className={buttonToggle ? "menu active" : "menu"}>
            <div className="main">
                <ul>
                    {mainMenuList}
                </ul>
            </div>
            <div className="sub">
                <ul>
                    {subMenuList}
                </ul>
            </div>
        </div>
        <div className="container">
            <h2>
                {viewState[0]}
                <a href={viewState[2].toString()} target="_blank" rel="noopener noreferrer">GO SOURCE CODE</a>
            </h2>
            <div className="view">
                {viewState[1]}
            </div>
        </div>
    </div>
    )
}

export default Components;