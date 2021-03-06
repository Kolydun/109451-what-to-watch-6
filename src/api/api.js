import axios from "axios";
import {HttpCode} from "../const/const";

const BASE_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const createApi = (onUnauthorized, onNotFound) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    } else if (response.status === HttpCode.NOT_FOUND) {
      onNotFound();

      throw err;
    }

    throw err;
  };


  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
