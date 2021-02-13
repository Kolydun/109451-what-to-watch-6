import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import MovieCard from "./components/movie-card/movie-card";

const promoMovieData = {
  name: `The Grand Budapest Hotel`,
  release: `2014`,
  genre: `Drama`
};
const cardsNumber = 20;
const movieCardsArray = [];

for (let i = 0; i < cardsNumber; i++) {
  movieCardsArray[i] = <MovieCard/>;
}

ReactDOM.render(
    <App
      movieCards = {movieCardsArray}
      promoName = {promoMovieData.name}
      promoGenre = {promoMovieData.genre}
      promoRelease = {promoMovieData.release}
    />,
    document.querySelector(`#root`),
);
