// Import

// Libraries
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Utils
import { getToken } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        getToken() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
