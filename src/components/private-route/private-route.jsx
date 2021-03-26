import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({render, path, exact, authorizationStatus, redirectTo}) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === true
            ? render(routeProps)
            : <Redirect to={redirectTo}/>
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
  redirectTo: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export default connect(mapStateToProps, null)(PrivateRoute);
