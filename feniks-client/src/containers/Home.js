import React from 'react';
import logo from "../images/feniks_logo-1.jpg"
import "../containers/Home.css"

// this should be a class if we are going to have a dash board.
const Home = () =>(
  <div className="home">
    <a href="/">
    <img src={logo} alt="feniks-logo" className="feniks-logo" />
    </a>
  </div>
)

export default Home;
