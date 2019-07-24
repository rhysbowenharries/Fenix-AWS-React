import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


import 'bootstrap';
import './css/feniks_style.css';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Containers
import Home from './containers/Home.js';
import Equalities from './containers/Equalities';
import EditClientContainer from './containers/EditClient';
import ExistingClients from './containers/ExistingClients';
import NewClientContainer from './containers/RegisterClient';
import ClientAssessment from './containers/ClientAssessment';
import DetailedClientContainer from './containers/DetailedClient';




class App extends Component {
  render() {
    return (


      <div className="container-fluid px-0">
        <Router>
          <>

          <nav className="nav navbar-expand-lg navbar-dark bg-dark mb-3 mx-0 px-3">
            <Link to="/" className="navbar-brand logo-text">Feniks</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/register-client" className="nav-link">New Client</Link>
              </li>
              <li className="nav-item">
                <Link to="/client-list" className="nav-link">Clients</Link>
              </li>
            </ul>
          </nav>



          <div className="content-area mx-5">
            <Route exact path="/" component={Home} />
            <Route path="/register-client" component={NewClientContainer} />
            <Route path="/client-list" component={ExistingClients} />
            <Route path="/assessment-form" component={ClientAssessment} />
            <Route path="/client-profile/:id" render = {(props) => {
              const id = props.match.params.id;
              return <DetailedClientContainer id = {id}/>
            }}/>
            <Route path="/edit/:id" render = {(props) => {
              const id = props.match.params.id;
              return <EditClientContainer id = {id}/>
            }}/>
            <Route path="/equality" component={Equalities} />
          </div>
        </>
      </Router>
    </div>
  );
}
}

export default App;
