import React, {Fragment} from 'react';
import DateSearch from './DateSearch.js'
import castle from '../images/home-bg.jpg'
import AppointmentList from './AppointmentList.js'
import  './Home.css'
import logo from "../images/feniks_logo-1.jpg"


// this should be a class if we are going to have a dash board.
const Home = () =>(
  <div className="home">
    <a href="/">
    <img src={logo} alt="feniks-logo" className="feniks-logo" />
    </a>
  </div>
)


export default Home;
