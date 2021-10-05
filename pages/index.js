import { Fragment } from 'react';
import { FaSmileWink, FaUtensils } from 'react-icons/fa';
import client from '@/config/apolloClient';
import { GET_NEWEST_RECIPES } from '@/queries/recipeQueries';
import Hero from '@/components/PageParts/Hero';
import Card from '@/components/Card';
import Introduction from '@/components/PageParts/Introduction';

export default function Home({ recipes }) {
  return (
    <Fragment>
      <Hero />
      <section className='lg:w-[80%] mx-auto my-12'>
        <h1 className='text-4xl font-bold mb-8 ml-3'>Newest Recipes</h1>
        <div className='grid grid-flow-row lg:grid-cols-4 gap-4 mx-auto'>
          {recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      <Introduction />
      <section className='font-inter'>
        <div className='text-center my-16 text-gray-800'>
          <h1 className='text-3xl lg:text-7xl items-center'>
            <FaUtensils className='inline-block text-2xl lg:text-6xl' />{' '}
            <span className='font-bold'>Thanks for Coming</span>{' '}
            <FaSmileWink className='inline-block text-2xl lg:text-6xl' />
          </h1>
        </div>
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_NEWEST_RECIPES,
  });

  return {
    props: {
      recipes: data.recipes,
    },
  };
}
