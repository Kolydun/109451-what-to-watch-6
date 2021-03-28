export const ActionType = {
  CHANGE_GENRE: `movies/change-genre`,
  FILTER_MOVIES: `movies/filter-movies`,
  RESET_STATE: `movies/reset`,
  INCREASE_RENDERED_FILMS_COUNT: `movies/load-more-count-increase`,
  LOAD_MOVIES: `data/load-movies`,
  RESET_FILTERS: `movies/reset-filters`,
  CHANGE_AUTHORIZATION_STATUS: `movies/movies-change-authorization-status`,
  LOAD_PROMO_MOVIE: `data/load-promo-movie`,
  LOAD_MOVIE_DETAILS: `data/load-movie-details`,
  RESET_LOAD_MOVIE_DETAILS_FLAG: `movies/reset-load-movies-details-flag`,
  LOAD_MOVIE_COMMENTS: `data/load-movie-comments`,
  LOAD_DATA_FOR_REVIEW_PAGE: `data/load-data-for-review`,
  CHANGE_REVIEW_FORM_BLOCK_FLAG: `movie/change-review-form-block-flag`,
  CHANGE_REVIEW_SEND_FLAG: `movie/change-review-send-flag`,
  CHANGE_REVIEW_SEND_ERROR_FLAG: `movie/change-review-send-error-flag`,
  PAGE_NOT_FOUND: `movie/pange-not-found`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  filterMovies: () => ({
    type: ActionType.FILTER_MOVIES,
  }),
  resetState: () => ({
    type: ActionType.RESET_STATE,
  }),
  increaseRenderedFilmsCount: () => ({
    type: ActionType.INCREASE_RENDERED_FILMS_COUNT,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  resetFilters: () => ({
    type: ActionType.RESET_FILTERS,
  }),
  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),
  loadPromoMovie: (movie) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: movie,
  }),
  loadMovieDetails: (movie) => ({
    type: ActionType.LOAD_MOVIE_DETAILS,
    payload: movie,
  }),
  resetLoadMovieDetailsFlag: () => ({
    type: ActionType.RESET_LOAD_MOVIE_DETAILS_FLAG,
  }),
  loadMovieComments: (movie) => ({
    type: ActionType.LOAD_MOVIE_COMMENTS,
    payload: movie,
  }),
  loadDataForReview: (data) => ({
    type: ActionType.LOAD_DATA_FOR_REVIEW_PAGE,
    payload: data,
  }),
  changeReviewBlockFlag: (status) => ({
    type: ActionType.CHANGE_REVIEW_FORM_BLOCK_FLAG,
    payload: status,
  }),
  changeReviewSendFlag: (status) => ({
    type: ActionType.CHANGE_REVIEW_SEND_FLAG,
    payload: status,
  }),
  changeReviewSendErrorFlag: (status) => ({
    type: ActionType.CHANGE_REVIEW_SEND_ERROR_FLAG,
    payload: status,
  }),
  changePageNotFound: (url) => ({
    type: ActionType.PAGE_NOT_FOUND,
    payload: url,
  }),
};
