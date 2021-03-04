import React, {useState} from 'react';
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {nanoid} from "nanoid";

const MoviesList = (props) => {

  const {generatedFilms} = props;
  const filmId = useState({});
  const setActiveFilmId = filmId[1];

  return (
    <React.Fragment>
      {generatedFilms.map((generatedFilm) =>
        <MovieCard
          key={nanoid()}
          generatedFilm={generatedFilm}
          stateFunction={() => {
            setActiveFilmId((prevFilmId) => ({
              ...prevFilmId,
              activeFilmId: generatedFilm.id
            }));
          }}
        />)}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  generatedFilms: PropTypes.array.isRequired,
};


export default MoviesList;
