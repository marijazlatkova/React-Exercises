import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "./constants";

export const fetchUsersRequest = (requestParas) => {
  return {
    type: GET_USERS_REQUEST,
    payload: requestParas,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFail = (err) => {
  return {
    type: GET_USERS_FAIL,
    payload: err,
  };
};
