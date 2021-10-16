import { AuthContext } from '@/context/auth/AuthContext';
import { CategoryContext } from '@/context/category/CategoryContext';
import { useRouter } from 'next/dist/client/router';
import { useContext, useEffect, useState } from 'react';

const NewRecipe = () => {
  const categoryContext = useContext(CategoryContext);
  const authContext = useContext(AuthContext);

  const [post, setPost] = useState({
    title: '',
    ingredients: '',
    direction: '',
    category: '',
    cover: null,
    user: authContext.user.id,
  });

  const router = useRouter();

  const { title, ingredients, direction, category, cover, user } = post;

  const { categories, getCategories } = categoryContext;

  const { isAuthenticated } = authContext;

  useEffect(() => {
    getCategories();

    // eslint-disable-next-line
  }, []);

  const handleGoBack = (e) => {
    e.preventDefault();
    router.push('/recipes');
  };

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  return (
    <section className='lg:w-2/3 mx-auto py-20 text-gray-700'>
      <div className='w-[95%] lg:w-full mx-auto mb-8 bg-white rounded-lg shadow-xl py-12 px-4 lg:px-8 border-gray-300 border'>
        <h1 className='text-4xl font-bold mb-8 ml-3'>New Recipe</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='title' className='text-lg font-semibold'>
              Title:
            </label>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={onChange}
              required
              className='block w-full p-3 outline-none bg-gray-100 shadow-md'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='category' className='text-lg font-semibold'>
              Category:
            </label>
            <select
              name='category'
              id='category'
              onChange={onChange}
              required
              className='block w-full p-3 outline-none bg-gray-100 shadow-md'
            >
              <option className='p-3'>Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='ingredients' className='text-lg font-semibold'>
              Ingredients:
            </label>
            <textarea
              name='ingredients'
              id='ingredients'
              value={ingredients}
              onChange={onChange}
              required
              className='block w-full p-3 outline-none bg-gray-100 shadow-md h-40 lg:h-60'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='direction' className='text-lg font-semibold'>
              Direction:
            </label>
            <textarea
              name='direction'
              id='direction'
              value={direction}
              onChange={onChange}
              required
              className='block w-full p-3 outline-none bg-gray-100 shadow-md h-40 lg:h-60'
            />
          </div>
          <div className='grid grid-cols-2 gap-3 items-center'>
            <div>
              <input
                type='submit'
                value='Submit'
                className='block w-full px-4 py-2 bg-[#d45464] hover:bg-[#cc080b] text-lg text-white font-semibold tracking-wider shadow-md transition ease-in duration-150 cursor-pointer'
              />
            </div>
            <div
              className='block w-full text-center px-4 py-2 bg-[#f1ac18] hover:bg-[#f25b0a] text-lg text-white font-semibold tracking-wider shadow-md transition ease-in duration-150 cursor-pointer'
              onClick={handleGoBack}
            >
              Cancel
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewRecipe;
