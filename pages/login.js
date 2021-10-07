import { useState } from 'react';
import Link from 'next/dist/client/link';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const imgUrl =
    'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80';
  return (
    <section className='bg-white text-gray-700'>
      <div className='grid lg:grid-cols-5'>
        <div className='lg:col-span-2 self-center order-2 lg:order-1'>
          <div className='container w-[90%] lg:w-[70%] 2xl:w-[60%] mx-auto '>
            <h1 className='text-center text-4xl font-bold mb-4 tracking-wider'>
              Login
            </h1>
            <form className='flex flex-col mb-4' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='email' className='text-lg font-semibold'>
                  Email Address:
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={onChange}
                  required
                  className='block w-full p-3 outline-none bg-gray-100 shadow-md'
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='password' className='text-lg font-semibold'>
                  Password:
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={password}
                  onChange={onChange}
                  required
                  className='block w-full p-3 outline-none bg-gray-100 shadow-md'
                />
              </div>
              <input
                type='submit'
                value='Login'
                className='px-4 py-2 bg-[#d45464] hover:bg-[#cc080b] text-lg text-white font-semibold tracking-wider shadow-md transition ease-in duration-150'
              />
            </form>
            <p className='text-center mb-20'>
              Don't have an account?{' '}
              <Link href='/signup'>
                <a className='font-semibold hover:text-gray-600 hover:underline'>
                  Sign Up
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className='relative lg:col-span-3 overflow-hidden mb-6 lg:mb-0 order-1 lg:order-2'>
          <svg
            className='hidden lg:block absolute left-0 inset-y-0 h-full w-24 text-white'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='0,0 100,0 0,100' />
          </svg>
          <img
            src={imgUrl}
            alt='steak'
            className='w-full object-center object-cover h-[30vh] lg:h-[85vh]'
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
