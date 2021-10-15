import { CATEGORY_CREATED, GET_CATEGORY_LIST } from '../types';

const categoryReducer = (state, action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categories: action.payload,
      };
    case CATEGORY_CREATED:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return state;
  }
};

export default categoryReducer;
