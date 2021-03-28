import React from 'react';
import PropTypes from "prop-types";


const Overview = (props) => {

  const {movie} = props;

  const ratingLevel = (rating) => {
    let stringRating = ``;
    if (rating >= 0 && rating <= 3.9) {
      stringRating = `Bad`;
    } else if (rating >= 4 && rating <= 5.9) {
      stringRating = `Normal`;
    } else if (rating > 5.9 && rating <= 8.9) {
      stringRating = `Good`;
    } else if (rating > 8.9 && rating < 10) {
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
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scores_count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.description}</p>

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

Overview.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Overview;
