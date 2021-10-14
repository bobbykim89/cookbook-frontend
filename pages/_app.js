import { ApolloProvider } from '@apollo/client';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import client from '@/config/apolloClient';
import AuthState from '@/context/auth/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AuthState>
  );
}

export default MyApp;
