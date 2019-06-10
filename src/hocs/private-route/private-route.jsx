import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, isAutorised}) => {
  return (
    <Route
      render={(props) =>
        isAutorised ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{pathname: `/signin`, state: {from: props.location}}}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isAutorised: PropTypes.bool,
  location: PropTypes.string,
};

export default PrivateRoute;

