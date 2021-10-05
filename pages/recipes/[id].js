import client from '@/config/apolloClient';
import { GET_RECIPE } from '@/queries/recipeQueries';

const RecipePage = ({ recipe }) => {
  const { title, ingredients, direction, created_at, user, cover, category } =
    recipe;
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
        <h1 className='text-2xl'>{title}</h1>
        <h3 className='text-xl'>{user.username}</h3>
        <p>{created_at}</p>
        <p>{category.name}</p>
        <p>{ingredients}</p>
        <p>{direction}</p>
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
