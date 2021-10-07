import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Link from 'next/dist/client/link';

const CategoryBox = ({ categories, setIsOpen }) => {
  return (
    <div className='w-full'>
      <div className='w-[95%] lg:w-full max-w-md p-2 mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg'>
        <Disclosure defaultOpen='true'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-2xl font-semibold text-left text-white bg-[#f1ac18] rounded-lg hover:bg-[#f25b0a] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 items-center'>
                <span>Categories</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-xl text-gray-600 font-semibold'>
                {categories.map((category) => (
                  <Link
                    href={`/recipes/categories/${category.id}`}
                    key={category.id}
                  >
                    <a className='block mb-2 text-center hover:text-black'>
                      {category.name}
                    </a>
                  </Link>
                ))}
                <a
                  className='block text-center hover:text-black cursor-pointer'
                  onClick={() => setIsOpen(true)}
                >
                  +
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default CategoryBox;
