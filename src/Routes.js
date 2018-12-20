import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AppliedRoute from './components/AppliedRoute'
import Login from './components/Login';
import Home from './containers/Home'
import NotFound from './components/NotFound'

export default ({ childProps }) =>
    <Switch>
        <UnauthenticatedRoute path="/" exact component={Login} props={childProps} />
        <AppliedRoute path="/:token" exact component={Login} props={childProps} />
        <AuthenticatedRoute path="/user/gamer" exact component={Home} props={childProps} />
        <Route path="/test" exact component={Home} props={childProps} />
        {/* <Route path='/sandbox' component={SandBox} /> */}
        <Route component={NotFound} />
</Switch>;