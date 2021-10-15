import Link from 'next/dist/client/link';

const Card = ({ recipe }) => {
  return (
    <div className='w-[95%] lg:w-full mx-auto overflow-hidden border-black border rounded shadow-xl font-inter mb-4 bg-white hover:scale-105 transition ease-in duration-300'>
      <div className='aspect-w-3 aspect-h-2'>
        <img
          src={
            recipe.cover.formats
              ? recipe.cover.formats.small.url
              : '/images/default.jpg'
          }
          alt='card picture'
          className='object-cover object-center max-w-[150%]'
        />
      </div>
      <div className='mx-6 my-4'>
        <h1 className='text-2xl font-semibold mb-3 capitalize'>
          {recipe.title}
        </h1>
        <div className='text-right mb-4'>
          <Link href={`/recipes/categories/${recipe.category.id}`}>
            <a className='inline-block px-6 py-2 rounded bg-[#d45464] hover:bg-[#cc080b] text-white capitalize transition ease-in duration-150'>
              {recipe.category.name}
            </a>
          </Link>
        </div>
        <p className='mb-3'>{recipe.direction.substring(0, 100)}...</p>
        <div className='flex flex-center items-center mb-4'>
          <img
            src={recipe.user.profile.avatar.formats.thumbnail.url}
            alt='avatar'
            className='ml-2 mr-4 w-10 h-10 object-cover rounded-full block'
          />
          <h3 className='text-gray-700 font-semibold'>
            {recipe.user.username}
          </h3>
        </div>
        <div className='items-center w-full text-center'>
          <Link href={`/recipes/${recipe.id}`}>
            <a className='block py-2 rounded bg-[#f1ac18] text-white hover:bg-[#f25b0a] transition ease-in duration-150'>
              See Recipe
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
