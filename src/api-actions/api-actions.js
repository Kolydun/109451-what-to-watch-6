import {ActionCreator} from "../store/action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.changeAuthorizationStatus(true)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.changeAuthorizationStatus(false)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoMovie(data)))
);

export const fetchMovieDetails = (id) => (dispatch, _getState, api) => (
  api.get(`/films/` + id)
    .then(({data}) => dispatch(ActionCreator.loadMovieDetails(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/` + id)
    .then(({data}) => dispatch(ActionCreator.loadMovieComments(data)))
);

export const fetchDataForReview = (id) => (dispatch, _getState, api) => (
  api.get(`/films/` + id)
    .then(({data}) => dispatch(ActionCreator.loadDataForReview(data)))
);

export const login = ({email: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.changeAuthorizationStatus(true)))
);

export const postReview = ({rating, comment, movieId}) => (dispatch, _getState, api) => (
  api.post(`/comments/` + movieId, {rating, comment})
    .then(() => dispatch(ActionCreator.changeReviewSendFlag(true)))
    .then(() => dispatch(ActionCreator.changeReviewBlockFlag(false)))
    .then(() => dispatch(ActionCreator.changeReviewSendErrorFlag(false)))
    .catch(() => dispatch(ActionCreator.changeReviewSendErrorFlag(true)))
);

