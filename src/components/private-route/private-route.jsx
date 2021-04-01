import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Route, Redirect} from 'react-router-dom';
import {getAuthStatus} from "../../store/user/selectors";

const PrivateRoute = ({render, path, exact, authorizationStatus, redirectTo, neededAuthStatus}) => {

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === neededAuthStatus
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
  neededAuthStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});


export default connect(mapStateToProps, null)(PrivateRoute);
