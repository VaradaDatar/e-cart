import { combineReducers } from "redux";
import * as actionType from "../actions/ActionTypes";

const initialState = {
  successMsg: null,
  errorMsg: null,
  jwtToken: null,
  loginError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_USER_REQUESTED: {
      return {
        ...state,
      };
    }
    case actionType.CREATE_USER_SUCCESS: {
      return {
        ...state,
        successMsg: action.successMsg,
      };
    }
    case actionType.CREATE_USER_FAIL: {
      return {
        ...state,
        errorMsg: action.errorMsg,
      };
    }
    case actionType.RESET_DATA: {
      return {
        successMsg: null,
        errorMsg: null,
        loginError:null,
      };
    }
    case actionType.LOGIN_ACCESS_REQUESTED: {
      return {
        ...state,
      };
    }
    case actionType.LOGIN_ACCESS_SUCCESS: {
      return {
        ...state,
        jwtToken: action.payload,
      };
    }
    case actionType.LOGIN_ACCESS_FAIL: {
      return {
        ...state,
        loginError: action.loginErrorMsg,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
