import {MovieActionType} from "../movie-actions/movie-actions";

const initialState = {
  authorizationStatus: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionType.CHANGE_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }

  return state;
};

export {userReducer};
