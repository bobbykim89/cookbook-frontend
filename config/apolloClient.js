import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from '@/config/index';

const getAuthHeaders = () => {
  if (typeof window !== 'undefined') {
    return {
      Authorization: `Bearer ${window.localStorage.getItem('token')}` || '',
    };
  }
};

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
  headers: getAuthHeaders(),
});

export default client;
