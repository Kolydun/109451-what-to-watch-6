import React from 'react';
import PropTypes from "prop-types";

const Review = (props) => {

  const {userReview} = props;

  return (
    <React.Fragment>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{userReview.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{userReview.user.name}</cite>
            <time className="review__date" dateTime={userReview.date}>{userReview.date}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{userReview.rating}</div>
      </div>
    </React.Fragment>
  );
};

Review.propTypes = {
  userReview: PropTypes.object.isRequired
};

export default Review;
