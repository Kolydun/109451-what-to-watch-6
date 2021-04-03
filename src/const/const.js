export const MyListStatus = {
  ADD: 1,
  REMOVE: 0,
};

export const Routes = {
  LOGIN: `/login`,
  HOME_PAGE: `/`,
  MY_LIST: `/mylist`,
  ADD_REVIEW: `/review`,
  MOVIE_PAGE: `/films/`,
  PLAYER: `/player/`,
  PAGE_NOT_FOUND: `/404`,
};

export const LoadMoreCounters = {
  INITIAL_COUNTER: 8,
  MOVIES_PER_STEP: 8,
};

export const BackendRoutes = {
  MOVIES_LIST: `/films`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  PROMO_FILM: `/films/promo`,
  MOVIE_DETAILS: `/films/`,
  MOVIE_COMMENTS: `/comments/`,
  FAVORITE_LIST: `/favorite`,
};

export const NameSpace = {
  USER_REDUCER: `USER_REDUCER`,
  MOVIES_LIST_REDUCER: `MOVIES_LIST_REDUCER`,
  ADD_REVIEW_REDUCER: `ADD_REVIEW_REDUCER`,
  MOVIE_PAGE_REDUCER: `MOVIE_PAGE_REDUCER`,
};

export const FiltersNames = {
  ALL_FILMS: `All films`,
};

export const TabsNames = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`,
};

export const Ratings = {
  BAD_LOWEST: 0,
  BAD_HIGHEST: 3.9,
  NORMAL_LOWEST: 4,
  NORMAL_HIGHEST: 5.9,
  GOOD_LOWEST: 6,
  GOOD_HIGHEST: 8.9,
  VERY_GOOD_GRADE: 9,
  AWESOME_GRADE: 10,

};

export const RatingsNames = {
  BAD: `Bad`,
  GOOD: `Good`,
  NORMAL: `Normal`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
  NO_RATING: `N/A`,
};
