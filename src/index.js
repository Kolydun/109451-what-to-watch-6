import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import {reducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {createApi} from "./api/api";
import thunk from "redux-thunk";

const promoMovieData = {
  name: `The Grand Budapest Hotel`,
  release: `2014`,
  genre: `Drama`
};

const api = createApi();

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
    ));

ReactDOM.render(
    <Provider store={store}>
      <App
        promoName={promoMovieData.name}
        promoGenre={promoMovieData.genre}
        promoRelease={promoMovieData.release}
      />
    </Provider>,
    document.querySelector(`#root`),
);
