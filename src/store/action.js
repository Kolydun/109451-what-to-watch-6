export const ActionType = {
  CHANGE_GENRE: `movies/change-genre`,
  FILTER_MOVIES: `movies/filter-movies`,
  RESET_STATE: `movies/reset-filters`,
  INCREASE_RENDERED_FILMS_COUNT: `movies/load-more-count-increase`,
  LOAD_MOVIES: `data/load-movies`,
  RESET_FILTERS: `movies/reset-filters`,
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
  })
};