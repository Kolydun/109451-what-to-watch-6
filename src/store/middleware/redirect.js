import browserHistory from "../../browser-history/browser-history";
import {MovieActionType} from "../movie-actions/movie-actions";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === MovieActionType.CHANGE_PAGE_NOT_FOUND) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
