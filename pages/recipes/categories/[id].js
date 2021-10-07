import client from '@/config/apolloClient';
import { useRouter } from 'next/dist/client/router';
import { GET_CATEGORY } from '@/queries/categoryQueries';
import Card from '@/components/Card';

const CategoryPage = ({ category }) => {
  const router = useRouter();
  console.log(category);
  const { name, recipes } = category;
  return (
    <div className='lg:w-[90%] mx-auto pt-12'>
      <h1 className='text-4xl font-bold mb-6 ml-3 capitalize'>{name} Foods</h1>
      <button
        className='py-2 px-4 border border-[#d45464] text-[#d45464] hover:border-[#cc080b] hover:text-[#cc080b] rounded-lg font-semibold shadow-xl mx-3 mb-8'
        onClick={() => router.back()}
      >
        Go Back
      </button>
      <div className='grid grid-flow-row lg:grid-cols-4 gap-8 mb-20'>
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps({ query: { id } }) {
  const { data } = await client.query({
    query: GET_CATEGORY,
    variables: { id: id },
  });

  return {
    props: {
      category: data.category,
    },
  };
}
