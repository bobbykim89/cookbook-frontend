import { Fragment } from 'react';
import { gql } from '@apollo/client';
import client from '@/config/apolloClient';
import { GET_NEWEST_RECIPES } from '@/queries/recipeQueries';
import Hero from '@/components/PageParts/Hero';
import Card from '@/components/Card';
import Introduction from '@/components/PageParts/Introduction';

export default function Home({ recipes }) {
  return (
    <Fragment>
      <Hero />
      <section className='lg:w-2/3 mx-auto my-12'>
        <h1 className='text-4xl font-bold mb-8 ml-3'>Newest Recipes</h1>
        <div className='grid grid-flow-row lg:grid-cols-4 gap-4 mx-auto'>
          {recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      <Introduction />
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
