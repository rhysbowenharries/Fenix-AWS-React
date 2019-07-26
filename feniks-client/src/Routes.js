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
import AppliedRoute from "./components/AppliedRoute";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";
import Signup from "./containers/Signup";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";


export default ({ childProps }) =>
  <Switch>

    <AppliedRoute path="/" exact component={Home} props={childProps} />

    <UnauthenticatedRoute path="/login/reset" exact component={ResetPassword} props={childProps}/>
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/equality" component={Equalities} props={childProps}/>
    <AuthenticatedRoute path="/client-list" component={ExistingClients} props={childProps}/>
    <AuthenticatedRoute path="/assessment-form" component={ClientAssessment} props={childProps}/>
    <AuthenticatedRoute path="/register-client" component={RegisterClient} props={childProps}/>
    <AuthenticatedRoute path="/client-profile/:id" render = {(props) => {
      const id = props.match.params.id;
      return <DetailedClient id = {id} props={childProps}/>
    }}/>
    <AuthenticatedRoute path="/edit/:id" render = {(props) => {
      const id = props.match.params.id;
      return <EditClient id = {id} props={childProps} />
    }}/>


   { /* Finally, catch all unmatched routes */ }
   <Route component={NotFound} />
  </Switch>;
