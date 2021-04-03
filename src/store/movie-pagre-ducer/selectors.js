import {NameSpace} from "../../const/const";

export const getMovieDetails = (state) => state[NameSpace.MOVIE_PAGE_REDUCER].movieDetails;
export const getMovieComments = (state) => state[NameSpace.MOVIE_PAGE_REDUCER].movieComments;
export const getIsMovieDetailsLoaded = (state) => state[NameSpace.MOVIE_PAGE_REDUCER].isMovieDetailsLoaded;
export const getIsMovieCommentsLoaded = (state) => state[NameSpace.MOVIE_PAGE_REDUCER].isMovieCommentsLoaded;
