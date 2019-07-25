import React, { Component, Fragment} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Routes from "./Routes";


import 'bootstrap';
import './css/feniks_style.css';
import 'popper.js/dist/popper.js';
import Login from "./containers/Login";



// import { Nav, Navbar,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



import Navbar from './components/navbar/Navbar.js'

// Containers
import Home from './containers/Home.js';
import Equalities from './containers/Equalities';
import EditClient from './containers/EditClient';
import ExistingClients from './containers/ExistingClients';
import RegisterClient from './containers/RegisterClient';
import ClientAssessment from './containers/ClientAssessment';
import DetailedClient from './containers/DetailedClient';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (



        <Router>

          <Fragment>

            <Navbar/>

          <div className="content-area mx-5">

          
            <Routes />
          </div>

        </Fragment>
      </Router>

  );
}
}

export default App;
