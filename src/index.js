import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {generateFilmCard} from "./mocks/films";

const promoMovieData = {
  name: `The Grand Budapest Hotel`,
  release: `2014`,
  genre: `Drama`
};

const FILM_CARDS_NUMBER = 8;
const filmCards = new Array(FILM_CARDS_NUMBER).fill().map(generateFilmCard);

ReactDOM.render(
    <App
      promoName = {promoMovieData.name}
      promoGenre = {promoMovieData.genre}
      promoRelease = {promoMovieData.release}
      generatedFilms = {filmCards}
    />,
    document.querySelector(`#root`),
);
