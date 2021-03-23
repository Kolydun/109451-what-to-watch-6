import {ActionType} from "./action";

const initialState = {
  genre: `All films`,
  moviesList: [],
  initialMoviesList: [],
  renderedMovies: 4,
  moviesPerStepCounter: 4,
  isDataLoaded: false,
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
        moviesList: state.initialMoviesList,
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
  }

  return state;
};

export {reducer};
