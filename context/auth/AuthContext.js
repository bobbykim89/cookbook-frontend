import { API_URL } from '@/config/';
import { LOGIN_USER } from '@/queries/userMutation';
import { HttpLink, InMemoryCache } from '@apollo/client';
import { createContext, useReducer, useState } from 'react';
import authReducer from './authReducer';

export const AuthContext = createContext();

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    // Load token into global headers
    if (localStorage.token) {
    }
  };

  const [authToken, setAuthToken] = useState(null);

  const isSignedIn = () => {
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };

  const getAuthHeaders = () => {
    if (!authToken) {
      return null;
    }
    return {
      authorization: `Bearer ${authToken}`,
    };
  };

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: API_URL,
      headers: getAuthHeaders(),
    });
    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  };

  const login = async ({ email, password }) => {
    const client = createApolloClient();
    const { data } = await client.mutate({
      mutation: LOGIN_USER,
      variables: { email, password },
    });

    console.log(data);

    if (data?.login?.jwt) {
      setAuthToken(data.login.jwt);
    }
  };

  const logout = () => {
    setAuthToken(null);
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
