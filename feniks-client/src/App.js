import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';
import Routes from "./Routes";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap';
import './css/feniks_style.css';
import '../src/App.css'
import 'popper.js/dist/popper.js';
import Login from "./containers/loginContainers/Login";
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
import { navBar } from '@aws-amplify/ui';

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
    catch (e) {
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
    this.props.history.push("/");

  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }

    return (
      !this.state.isAuthenticating &&

      <Fragment>

        <div id="head">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </div>

        <div className="App-container">
          {this.state.isAuthenticated
            ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
            : <Routes childProps={childProps} />
          }
        </div>

      </Fragment>
    );
  }
}

export default withRouter(App);
