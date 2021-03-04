import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {

  const {generatedFilm, stateFunction} = props;

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={stateFunction}>
        <div className="small-movie-card__image">
          <img src={generatedFilm.previewImage} alt="Bohemian Rhapsody" width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/1`}>{generatedFilm.name}</Link>
        </h3>
      </article>
    </React.Fragment>
  );
};

MovieCard.propTypes = {
  generatedFilm: PropTypes.object.isRequired,
  stateFunction: PropTypes.func.isRequired
};

export default MovieCard;
