import { ApolloProvider } from '@apollo/client';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import client from '@/config/apolloClient';
import AuthState from '@/context/auth/AuthContext';
import AlertState from '@/context/alert/AlertContext';
import CategoryState from '@/context/category/CategoryContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <ApolloProvider client={client}>
        <AlertState>
          <CategoryState>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CategoryState>
        </AlertState>
      </ApolloProvider>
    </AuthState>
  );
}

export default MyApp;
