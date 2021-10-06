import client from '@/config/apolloClient';
import Moment from 'react-moment';
import { GET_RECIPE } from '@/queries/recipeQueries';
import Link from 'next/dist/client/link';
import RecipeTabs from '@/components/RecipeParts/RecipeTabs';

const RecipePage = ({ recipe }) => {
  const {
    title,
    ingredients,
    direction,
    created_at,
    user,
    cover,
    category,
    comments,
  } = recipe;
  return (
    <section className='lg:w-2/3 mx-auto py-20'>
      <div className='mb-8'>
        <img
          src={cover.url}
          alt='cover'
          className='max-h-[70vh] w-full object-cover object-center'
        />
      </div>
      <div className='w-[90%] lg:w-full mx-auto'>
        <h1 className='text-3xl lg:text-7xl capitalize font-bold tracking-wider mb-4'>
          {title}
        </h1>
        <div>
          <div className='flex justify-end items-center mb-8'>
            <img
              src={user.profile.avatar.formats.thumbnail.url}
              alt='avatar'
              className='ml-2 mr-4 w-10 h-10 object-cover rounded-full block'
            />
            <h3 className='text-gray-700 font-semibold'>{user.username}</h3>
          </div>
          <p className='text-right mb-4'>
            <Moment format='MMMM Do YYYY'>{created_at}</Moment>
          </p>
          <div className='text-right mb-4'>
            <Link href={`/recipes/categories/${category.id}`}>
              <a className='inline-block px-6 py-2 rounded bg-[#d45464] hover:bg-[#cc080b] text-white capitalize'>
                {category.name}
              </a>
            </Link>
          </div>
        </div>
        <RecipeTabs ingredients={ingredients} direction={direction} />
      </div>
    </section>
  );
};

export default RecipePage;

export async function getServerSideProps({ query: { id } }) {
  const { data } = await client.query({
    query: GET_RECIPE,
    variables: { id: id },
  });

  return {
    props: {
      recipe: data.recipe,
    },
  };
}
