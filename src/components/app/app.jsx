import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from "../main-page/main-page";
import SignIn from "../sign-in/sign-in";
import Player from "../player/player";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import AddReview from "../add-review/add-review";
import PageNotFound from "../page-not-found/page-not-found";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history/browser-history";
import {Routes} from "../../const/const";

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Routes.HOME_PAGE}>
          <MainPage/>
        </Route>
        <PrivateRoute
          exact
          path={Routes.LOGIN}
          redirectTo={Routes.HOME_PAGE}
          neededAuthStatus={false}
          render={() => <SignIn/>}
        />
        <PrivateRoute
          exact
          path={Routes.MY_LIST}
          redirectTo={Routes.LOGIN}
          neededAuthStatus={true}
          render={() => <MyList/>}
        />
        <Route exact path={Routes.PLAYER + `:id?`}>
          <Player/>
        </Route>
        <Route exact path={Routes.MOVIE_PAGE + `:id`}>
          <MoviePage/>
        </Route>
        <PrivateRoute
          exact
          path={Routes.MOVIE_PAGE + `:id` + Routes.ADD_REVIEW}
          redirectTo={Routes.LOGIN}
          neededAuthStatus={true}
          render={() => <AddReview/>}
        />
        <Route>
          <PageNotFound/>
        </Route>
        <Route exact path={Routes.PAGE_NOT_FOUND}>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
