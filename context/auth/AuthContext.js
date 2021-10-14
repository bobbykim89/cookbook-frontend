import client from '@/config/apolloClient';
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
    token: null,
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (initialState.token) {
      window.localStorage.setItem('token', JSON.stringify(initialState.token));
      loadUser();
    }
  }, [initialState.token]);

  // Load User
  const loadUser = async () => {
    const { data, error } = await client.query({
      query: ME,
    });
    try {
      dispatch({ type: USER_LOADED, payload: data.me });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.message,
      });
    }
  };

  // Signup User
  const signup = async (formData) => {
    const { username, email, password } = formData;
    try {
      const { data, error } = await client.mutate({
        mutation: SIGNUP_USER,
        variables: {
          input: {
            username,
            email,
            password,
          },
        },
      });
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: data, // data.jwt, data.user
      });
    } catch (err) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login User
  const login = async ({ email, password }) => {
    const { data, error } = await client.mutate({
      mutation: LOGIN_USER,
      variables: {
        email,
        password,
      },
    });
    console.log(data.login);
    try {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.login,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

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
