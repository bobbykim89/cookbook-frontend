const NewRecipe = () => {
  const [post, setPost] = useState({
    title: '',
    ingredients: '',
    direction: '',
    category: '',
    cover: null,
  });

  const { title, ingredients, direction, category, cover } = post;
  return (
    <section className='lg:w-2/3 mx-auto py-20'>
      <div className='w-[90%] lg:w-full mx-auto mb-8 bg-white rounded-lg shadow-xl py-12 px-8 border-gray-300 border'>
        <h1 className='text-4xl font-bold mb-8 ml-3'>New Recipe</h1>
      </div>
    </section>
  );
};

export default NewRecipe;
