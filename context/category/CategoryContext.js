import client from '@/config/apolloClient';
import { CREATE_CATEGORY } from '@/queries/categoryMutation';
import { GET_CATEGORIES } from '@/queries/categoryQueries';
import { createContext, useReducer } from 'react';
import { CATEGORY_CREATED, CATEGORY_ERROR, GET_CATEGORY_LIST } from '../types';
import categoryReducer from './categoryReducer';

export const CategoryContext = createContext();

const CategoryState = (props) => {
  const initialState = {
    categories: [],
  };

  const [state, dispatch] = useReducer(categoryReducer, initialState);

  // Get Category List
  const getCategories = async () => {
    const { data, error } = await client.query({
      query: GET_CATEGORIES,
    });
    try {
      dispatch({ type: GET_CATEGORY_LIST, payload: data.categories });
    } catch (err) {
      dispatch({
        type: CATEGORY_ERROR,
        payload: error.message,
      });
    }
  };

  // Create New Category
  const createNewCategory = async ({ name }) => {
    const { data, error } = await client.mutate({
      mutation: CREATE_CATEGORY,
      variables: { name },
    });
    try {
      dispatch({
        type: CATEGORY_CREATED,
        payload: data.category,
      });
    } catch (err) {
      dispatch({
        type: CATEGORY_ERROR,
        payload: error.message,
      });
    }
  };
  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        getCategories,
        createNewCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
