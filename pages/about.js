import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const about = () => {
  return (
    <section className='py-20 text-white font-semibold min-h-[85vh] lg:min-h-85v relative'>
      {/* Background */}
      <div className='absolute bg-gradient-to-br from-[#f1ac18] to-[#f25b0a] via-[#d45464] inset-0 pointer-events-none overflow-hidden'>
        <div className='grid grid-cols-4 lg:grid-cols-6 grid-rows-4 h-full w-full transform -skew-y-12 opacity-75'>
          <div className='hidden lg:block bg-pink-600 row-span-2 bg-gradient-to-bl' />
          <div className='hidden lg:block bg-gradient-to-tr' />
          <div className='bg-gradient-to-br col-span-2' />
          <div className='bg-gradient-to-bl col-span-2 row-span-2' />
          <div className='bg-gradient-to-tr row-span-3 row-start-2 lg:col-start-3' />
          <div className='bg-gradient-to-tl row-start-3 col-start-4 lg:col-start-6' />
          <div className='hidden lg:block bg-gradient-to-br row-start-4 col-span-2' />
          <div className='bg-gradient-to-br row-start-4 col-start-2 lg:col-start-4 col-span-2 ' />
        </div>
      </div>
      <div className='lg:w-2/3 mx-auto px-4 relative'>
        <div className='inline-block items-center grid grid-flow-row lg:grid-cols-2'>
          {/* Left */}
          <div className='inline-block py-20 justify-center'>
            <img
              src='/images/about.jpg'
              alt='bird on monitor'
              className='w-2/3 mx-auto rounded-full border-4 border-white shadow-lg'
            />
          </div>
          <div className='flex flex-col inline-block px-2 mx-auto'>
            <h2 className='text-2xl md:text-3xl tracking-wider text-center'>
              About Bobby's Cookbook
            </h2>
            <div className='mb-4'>
              <p className='text-md'>Recipe webapp</p>
              <p className='text-md'>Version: 0.1.0(Beta)</p>
              <p className='text-md'>Made by: Bobby Kim</p>
            </div>
            <ul className='text-6xl flex flex-wrap justify-center'>
              <li className='mx-2 hover:text-gray-300 transition ease-in duration-150'>
                <a
                  href='https://github.com/bobbykim89'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithubSquare />
                </a>
              </li>
              <li className='mx-2 hover:text-gray-300 transition ease-in duration-150'>
                <a
                  href='https://www.linkedin.com/in/bobby-kim-9baa17165/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className='mx-2 hover:text-gray-300 transition ease-in duration-150'>
                <a
                  href='mailto:bobby.sihun.kim@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaEnvelopeSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
