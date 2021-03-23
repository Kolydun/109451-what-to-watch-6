import React from 'react';
import PropTypes from "prop-types";
import Review from "../review/review";
import {nanoid} from "nanoid";


const Reviews = (props) => {

  const {movie} = props;

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {movie.comments.map((comment) =>
            <Review
              key={nanoid()}
              userReview={comment}
            />)}
        </div>
      </div>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Reviews;
