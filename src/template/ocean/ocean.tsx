import React, { useEffect, useState } from "react";
import "./ocean.scss";

function Ocean() {
    const imgURL = "ocean.jpg";
    const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    const longLorem = (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, vitae mollis purus. Nullam in massa eros. <p/>
        Mauris aliquet vestibulum aliquam. Curabitur maximus efficitur porta. Cras sit amet tincidunt ante. Integer nisi ante, imperdiet non sollicitudin eget, luctus et arcu. Donec commodo quam a ipsum facilisis, pellentesque elementum dui eleifend. <p/>
        Nam gravida dictum ipsum vel sagittis. Fusce mattis mollis tellus eu sagittis. Donec augue urna, semper a vulputate et, blandit eu ex. Proin ut turpis sit amet ex laoreet pulvinar et sed erat. Maecenas interdum ipsum neque, vitae convallis felis convallis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nunc ipsum. Aenean in libero lacinia, laoreet velit sit amet, maximus sem. Phasellus eu urna in magna mattis rhoncus. <p/>
        Nam quis pulvinar velit, sit amet facilisis arcu. Donec accumsan urna ut arcu venenatis vulputate. Sed nibh orci, blandit sit amet augue in, faucibus vestibulum mauris. Fusce at scelerisque ligula. In odio ex, lacinia sit amet sodales sit amet, scelerisque sit amet diam. Sed dapibus ut turpis sed rutrum. <p/>
        Mauris quis mollis magna, at mattis leo. Vivamus nec est nec est tempus consequat ac et dolor. Nulla a pellentesque tortor. Pellentesque est justo, ornare non faucibus sit amet, congue in sem. Nunc placerat vel leo vitae porttitor. Aliquam ornare ex scelerisque elit lobortis, a convallis nisl auctor. Maecenas auctor tristique lectus, sit amet finibus felis commodo vitae.</p>);
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return (
        <div className="ocean">
            <div className={scrollPosition < 100 ? "header" : "header active"}>
                <h1>OCEAN</h1>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>What's New</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="top">
                <img src={imgURL} className="bg"/>
                <div className="text">
                    <h2>Lorem Ipsum</h2>
                    <p>{lorem}</p>
                    <button>Learn More</button>
                </div>
            </div>

            <div className="content first">
                <h2>Kota Kinabalu</h2>
                <div>
                    <img src="ocean4.jpg" alt="ocean"/>
                    <div className="text">
                        <h3>Kota Kinabalu</h3>
                        {longLorem}
                    </div>
                </div>
            </div>
            <div className="content second">
                <h2>Amalfi & Positano, Itary</h2>
                <div>
                    <div className="text">
                        <h3>Amalfi & Positano, Itary</h3>
                        {longLorem}
                    </div>
                    <img src="ocean2.jpg" alt="ocean"/>
                </div>
            </div>
            <div className="content third">
                <h2>CinqueTerre, Itry</h2>
                <div>
                    <img src="ocean3.jpg" alt="ocean"/>
                    <div className="text">
                        <h3>CinqueTerre, Itry</h3>
                        {longLorem}
                    </div>
                </div>
            </div>
            <div className="content fourth">
                <h2>Antalya, Turkey</h2>
                <div>
                    <div className="text">
                        <h3>Antalya, Turkey</h3>
                        {longLorem}
                    </div>
                    <img src="ocean1.jpg" alt="ocean"/>
                </div>
            </div>
        </div>
    )
}
export default Ocean;