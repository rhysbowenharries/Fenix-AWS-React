import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


import 'bootstrap';
import './css/feniks_style.css';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// Containers
import Home from './containers/Home.js';
import ClientAssessment from './containers/ClientAssessment'
import Equalities from './containers/EqualitiesForm'
import NewClientContainer from './containers/NewClient'
import EditClientContainer from './containers/EditClient'
import ExistingClients from './containers/ExistingClients';
import DetailedClientContainer from './containers/DetailedClient'




class App extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <Router>
          <>
          <nav className="nav navbar-expand-lg navbar-dark bg-dark mb-3 mx-0 px-3">
            <Link to="/" className="navbar-brand logo-text">Feniks</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/newclient" className="nav-link">New Client</Link>
                </li>
                <li className="nav-item">
                  <Link to="/clients" className="nav-link">Clients</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="content-area mx-5">
            <Route exact path="/" component={Home} />
            <Route path="/newclient" component={NewClientContainer} />
            <Route path="/clients" component={ExistingClients} />
            <Route path="/assess" component={ClientAssessment} />
            <Route path="/details/:id" render = {(props) => {
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
