// import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_FORGOT_REQUEST,
  USER_FORGOT_SUCCESS,
  USER_FORGOT_FAIL,
} from './authTypes';

export const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST
  }
}

export const loginSuccess = userData => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      firstname: "Cici",
      lastname: "Finansia",
      email: "cifi@mail.com",
      id: 1
    }
  }
}

export const loginFail = error => {
  return {
    type: USER_LOGIN_FAIL,
    payload: error
  }
}

export const login = userData => dispatch => {
  dispatch(loginRequest());
  setTimeout(() => {
    dispatch(loginSuccess(userData));
  }, 2500);
}

export const logout = () => {
  return {
    type: USER_LOGOUT
  }
}

export const registerRequest = () => {
  return {
    type: USER_REGISTER_REQUEST
  }
}

export const registerSuccess = userData => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: userData
  }
}

export const registerFail = error => {
  return {
    type: USER_REGISTER_FAIL,
    payload: error
  }
}

export const forgotRequest = () => {
  return {
    type: USER_FORGOT_REQUEST
  }
}

export const forgotSuccess = userData => {
  return {
    type: USER_FORGOT_SUCCESS,
    payload: userData
  }
}

export const forgotFail = error => {
  return {
    type: USER_FORGOT_FAIL,
    payload: error
  }
}