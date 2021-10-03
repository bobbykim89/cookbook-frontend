const Card = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className='w-full overflow-hidden border-black border rounded shadow-lg font-inter'>
      <div className='aspect-w-3 aspect-h-2'>
        <img
          src={recipe.cover.formats.thumbnail.url}
          alt='card picture'
          className='object-cover object-center max-w-[150%]'
        />
      </div>
      <div className='mx-6 my-4'>
        <h1 className='text-2xl font-semibold mb-3'>{recipe.title}</h1>
        <div className='text-right'>
          <p className='inline-block text-right px-4 py-2 rounded bg-[#cc080b] text-white'>
            {recipe.category.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
