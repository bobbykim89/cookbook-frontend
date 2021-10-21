import client from '@/config/apolloClient';
import { GET_USER_INFO } from '@/queries/userQueries';
import Cookies from 'js-cookie';

const MyPage = ({ user }) => {
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
      user: data,
    },
  };
}
