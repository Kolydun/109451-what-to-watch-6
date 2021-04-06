export const FlagActionType = {
  RESET_LOAD_MOVIE_DETAILS_FLAG: `flag/reset-load-movies-details-flag`,
  CHANGE_MOVIE_COMMENTS_LOAD_FLAG: `flag/change-movie-comments-load-flag`,
  CHANGE_REVIEW_FORM_BLOCK_FLAG: `flag/change-review-form-block-flag`,
  CHANGE_REVIEW_SEND_FLAG: `flag/change-review-send-flag`,
  CHANGE_REVIEW_SEND_ERROR_FLAG: `flag/change-review-send-error-flag`,
  CHANGE_REVIEW_DATA_LOAD_FLAG: `flag/change-review-data-load-flag`,
  CHANGE_FAVOURITE_MOVIES_LOAD_FLAG: `flag/change-favourite-movies-load-flag`,
  CHANGE_MOVIE_DETAILS_LOAD_FLAG: `flag/change-movie-details-flag`,
  CHANGE_PROMO_LOAD_FLAG: `flag/change-promo-load-flag`,
  CHANGE_LOGIN_ERROR_FLAG: `flag/change-error-flag`,
};

export const resetLoadMovieDetailsFlag = () => ({
  type: FlagActionType.RESET_LOAD_MOVIE_DETAILS_FLAG,
});

export const changeCommentsLoadFlag = (flag) => ({
  type: FlagActionType.CHANGE_MOVIE_COMMENTS_LOAD_FLAG,
  payload: flag,
});

export const changeReviewBlockFlag = (flag) => ({
  type: FlagActionType.CHANGE_REVIEW_FORM_BLOCK_FLAG,
  payload: flag,
});

export const changeReviewSendFlag = (flag) => ({
  type: FlagActionType.CHANGE_REVIEW_SEND_FLAG,
  payload: flag,
});

export const changeReviewSendErrorFlag = (flag) => ({
  type: FlagActionType.CHANGE_REVIEW_SEND_ERROR_FLAG,
  payload: flag,
});

export const changeFavouriteLoadFlag = (flag) => ({
  type: FlagActionType.CHANGE_FAVOURITE_MOVIES_LOAD_FLAG,
  payload: flag,
});

export const changeMovieDetailsLoadFlag = (flag) => ({
  type: FlagActionType.CHANGE_MOVIE_DETAILS_LOAD_FLAG,
  payload: flag,
});

export const changeReviewDataLoadFlag = (flag) => ({
  type: FlagActionType.CHANGE_REVIEW_DATA_LOAD_FLAG,
  payload: flag,
});

export const changePromoLoadFlag = (flag) => ({
  type: FlagActionType.CHANGE_PROMO_LOAD_FLAG,
  payload: flag,
});

export const changeLoginErrorFlag = (flag) => ({
  type: FlagActionType.CHANGE_LOGIN_ERROR_FLAG,
  payload: flag,
});

