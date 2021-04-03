export const MovieActionType = {
  CHANGE_GENRE: `movies/change-genre`,
  FILTER_MOVIES: `movies/filter-movies`,
  INCREASE_RENDERED_FILMS_COUNT: `movies/load-more-count-increase`,
  RESET_FILTERS: `movies/reset-filters`,
  CHANGE_AUTHORIZATION_STATUS: `movies/movies-change-authorization-status`,
  CHANGE_PAGE_NOT_FOUND: `movie/change-page-not-found`,
};

export const changeGenre = (genre) => ({
  type: MovieActionType.CHANGE_GENRE,
  payload: genre,
});
export const filterMovies = () => ({
  type: MovieActionType.FILTER_MOVIES,
});
export const increaseRenderedFilmsCount = () => ({
  type: MovieActionType.INCREASE_RENDERED_FILMS_COUNT,
});

export const resetFilters = () => ({
  type: MovieActionType.RESET_FILTERS,
});
export const changeAuthorizationStatus = (flag) => ({
  type: MovieActionType.CHANGE_AUTHORIZATION_STATUS,
  payload: flag,
});

export const changePageNotFound = (url) => ({
  type: MovieActionType.CHANGE_PAGE_NOT_FOUND,
  payload: url,
});

