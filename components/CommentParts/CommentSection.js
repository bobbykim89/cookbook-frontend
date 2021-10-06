import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const CommentSection = ({ comments }) => {
  console.log(comments);
  if (comments.length === 0) {
    return (
      <div className='w-[90%] lg:w-full mx-auto'>
        <CommentForm />
        <p className='ml-2 mb-4 font-semibold'>Comments:</p>

        <p className='text-center mb-4'>No comment yet!</p>
      </div>
    );
  }
  return (
    <div className='w-[90%] lg:w-full mx-auto'>
      <CommentForm />
      <p className='ml-2 mb-4 font-semibold'>Comments:</p>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
