import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from "../main-page/page-main";
import SignIn from "../sign-in/sign-in";
import Player from "../player/player";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-reviews/add-reviews";
import PageNotFound from "../page-not-found/page-not-found";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history/browser-history";

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path="/mylist"
          render={() => <MyList />}
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
          render={() => <AddReview />}
        />
        <Route>
          <PageNotFound/>
        </Route>
        <Route exact path="/404">
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
