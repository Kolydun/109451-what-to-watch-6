import React from 'react';
import MainPage from "../main-page/page-main";
import PropTypes from "prop-types";

const App = (props) => {
  const {promoName, promoGenre, promoRelease, movieCards} = props;

  return (
    <MainPage
      movieCards = {movieCards}
      promoName = {promoName}
      promoGenre = {promoGenre}
      promoRelease = {promoRelease}
    />

  );
};

App.propTypes = {
  movieCards: PropTypes.array.isRequired,
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoRelease: PropTypes.string.isRequired
};

export default App;
