import React from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "../main-page/page-main";
import SignIn from "../sign-in/sign-in";
import Player from "../player/player";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-reviews/add-reviews";
import PageNotFound from "../../page-not-found/page-not-found";
import MoviesList from "../movies-list/movies-list";

const App = (props) => {
  const {promoName, promoGenre, promoRelease, generatedFilms} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            moviesList = {<MoviesList generatedFilms={generatedFilms} />}
            promoName={promoName}
            promoGenre={promoGenre}
            promoRelease={promoRelease}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList
            moviesList = {<MoviesList generatedFilms={generatedFilms} />}
          />
        </Route>
        <Route exact path="/player/:id?">
          <Player
            generatedFilm={generatedFilms[0]}
          />
        </Route>
        <Route exact path="/films/:id?">
          <MoviePage />
        </Route>
        <Route exact path="/films/:id?/review">
          <AddReview
            generatedFilms={generatedFilms}
          />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  generatedFilms: PropTypes.array.isRequired,
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoRelease: PropTypes.string.isRequired
};

export default App;
