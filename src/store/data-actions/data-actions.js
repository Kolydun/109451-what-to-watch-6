export const DataActionType = {
  LOAD_MOVIES: `data/load-movies`,
  LOAD_PROMO_MOVIE: `data/load-promo-movie`,
  LOAD_MOVIE_DETAILS: `data/load-movie-details`,
  LOAD_MOVIE_COMMENTS: `data/load-movie-comments`,
  LOAD_DATA_FOR_REVIEW_PAGE: `data/load-data-for-review`,
  LOAD_FAVOURITE_MOVIES: `data/load-favourite-movies`,
  LOAD_USER_INFORMATION: `data/load-user-information`,
};

export const loadMovies = (movies) => ({
  type: DataActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadPromoMovie = (movie) => ({
  type: DataActionType.LOAD_PROMO_MOVIE,
  payload: movie,
});

export const loadMovieDetails = (movie) => ({
  type: DataActionType.LOAD_MOVIE_DETAILS,
  payload: movie,
});

export const loadMovieComments = (movie) => ({
  type: DataActionType.LOAD_MOVIE_COMMENTS,
  payload: movie,
});

export const loadDataForReview = (data) => ({
  type: DataActionType.LOAD_DATA_FOR_REVIEW_PAGE,
  payload: data,
});

export const loadFavouriteMovies = (data) => ({
  type: DataActionType.LOAD_FAVOURITE_MOVIES,
  payload: data,
});

export const loadUserInformation = (data) => ({
  type: DataActionType.LOAD_USER_INFORMATION,
  payload: data,
});

