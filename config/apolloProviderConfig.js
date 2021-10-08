import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from '@/config/index';

const getAuthHeaders = () => {
  if (localStorage && !localStorage.getItem('token')) {
    return null;
  }
  return {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
};

const link = new HttpLink({
  uri: API_URL,
  headers: getAuthHeaders(),
});

const providerClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default providerClient;
