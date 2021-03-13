import React from 'react';
import PropTypes from "prop-types";


const Overview = (props) => {

  const {generatedFilm} = props;

  const ratingLevel = (rating) => {
    let stringRating = ``;
    if (rating >= 0 && rating <= 3) {
      stringRating = `Bad`;
    } else if (rating > 4 && rating <= 5) {
      stringRating = `Normal`;
    } else if (rating > 5 && rating <= 8) {
      stringRating = `Good`;
    } else if (rating > 8 && rating < 10) {
      stringRating = `Very good`;
    } else if (rating === 10) {
      stringRating = `Awesome`;
    } else {
      stringRating = `N/A`;
    }

    return stringRating;
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{generatedFilm.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel(generatedFilm.rating)}</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{generatedFilm.description}</p>

        <p className="movie-card__director"><strong>Director: {generatedFilm.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {generatedFilm.starring} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

Overview.propTypes = {
  generatedFilm: PropTypes.object.isRequired
};

export default Overview;