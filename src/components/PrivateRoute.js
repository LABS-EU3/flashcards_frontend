import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        }
        alert('Hi there 😊, Please Sign in');
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { referer: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
