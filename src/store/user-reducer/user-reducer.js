import {MovieActionType} from "../movie-actions/movie-actions";
import {adaptUserInformationToClient} from "../../adapt-to-client/adapt-to-client";
import {DataActionType} from "../data-actions/data-actions";

const initialState = {
  authorizationStatus: false,
  userInformation: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionType.CHANGE_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case DataActionType.LOAD_USER_INFORMATION:
      return {
        ...state,
        userInformation: adaptUserInformationToClient(action.payload),
      };
  }

  return state;
};

export {userReducer};
