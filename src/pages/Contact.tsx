import React from "react";
import 'static/contact.css';
function Contact() {
    const contactList = [
        {title:"Name", content:"Kim, Sanghun"},
        {title:"Birthday", content:"1997.05.29"},
        {title:"Nationality", content:"South Korea 🇰🇷"},
        {title:"E-mail", content:"schmid_t@kakao.com"},
        {title:"Univ.", content:"Woosuk Univ."},
        {title:"Social", content:<><a href="https://www.instagram.com/kimsanghhun/" target="_blank" rel="noopener noreferrer"><img src="instargram.png"/></a><a href="https://github.com/kinsanghun" target="_blank" rel="noopener noreferrer"><img src="github.png"/></a></>},
    ]
    let list:JSX.Element[] = [];
    contactList.map((d, index)=>{
            let li = (<li key={index}><h3>{d.title}</h3>{d.content}</li>)
            list.push(li);
    })
    return (
        <div className="contact">
            <ul>{list}</ul>
        </div>
    )
}

export default Contact;