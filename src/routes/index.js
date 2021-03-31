import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/Auth';
import {
  HomePage,
  Login,
  NotFound,
  PersonPage,
} from '../pages';

const PrivateRoute = ({ component: Component, ...rest})=>(
  <Route
  {...rest}
  render={props =>
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to= {{pathname:'/', state:{from: props.location} }}/>
    ) 
  }
  />
);

const Routes = () => (
  
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/home" component={HomePage} />
    <PrivateRoute path="/person/:id" component={ PersonPage } />
    <Route component={NotFound} />
  </Switch>
  
);

export default Routes;