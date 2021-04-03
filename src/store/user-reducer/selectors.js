import {NameSpace} from "../../const/const";

export const getAuthStatus = (state) => state[NameSpace.USER_REDUCER].authorizationStatus;
