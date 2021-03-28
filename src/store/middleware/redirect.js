import browserHistory from "../../browser-history/browser-history";
import {ActionType} from "../action";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.PAGE_NOT_FOUND) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
