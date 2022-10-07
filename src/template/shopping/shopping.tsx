import React from "react";
import 'template/shopping/shopping.scss';
import { itemType } from "template/interfaces";
import { productList } from "template/baseData";

function ItemComponent(props:{title:string, number:number, items : itemType[]}) {

    let productList:JSX.Element[] = [];
    for(var i=0; i < props.number; i++ ){
        const li = (
            <div className="product" key={i+1}>
                <img src={props.items[i].img} alt={props.items[i].title}/>
                <h5>{props.items[i].title}</h5>
                <p>{props.items[i].price.toLocaleString()} 원</p>
                <p>{props.items[i].content}</p>
                <p>장바구니에 담기</p>
            </div>
        )
        productList.push(li);
    }
    return (
        <div className="products">
            <h3>{props.title}</h3>
            <div className="product-list">
                {productList}
            </div>
        </div>
    )
}

function AdComponent(props:{item:itemType, imgPosition:string, style:{}}) {
    let view:JSX.Element;
    const img = (<img src={props.item.img} alt={props.item.title}/>)
    const text = (
        <div className="text">
            <h3>{props.item.title}</h3>
            <p>{props.item.content}</p>
            <button>자세히 보기</button>
        </div>
    )
    if(props.imgPosition == "left") {
        view = (<>{img}{text}</>)
    } 
    else if(props.imgPosition == "right") {
        view = (<>{text}{img}</>)
    }
    else {
        view = (<>{img}{text}</>)
    }

    return (<div className="Ad" style={props.style}>{view}</div>)
}

function Shopping() {
    const menuList = ["MENU", "MENU", "MENU", "MENU", "MENU", "MENU", "MENU", "MENU"];
    const slideIMG = "tmp-img3.jpg";
    const margin100 = (<div className="null-100"></div>)
    const margin200 = (<div className="null-200"></div>)
    let menus:JSX.Element[] = [];
    menuList.map((d, i)=>{
        let menu = (<li key={i}>{d}</li>)
        menus.push(menu);
    })
    return (
        <div className="shopping">
            <div className="header">
                <div className="top">
                    <h1>TEMPLABE</h1>
                    <ul>
                        <li>Home</li>
                        <li>My Info</li>
                        <li>Star</li>
                        <li>Setting</li>
                    </ul>
                </div>
                <div className="bottom">
                    <ul>{menus}</ul>                    
                </div>
            </div>
            <div className="slider">
                <img src={slideIMG} alt="bg"/>
                <div className="text">
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button>Learn More</button>
                </div>
            </div>
            {margin100}
            <div className="content">
                <ItemComponent title="PRODUCTS" number={3} items={productList}/>
                {margin200}
                <AdComponent item={productList[0]} imgPosition={"left"} style={{}}/>
                {margin200}
                <AdComponent item={productList[1]} imgPosition={"right"} style={{}}/>
                {margin200}
                <AdComponent item={productList[2]} imgPosition={"left"} style={{}}/>
                {margin200}
                <ItemComponent title="PRODUCTS" number={4} items={productList}/>
                {margin200}
                <AdComponent item={productList[1]} imgPosition={"left"} style={{ background : "#dadada"}}/>
                {margin100}
            </div>
            <div className="footer">
                <h2>Footer</h2>
                <ul>
                    <li>TEXT</li>
                    <li>TEXT</li>
                    <li>TEXT</li>
                    <li>TEXT</li>
                </ul>
            </div>
        </div>
    )
}

export default Shopping;