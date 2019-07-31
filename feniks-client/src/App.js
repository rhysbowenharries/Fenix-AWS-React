import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link, Switch } from 'react-router-dom';
import Routes from "./Routes";
import { Nav, NavItem, Button } from "react-bootstrap";
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
import AuthenticatedRoute from "./components/loginComponents/AuthenticatedRoute";

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
    
    if (!this.state.isAuthenticated) {
      return (
      <Fragment>

        <div id="head">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </div>

        <div className="App-container">
          
            <Routes childProps={childProps} />
          
        </div>

      </Fragment>
      )
    } else {
      return (

        <Fragment>

        <div id="head">
          <Link to="/equality">Equality</Link>
          <Link to="/client-list">Client List</Link>
          <Link to="/assessment-form">Assessment Form</Link>
        </div>

        <div className="App-container">
          {this.state.isAuthenticated
            ? <Button onClick={this.handleLogout}>Logout</Button>
            : <Routes childProps={childProps} />
          }
        </div>

        </Fragment>
      )
    }

    // return (
    //   !this.state.isAuthenticating &&

    //   <Fragment>

    //     <div id="head">
    //       <Link to="/login">Login</Link>
    //       <Link to="/signup">Sign up</Link>
    //     </div>

    //     <div id="head">
    //       <Link to="/register-client">New Client</Link>
    //     </div>

    //     <div className="App-container">
    //       {this.state.isAuthenticated
    //         ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
    //         : <Routes childProps={childProps} />
    //       }
    //     </div>

    //   </Fragment>
    // );
  }
}

export default withRouter(App);
