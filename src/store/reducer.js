import {generateFilmCard} from "../mocks/films";
import {ActionType} from "./action";

const FILM_CARDS_NUMBER = 8;
const filmCards = new Array(FILM_CARDS_NUMBER).fill().map(generateFilmCard);

const initialState = {
  genre: `All films`,
  moviesList: filmCards,
  initialMoviesList: filmCards,
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
        moviesList: filmCards.filter((movie) => movie.genre === state.genre),
      };

    case ActionType.RESET_FILTERS:
      return {
        ...initialState
      };
  }

  return state;
};

export {reducer};
