import React, {Fragment} from 'react';
import DateSearch from './DateSearch.js'
import castle from '../images/home-bg.jpg'
import AppointmentList from './AppointmentList.js'
import  './Home.css'
import Login from './loginContainers/Login'


// this should be a class if we are going to have a dash board.
const Home = () =>(
  <div>
      <h2>Login Page</h2>
      <Login />
  </div>
)


export default Home;
