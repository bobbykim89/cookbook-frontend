import { Fragment } from 'react';
import Moment from 'react-moment';

const CommentItem = ({ comment }) => {
  const { text, user, created_at } = comment;
  return (
    <Fragment>
      <div className='bg-white border border-gray-300 shadow-lg mb-3 p-4 rounded-lg'>
        <p className='mb-4'>{text}</p>
        <div className='flex justify-end text-gray-600 items-center'>
          <img
            src={user.profile.avatar.formats.thumbnail.url}
            alt='avatar'
            className='ml-2 mr-4 w-8 h-8 object-cover rounded-full block'
          />
          <small className='text-gray-600 font-semibold'>{user.username}</small>
        </div>
        <small className='flex justify-end text-gray-600 mb-4'>
          <Moment format='MMMM Do YYYY'>{created_at}</Moment>
        </small>
      </div>
    </Fragment>
  );
};

export default CommentItem;
