import {MovieActionType} from "../movie-actions/movie-actions";
import {DataActionType} from "../data-actions/data-actions";
import {FlagActionType} from "../flag-actions/flag-actions";
import {LoadMoreCounters} from "../../const/const";
import {adaptMovieToClient} from "../../adapt-to-client/adapt-to-client";

const initialState = {
  genre: `All films`,
  initialGenre: `All films`,
  moviesList: [],
  initialMoviesList: [],
  promoMovie: {},
  favouriteMovies: [],
  isPromoLoaded: false,
  renderedMovies: LoadMoreCounters.INITIAL_COUNTER,
  moviesPerStepCounter: LoadMoreCounters.MOVIES_PER_STEP,
  isDataLoaded: false,
  isFavouriteMoviesLoaded: false,
};

const moviesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    case MovieActionType.FILTER_MOVIES:
      return {
        ...state,
        renderedMovies: state.moviesPerStepCounter,
        moviesList: state.initialMoviesList.filter((movie) => movie.genre === state.genre),
      };

    case MovieActionType.RESET_FILTERS:
      return {
        ...state,
        genre: state.initialGenre,
        moviesList: state.initialMoviesList,
        renderedMovies: state.moviesPerStepCounter,
      };

    case MovieActionType.INCREASE_RENDERED_FILMS_COUNT:
      return {
        ...state,
        renderedMovies: state.renderedMovies + state.moviesPerStepCounter,
      };

    case DataActionType.LOAD_MOVIES:
      return {
        ...state,
        moviesList: action.payload.map((movie) => adaptMovieToClient(movie)),
        initialMoviesList: action.payload.map((movie) => adaptMovieToClient(movie)),
        isDataLoaded: !state.isDataLoaded,
      };

    case DataActionType.LOAD_PROMO_MOVIE:
      return {
        ...state,
        isPromoLoaded: true,
        promoMovie: adaptMovieToClient(action.payload),
      };

    case FlagActionType.CHANGE_FAVOURITE_MOVIES_LOAD_FLAG:
      return {
        ...state,
        isFavouriteMoviesLoaded: action.payload,
      };

    case DataActionType.LOAD_FAVOURITE_MOVIES:
      return {
        ...state,
        favouriteMovies: action.payload.map((movie) => adaptMovieToClient(movie)),
      };

    case FlagActionType.CHANGE_PROMO_LOAD_FLAG:
      return {
        ...state,
        isPromoLoaded: action.payload,
      };
  }

  return state;
};

export {moviesListReducer};
