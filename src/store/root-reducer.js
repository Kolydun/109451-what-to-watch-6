import {combineReducers} from "redux";
import {userReducer} from "./user/user-reducer";
import {moviePageReducer} from "./movie-page/movie-page-reducer";
import {moviesListReducer} from "./movies-list/movies-list-reducer";
import {addReviewPageReducer} from "./add-review-page/add-review-reducer";
import {NameSpace} from "../const/const";

export default combineReducers({
  [NameSpace.MOVIE_PAGE_REDUCER]: moviePageReducer,
  [NameSpace.ADD_REVIEW_REDUCER]: addReviewPageReducer,
  [NameSpace.MOVIES_LIST_REDUCER]: moviesListReducer,
  [NameSpace.USER_REDUCER]: userReducer,
});