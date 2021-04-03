import {NameSpace} from "../../const/const";

export const getGenre = (state) => state[NameSpace.MOVIES_LIST_REDUCER].genre;
export const getMoviesList = (state) => state[NameSpace.MOVIES_LIST_REDUCER].moviesList;
export const getInitialMoviesList = (state) => state[NameSpace.MOVIES_LIST_REDUCER].initialMoviesList;
export const getPromoMovie = (state) => state[NameSpace.MOVIES_LIST_REDUCER].promoMovie;
export const getFavouriteMovies = (state) => state[NameSpace.MOVIES_LIST_REDUCER].favouriteMovies;
export const getIsPromoLoaded = (state) => state[NameSpace.MOVIES_LIST_REDUCER].isPromoLoaded;
export const getRenderedMovies = (state) => state[NameSpace.MOVIES_LIST_REDUCER].renderedMovies;
export const getMoviesPerStepCounter = (state) => state[NameSpace.MOVIES_LIST_REDUCER].moviesPerStepCounter;
export const getIsDataLoaded = (state) => state[NameSpace.MOVIES_LIST_REDUCER].isDataLoaded;
export const getIsFavouriteMoviesLoaded = (state) => state[NameSpace.MOVIES_LIST_REDUCER].isFavouriteMoviesLoaded;
