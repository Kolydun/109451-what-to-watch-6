import {DataActionType} from "../data-actions/data-actions";
import {FlagActionType} from "../flag-actions/flag-actions";

const initialState = {
  movieDetails: {},
  movieComments: [],
  isMovieDetailsLoaded: false,
  isMovieCommentsLoaded: false,
};

const moviePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DataActionType.LOAD_MOVIE_DETAILS:
      return {
        ...state,
        isMovieDetailsLoaded: true,
        movieDetails: action.payload,
      };

    case FlagActionType.RESET_LOAD_MOVIE_DETAILS_FLAG:
      return {
        ...state,
        isMovieDetailsLoaded: false,
        isMovieCommentsLoaded: false,
        isDataForReviewPageLoaded: false,
      };

    case DataActionType.LOAD_MOVIE_COMMENTS:
      return {
        ...state,
        isMovieCommentsLoaded: true,
        movieComments: action.payload,
      };

    case FlagActionType.CHANGE_MOVIE_COMMENTS_LOAD_FLAG:
      return {
        ...state,
        isMovieCommentsLoaded: action.payload,
      };
  }

  return state;
};

export {moviePageReducer};
