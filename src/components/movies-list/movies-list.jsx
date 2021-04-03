import React from 'react';
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {nanoid} from "nanoid";
import {connect} from 'react-redux';
import {getMoviesPerStepCounter, getRenderedMovies} from "../../store/movies-list/selectors";

const MoviesList = (props) => {

  const {moviesList, renderedMovies} = props;
  const moviesPerStep = [];

  for (let i = 0; i < renderedMovies && i < moviesList.length; i++) {
    moviesPerStep[i] = moviesList[i];
  }

  return (
    <React.Fragment>
      {moviesPerStep.map((movie) =>
        <MovieCard
          key={nanoid()}
          movie={movie}
        />)}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
  renderedMovies: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  renderedMovies: getRenderedMovies(state),
  moviesPerStepCounter: getMoviesPerStepCounter(state),
});

export default connect(mapStateToProps, null)(MoviesList);
