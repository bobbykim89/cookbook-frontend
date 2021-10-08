import { ApolloProvider } from '@apollo/client';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import client from '@/config/apolloClient';
import AuthState from '@/context/auth/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthState>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthState>
    </ApolloProvider>
  );
}

export default MyApp;
