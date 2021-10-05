import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const AddCategory = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState('');

  const closeModal = () => {
    setName('');
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('category name is ', name);
    setName('');
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto bg-gray-800 bg-opacity-70'
        onClose={closeModal}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl font-inter'>
              <Dialog.Title
                as='h3'
                className='text-2xl font-semibold leading-6 text-gray-900'
              >
                Add a new category
              </Dialog.Title>
              <div className='mt-4'>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor='categoryName'
                      className='text-gray-500 text-lg'
                    >
                      Name:
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id='categoryName'
                      className='block w-full bg-transparent border-gray-300 mb-2 p-2 outline-none border-b-2'
                    />
                  </div>
                  <div className='mt-4'>
                    <input
                      type='submit'
                      className='inline-flex justify-center px-6 py-2 text-lg font-medium text-white bg-[#f1ac18] border border-transparent rounded-md hover:bg-[#f25b0a] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 mr-4 cursor-pointer'
                      value='Add'
                    />
                    <p
                      className='inline-flex justify-center px-4 py-2 text-lg font-medium text-white bg-[#d45464] border border-transparent rounded-md hover:bg-[#cc080b] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer'
                      onClick={closeModal}
                    >
                      Cancel
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddCategory;
