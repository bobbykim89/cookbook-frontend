import { Fragment, useContext } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/dist/client/link';
import { AuthContext } from '@/context/auth/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/dist/client/router';
import Cookies from 'js-cookie';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const router = useRouter();

  const { isAuthenticated, user, logout } = authContext;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    location.href = '/';
  };

  const authLinks = (
    <Fragment>
      <a className='inline-block items-center text-sm font-semibold mr-8'>
        <img
          src={
            user && user.user.profile.avatar.formats
              ? user.user.profile.avatar.formats.thumbnail.url
              : '/images/defaultProfile.jpg'
          }
          alt='avatar'
          className='ml-2 mr-4 w-8 h-8 object-cover rounded-full inline-block'
        />
        {user && user.username}
      </a>
      <a
        onClick={handleLogout}
        className='items-center inline-block cursor-pointer text-[#f1ac18] hover:text-[#f25b0a] font-semibold'
      >
        <FaSignOutAlt className='inline-block mb-1' />
        <span className='hidden lg:inline-block ml-2 '>Logout</span>
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link href='/login'>
        <a className='font-semibold text-[#f1ac18] hover:text-[#f25b0a]'>
          Log in
        </a>
      </Link>
    </Fragment>
  );

  const authLinksMobile = (
    <Fragment>
      <div className='flex flex-wrap justify-center items-center block w-full px-5 py-3 text-center font-medium bg-gray-50 hover:bg-gray-100'>
        <a className='inline-block items-center text-sm font-semibold mr-4'>
          <img
            src={user && user.user.profile.avatar.formats.thumbnail.url}
            alt='avatar'
            className='ml-2 mr-4 w-8 h-8 object-cover rounded-full inline-block'
          />
          {user && user.username}
        </a>
        <a
          onClick={handleLogout}
          className='items-center inline-block cursor-pointer text-[#f1ac18] hover:text-[#f25b0a] mb-1'
        >
          <FaSignOutAlt className='inline-block items-center' />
          <span className='hidden lg:inline-block ml-2 '>Logout</span>
        </a>
      </div>
    </Fragment>
  );

  const guestLinksMobile = (
    <Fragment>
      <Link href='/login'>
        <a className='block w-full px-5 py-3 text-center font-medium text-[#f1ac18] bg-gray-50 hover:bg-gray-100'>
          Log in
        </a>
      </Link>
    </Fragment>
  );

  return (
    <header className='w-full top-0 z-20 lg:sticky bg-white bg-opacity-90 font-inter'>
      <Popover>
        <div className='relative container mx-auto py-4 px-4 sm:px-6 lg:px-8'>
          <nav
            className='relative flex items-center justify-between sm:h-10 lg:justify-start'
            aria-label='Global'
          >
            <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <Link href='/'>
                  <a>
                    <span className='sr-only'>Bobby's Cookbook</span>
                    <img
                      className='h-8 w-auto sm:h-10 inline-block mr-4'
                      src='/images/logo.png'
                      alt='logo'
                    />
                    <h1 className='inline-block font-bold text-xl align-middle'>
                      BOBBY'S <span className='text-[#f1ac18]'>COOK</span>BOOK
                    </h1>
                  </a>
                </Link>
                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 '>
                    <span className='sr-only'>Open main menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className='font-semibold text-black hover:text-gray-700'>
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className='hidden md:block md:ml-10 md:pr-4'>
              {isAuthenticated ? authLinks : guestLinks}
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
                  <img
                    className='h-8 w-auto'
                    src='/images/logo.png'
                    alt='logo'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 '>
                    <span className='sr-only'>Close main menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='px-2 pt-2 pb-3 space-y-1 text-center'>
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className='block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              {isAuthenticated ? authLinksMobile : guestLinksMobile}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Navbar;
