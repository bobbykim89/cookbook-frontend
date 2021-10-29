import { ApolloProvider } from '@apollo/client';
import Layout from '@/components/Layout';
import '../styles/globals.css';
import client from '@/config/apolloClient';
import AuthState from '@/context/auth/AuthContext';
import AlertState from '@/context/alert/AlertContext';
import CategoryState from '@/context/category/CategoryContext';
import ProfileState from '@/context/profile/ProfileContext';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthState>
        <AlertState>
          <ProfileState>
            <CategoryState>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </CategoryState>
          </ProfileState>
        </AlertState>
      </AuthState>
    </ApolloProvider>
  );
}

export default MyApp;
