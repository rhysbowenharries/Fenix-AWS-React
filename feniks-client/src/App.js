import React, { Component, Fragment} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';


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
            <Route exact path="/" component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/equality" component={Equalities} />
            <Route path="/client-list" component={ExistingClients} />
            <Route path="/assessment-form/:id" render={(props) => {
              const id = props.match.params.id;
              return <ClientAssessment id={id} />
            }}/>
            <Route path="/register-client" component={RegisterClient} />
            <Route path="/client-profile/:id" render = {(props) => {
              const id = props.match.params.id;
              return <DetailedClient id = {id}/>
            }}/>
            <Route path="/edit/:id" render = {(props) => {
              const id = props.match.params.id;
              return <EditClient id = {id}/>
            }}/>
          </div>

        </Fragment>
      </Router>

  );
}
}

export default App;
