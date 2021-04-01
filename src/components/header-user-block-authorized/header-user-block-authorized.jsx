import React from 'react';
import {logout} from "../../store/api-actions/api-actions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {Routes} from "../../const/const";
import {resetFilters} from "../../store/movie-actions/movie-actions";

const UserBlock = (props) => {

  const {onPageChange, onLogOut} = props;
  const history = useHistory();


  return (
    <React.Fragment>
      <div className="user-block">
        <div className="user-block__avatar">
          <img
            src="img/avatar.jpg"
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

const mapDispatchToProps = (dispatch) => ({
  onPageChange() {
    dispatch(resetFilters());
  },
  onLogOut() {
    dispatch(logout());
  },
});


UserBlock.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UserBlock);
