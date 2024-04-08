import React from 'react';
import './Banner.css';
import img from "../img/michael-soledad-i-9Lx8mCQ74-unsplash.jpg";
import smimg from "../img/alex-knight-j4uuKnN43_M-unsplash (1).jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <section className="banner">
        <div className="banner__img  d-md-block">
            <img src={img} alt="banner image" />
        </div>

        <div className="name">
            <h1>Hi, I'm </h1> 
            <h1> HENOK SHUMI </h1>
            <h4>Full Stack Web Developer</h4>
        </div>
    </section>
  )
}

export default Banner;