import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Equalities from "./containers/Equalities";
import ExistingClients from "./containers/ExistingClients";
import ClientAssessment from "./containers/ClientAssessment";
import RegisterClient from "./containers/RegisterClient";
import DetailedClient from "./containers/DetailedClient";
import EditClient from "./containers/EditClient";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/equality" component={Equalities} />
    <Route path="/client-list" component={ExistingClients} />
    <Route path="/assessment-form" component={ClientAssessment} />
    <Route path="/register-client" component={RegisterClient} />
    <Route path="/client-profile/:id" render = {(props) => {
      const id = props.match.params.id;
      return <DetailedClient id = {id}/>
    }}/>
    <Route path="/edit/:id" render = {(props) => {
      const id = props.match.params.id;
      return <EditClient id = {id}/>
    }}/>
  </Switch>;
