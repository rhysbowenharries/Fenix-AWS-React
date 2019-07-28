import React, { Component, Fragment} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Routes from "./Routes";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap';
import './css/feniks_style.css';
import 'popper.js/dist/popper.js';
import Login from "./containers/Login";



// import { Nav, Navbar,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



// import Navbar from './components/navbar/Navbar.js'

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

          <div className="head">

          {this.state.isAuthenticated
            ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
            : <Fragment>
              <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
                <LinkContainer to="/equality">
                  <NavItem>Equalities</NavItem>
                </LinkContainer>
                <LinkContainer to="/client-list">
                  <NavItem>Clients</NavItem>
                </LinkContainer>
                <LinkContainer to="/assessment-form">
                  <NavItem>Assessment form</NavItem>
                </LinkContainer>
                <LinkContainer to="/register-client">
                  <NavItem>New Client</NavItem>
                </LinkContainer>
              </Fragment>
          }

            <Routes childProps={childProps}/>
          </div>

        </Fragment>
      </Router>

  );
}
}

export default App;
