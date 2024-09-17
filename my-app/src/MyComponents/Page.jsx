import React, { useEffect, useState } from 'react'
import Image1 from './Images/nature1.jpg';
import Image2 from './Images/nature2.jpg';
import Image3 from './Images/nature3.jpg';
import Image4 from './Images/nature4.jpg';
import Image5 from './Images/nature5.jpg';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route, 
//     Link
//   } from "react-router-dom";

export default function Page() {
    const images = [Image1, Image2, Image3, Image4, Image5];   
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const timeOut = setTimeout(()=>
            setIndex((i)=> i=== images.length-1 ? 0 : i+1)
        ,4000);
        return ()=> clearTimeout(timeOut);
    }, [index])

    const prevImage = (i)=>{
        i= i === 0 ? images.length-1 : i-1
        setIndex(i);
    }
    const nextImage = (i)=> {
        i= i === images.length-1 ? 0 : i+1
        setIndex(i);
    }

  return (
    <div className="Home">
        <div className="Navbar">
            <h1>Lets Make Trip Together</h1>
        </div>

        <div className="Body" style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}> 
            <div className="buttons">
                <button className='leftBtn' onClick={()=> prevImage(index)}>-</button>
                <button className='rightBtn' onClick={()=> nextImage(index)}>+</button>
            </div>  
            
            {images.map((image, index) =>(
                <div className="Images" key={index}>
                    <img src={image} alt="" />
                </div>
            ))}
            {/* <img src={images[index]} /> */}
            
        </div>   
        <div className="Footer">               
            <div className="container my-5">
                <footer className="text-center text-lg-start text-white" style= {{backgroundColor: "#1c2331"}}>

                    <section className="d-flex justify-content-between p-4" style= {{backgroundColor: "#6351ce"}}>
                        <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                        </div>

                        <div className='Contacts'>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                        </div>
                    </section>
                </footer>
            </div>
        </div>    
    </div>
  )
}