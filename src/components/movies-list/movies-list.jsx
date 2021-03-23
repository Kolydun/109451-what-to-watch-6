import React, {useState} from 'react';
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {nanoid} from "nanoid";
import {connect} from 'react-redux';

const MoviesList = (props) => {

  const {moviesList, renderedMovies} = props;
  const filmId = useState({});
  const setActiveFilmId = filmId[1];
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
          trackActiveFilmId={() => {
            setActiveFilmId((prevFilmId) => ({
              ...prevFilmId,
              activeFilmId: movie.id
            }));
          }}
        />)}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  renderedMovies: state.renderedMovies,
  moviesPerStepCounter: state.moviesPerStepCounter,
});

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  renderedMovies: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(MoviesList);
