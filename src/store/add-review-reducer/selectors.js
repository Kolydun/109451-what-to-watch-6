import {NameSpace} from "../../const/const";

export const getDataForReviewPage = (state) => state[NameSpace.ADD_REVIEW_REDUCER].dataForReviewPage;
export const getIsDataForReviewPageLoaded = (state) => state[NameSpace.ADD_REVIEW_REDUCER].isDataForReviewPageLoaded;
export const getIsReviewBlocked = (state) => state[NameSpace.ADD_REVIEW_REDUCER].isReviewBlocked;
export const getIsReviewSendCorrectly = (state) => state[NameSpace.ADD_REVIEW_REDUCER].isReviewSendCorrectly;
export const getIsReviewSendError = (state) => state[NameSpace.ADD_REVIEW_REDUCER].isReviewSendError;
