import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeGenre, filterMovies, resetFilters} from "../../store/movie-actions/movie-actions";
import {getGenre} from "../../store/movies-list/selectors";
import {FiltersNames} from "../../const/const";


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
            if (filterName === FiltersNames.ALL_FILMS) {
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
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange(newGenre) {
    dispatch(changeGenre(newGenre));
    dispatch(filterMovies());
  },
  onAllFilmsClick() {
    dispatch(resetFilters());
  },
});

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onAllFilmsClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
