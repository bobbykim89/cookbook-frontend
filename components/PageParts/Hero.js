const Hero = () => {
  return (
    <section className='relative bg-white overflow-hidden font-inter'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 py-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl'>
                <p className='block mb-3'>Do you like to cook for fun?</p>
                <p className='block text-[#f1ac18]'>You came to right place!</p>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <a
                    href='/recipes'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f1ac18] hover:bg-[#f25b0a] md:py-4 md:text-lg md:px-10 transition ease-in duration-150'
                  >
                    See Recipes
                  </a>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    href='/register'
                    className='w-full flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-black bg-white hover:bg-black hover:text-white md:py-4 md:text-lg md:px-10 transition ease-in duration-150'
                  >
                    To Sign Up
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
          alt=''
        />
      </div>
    </section>
  );
};

export default Hero;
