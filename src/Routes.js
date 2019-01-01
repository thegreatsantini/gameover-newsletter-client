import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import Home from './components/Home';
import Login from './containers/Login';
import NotFound from './components/NotFound';
import Signup from './containers/Signup';
import SandBox from './SandBox'
import Users from './containers/Users'
import User from './containers/User'
import Games from './containers/Games'
import Friend from './containers/Friend'
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    {/* <UnauthenticatedRoute path="/" exact component={Landing} props={childProps} /> */}
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    
    <AuthenticatedRoute path="/friend/:rowId" exact component={Friend} props={childProps} />
    <AuthenticatedRoute path="/user/:username" exact component={User} props={childProps} />
    <AuthenticatedRoute path="/users" exact component={Users} props={childProps} />
    <AuthenticatedRoute path="/games" exact component={Games} props={childProps} />

    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path='/sandbox' exact component={SandBox} />
    <Route component={NotFound} />
  </Switch>;