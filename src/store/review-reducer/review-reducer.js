import {DataActionType} from "../data-actions/data-actions";
import {FlagActionType} from "../flag-actions/flag-actions";
import {adaptMovieToClient} from "../../adapt-to-client/adapt-to-client";

const initialState = {
  dataForReviewPage: {},
  isDataForReviewPageLoaded: false,
  isReviewBlocked: false,
  isReviewSendCorrectly: false,
  isReviewSendError: false,
};

const addReviewPageReducer = (state = initialState, action) => {
  switch (action.type) {

    case DataActionType.LOAD_DATA_FOR_REVIEW_PAGE:
      return {
        ...state,
        isDataForReviewPageLoaded: true,
        dataForReviewPage: adaptMovieToClient(action.payload),
      };

    case FlagActionType.CHANGE_REVIEW_FORM_BLOCK_FLAG:
      return {
        ...state,
        isReviewBlocked: action.payload,
      };

    case FlagActionType.CHANGE_REVIEW_SEND_FLAG:
      return {
        ...state,
        isReviewSendCorrectly: action.payload,
      };

    case FlagActionType.CHANGE_REVIEW_SEND_ERROR_FLAG:
      return {
        ...state,
        isReviewSendError: action.payload,
      };

    case FlagActionType.CHANGE_REVIEW_DATA_LOAD_FLAG:
      return {
        ...state,
        isDataForReviewPageLoaded: action.payload,
      };
  }

  return state;
};

export {addReviewPageReducer};
