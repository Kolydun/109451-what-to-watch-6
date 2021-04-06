import {DataActionType} from "../data-actions/data-actions";
import {FlagActionType} from "../flag-actions/flag-actions";
import {adaptMovieToClient} from "../../adapt-to-client/adapt-to-client";

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
        movieDetails: adaptMovieToClient(action.payload),
      };

    case FlagActionType.CHANGE_MOVIE_DETAILS_LOAD_FLAG:
      return {
        ...state,
        isMovieDetailsLoaded: action.payload,
      };

    case FlagActionType.RESET_LOAD_MOVIE_DETAILS_FLAG:
      return {
        ...state,
        isMovieDetailsLoaded: false,
        isMovieCommentsLoaded: false,
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
