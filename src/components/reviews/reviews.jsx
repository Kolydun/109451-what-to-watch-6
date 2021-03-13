import React from 'react';
import PropTypes from "prop-types";
import Review from "../review/review";
import {nanoid} from "nanoid";


const Reviews = (props) => {

  const {generatedFilm} = props;

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {generatedFilm.comments.map((comment) =>
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
  generatedFilm: PropTypes.object.isRequired
};

export default Reviews;
