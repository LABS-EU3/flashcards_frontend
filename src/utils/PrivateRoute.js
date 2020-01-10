// Import

// Libraries
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Utils
import { getToken } from './auth';
/* eslint-disable no-lone-blocks */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        {
          return getToken() ? <Component {...props} /> : <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
