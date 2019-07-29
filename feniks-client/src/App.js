import React, { Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Routes from "./Routes";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap';
import './css/feniks_style.css';
import '../src/App.css'
import 'popper.js/dist/popper.js';
import Login from "./containers/Login";
import { Auth } from "aws-amplify";


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
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);
    this.props.history.push("/login");

  }


  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
    <div className="App container">





            <Navbar/>



          {this.state.isAuthenticated
            ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
            : <Fragment>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              

              </Fragment>
          }

            <Routes childProps={childProps}/>
          </div>



  );
}
}
export default withRouter(App);
