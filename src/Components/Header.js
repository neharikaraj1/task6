import React from "react";
import './Header.css'
import "../App.css";
import git from '../assests/github.png'
import insta from '../assests/insta.png'

const Header = () => {
  return (
    <header className="head">
      <h1 className="hh">Neharika Rajendran</h1>
      <p className="new">Student at Vellore Institute of Technology</p>
      <p className="new2">Social Handles:</p>
      <a
            href="https://github.com/neharikaraj1"
          >
            <img src={git}  className="imgsrc"></img>
          </a>
      <a
            href="https://www.instagram.com/"
          >
            <img src={insta}  className="imgsrc"></img>
          </a>
      
    </header>
  );
};

export default Header;
