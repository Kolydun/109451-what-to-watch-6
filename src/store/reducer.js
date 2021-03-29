import {ActionType} from "./action";

const initialState = {
  genre: `All films`,
  initialGenre: `All films`,
  moviesList: [],
  initialMoviesList: [],
  promoMovie: {},
  movieDetails: {},
  dataForReviewPage: {},
  movieComments: [],
  isDataForReviewPageLoaded: false,
  isPromoLoaded: false,
  isMovieDetailsLoaded: false,
  isMovieCommentsLoaded: false,
  renderedMovies: 4,
  moviesPerStepCounter: 4,
  isDataLoaded: false,
  authorizationStatus: false,
  isReviewBlocked: false,
  isReviewSendCorrectly: false,
  isReviewSendError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    case ActionType.FILTER_MOVIES:
      return {
        ...state,
        renderedMovies: state.moviesPerStepCounter,
        moviesList: state.initialMoviesList.filter((movie) => movie.genre === state.genre),
      };

    case ActionType.RESET_STATE:
      return {
        ...initialState,
      };

    case ActionType.RESET_FILTERS:
      return {
        ...state,
        genre: state.initialGenre,
        moviesList: state.initialMoviesList,
        renderedMovies: state.moviesPerStepCounter,
      };

    case ActionType.INCREASE_RENDERED_FILMS_COUNT:
      return {
        ...state,
        renderedMovies: state.renderedMovies + state.moviesPerStepCounter,
      };

    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        moviesList: action.payload,
        initialMoviesList: action.payload,
        isDataLoaded: !state.isDataLoaded,
      };

    case ActionType.CHANGE_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        isPromoLoaded: true,
        promoMovie: action.payload,
      };

    case ActionType.LOAD_MOVIE_DETAILS:
      return {
        ...state,
        isMovieDetailsLoaded: true,
        movieDetails: action.payload,
      };

    case ActionType.RESET_LOAD_MOVIE_DETAILS_FLAG:
      return {
        ...state,
        isMovieDetailsLoaded: false,
        isMovieCommentsLoaded: false,
        isDataForReviewPageLoaded: false,
      };

    case ActionType.LOAD_MOVIE_COMMENTS:
      return {
        ...state,
        isMovieCommentsLoaded: true,
        movieComments: action.payload,
      };

    case ActionType.LOAD_DATA_FOR_REVIEW_PAGE:
      return {
        ...state,
        isDataForReviewPageLoaded: true,
        dataForReviewPage: action.payload,
      };

    case ActionType.CHANGE_REVIEW_FORM_BLOCK_FLAG:
      return {
        ...state,
        isReviewBlocked: action.payload,
      };

    case ActionType.CHANGE_REVIEW_SEND_FLAG:
      return {
        ...state,
        isReviewSendCorrectly: action.payload,
      };

    case ActionType.CHANGE_REVIEW_SEND_ERROR_FLAG:
      return {
        ...state,
        isReviewSendError: action.payload,
      };
  }

  return state;
};

export {reducer};
