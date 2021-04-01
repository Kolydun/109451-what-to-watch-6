import {
  loadMovies,
  loadPromoMovie,
  loadMovieDetails,
  loadMovieComments,
  loadDataForReview,
  loadFavouriteMovies,
} from "../data-actions/data-actions";
import {BackendRoutes} from "../../const/const";
import {
  changeReviewSendFlag,
  changeReviewBlockFlag,
  changeReviewSendErrorFlag,
  changeFavouriteLoadFlag,
} from "../flag-actions/flag-actions";
import {changeAuthorizationStatus} from "../movie-actions/movie-actions";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(BackendRoutes.MOVIES_LIST)
    .then(({data}) => dispatch(loadMovies(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(BackendRoutes.LOGIN)
    .then(() => dispatch(changeAuthorizationStatus(true)))
    .catch(() => {
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(BackendRoutes.LOGOUT)
    .then(() => dispatch(changeAuthorizationStatus(false)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(BackendRoutes.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoMovie(data)))
);

export const fetchMovieDetails = (id) => (dispatch, _getState, api) => (
  api.get(BackendRoutes.MOVIE_DETAILS + id)
    .then(({data}) => dispatch(loadMovieDetails(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(BackendRoutes.MOVIE_COMMENTS + id)
    .then(({data}) => dispatch(loadMovieComments(data)))
);

export const fetchDataForReview = (id) => (dispatch, _getState, api) => (
  api.get(BackendRoutes.MOVIE_DETAILS + id)
    .then(({data}) => dispatch(loadDataForReview(data)))
);

export const login = ({email: email, password}) => (dispatch, _getState, api) => (
  api.post(BackendRoutes.LOGIN, {email, password})
    .then(() => dispatch(changeAuthorizationStatus(true)))
);

export const postReview = ({rating, comment, movieId}) => (dispatch, _getState, api) => (
  api.post(BackendRoutes.MOVIE_COMMENTS + movieId, {rating, comment})
    .then(() => dispatch(changeReviewSendFlag(true)))
    .then(() => dispatch(changeReviewBlockFlag(false)))
    .then(() => dispatch(changeReviewSendErrorFlag(false)))
    .catch(() => dispatch(changeReviewSendErrorFlag(true)))
);

export const fetchFavouriteMovies = () => (dispatch, _getState, api) => (
  api.get(BackendRoutes.FAVORITE_LIST)
    .then(({data}) => dispatch(loadFavouriteMovies(data)))
    .then(() => dispatch(changeFavouriteLoadFlag(true)))
);

export const changeMovieInListStatus = ({id, status}) => (dispatch, _getState, api) => (
  api.post(BackendRoutes.FAVORITE_LIST + `/` + id + `/` + status)
);
