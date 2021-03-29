import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === true
            ? render(routeProps)
            : <Redirect to={`/login`}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export default connect(mapStateToProps, null)(PrivateRoute);
