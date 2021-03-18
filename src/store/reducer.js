import {generateFilmCard} from "../mocks/films";
import {ActionType} from "./action";

const FILM_CARDS_NUMBER = 6;
const filmCards = new Array(FILM_CARDS_NUMBER).fill().map(generateFilmCard);

const initialState = {
  genre: `All films`,
  moviesList: filmCards,
  initialMoviesList: filmCards,
  renderedMovies: 8,
  moviesPerStepCounter: 8,
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
        ...initialState
      };

    case ActionType.INCREASE_RENDERED_FILMS_COUNT:
      return {
        ...state,
        renderedMovies: state.renderedMovies + state.moviesPerStepCounter,
      };
  }

  return state;
};

export {reducer};
