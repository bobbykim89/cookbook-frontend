import { useContext, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import client from '@/config/apolloClient';
import { GET_USER_INFO } from '@/queries/userQueries';
import Cookies from 'js-cookie';
import { AuthContext } from '@/context/auth/AuthContext';

const MyPage = ({ user }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, error, clearErrors } = authContext;
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push('/recipes');
    }
    if (error) {
      setAlert(error);
      clearErrors();
    }
  });

  console.log(user);

  return (
    <section>
      <h1>My Page</h1>
    </section>
  );
};

export default MyPage;

export async function getServerSideProps() {
  const token = Cookies.get('token');
  const { data } = await client.query({
    query: GET_USER_INFO,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  return {
    props: {
      user: data.me,
    },
  };
}
