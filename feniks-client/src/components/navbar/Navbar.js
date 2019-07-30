import React from 'react';
import { Link } from 'react-router-dom';
import navbar from '../navbar/Navbar.css'



const Navbar = (props) => {

  return (
    

    <nav className="navbar">
      <Link to="/">Feniks</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/register-client">New Client</Link>
        </li>
        <li className="nav-item">
          <Link to="/client-list">Clients</Link>
        </li>
        <li className= "nav-item">
          <Link to="/equality">Equality</Link>
        </li>
        <li className="nav-item">
          <Link to="/assessment-form">Assement Form</Link>
        </li>
      </ul>
    </nav>
  )
}


export default Navbar
