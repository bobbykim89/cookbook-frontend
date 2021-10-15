import { ApolloProvider } from '@apollo/client';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import client from '@/config/apolloClient';
import AuthState from '@/context/auth/AuthContext';
import AlertState from '@/context/alert/AlertContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <ApolloProvider client={client}>
        <AlertState>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AlertState>
      </ApolloProvider>
    </AuthState>
  );
}

export default MyApp;
