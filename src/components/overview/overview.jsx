import React from 'react';
import PropTypes from "prop-types";
import {Ratings, RatingsNames} from "../../const/const";

const Overview = (props) => {

  const {movie} = props;

  const ratingLevel = (rating) => {
    let stringRating = ``;
    if (rating >= Ratings.BAD_LOWEST && rating <= Ratings.BAD_HIGHEST) {
      stringRating = RatingsNames.BAD;
    } else if (rating >= Ratings.NORMAL_LOWEST && rating <= Ratings.NORMAL_HIGHEST) {
      stringRating = RatingsNames.NORMAL;
    } else if (rating > Ratings.GOOD_LOWEST && rating <= Ratings.GOOD_HIGHEST) {
      stringRating = RatingsNames.GOOD;
    } else if (rating > Ratings.VERY_GOOD_GRADE && rating < Ratings.AWESOME_GRADE) {
      stringRating = RatingsNames.VERY_GOOD;
    } else if (rating === Ratings.AWESOME_GRADE) {
      stringRating = RatingsNames.AWESOME;
    } else {
      stringRating = Ratings.NO_RATING;
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
  movie: PropTypes.object.isRequired,
};

export default Overview;
