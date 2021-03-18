export const ActionType = {
  CHANGE_GENRE: `movies/change-genre`,
  FILTER_MOVIES: `movies/filter-movies`,
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
  resetFilters: () => ({
    type: ActionType.RESET_FILTERS,
  })
};
