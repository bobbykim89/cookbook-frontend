import client from '@/config/apolloClient';
import Moment from 'react-moment';
import { useRouter } from 'next/dist/client/router';
import { MdShare } from 'react-icons/md';
import { GET_RECIPE } from '@/queries/recipeQueries';
import Link from 'next/dist/client/link';
import RecipeTabs from '@/components/RecipeParts/RecipeTabs';
import CommentSection from '@/components/CommentParts/CommentSection';

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

  const router = useRouter();

  const handleGoBack = (e) => {
    e.preventDefault();
    router.push('/recipes');
  };

  const copyLink = (e) => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    // setAlert('Copied to clipboard!');
  };

  return (
    <section className='lg:w-2/3 mx-auto py-20'>
      <div className='mb-8 shadow-xl'>
        <img
          src={cover.url}
          alt='cover'
          className='max-h-[70vh] w-full object-cover object-center'
        />
      </div>
      <div className='w-[90%] lg:w-full mx-auto mb-8'>
        <h1 className='text-4xl lg:text-7xl capitalize font-bold tracking-wider ml-3 mb-4'>
          {title}
        </h1>
        <div className='mb-8'>
          <div className='flex justify-start mb-4 items-center '>
            <button
              onClick={handleGoBack}
              className='inline-block px-4 py-2 rounded border border-[#f1ac18] hover:border-[#f25b0a] text-[#f1ac18] hover:text-[#f25b0a] capitalize ml-2 mr-3 font-semibold transition ease-in duration-150'
            >
              Go Back
            </button>

            <Link href={`/recipes/categories/${category.id}`}>
              <a className='inline-block px-4 py-2 rounded bg-[#d45464] hover:bg-[#cc080b] text-white capitalize mr-3 border border-[#d45464] hover:border-[#cc080b] transition ease-in duration-150'>
                {category.name}
              </a>
            </Link>
            <button onClick={copyLink}>
              <MdShare className='text-4xl text-[#f1ac18] hover:text-[#f25b0a] text-shadow-xl transition ease-in duration-150' />
            </button>
          </div>
          <div className='flex justify-end items-center mb-2'>
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
        </div>
        <RecipeTabs ingredients={ingredients} direction={direction} />
      </div>
      <CommentSection comments={comments} />
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
