import { createContext, useReducer } from 'react';
import postReducer from './postReducer';

export const PostContext = createContext();

const PostState = (props) => {
  const initialState = {
    recipe: null,
    cover: null,
    error: null,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Get Recipe - Get Current Post Data

  // Upload Cover - Upload Cover Image file and get return its ID

  // Add Recipe - Add New Recipe

  // Edit Recipe - Edit Current Recipe

  // Delete Recipe - Delete Current Recipe

  return (
    <PostContext.Provider
      value={{
        recipe: state.recipe,
        cover: state.cover,
        error: state.error,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
