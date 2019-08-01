import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';
import Routes from "./Routes";
import { Button } from "react-bootstrap";
import 'bootstrap';
import './css/feniks_style.css';
import '../src/App.css'
import 'popper.js/dist/popper.js';
import { Auth } from "aws-amplify";

// import { Nav, Navbar,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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

          <div id="topnav">
            <Link to="/" id="title">feniks</Link>
            <div className="topnav-right">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          </div>

            <Routes childProps={childProps} />

        </Fragment>
      )
    } else {
      return (

        <Fragment>

          <div id="topnav">
            <Link to="/" id="title">feniks</Link>
            <div className="topnav-right">
              <Link to="/equality">Equality</Link>
              <Link to="/register-client">New Client</Link>
              <Link to="/client-list">Client List</Link>
              <Link to="/assessment-form">Assessment Form</Link>
              <Button id="logout-button" onClick={this.handleLogout}>Logout</Button>
            </div>
          </div>

          <Routes childProps={childProps} />

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
