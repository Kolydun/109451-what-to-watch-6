import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import {reducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {createApi} from "./api/api";
import {ActionCreator} from "./store/action";
import thunk from "redux-thunk";
import {checkAuth} from "./api-actions/api-actions";
import {redirect} from "./store/middleware/redirect";

const api = createApi(
    () => store.dispatch(ActionCreator.changeAuthorizationStatus(false)),
    () =>store.dispatch(ActionCreator.changePageNotFound(`/404`)),
);

const store = createStore(reducer,
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
