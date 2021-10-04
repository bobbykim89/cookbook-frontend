const Introduction = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1564844536308-50b114a1d946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=994&q=80';
  return (
    <section className='my-12 text-white bg-[#d45464]'>
      <div className='relative z-10 top-auto bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden h-[80px]'>
        <svg
          className='absolute top-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-white fill-current'
            points='0 0 2560 0 2560 100'
          ></polygon>
        </svg>
      </div>
      <div className='bg-[#d45464] py-12'>
        <div className='grid lg:grid-cols-2 grid-flow-row gap-12 mx-auto w-[95%] lg:w-2/3'>
          <div className='aspect-w-1 aspect-h-1'>
            <img src={imageUrl} alt='chef' className='shadow-xl rounded' />
          </div>
          <div className='w-full self-center'>
            <h1 className='text-3xl lg:text-5xl font-bold mb-2'>
              Hi, this is Bobby!
            </h1>
            <h2 className='text-2xl lg:text-4xl font-semibold mb-4'>
              Just a guy who loves to cook
            </h2>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              facere expedita voluptatibus itaque dolore praesentium quos, velit
              quidem impedit obcaecati rem deleniti voluptatum temporibus enim
              explicabo! Placeat obcaecati laboriosam beatae?
            </p>
            <p className='block p-2 bg-white shadow-xl' />
          </div>
        </div>
      </div>
      <div className='relative top-auto bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden h-[80px]'>
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-white fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
    </section>
  );
};

export default Introduction;
