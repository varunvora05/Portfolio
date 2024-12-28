import './home.css';
import React from "react";
import image from '../assets/homeimage.jpg'

const Home = () => {
    return (
      <div className="home">
        <div className="intro">
          <h1>I am Varun Vora.</h1>
          <p>Passionate about leveraging technology to solve complex problems and create innovative solutions in software development and cybersecurity.</p>
        </div>
        <div className="interactive-image">
          <img src={image} alt="Interactive" />
        </div>
      </div>
    );
  };
  
  export default Home;