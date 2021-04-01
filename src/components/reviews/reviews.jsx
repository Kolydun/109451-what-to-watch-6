import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import Review from "../review/review";
import {nanoid} from "nanoid";
import {fetchComments} from "../../store/api-actions/api-actions";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import Spinner from "../loading-spinner/loading-spinner";
import {getIsMovieCommentsLoaded, getMovieComments} from "../../store/movie-page/selectors";


const Reviews = (props) => {

  const {isMovieCommentsLoaded, onMovieCommentsLoad, movieComments} = props;
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
            {movieComments.map((comment) =>
              <Review
                key={nanoid()}
                userReview={comment}
              />)}
          </div>
        </div>
      </React.Fragment>
  );
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

Reviews.propTypes = {
  onMovieCommentsLoad: PropTypes.func.isRequired,
  movieComments: PropTypes.array.isRequired,
  isMovieCommentsLoaded: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
