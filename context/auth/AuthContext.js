import client from '@/config/apolloClient';
import Cookies from 'js-cookie';
import { LOGIN_USER, SIGNUP_USER } from '@/queries/userMutation';
import { ME } from '@/queries/userQueries';
import { createContext, useEffect, useReducer } from 'react';
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
import authReducer from './authReducer';

export const AuthContext = createContext();

const AuthState = (props) => {
  const initialState = {
    token: Cookies.get('token') || null,
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  useEffect(() => {
    if (initialState.token) {
      loadUser();
    }
    // eslint-disable-next-line
  }, []);

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    try {
      const { data } = await client.query({
        query: ME,
      });
      dispatch({ type: USER_LOADED, payload: data.me });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.message,
      });
      Cookies.remove('token');
    }
  };

  // Signup User
  const signup = async ({ name, email, password }) => {
    try {
      const { data } = await client.mutate({
        mutation: SIGNUP_USER,
        variables: {
          name,
          email,
          password,
        },
      });
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data.register, // data.jwt, data.user
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: 'Signup Failed, Please check fields again',
      });
      Cookies.remove('token');
    }
  };

  // Login User
  const login = async ({ email, password }) => {
    try {
      const { data } = await client.mutate({
        mutation: LOGIN_USER,
        variables: {
          email,
          password,
        },
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.login,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: 'Invalid Credentials',
      });
      Cookies.remove('token');
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
    Cookies.remove('token');
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        signup,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
