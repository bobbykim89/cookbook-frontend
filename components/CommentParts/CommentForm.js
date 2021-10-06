import { useState } from 'react';
import { MdDone } from 'react-icons/md';

const CommentForm = () => {
  const [comment, setComment] = useState({
    text: '',
  });

  const { text } = comment;

  const onChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };
  return (
    <div className='bg-white border border-gray-300 shadow-lg mb-4 p-4 lg:px-8 lg:pt-8 rounded-lg'>
      <form onSubmit={handleSubmit}>
        <textarea
          name='text'
          value={text}
          onChange={onChange}
          placeholder='Please write comment here'
          className='block w-full bg-transparent h-28 border-gray-500 outline-none border-b-2 p-2 mb-2'
        />
        <div className='text-right'>
          <button
            type='submt'
            className='align-middle text-gray-600 hover:text-gray-500 mr-2 cursor-pointer text-2xl'
          >
            <MdDone />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
