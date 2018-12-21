import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Home from './containers/Home';
import Landing from './components/Landing';
import Login from './containers/Login';
import NotFound from './components/NotFound';
import Signup from './containers/Signup';
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <UnauthenticatedRoute path="/" exact component={Landing} props={childProps} />
    <UnauthenticatedRoute path="/signup" component={Signup} props={childProps} />
    <UnauthenticatedRoute path="/login" component={Login} props={childProps} />
    <AppliedRoute path="/:token" component={Login} props={childProps} />
    <AuthenticatedRoute path="/user/gamer" component={Home} props={childProps} />
    {/* <Route path='/sandbox' component={SandBox} /> */}
    <Route component={NotFound} />
  </Switch>;