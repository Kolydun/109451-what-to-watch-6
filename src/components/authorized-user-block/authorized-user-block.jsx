import React, {useEffect} from 'react';
import {checkAuth, logout} from "../../store/api-actions/api-actions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {Routes} from "../../const/const";
import {resetFilters} from "../../store/movie-actions/movie-actions";
import {getUserInformation} from "../../store/user-reducer/selectors";

const AuthorizedUserBlock = (props) => {

  const {onPageChange, onLogOut, userInformation, onUserInformationLoad} = props;

  const history = useHistory();

  useEffect(() => {
    onUserInformationLoad();
  }, [userInformation]);

  return (
    <React.Fragment>
      <div className="user-block">
        <div className="user-block__avatar">
          <img
            src={userInformation.avatarUrl}
            alt="User avatar"
            width="63"
            height="63"
            onClick={() => {
              onPageChange();
              history.push(Routes.MY_LIST);
            }}
          />
        </div>
      </div>
      <div className="user-block__exit">
        <a
          className="user-block__link"
          href=""
          onClick={(evt) => {
            evt.preventDefault();
            onLogOut();
          }}
        >Log Out</a>
      </div>
    </React.Fragment>
  );
};

AuthorizedUserBlock.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
  onUserInformationLoad: PropTypes.func.isRequired,
  userInformation: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  userInformation: getUserInformation(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange() {
    dispatch(resetFilters());
  },
  onLogOut() {
    dispatch(logout());
  },
  onUserInformationLoad() {
    dispatch(checkAuth());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedUserBlock);
