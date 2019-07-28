import React from 'react';
import {Link} from 'react-router-dom';



const Navbar  = (props) => {

  return (

    <nav className="nav navbar-expand-lg navbar-dark bg-dark mb-3 mx-0 px-3">
      <Link to="/" className="navbar-brand logo-text">Feniks</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/register-client" className="nav-link">New Client</Link>
        </li>
        <li className="nav-item">
          <Link to="/client-list" className="nav-link">Clients</Link>
        </li>

        <li className= "nav-item">
          <Link to="/equality" className="nav-link">Equality</Link>
        </li>
        <li className="nav-item">
          <Link to="/assessment-form" className="nav-link">Assement Form</Link>
        </li>
      </ul>
    </nav>
  )
}


export default Navbar
