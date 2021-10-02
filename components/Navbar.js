import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Recipes', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];
  return (
    <header className='w-full top-0 z-20 lg:sticky bg-white bg-opacity-80'>
      <Popover>
        <div className='relative container mx-auto py-4 px-4 sm:px-6 lg:px-8'>
          <nav
            className='relative flex items-center justify-between sm:h-10 lg:justify-start'
            aria-label='Global'
          >
            <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <a href='#'>
                  <span className='sr-only'>Bobby's Cookbook</span>
                  <img
                    className='h-8 w-auto sm:h-10 inline-block mr-4'
                    src='/images/logo.png'
                  />
                  <h1 className='inline-block font-bold text-xl align-middle'>
                    BOBBY'S <span className='text-[#f1ac18]'>COOK</span>BOOK
                  </h1>
                </a>
                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open main menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  {item.name}
                </a>
              ))}
              <a
                href='#'
                className='font-medium text-[#f1ac18] hover:text-[#f25b0a]'
              >
                Log in
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <img className='h-8 w-auto' src='/images/logo.png' alt='' />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close main menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href='#'
                className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
              >
                Log in
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Navbar;
