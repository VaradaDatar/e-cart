import * as actionTypes from "./ActionTypes";

export const createUser = (payload) => {
  return {
    type: actionTypes.CREATE_USER_REQUESTED,
    payload
  };
};

export const resetData = () =>{
  return {
    type: actionTypes.RESET_DATA
  }
}

export const authenticate = (payload)=>{
  return {
    type: actionTypes.LOGIN_ACCESS_REQUESTED,
    payload
  }
}
