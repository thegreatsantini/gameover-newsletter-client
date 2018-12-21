import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AppliedRoute from './components/AppliedRoute';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';
import NotFound from './components/NotFound';
import Landing from './components/Landing';

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