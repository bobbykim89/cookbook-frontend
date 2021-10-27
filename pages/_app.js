import { ApolloProvider } from '@apollo/client';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import client from '@/config/apolloClient';
import AuthState from '@/context/auth/AuthContext';
import AlertState from '@/context/alert/AlertContext';
import CategoryState from '@/context/category/CategoryContext';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthState>
        <AlertState>
          <CategoryState>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CategoryState>
        </AlertState>
      </AuthState>
    </ApolloProvider>
  );
}

export default MyApp;
