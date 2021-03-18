import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from "../../store/action";
import {connect} from 'react-redux';


const Filters = (props) => {

  const {filterName, genre, onFilterChange, onAllFilmsClick} = props;

  return (
    <React.Fragment>
      <li className={genre === filterName
        ? `catalog__genres-item catalog__genres-item--active`
        : `catalog__genres-item`}>
        <a href="#"
          className="catalog__genres-link"
          onClick={(event) => {
            event.preventDefault();
            if (filterName === `All films`) {
              onAllFilmsClick();
            } else {
              onFilterChange(filterName);
            }
          }}>{filterName}</a>
      </li>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(newGenre) {
    dispatch(ActionCreator.changeGenre(newGenre));
    dispatch(ActionCreator.filterMovies());
  },
  onAllFilmsClick() {
    dispatch(ActionCreator.resetFilters());
  },
});

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onAllFilmsClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
