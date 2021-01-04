import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  // USER_REGISTER_REQUEST,
  // USER_REGISTER_SUCCESS,
  // USER_REGISTER_FAIL,
  // USER_FORGOT_REQUEST,
  // USER_FORGOT_SUCCESS,
  // USER_FORGOT_FAIL,
} from './authTypes';

const initialState = {
  isLogin: false,
  userData: {},
  isLoading: false,
  isLoadingButton: false
};

export const userLoginReducer = ( state = initialState, action ) => {
  switch (action.types) {
    case USER_LOGIN_REQUEST:
      return {
        isLoading: true,
        isLoadingButton: true
      };
    
    case USER_LOGIN_SUCCESS:
      return {
        userData: action.payload,
        isLogin: true,
        isLoading: false,
        isLoadingButton: false
      };
    
    case USER_LOGIN_FAIL:
      return {
        error: action.payload,
        isLoading: false,
        isLoadingButton: false
      };
    
    case USER_LOGOUT:
      return { 
        userData: {},
        isLogin: false,
      };
    
    default:
      return state;
  };
};