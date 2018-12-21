import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './components/AppliedRoute';
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Home from './containers/Home';
import Login from './containers/Login';
import NotFound from './components/NotFound';
import Signup from './containers/Signup';
import SandBox from './SandBox'
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    {/* <UnauthenticatedRoute path="/" exact component={Landing} props={childProps} /> */}
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path='/sandbox' exact component={SandBox} />
    <Route component={NotFound} />
  </Switch>;