import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {increaseRenderedFilmsCount} from "../../store/movie-actions/movie-actions";

const ShowMore = (props) => {

  const {onLoadMoreClick} = props;

  return (
    <React.Fragment>
      <div className="catalog__more">
        <button
          className="catalog__button"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            onLoadMoreClick();
          }}
        >Show more
        </button>
      </div>
    </React.Fragment>
  );
};


const mapDispatchToProps = (dispatch) => ({
  onLoadMoreClick() {
    dispatch(increaseRenderedFilmsCount());
  },
});

ShowMore.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ShowMore);
