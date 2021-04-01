import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {createApi} from "./api/api";
import thunk from "redux-thunk";
import {checkAuth} from "./store/api-actions/api-actions";
import {redirect} from "./store/middleware/redirect";
import {Routes} from "./const/const";
import {changeAuthorizationStatus, changePageNotFound} from "./store/movie-actions/movie-actions";
import rootReducer from './store/root-reducer';

const api = createApi(
    () => store.dispatch(changeAuthorizationStatus(false)),
    () =>store.dispatch(changePageNotFound(Routes.PAGE_NOT_FOUND)),
);

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ));

Promise.resolve(store.dispatch(checkAuth()))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`),
    );
  });
