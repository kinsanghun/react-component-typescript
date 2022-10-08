import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./view3d.scss";


function Card(props:{url:string}) {
    return (
    <div className='card'>
        <img src={props.url} alt="shiba"/>
    </div>
    )
}
function View3d() {
    let canvas = useRef<HTMLCanvasElement>(null);
    let shiba = 'The Shiba Inu Japanese: ɕiba inɯ) is a breed of hunting dog from Japan. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan. "Inu" is Japanese and means "dog". A small, alert, and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting. It looks similar to and is often mistaken for other Japanese dog breeds such as the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.';
    let card = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    const imgURLs = [
        "shiba1.jpg",
        "shiba2.jpg",
        "shiba3.jpg",
        "shiba4.jpg",
        "shiba5.jpg",
        "shiba6.jpg",
        "shiba7.jpg",
        "shiba8.jpg",
    ]


    useEffect(()=>{
        let scene = new THREE.Scene();
        let renderer = new THREE.WebGLRenderer({
            canvas : canvas.current!,
            antialias :true,
        });
        renderer.outputEncoding = THREE.sRGBEncoding;
        scene.background = new THREE.Color("rgb(253, 194, 106)");
        let camera = new THREE.PerspectiveCamera(30, 1);
        camera.position.set(-1, -0.1, 3);
        
        let loader = new GLTFLoader();

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.minDistance = 5;
        controls.maxDistance = 300;
        controls.enablePan = false;
        controls.enableZoom = true;
        controls.update();

        loader.load("shiba/scene.gltf", (gltf)=>{
            scene.add(gltf.scene);
            function animate () {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
            animate()
        })  
    }, [])
    return (
        <div className="view-3d">
            <div className='header'>
                <h1>SHIBA INU</h1>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>What's New</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='view'>
                <canvas ref={canvas} id="canvas" width={500} height={500}></canvas>
                <div className='text'>
                    <h2>SHIBA IS...</h2>
                    <p>{shiba}</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className='content'>
                <div className='video'>
                    <h2>show Video</h2>
                    <video muted autoPlay loop>
                        <source src="shiba.mp4" type="video/mp4"/>
                        <strong>Your browser does not support the video tag.</strong>
                    </video>

                    <p>{shiba}</p>
                </div>

                <div className='flex-card'>
                    <h2>PICTURES</h2>
                    <div>
                        <img src="shiba8.jpg" alt="shiba"/>
                        <img src="shiba7.jpg" alt="shiba"/>
                    </div>
                </div>
                <div className='cards'>
                    <div className='line'>
                        <h2>Cards</h2>
                        <p>{card}</p>
                        <Card url={imgURLs[0]}/>
                        <Card url={imgURLs[1]}/>
                        <Card url={imgURLs[2]}/>
                        <Card url={imgURLs[5]}/>
                    </div>
                    <div className='line'>
                        <Card url={imgURLs[3]}/>
                        <Card url={imgURLs[4]}/>
                        <Card url={imgURLs[5]}/>
                        <Card url={imgURLs[0]}/>
                        <p>{card}</p>
                    </div>
                </div>
                <div className='flex-card'>
                    <h2>Memorys</h2>
                    <div>
                        <img src="shiba8.jpg" alt="shiba"/>
                        <img src="shiba7.jpg" alt="shiba"/>
                    </div>
                    <div>
                        <img src="shiba7.jpg" alt="shiba"/>
                        <img src="shiba8.jpg" alt="shiba"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default View3d;