import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import Review from "../review/review";
import {nanoid} from "nanoid";
import {fetchComments} from "../../store/api-actions/api-actions";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {CommentsColumnsDetectors} from "../../const/const";
import Spinner from "../spinner/spinner";
import {getIsMovieCommentsLoaded, getMovieComments} from "../../store/movie-page-reducer/selectors";

const Reviews = (props) => {

  const {isMovieCommentsLoaded, onMovieCommentsLoad, movieComments} = props;
  const commentsForRightColumn = movieComments.filter((comment) =>
    comment.id % CommentsColumnsDetectors.REMAINDER_DETECTOR === CommentsColumnsDetectors.REMAINDER_CHECK);
  const commentsForLeftColumn = movieComments.filter((comment) =>
    comment.id % CommentsColumnsDetectors.REMAINDER_DETECTOR !== CommentsColumnsDetectors.REMAINDER_CHECK);

  const {id} = useParams();

  useEffect(() => {
    if (isMovieCommentsLoaded === false) {
      onMovieCommentsLoad(id);
    }
  }, []);

  return (
    isMovieCommentsLoaded === false
      ? <Spinner/>
      : <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {commentsForLeftColumn.map((comment) =>
              <Review
                key={nanoid()}
                userReview={comment}
              />)}
          </div>

          <div className="movie-card__reviews-col">
            {commentsForRightColumn.map((comment) =>
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
  onMovieCommentsLoad: PropTypes.func.isRequired,
  movieComments: PropTypes.arrayOf(PropTypes.object),
  isMovieCommentsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isMovieCommentsLoaded: getIsMovieCommentsLoaded(state),
  movieComments: getMovieComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCommentsLoad(movieId) {
    dispatch(fetchComments(movieId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
