import React, {useState} from 'react';
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {nanoid} from "nanoid";

const MoviesList = (props) => {

  const {moviesList} = props;
  const filmId = useState({});
  const setActiveFilmId = filmId[1];

  return (
    <React.Fragment>
      {moviesList.map((movie) =>
        <MovieCard
          key={nanoid()}
          generatedFilm={movie}
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

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
};

export default MoviesList;
