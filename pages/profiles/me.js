import client from '@/config/apolloClient';
import { GET_USER_INFO, ME } from '@/queries/userQueries';
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
  const { data } = await client.query({
    query: GET_USER_INFO,
  });
  return {
    props: {
      user: data,
    },
  };
}
