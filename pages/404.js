import { useRouter } from 'next/dist/client/router';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <section className='font-marker text-gray-700'>
      <div className='flex flex-col text-center'>
        <div className='items-center mt-8 lg:mt-32'>
          <img
            src='/images/logo.png'
            alt='logo'
            className='w-60 inline-block'
          />
          <h1 className='text-6xl my-5 text-shadow-xl'>Woops!</h1>
          <h2 className='text-2xl lg:text-4xl text-gray-500 mb-5'>
            This page does not exist!
          </h2>
          <button
            className='py-2 px-4 border-2 border-[#d45464] text-[#d45464] hover:border-[#cc080b] hover:text-[#cc080b] rounded-lg text-xl shadow-xl'
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
