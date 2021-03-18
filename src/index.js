import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {generateFilmCard} from "./mocks/films";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {reducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const promoMovieData = {
  name: `The Grand Budapest Hotel`,
  release: `2014`,
  genre: `Drama`
};

const FILM_CARDS_NUMBER = 8;
const filmCards = new Array(FILM_CARDS_NUMBER).fill().map(generateFilmCard);
const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        promoName={promoMovieData.name}
        promoGenre={promoMovieData.genre}
        promoRelease={promoMovieData.release}
        generatedFilms={filmCards}
      />
    </Provider>,
    document.querySelector(`#root`),
);
