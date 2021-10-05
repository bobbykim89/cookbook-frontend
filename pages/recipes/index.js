import client from '@/config/apolloClient';
import { GET_ALL_RECIPES } from '@/queries/recipeQueries';
import Card from '@/components/Card';
import CategoryBox from '@/components/RecipeParts/CategoryBox';

const RecipePage = ({ recipes, categories }) => {
  const imageAddress =
    'https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1997&q=80';
  return (
    <section>
      <div className='w-full shadow-lg mb-20'>
        <img
          src={imageAddress}
          alt='vegetables'
          className='object-cover object-center w-full max-h-[40vh]'
        />
      </div>
      <div className='lg:w-[90%] mx-auto'>
        <h1 className='text-4xl font-bold mb-8 ml-3'>Recipes</h1>
        <div className='grid grid-flow-row lg:grid-cols-4 gap-8 mb-20'>
          <div className='lg:col-span-3 grid lg:grid-cols-3 gap-4 order-2 lg:order-1'>
            {recipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className='w-full order-1 lg:order-2'>
            <CategoryBox categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipePage;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_RECIPES,
  });

  const categories = data.recipes.map((recipe) => recipe.category);

  const uniqueCategories = [...new Set(categories)];

  return {
    props: {
      recipes: data.recipes,
      categories: uniqueCategories,
    },
  };
}
