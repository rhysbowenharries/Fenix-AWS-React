import React,{Fragment} from 'react';
import DateSearch from './DateSearch.js'
import castle from '../images/home-bg.jpg'
import AppointmentList from './AppointmentList.js'
import  './Home.css'


// this should be a class if we are going to have a dash board.
const Home = () =>(
  <Fragment>
      <div className = "padding">
      <DateSearch/>
      <AppointmentList/>
      </div>
  </Fragment>
)


export default Home;
