import Cookies from 'js-cookie';
import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  USER_LOADED,
} from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      Cookies.set('token', action.payload.jwt, { expires: 1 });
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.jwt,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNUP_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      Cookies.remove('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
