import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/loginContainers/Login";
import Equalities from "./containers/Equalities";
import ExistingClients from "./containers/ExistingClients";
import ClientAssessment from "./containers/ClientAssessment";
import RegisterClient from "./containers/RegisterClient";
import DetailedClient from "./containers/DetailedClient";
import EditClient from "./containers/EditClient";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/loginContainers/ResetPassword";
import Signup from "./containers/loginContainers/Signup";
import AppliedRoute from "./components/loginComponents/AppliedRoute";
import AuthenticatedRoute from "./components/loginComponents/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/loginComponents/UnauthenticatedRoute";


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
    <AuthenticatedRoute path="/client-profile/:id" component={DetailedClient} props={childProps} render = {(props) => {
      const id = props.match.params.id;
      return <DetailedClient id = {id}
      />
    }}/>
    <AuthenticatedRoute path="/edit/:id" component={EditClient} props={childProps} render = {(props) => {
      const id = props.match.params.id;
      return <EditClient id = {id}/>
    }}/>


   { /* Finally, catch all unmatched routes */ }
   <Route component={NotFound} />
  </Switch>;
