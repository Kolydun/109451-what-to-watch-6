import React from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "../main-page/page-main";
import SignIn from "../sign-in/sign-in";
import Player from "../player/player";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-reviews/add-reviews";
import PageNotFound from "../page-not-found/page-not-found";
import PrivateRoute from "../private-route/private-route";

const App = (props) => {
  const {promoName, promoGenre, promoRelease} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            promoName={promoName}
            promoGenre={promoGenre}
            promoRelease={promoRelease}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path="/mylist"
          redirectTo={`/login`}
          render={() => <MyList/>}
        />
        <Route exact path="/player/:id?">
          <Player />
        </Route>
        <Route exact path="/films/:id?">
          <MoviePage />
        </Route>
        <PrivateRoute
          exact
          path="/films/:id?/review"
          redirectTo={`/login`}
          render={() => <AddReview />}
        />
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  promoName: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoRelease: PropTypes.string.isRequired
};

export default App;
